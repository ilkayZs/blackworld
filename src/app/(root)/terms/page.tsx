
export default function TermsOfService() {
  return (
    <section className="bg-neutral-950 dark:bg-white text-white dark:text-black py-8 md:py-24 mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Terms of <span className="text-neutral-400 dark:text-neutral-600">Service</span>
        </h1>
        <div className="space-y-6 text-lg md:text-xl text-neutral-300 dark:text-neutral-600">
          <p>
            Welcome to Our Company. By using our services, you agree to these terms and conditions. 
            Please read them carefully before accessing or using our services.
          </p>

          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By using our services, you agree to be bound by these terms of service. 
            If you do not agree to these terms, you may not use our services.
          </p>

          <h2 className="text-2xl font-semibold">2. Use of Our Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms. 
            You are responsible for ensuring that your use of our services complies with all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold">3. Account Responsibilities</h2>
          <p>
            If you create an account with us, you are responsible for maintaining the confidentiality of your account information 
            and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content and materials provided through our services are the property of Our Company or its licensors. 
            You may not reproduce, distribute, or otherwise use the content without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Our Company shall not be liable for any damages arising from your use of our services.
          </p>

          <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any significant changes by posting the new terms 
            on our website. Your continued use of our services after any changes to these terms constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold">7. Contact Information</h2>
          <p>
            If you have any questions about these terms, please contact us at{' '}
            <a href="mailto:support@company.com" className="underline text-neutral-400 dark:text-neutral-600">support@company.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
