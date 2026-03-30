import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-black/60 dark:text-white/60 mb-12 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-10 text-white/80 leading-relaxed text-sm md:text-base">
          <section className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-xl">
             <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">! CRITICAL MEDICAL DISCLAIMER</h2>
             <p className="font-bold text-white mb-4">
               Dialysis One is a health tracking and information collation tool. It is NOT a medical device, nor is it a substitute for professional medical advice, diagnosis, or treatment.
             </p>
             <p className="text-sm">
               Never ignore professional medical advice or delay seeking it because of something you have read or tracked in this application. If you think you may have a medical emergency, call your doctor, go to the nearest hospital emergency department, or call emergency services immediately.
             </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">1. Acceptance & Use</h2>
            <p>
              By accessing "Dialysis One" (the "Service"), you agree to be bound by these Terms of Service. The Service is intended for use by individuals managing renal health conditions under the supervision of a licensed nephrologist or healthcare professional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">2. Accuracy of User-Generated Data</h2>
            <p className="mb-4">
              The utility of Dialysis One depends entirely on the accuracy and frequency of the data you provide. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are solely responsible for ensuring that dietary logs, fluid measurements, and medication entries are precise.</li>
              <li>Calculations provided by the App (e.g., nutrient totals or hydration progress) are estimates for informational purposes only.</li>
              <li>You agree not to modify clinical data obtained through HealthKit for the purpose of falsifying records shared with providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">3. Provider Communication (Clinical Sync)</h2>
            <p>
              Dialysis One facilitates the secure transmission of data to healthcare providers via our clinical dashboard. However, Dialysis One <strong>does not guarantee</strong> that your provider will review the data in real-time or at all. This feature is not intended for the communication of urgent symptoms or time-sensitive clinical queries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">4. Account Security & Device Access</h2>
            <p>
              The Service stores sensitive health data. You are responsible for maintaining the security of your hardware (iPhone, Apple Watch) and any biometric or passcode authentication. Dialysis One is not liable for data breaches resulting from unauthorized access to your physical device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Dialysis One and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from (a) the use or inability to use the Service; (b) any medical outcomes related to data tracked within the App; or (c) any delay or failure in medical care resulting from reliance on App notifications.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-xs text-white/40">
              For support or legal inquiries regarding these terms, please contact: <a href="mailto:dialysisoneapp@gmail.com" className="text-brand-green hover:underline">dialysisoneapp@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
