import PageLayout from "@/components/PageLayout";

export default function TermsAndConditions() {
  return (
    <PageLayout
      title="Terms & Conditions"
      subtitle="The rules and guidelines for using our website and services."
      breadcrumbs={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]}
    >
      <div className="container max-w-4xl prose prose-slate">
        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms and Conditions constitute a legally binding agreement
          made between you, whether personally or on behalf of an entity
          ("you") and Austin Elite Smiles ("we," "us" or "our"), concerning
          your access to and use of the website as well as any other media
          form, media channel, mobile website or mobile application related,
          linked, or otherwise connected thereto.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site (collectively,
          the "Content") and the trademarks, service marks, and logos
          contained therein (the "Marks") are owned or controlled by us or
          licensed to us.
        </p>

        <h2>3. User Representations</h2>
        <p>
          By using the Site, you represent and warrant that all registration
          information you submit will be true, accurate, current, and complete;
          you will maintain the accuracy of such information and promptly update
          such registration information as necessary.
        </p>

        <h2>4. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these terms, please
          contact us directly via our Contact page or call our office.
        </p>
      </div>
    </PageLayout>
  );
}
