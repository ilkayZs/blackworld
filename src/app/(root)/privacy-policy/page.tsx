import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <section className="bg-neutral-950 dark:bg-white text-white dark:text-black py-8 md:py-24 mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Privacy <span className="text-neutral-400 dark:text-neutral-600">Policy</span>
        </h1>
        <div className="space-y-6 text-lg md:text-xl text-neutral-300 dark:text-neutral-600">
          <p>
            At Our Company, we respect your privacy and are committed to protecting the personal information 
            you share with us. This privacy policy explains how we collect, use, and disclose your information.
          </p>

          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, 
            make a purchase, or communicate with us. The types of information we may collect include your name, 
            email address, and payment information.
          </p>

          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            including processing transactions and providing customer support. We may also use your information 
            for research and analytics purposes.
          </p>

          <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except as necessary to provide our services 
            or comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold">4. Your Choices</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. You can also opt-out 
            of receiving marketing communications from us.
          </p>

          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:support@company.com" className="underline text-neutral-400 dark:text-neutral-600">support@company.com</a>.
          </p>

        </div>
      </div>
    </section>
  );
}
