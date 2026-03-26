import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppBtn } from "@/components/layout/WhatsAppBtn";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="bg-secondary/50 pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Company</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setting a new standard for car rentals in the Balkans.
          </p>
        </div>
      </div>

      <div className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">The MOMO Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for excellent service and beautiful automobiles, MOMO Rent a Car has quickly become the premier choice for visitors and locals in Skopje and across the Balkans.
                </p>
                <p>
                  We noticed a gap in the market: customers were tired of hidden fees, old vehicles, and complicated booking processes. We set out to change that by offering absolute transparency, zero deposits, and a fleet of brand new vehicles.
                </p>
                <p>
                  Today, we operate across multiple international airports and cities, providing thousands of happy customers with the keys to their next adventure.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {['No Hidden Fees', 'Brand New Fleet', '24/7 Roadside Assistance', 'Cross-Border Travel'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* about us page scenic road trip stock image */}
              <img 
                src="https://pixabay.com/get/g22f058f505929bb05be04cbc0accc8cf40b2db000a2463515d429166b40bdbc1bc9df1f4fc249893b53fa12e6f5990d35f1483952bf96d3620fa4103711da6b6_1280.jpg" 
                alt="Road trip" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs hidden md:block">
                <div className="font-display font-bold text-4xl text-primary mb-1">5+</div>
                <div className="text-sm font-semibold text-foreground">Years of Excellence</div>
                <div className="text-xs text-muted-foreground mt-2">Delivering premium experiences since day one.</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
