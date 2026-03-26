import { useState } from "react";
import { LOCATIONS } from "@/lib/data";
import { Calendar, MapPin, Clock, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function BookingForm() {
  const [returnSameLocation, setReturnSameLocation] = useState(true);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching Fleet...",
      description: "Finding the best premium cars for your dates.",
    });
  };

  return (
    <form onSubmit={handleSearch} className="glass-dark p-6 md:p-8 rounded-3xl w-full max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
      
      <h2 className="text-2xl font-display font-bold text-white mb-6">Book Your Vehicle</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Locations */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Pickup Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <select className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                {LOCATIONS.map(loc => <option key={loc} value={loc} className="text-black">{loc}</option>)}
              </select>
            </div>
          </div>

          {!returnSameLocation && (
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Dropoff Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <select className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  {LOCATIONS.map(loc => <option key={loc} value={loc} className="text-black">{loc}</option>)}
                </select>
              </div>
            </div>
          )}

          <label className="flex items-center gap-2 cursor-pointer mt-2">
            <input 
              type="checkbox" 
              checked={returnSameLocation}
              onChange={(e) => setReturnSameLocation(e.target.checked)}
              className="rounded text-primary focus:ring-primary border-white/20 bg-white/5 w-4 h-4"
            />
            <span className="text-sm text-white/80">Return at pickup location</span>
          </label>
        </div>

        {/* Dates & Times */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Pickup Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all [color-scheme:dark]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input 
                  type="time" 
                  defaultValue="10:00"
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Dropoff Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all [color-scheme:dark]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input 
                  type="time" 
                  defaultValue="10:00"
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all [color-scheme:dark]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button 
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <Search className="w-5 h-5" />
          Search Available Cars
        </button>
      </div>
    </form>
  );
}
