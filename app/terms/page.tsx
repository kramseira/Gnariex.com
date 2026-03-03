import Link from "next/link";
import GradientText from "@/components/ui/GradientText";

export const metadata = {
  title: "Terms of Service | Gnariex",
  description:
    "Read the terms and conditions governing use of Gnariex services and website.",
};

const LAST_UPDATED = "March 3, 2026";

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Legal
          </span>
          <h1 className="mt-4 text-3xl font-bold font-display sm:text-4xl md:text-5xl">
            Terms of <GradientText>Service</GradientText>
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 rounded-xl border border-white/6 bg-white/3 p-6">
          <p className="text-sm leading-relaxed text-text-secondary">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
            and use of the Gnariex website at{" "}
            <span className="text-primary">gnariex.com</span> and all services
            provided by Gnariex (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;). By accessing our website or engaging our
            services, you agree to be bound by these Terms. If you do not
            agree, do not use our site or services.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              1. Services
            </h2>
            <p className="text-text-muted">
              Gnariex provides custom software development services including,
              but not limited to, website development, web and mobile
              application development, cloud system architecture, enterprise
              portals, dashboards, and ongoing maintenance and support. The
              specific scope, deliverables, timeline, and pricing for each
              engagement are defined in a separate Statement of Work (SOW) or
              Service Agreement executed between Gnariex and the client.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              2. Acceptance and Eligibility
            </h2>
            <p className="text-text-muted">
              By using our website or services, you represent that you are at
              least 18 years of age and have the legal authority to enter into
              these Terms on behalf of yourself or the organization you
              represent. If you are entering into these Terms on behalf of a
              company or other legal entity, you represent that you have the
              authority to bind that entity.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              3. Client Responsibilities
            </h2>
            <p className="mb-3 text-text-muted">
              To enable Gnariex to deliver services effectively, you agree to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                Provide accurate, complete, and timely information, materials,
                and access required for the project.
              </li>
              <li>
                Designate a primary point of contact with authority to make
                decisions on your behalf.
              </li>
              <li>
                Review and provide feedback or approvals within the timeframes
                agreed upon in the SOW.
              </li>
              <li>
                Ensure that any materials you provide (content, images, data,
                third-party software) do not infringe any third-party
                intellectual property rights.
              </li>
              <li>
                Use our services only for lawful purposes and in compliance
                with all applicable laws and regulations.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              4. Payment Terms
            </h2>
            <p className="mb-3 text-text-muted">
              Payment terms are specified in each project&apos;s SOW or invoice.
              Unless otherwise agreed:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                A deposit (typically 30–50% of the project total) is required
                before work commences.
              </li>
              <li>
                Remaining balances are due upon milestone completion or project
                delivery, as outlined in the SOW.
              </li>
              <li>
                Invoices are payable within 14 days of issuance unless
                otherwise agreed.
              </li>
              <li>
                Late payments may incur a monthly interest charge of 1.5% or
                the maximum permitted by law, whichever is lower.
              </li>
              <li>
                Gnariex reserves the right to pause or suspend work on
                overdue accounts.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              5. Intellectual Property
            </h2>
            <div className="space-y-3 pl-4">
              <div>
                <p className="font-medium text-text-primary">
                  a) Client-Owned Deliverables
                </p>
                <p className="mt-1 text-text-muted">
                  Upon receipt of full payment, Gnariex assigns to you all
                  right, title, and interest in the custom deliverables
                  specifically created for your project, as identified in the
                  SOW.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-primary">
                  b) Gnariex Retained IP
                </p>
                <p className="mt-1 text-text-muted">
                  Gnariex retains ownership of all pre-existing tools,
                  frameworks, libraries, methodologies, and general-purpose
                  code components (&ldquo;Background IP&rdquo;) developed
                  outside the scope of your project. You are granted a
                  non-exclusive, perpetual license to use any Background IP
                  incorporated into your deliverables.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-primary">
                  c) Client Materials
                </p>
                <p className="mt-1 text-text-muted">
                  You retain full ownership of all content, data, trademarks,
                  and materials you provide to Gnariex. You grant us a limited
                  license to use these solely to perform the services.
                </p>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              6. Confidentiality
            </h2>
            <p className="text-text-muted">
              Both parties agree to keep confidential any non-public
              information disclosed by the other party in connection with the
              services (&ldquo;Confidential Information&rdquo;). Neither party
              will disclose Confidential Information to third parties without
              prior written consent, except as required by law. This obligation
              survives termination of the engagement for a period of 3 years.
              Gnariex may reference your company name and project type in its
              portfolio unless you request otherwise in writing.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              7. Warranties and Disclaimers
            </h2>
            <p className="mb-3 text-text-muted">
              Gnariex warrants that:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                Services will be performed in a professional and workmanlike
                manner consistent with industry standards.
              </li>
              <li>
                Deliverables will substantially conform to the specifications
                in the SOW at the time of delivery.
              </li>
            </ul>
            <p className="mt-3 text-text-muted">
              EXCEPT AS EXPRESSLY STATED ABOVE, GNARIEX PROVIDES ALL SERVICES
              AND WEBSITE CONTENT &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              8. Limitation of Liability
            </h2>
            <p className="text-text-muted">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GNARIEX SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS,
              DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS OR
              OUR SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              GNARIEX&apos;S TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING
              UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO
              GNARIEX IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              9. Indemnification
            </h2>
            <p className="text-text-muted">
              You agree to indemnify, defend, and hold harmless Gnariex and its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses (including
              reasonable legal fees) arising out of or related to: (a) your
              use of our website or services; (b) your violation of these
              Terms; (c) your violation of any third-party rights, including
              intellectual property rights; or (d) any content or materials you
              provide to Gnariex.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              10. Termination
            </h2>
            <p className="mb-3 text-text-muted">
              Either party may terminate a project engagement:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                For convenience, with 14 days&apos; written notice to the other
                party.
              </li>
              <li>
                Immediately upon written notice if the other party materially
                breaches these Terms or the applicable SOW and fails to cure
                such breach within 7 days of notice.
              </li>
            </ul>
            <p className="mt-3 text-text-muted">
              Upon termination, you will pay Gnariex for all work completed up
              to the termination date on a pro-rated basis. Gnariex will
              deliver all completed work product. Sections relating to
              intellectual property, confidentiality, limitation of liability,
              and governing law survive termination.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              11. Website Use
            </h2>
            <p className="mb-3 text-text-muted">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                Use the site for any unlawful purpose or in violation of any
                regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the site
                or its related systems.
              </li>
              <li>
                Transmit any harmful, offensive, or disruptive content.
              </li>
              <li>
                Use automated tools to scrape, crawl, or extract data without
                our express written permission.
              </li>
            </ul>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-text-muted">
              These Terms are governed by and construed in accordance with
              applicable law. Any disputes arising from these Terms or our
              services shall first be attempted to be resolved through good
              faith negotiation. If negotiation fails, disputes shall be
              submitted to binding arbitration before a mutually agreed
              arbitrator. Notwithstanding the foregoing, either party may seek
              injunctive or other equitable relief in any court of competent
              jurisdiction to prevent irreparable harm.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              13. Changes to These Terms
            </h2>
            <p className="text-text-muted">
              We reserve the right to modify these Terms at any time. Material
              changes will be communicated by updating the &ldquo;Last
              updated&rdquo; date. Continued use of our website or services
              after changes constitutes acceptance of the revised Terms. For
              active project engagements, changes to Terms will not affect the
              existing SOW without mutual written agreement.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 text-base font-semibold text-text-primary">
              14. Contact Us
            </h2>
            <p className="text-text-muted">
              For questions about these Terms, please contact us:
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
          <Link href="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
