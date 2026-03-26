import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppBtn } from "@/components/layout/WhatsAppBtn";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="bg-secondary/50 pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before booking a vehicle.
          </p>
        </div>
      </div>

      <div className="flex-grow py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert">
          <h2>1. Driver Requirements</h2>
          <p>
            The driver must be at least 21 years old and have held a valid driver's license for a minimum of 2 years. A valid passport or ID card is also required at the time of pickup.
          </p>

          <h2>2. Zero Deposit Policy</h2>
          <p>
            We pride ourselves on offering a zero-deposit rental experience. This means no funds will be blocked on your credit card. However, a valid credit card must be provided on file for security purposes.
          </p>

          <h2>3. Insurance & Coverages</h2>
          <p>
            All our vehicles come with comprehensive insurance. The standard excess applies depending on the vehicle category. Full coverage options (Super CDW) are available at checkout to reduce the excess to zero.
          </p>

          <h2>4. Mileage Policy</h2>
          <p>
            Most of our rentals include unlimited mileage. Please refer to your specific booking confirmation. For certain premium vehicles, a daily limit may apply, with excess kilometers charged at standard rates.
          </p>

          <h2>5. Cross-Border Travel</h2>
          <p>
            Cross-border travel is permitted to most European countries. You must inform us in advance if you plan to cross the border so we can provide the necessary Green Card and authorization documents. Additional fees may apply.
          </p>

          <h2>6. Fuel Policy</h2>
          <p>
            We operate on a "Same to Same" fuel policy. The vehicle must be returned with the same level of fuel as at the time of pickup to avoid refueling charges.
          </p>

          <h2>7. Cancellation</h2>
          <p>
            Cancellations made up to 48 hours before the pickup time are completely free of charge. Late cancellations may incur a fee equivalent to one day's rental.
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
