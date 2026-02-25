import PageLayout from "@/components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
    >
      <div className="container max-w-4xl prose prose-slate">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information that you provide to us when you
          register on the website, express an interest in obtaining information
          about us or our products and services, participate in activities on
          the website, or otherwise contact us.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To post testimonials.</li>
          <li>To deliver targeted advertising to you.</li>
        </ul>

        <h2>3. Information Sharing and Disclosure</h2>
        <p>
          We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights, or to fulfill business
          obligations.
        </p>
        
        <h2>4. Contact Us</h2>
        <p>
          If you have questions or comments about this notice, you may email us
          or contact us by post at our designated address.
        </p>
      </div>
    </PageLayout>
  );
}
