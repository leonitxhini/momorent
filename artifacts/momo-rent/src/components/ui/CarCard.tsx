import { Link } from "wouter";
import { Users, Settings, Fuel, Snowflake, DoorOpen } from "lucide-react";
import { type Car } from "@/lib/data";

export function CarCard({ car }: { car: Car }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-secondary/30 p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-foreground">
          {car.type}
        </div>
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-contain group-hover:scale-105 group-hover:-translate-x-2 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-bold text-foreground">{car.name}</h3>
          <div className="text-right">
            <span className="text-xl font-bold text-primary">€{car.price}</span>
            <span className="text-xs text-muted-foreground block">/ day</span>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-2 my-6 text-sm text-muted-foreground flex-grow">
          <div className="flex items-center gap-1.5">
            <Settings className="w-4 h-4 text-primary/70" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="w-4 h-4 text-primary/70" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary/70" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DoorOpen className="w-4 h-4 text-primary/70" />
            <span>{car.doors} Doors</span>
          </div>
          {car.hasAc && (
            <div className="flex items-center gap-1.5">
              <Snowflake className="w-4 h-4 text-primary/70" />
              <span>A/C</span>
            </div>
          )}
        </div>

        <Link 
          href={`/cars`}
          className="block w-full py-3 text-center bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold rounded-xl transition-colors duration-200"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
