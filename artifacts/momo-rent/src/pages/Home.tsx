import { motion } from "framer-motion";
import { ShieldCheck, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppBtn } from "@/components/layout/WhatsAppBtn";
import { BookingForm } from "@/components/BookingForm";
import { CarCard } from "@/components/ui/CarCard";
import { CARS, NEWS } from "@/lib/data";

export default function Home() {
  const featuredCars = CARS.slice(0, 6);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* landing page hero scenic mountain road landscape */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
            alt="Scenic road" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-12 max-w-2xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold tracking-wide mb-4 backdrop-blur-md">
              PREMIUM CAR RENTAL
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Explore the Balkans <br/><span className="text-primary">in Style</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light">
              Feel like a VIP anywhere with our brand new fleet. From Skopje to Tirana, experience seamless rental.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BookingForm />
          </motion.div>

          {/* Feature Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12"
          >
            {['Zero Deposit', 'Free Cancellation', '24/7 Support', 'Unlimited Mileage'].map(badge => (
              <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/90 text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary text-primary-foreground py-10 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "30+", label: "Premium Vehicles" },
              { num: "4", label: "Pickup Locations" },
              { num: "5", label: "Years Experience" }
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-display font-bold">{stat.num}</span>
                <span className="text-sm mt-1 opacity-90">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Premium Fleet</h2>
              <p className="text-muted-foreground max-w-2xl">Choose from our wide selection of brand new, well-maintained vehicles. Economy to luxury, we have it all.</p>
            </div>
            <Link href="/cars" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All Cars <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, idx) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/cars" className="inline-flex items-center gap-2 text-primary font-semibold">
              View All Cars <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose MOMO?</h2>
            <p className="text-muted-foreground">We provide a seamless, premium car rental experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Zero Deposit", desc: "No blocked funds on your credit card. Drive with peace of mind." },
              { icon: Star, title: "Premium Fleet", desc: "Always new, clean, and perfectly maintained vehicles." },
              { icon: MapPin, title: "Multiple Locations", desc: "Pick up in Skopje, drop off in Tirana. Total flexibility." },
              { icon: Clock, title: "24/7 Support", desc: "We are here for you on the road, anytime, anywhere." }
            ].map((feature, idx) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Blog */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS.map((post) => (
              <a href="#" key={post.id} className="group block">
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col sm:flex-row h-full">
                  <div className="sm:w-2/5 relative overflow-hidden h-48 sm:h-auto">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary mb-2">{post.date}</span>
                    <h3 className="font-display font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
