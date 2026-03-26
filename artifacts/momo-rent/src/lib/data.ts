export type Car = {
  id: string;
  name: string;
  price: number;
  transmission: "Auto" | "Manual";
  fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  doors: number;
  seats: number;
  type: "Economy" | "SUV" | "Premium" | "Standard";
  hasAc: boolean;
  image: string;
};

export const LOCATIONS = [
  "Skopje International Airport",
  "Prishtina Airport",
  "Skopje Center",
  "Tirana Airport"
];

export const CARS: Car[] = [
  {
    id: "vw-polo",
    name: "VW Polo",
    price: 70,
    transmission: "Manual",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "Economy",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/950e0f30fabe6bebe76011966089c4726455a68c.jpg"
  },
  {
    id: "ford-fiesta",
    name: "Ford Fiesta",
    price: 70,
    transmission: "Manual",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "Economy",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/f65999c43c77ab5618a3b589916d8e3068a24b97.png"
  },
  {
    id: "peugeot-308",
    name: "Peugeot 308",
    price: 100,
    transmission: "Auto",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "Standard",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/71f198513140f108686e8091f3937432f011e2c2.jpg"
  },
  {
    id: "vw-troc",
    name: "VW T-Roc",
    price: 100,
    transmission: "Auto",
    fuel: "Diesel",
    doors: 5,
    seats: 5,
    type: "SUV",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/bc6b87c4439659193d95273cebe218cd7c4c2922.jpg"
  },
  {
    id: "skoda-scala",
    name: "Skoda Scala",
    price: 90,
    transmission: "Auto",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "Standard",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/f440ef168c846d71c00978759d3ba3e8cbf43be6.png"
  },
  {
    id: "ford-kuga",
    name: "Ford Kuga",
    price: 100,
    transmission: "Auto",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "SUV",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/6f3695f5b82a1366de6c0c3cd1f3b5b35c7ba0cb.png"
  },
  {
    id: "bmw-1",
    name: "BMW 1 Series",
    price: 100,
    transmission: "Auto",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "Premium",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/44acedd2cc5e03ee952ea7687a642cf64ddf5997.png"
  },
  {
    id: "seat-leon",
    name: "Seat Leon",
    price: 100,
    transmission: "Auto",
    fuel: "Diesel",
    doors: 5,
    seats: 5,
    type: "Standard",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/935876cf82aa37f7e8cd19205634e1e70798320a.png"
  },
  {
    id: "skoda-kamiq",
    name: "Skoda Kamiq",
    price: 100,
    transmission: "Auto",
    fuel: "Petrol",
    doors: 5,
    seats: 5,
    type: "SUV",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/a1cd0c3b6551bb1f571366f663e58177f9caec60.png"
  },
  {
    id: "skoda-octavia",
    name: "Skoda Octavia",
    price: 100,
    transmission: "Auto",
    fuel: "Diesel",
    doors: 5,
    seats: 5,
    type: "Standard",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/554bb82ed801618699f9a2ced1379da9fe0aae2f.png"
  },
  {
    id: "vw-passat",
    name: "VW Passat",
    price: 100,
    transmission: "Auto",
    fuel: "Diesel",
    doors: 5,
    seats: 5,
    type: "Standard",
    hasAc: true,
    image: "https://momo.rent/images/vehicles/8458d55ca347965d18e21496245c4f15d1f49a22.png"
  }
];

export const NEWS = [
  {
    id: 1,
    title: "Exploring the Balkans: A Guide to Renting a Car with Momo Rent A Car",
    date: "Oct 15, 2025",
    image: "https://momo.rent/images/news/7512a0777ffab782fdfea9d174dd5d17d97d3168.png",
    excerpt: "Discover the hidden gems of the Balkans with our premium fleet. From the mountains of Macedonia to the coast of Albania."
  },
  {
    id: 2,
    title: "MOMO Rent a Car Tirana Airport",
    date: "Sep 28, 2025",
    image: "https://momo.rent/images/news/0be0cfa9d3647cc9e6fbdb38c535fe1f1d660b97.png",
    excerpt: "We are expanding! You can now pick up and drop off your premium rental directly at Tirana International Airport."
  }
];
