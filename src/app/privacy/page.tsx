import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HayaTech",
  description:
    "Learn how HayaTech handles enquiries, analytics data, cookies, advertising technologies, and your privacy choices.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | HayaTech",
    description:
      "How HayaTech handles enquiries, analytics data, cookies, advertising technologies, and privacy choices.",
    url: "/privacy",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Information we may collect",
    content: (
      <>
        <p>
          When you contact HayaTech through email, WhatsApp, or another linked
          communication service, we may receive the information you choose to
          provide, such as your name, contact details, company information, and
          the contents of your enquiry.
        </p>
        <p>
          We may also receive limited technical and usage information, such as
          browser type, device type, approximate location, pages visited,
          referring pages, and interaction events through analytics and similar
          technologies.
        </p>
      </>
    ),
  },
  {
    title: "2. How we use information",
    content: (
      <p>
        We use information to respond to enquiries, discuss and deliver requested
        services, maintain and improve the website, understand site performance,
        protect the website from misuse, and comply with applicable legal
        obligations. We do not sell your personal information.
      </p>
    ),
  },
  {
    title: "3. Google Analytics",
    content: (
      <p>
        HayaTech uses Google Analytics to understand how visitors use the website.
        Google may collect device, browser, interaction, and approximate location
        information through cookies or similar technologies. You can learn how
        Google uses information from sites that use its services in Google&apos;s
        privacy documentation and may use the Google Analytics opt-out browser
        add-on where available.
      </p>
    ),
  },
  {
    title: "4. Google AdSense and advertising",
    content: (
      <>
        <p>
          HayaTech may use Google AdSense to display advertisements. Google and
          its advertising partners may use cookies, web beacons, device
          identifiers, or similar technologies to serve, measure, and personalize
          ads where permitted. These technologies may use information about visits
          to this and other websites.
        </p>
        <p>
          Where required, visitors will be offered consent or privacy choices
          before personalized advertising technologies are used. You can manage
          Google ad personalization through Google&apos;s My Ad Center and review
          Google&apos;s advertising and privacy information for further details.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies and similar technologies",
    content: (
      <p>
        Cookies and similar technologies may be used for essential site
        functionality, security, analytics, preference storage, and advertising.
        You can restrict or delete cookies through your browser settings. Blocking
        some cookies may affect website functionality. Any consent controls shown
        on the website can also be used to manage applicable choices.
      </p>
    ),
  },
  {
    title: "6. Third-party services and links",
    content: (
      <p>
        The website uses or links to third-party services such as Google,
        WhatsApp, email providers, hosting services, and social platforms. Those
        services process information under their own terms and privacy policies.
        HayaTech is not responsible for the privacy practices of external sites.
      </p>
    ),
  },
  {
    title: "7. HayaTools",
    content: (
      <p>
        HayaTools is available at tools.hayatech.dev and provides browser-based
        utility tools. Its file-processing practices and service-specific details
        are explained in the separate Privacy Policy available on the HayaTools
        website. This policy applies to the main HayaTech website at hayatech.dev.
      </p>
    ),
  },
  {
    title: "8. Data retention and security",
    content: (
      <p>
        We retain enquiry and business communication information only for as long
        as reasonably needed to respond, provide services, keep necessary business
        records, resolve disputes, or meet legal obligations. We use reasonable
        safeguards, but no method of internet transmission or storage is completely
        secure.
      </p>
    ),
  },
  {
    title: "9. Your privacy choices",
    content: (
      <p>
        Depending on where you live, you may have rights relating to your personal
        information, including requesting access, correction, or deletion. You may
        also object to or restrict certain processing and withdraw consent where
        processing is based on consent. To make a request, contact us using the
        email below. We may need to verify your identity before completing a
        request.
      </p>
    ),
  },
  {
    title: "10. Children’s privacy",
    content: (
      <p>
        HayaTech is intended for business and general audiences and is not directed
        to children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided such information,
        please contact us so we can review and delete it where appropriate.
      </p>
    ),
  },
  {
    title: "11. Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy when our website, services, or legal
        obligations change. The updated version will be posted on this page with a
        revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white py-16 md:py-24">
      <article className="mx-auto max-w-4xl px-6">
        <header className="mb-12 border-b border-gray-800 pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
            This Privacy Policy explains how HayaTech handles information when you
            visit hayatech.dev or contact us about our automation services.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Effective date: July 21, 2026
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
                {section.title}
              </h2>
              <div className="space-y-4 leading-7 text-gray-300">
                {section.content}
              </div>
            </section>
          ))}

          <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-cyan-400">
              12. Contact us
            </h2>
            <p className="leading-7 text-gray-300">
              For privacy questions or requests, email HayaTech at{" "}
              <a
                href="mailto:skmaaz8828@gmail.com"
                className="font-medium text-emerald-400 underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-300"
              >
                skmaaz8828@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
