export const vehicles = [
  {
    slug: "tesla-model-3",
    brand: "Tesla",
    model: "Model 3",
    year: 2021,
    description:
      "The Tesla Model 3 is a compact executive sedan that is battery powered and produced by Tesla. The base Model 3 delivers an EPA-rated all-electric range of 272 miles (438 km) and the Long Range version delivers 358 miles (576 km). According to Tesla, the Model 3 carries full self-driving hardware, with periodic software updates adding functionality.",
    image: "tesla.jpg",
    color: { short: "white", long: "pearl white" },
    featured: true,
    price: {
      retailPrice: "$300",
      discountPrice: "$275",
    },
    details: {
      transmission: "automatic",
      seats: "5 adults",
      bags: "3 bags",
      autonomy: "272 miles (EPA est.)",
      capacity: "649 L",
    },
    features: [
      "3.1 s 0-60 mph Aceleration",
      "Autopilot",
      '15" Center Touchscreen',
      '20" wheels',
      "Dual Motor All-Wheel Drive",
      "Air Conditioning",
    ],
  },
  {
    slug: "porsche-911",
    brand: "Porsche",
    model: "911",
    year: 2018,
    description:
      "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and originally a torsion bar suspension. The car has been continuously enhanced through the years but the basic concept has remained unchanged.",
    image: "porsche.jpg",
    color: { short: "white", long: "pearl white" },
    featured: true,
    price: {
      retailPrice: "$1199",
      discountPrice: "$999",
    },
    details: {
      transmission: "7-Speed Automatic",
      seats: "2 adults",
      bags: "1 bag",
      autonomy: "EPA estimates not yet available",
      capacity: "130 L",
    },
    features: [
      "Porsche Communication Management* (PCM) including online navigation module and Connect Plus",
      "Connect Plus* incl. wireless Apple® CarPlay and wireless Android Auto, LTE communication module, wireless internet access and numerous Porsche Connect services",
      "Integration of Apple Music®, Apple Podcasts® and Spotify®",
      "Voice Pilot with natural language understanding and activation via “Hey Porsche“",
      "Navigation Plus incl. Real time Traffic Information and Online Map Update",
      "Sound Package Plus, analog sound system, 8 loudspeakers, 150-watt total output with integral amplifier and digital signal processing",
      "Air Conditioning",
      "Track Precision App",
    ],
  },
  {
    slug: "bmw-blue",
    brand: "BMW",
    model: "Lorem ipsum",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "bmw-blue.jpg",
    color: { short: "blue", long: "metallic blue" },
    featured: true,
    price: {
      retailPrice: "$300",
      discountPrice: "$250",
    },
    details: {
      transmission: "automatic",
      seats: "4 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "bmw-black",
    brand: "BMW",
    model: "Lorem ipsum",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "bmw-black.jpg",
    color: { short: "black", long: "black" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "4 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "minivan",
    brand: "Volkswagen",
    model: "Lorem ipsum",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "van.jpg",
    color: { short: "yellow", long: "yellow" },
    featured: true,
    price: {
      retailPrice: "$300",
      discountPrice: "$200",
    },
    details: {
      transmission: "automatic",
      seats: "8 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "hyundai-i30n",
    brand: "Hyundai",
    model: "I30N",
    year: -2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "hyundai.jpg",
    color: { short: "cyan", long: "light blue" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "4 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "jeep",
    brand: "Jeep",
    model: "Wrangler Rubicon",
    year: 2020,
    description:
      "The Jeep Wrangler is a series of compact and mid-size four-wheel drive off-road SUVs manufactured by Jeep since 1986, and currently in its fourth generation. The Wrangler JL, the most recent generation, was unveiled in late-2017 and is produced at Jeep's Toledo Complex.",
    image: "jeep.jpg",
    color: { short: "black", long: "black" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "2 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '17" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "bmw-m4-gts",
    brand: "BMW",
    model: "M4 GTS",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "bmw-white.jpg",
    color: { short: "white", long: "pearl white" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "4 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "ford-mustang-shelby-gt350r",
    brand: "Ford",
    model: "Mustang Shelby GT350R",
    year: 2020,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "mustang.jpg",
    color: { short: "black", long: "black matte" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "2 adults",
      bags: "3 bags",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "scooter",
    brand: "???",
    model: "Lorem ipsum",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "scooter.jpg",
    color: { short: "black", long: "pearl black" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "1 adults",
      bags: "-",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "bianchi-c-sport",
    brand: "Bianchi",
    model: "C-Sport",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "bike.jpg",
    color: { short: "white", long: "pearl white" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "1 adults",
      bags: "-",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
  {
    slug: "yacht",
    brand: "???",
    model: "Lorem ipsum",
    year: 2018,
    description:
      "A standard car rental is a larger sedan, which provides more room for passengers and can fit an additional bag in the trunk compared to an intermediate car.",
    image: "boat.jpg",
    color: { short: "white", long: "pearl white" },
    featured: false,
    price: {
      retailPrice: "$300",
      discountPrice: "",
    },
    details: {
      transmission: "automatic",
      seats: "7 adults",
      bags: "-",
      autonomy: "507 Km",
      capacity: "649 L",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
      "Electric",
      '15" digital screen',
      '20" wheels',
      "Autopilot",
    ],
  },
];
