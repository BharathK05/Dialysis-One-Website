import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-black/60 dark:text-white/60 mb-12 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-10 text-white/80 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">1. Commitment to Privacy</h2>
            <p className="mb-4">
              At Dialysis One, we recognize that medical data is among the most sensitive information an individual can possess. Our platform is engineered with a "Privacy First" architecture, ensuring that your renal health journey remains under your absolute control. This policy outlines our rigorous standards for data collection, processing, and protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">2. Health Information (PHI) & HIPAA Alignment</h2>
            <p className="mb-4">
              Dialysis One collects Protected Health Information (PHI) to provide tailored renal care insights. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Biometric Data:</strong> Weight, blood pressure, and heart rate synced via Apple HealthKit.</li>
              <li><strong>Clinical Logs:</strong> Fluid intake, dietary nutrient breakdown (Potassium, Phosphorus, Sodium, Protein), and medication adherence.</li>
              <li><strong>Laboratory Results:</strong> GFR, Creatinine, and BUN levels manually entered or synced.</li>
            </ul>
            <p>
              While Dialysis One is a consumer application, we align our internal data handling practices with the technical safeguards required by the Health Insurance Portability and Accountability Act (HIPAA) to ensure clinical-grade security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">3. Data Processing & The Secure Enclave</h2>
            <p className="mb-4">
              We leverage Apple's <strong>Secure Enclave</strong> and <strong>On-Device Processing</strong> whenever technically feasible.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Local Encryption:</strong> Your daily logs are encrypted on-device using AES-256 bit encryption.</li>
              <li><strong>End-to-End Transmission:</strong> When syncing data to our secure clinical cloud, data is encrypted in transit using TLS 1.3 and at rest using industry-standard cryptographic protocols.</li>
              <li><strong>Zero Access:</strong> Dialysis One employees cannot access your identifiable medical logs without your explicit, time-limited cryptographic authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">4. Third-Party Integrations (HealthKit)</h2>
            <p className="mb-4">
              With your explicit permission, Dialysis One reads from and writes to the Apple Health App (HealthKit). This data is used solely to provide a holistic view of your renal health. 
            </p>
            <p className="border-l-2 border-brand-green pl-4 italic">
              Crucially: Data obtained through HealthKit is never used for marketing, advertising, or sold to data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">5. Data Sharing with Clinicians</h2>
            <p>
              Sharing features are <strong>Opt-In Only</strong>. If you use the "Clinical Sync" feature to connect with your nephrology team, you are authorizing the transmission of specific health metrics to their dashboard. You retain the right to revoke this access instantly at any time, which will immediately terminate the clinician's view of your future data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">6. Your Rights & Data Portability</h2>
            <p>
              Under GDPR and CCPA frameworks, you have the right to:
              (a) Request a copy of all data we hold about you in a machine-readable format.
              (b) Request the permanent deletion of your account and all associated PHI ("Right to be Forgotten").
              (c) Correct any inaccuracies in your health records.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-xs text-white/40">
              For privacy-related inquiries or to exercise your data rights, please contact our Data Privacy Officer at <a href="mailto:dialysisoneapp@gmail.com" className="text-brand-green hover:underline">dialysisoneapp@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
