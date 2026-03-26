import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppBtn } from "@/components/layout/WhatsAppBtn";
import { CarCard } from "@/components/ui/CarCard";
import { CARS } from "@/lib/data";

export default function Cars() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Economy", "Standard", "SUV", "Premium"];

  const filteredCars = filter === "All" 
    ? CARS 
    : CARS.filter(car => car.type === filter);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Page Hero */}
      <div className="bg-secondary/50 pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Fleet</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect vehicle for your journey. From economical city cars to premium SUVs, all maintained to the highest standards.
          </p>
        </div>
      </div>

      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === cat 
                    ? "bg-primary text-white shadow-md shadow-primary/25" 
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, idx) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No cars found for this category.
            </div>
          )}

        </div>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
