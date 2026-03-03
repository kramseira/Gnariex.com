import Link from "next/link";
import GradientText from "@/components/ui/GradientText";

export const metadata = {
  title: "Privacy Policy | Gnariex",
  description:
    "Learn how Gnariex collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "March 3, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Legal
          </span>
          <h1 className="mt-4 text-3xl font-bold font-display sm:text-4xl md:text-5xl">
            Privacy <GradientText>Policy</GradientText>
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 rounded-xl border border-white/6 bg-white/3 p-6">
          <p className="text-sm leading-relaxed text-text-secondary">
            Gnariex (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website{" "}
            <span className="text-primary">gnariex.com</span> or engage our
            services. Please read this policy carefully. If you do not agree
            with its terms, please discontinue use of our site and services.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect information about you in the following ways:
            </p>
            <div className="space-y-3 pl-4">
              <div>
                <p className="font-medium text-text-primary">
                  a) Information You Provide Directly
                </p>
                <p className="mt-1 text-text-muted">
                  Name, email address, phone number, company name, and any
                  other details you submit through our contact forms, project
                  inquiry forms, or direct communication.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-primary">
                  b) Automatically Collected Information
                </p>
                <p className="mt-1 text-text-muted">
                  IP address, browser type, operating system, referring URLs,
                  pages visited, and time spent on pages — collected via
                  standard web server logs and analytics tools.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-primary">
                  c) Cookies and Tracking Technologies
                </p>
                <p className="mt-1 text-text-muted">
                  We use cookies and similar tracking technologies to enhance
                  your experience. See Section 5 for full details.
                </p>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>Respond to inquiries and provide requested services</li>
              <li>Send project updates, quotes, and service proposals</li>
              <li>
                Improve our website, services, and user experience
              </li>
              <li>
                Send marketing communications (only with your consent)
              </li>
              <li>
                Comply with legal obligations and enforce our agreements
              </li>
              <li>
                Detect, prevent, and address security or technical issues
              </li>
            </ul>
            <p className="mt-3 text-text-muted">
              We rely on the following legal bases for processing: performance
              of a contract, our legitimate business interests, compliance with
              legal obligations, and your explicit consent (where applicable).
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              3. Sharing of Information
            </h2>
            <p className="mb-3">
              We do not sell, trade, or rent your personal information. We may
              share it with:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                <span className="text-text-primary">Service Providers:</span>{" "}
                Trusted third-party vendors (e.g., hosting, email delivery,
                analytics) who process data on our behalf under strict
                confidentiality agreements.
              </li>
              <li>
                <span className="text-text-primary">Legal Requirements:</span>{" "}
                When required by law, court order, or governmental authority.
              </li>
              <li>
                <span className="text-text-primary">
                  Business Transfers:
                </span>{" "}
                In the event of a merger, acquisition, or asset sale, your
                information may be transferred. We will provide notice before
                your data is transferred and becomes subject to a different
                privacy policy.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              4. Data Retention
            </h2>
            <p className="text-text-muted">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this policy, unless a longer
              retention period is required or permitted by law. Inquiry data is
              typically retained for up to 3 years. Client project data is
              retained for the duration of the engagement plus 5 years for
              contractual and legal compliance purposes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              5. Cookies
            </h2>
            <p className="mb-3 text-text-muted">
              We use the following types of cookies:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                <span className="text-text-primary">Essential:</span> Required
                for the site to function properly. Cannot be disabled.
              </li>
              <li>
                <span className="text-text-primary">Analytics:</span> Help us
                understand how visitors interact with the site (e.g., Google
                Analytics).
              </li>
              <li>
                <span className="text-text-primary">Marketing:</span> Used to
                deliver relevant advertisements and track campaign performance.
              </li>
            </ul>
            <p className="mt-3 text-text-muted">
              You can control cookie preferences at any time through our cookie
              consent banner or your browser settings. Note that disabling
              certain cookies may affect site functionality.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              6. Data Security
            </h2>
            <p className="text-text-muted">
              We implement industry-standard administrative, technical, and
              physical security measures to protect your information from
              unauthorized access, disclosure, alteration, or destruction.
              These include SSL/TLS encryption, access controls, and regular
              security audits. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              7. Your Rights
            </h2>
            <p className="mb-3 text-text-muted">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                <span className="text-text-primary">Access:</span> Request a
                copy of the personal data we hold about you.
              </li>
              <li>
                <span className="text-text-primary">Correction:</span> Request
                correction of inaccurate or incomplete data.
              </li>
              <li>
                <span className="text-text-primary">Deletion:</span> Request
                erasure of your personal data (right to be forgotten).
              </li>
              <li>
                <span className="text-text-primary">Restriction:</span> Request
                that we restrict processing of your data.
              </li>
              <li>
                <span className="text-text-primary">Portability:</span> Receive
                your data in a structured, machine-readable format.
              </li>
              <li>
                <span className="text-text-primary">Objection:</span> Object to
                processing based on legitimate interests or for direct
                marketing.
              </li>
              <li>
                <span className="text-text-primary">
                  Withdraw Consent:
                </span>{" "}
                Where processing is based on consent, withdraw it at any time.
              </li>
            </ul>
            <p className="mt-3 text-text-muted">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:info@gnariex.com"
                className="text-primary hover:underline"
              >
                info@gnariex.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              8. Third-Party Links
            </h2>
            <p className="text-text-muted">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-text-muted">
              Our services are not directed to individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              you believe we have inadvertently collected such information,
              please contact us immediately and we will take steps to delete it.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              10. Changes to This Policy
            </h2>
            <p className="text-text-muted">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by updating the &ldquo;Last
              updated&rdquo; date at the top of this page. Continued use of
              our site after changes constitutes acceptance of the revised
              policy.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              11. Contact Us
            </h2>
            <p className="text-text-muted">
              If you have questions, concerns, or requests regarding this
              Privacy Policy, please contact us:
            </p>
            <div className="mt-3 rounded-lg border border-white/6 bg-white/3 p-4 text-text-muted">
              <p className="font-medium text-text-primary">Gnariex</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@gnariex.com"
                  className="text-primary hover:underline"
                >
                  info@gnariex.com
                </a>
              </p>
              <p>
                General Contact:{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline"
                >
                  gnariex.com/contact
                </Link>
              </p>
            </div>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-12 flex flex-wrap gap-4 border-t border-white/6 pt-8 text-xs text-text-muted">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
