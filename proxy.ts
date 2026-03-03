import { NextRequest, NextResponse } from "next/server";

// ─── Rate limiter ─────────────────────────────────────────────────────────────
// In-memory sliding-window store (per edge worker instance / region).
// For multi-region production, replace with Upstash Redis.

const rateMap = new Map<string, { count: number; reset: number }>();
const WINDOW_MS   = 60_000; // 1 minute
const MAX_REQUESTS = 80;    // requests per window per IP

// ─── Bot signature blocklist ──────────────────────────────────────────────────
const BLOCKED_UA = /sqlmap|nikto|masscan|zgrab|nmap|dirbuster|gobuster|hydra|nessus|openvas|w3af|wfuzz|nuclei/i;

// ─── Proxy ────────────────────────────────────────────────────────────────────
export function proxy(req: NextRequest) {
  // 1. Block known attack-tool user-agents
  const ua = req.headers.get("user-agent") ?? "";
  if (BLOCKED_UA.test(ua)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 2. Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const now   = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.reset) {
    // New window
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS });
  } else {
    entry.count++;
    if (entry.count > MAX_REQUESTS) {
      const retryAfter = Math.ceil((entry.reset - now) / 1000);
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: {
          "Retry-After":        String(retryAfter),
          "X-RateLimit-Limit":  String(MAX_REQUESTS),
          "X-RateLimit-Reset":  String(Math.ceil(entry.reset / 1000)),
        },
      });
    }
  }

  // 3. Periodic cleanup to prevent unbounded memory growth
  if (rateMap.size > 10_000) {
    for (const [key, val] of rateMap) {
      if (now > val.reset) rateMap.delete(key);
    }
  }

  return NextResponse.next();
}

// Apply to all routes except static assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
