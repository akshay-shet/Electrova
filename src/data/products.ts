import { Product, ProductReview } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. LAPTOPS (4 items)
  {
    id: 'lap-01',
    name: 'MacBook Pro 16-inch M3 Max (36GB Unified RAM, 1TB SSD, Liquid Retina XDR)',
    brand: 'Apple',
    category: 'Laptops',
    price: 349900,
    originalPrice: 399900,
    discountPercent: 12,
    rating: 4.9,
    ratingCount: 1420,
    reviewCount: 382,
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The ultimate pro laptop. Featuring the blazing M3 Max chip with 16-core CPU and up to 40-core GPU, stunning 16.2-inch Liquid Retina XDR display with 1600 nits peak brightness, and up to 22 hours of battery life.',
    features: ['Apple M3 Max chip with 16-core CPU', '16.2-inch Liquid Retina XDR display (120Hz ProMotion)', '36GB Unified Memory + 1TB Fast SSD', 'Up to 22 hours battery endurance', '1080p FaceTime HD camera & studio-quality three-mic array'],
    specs: {
      'Processor': 'Apple M3 Max (16-core)',
      'RAM': '36GB Unified Memory',
      'Storage': '1TB NVMe SSD',
      'Display': '16.2-inch Liquid Retina XDR (3456 x 2234)',
      'Battery': '100Wh Lithium-Polymer, up to 22 hours',
      'Weight': '2.16 kg',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3'
    },
    colors: ['Space Black', 'Silver'],
    variants: ['36GB / 1TB', '48GB / 1TB', '64GB / 2TB'],
    inStock: true,
    warranty: '1 Year Apple Manufacturer Warranty + AppleCare eligible',
    isBestSeller: true,
    isTrending: true
  },
  {
    id: 'lap-02',
    name: 'Dell XPS 15 9530 (13th Gen Intel Core i9-13900H, 32GB RAM, 1TB SSD, RTX 4070 8GB)',
    brand: 'Dell',
    category: 'Laptops',
    price: 245990,
    originalPrice: 289990,
    discountPercent: 15,
    rating: 4.7,
    ratingCount: 840,
    reviewCount: 198,
    thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Immerse yourself in precision craftsmanship with CNC machined aluminum and carbon fiber palm rest. Featuring a vivid 3.5K OLED InfinityEdge touch display and NVIDIA GeForce RTX 4070 graphics.',
    features: ['13th Gen Intel Core i9-13900H (14 cores)', 'NVIDIA GeForce RTX 4070 8GB GDDR6', '15.6-inch 3.5K (3456x2160) OLED Touchscreen', 'Quad-speaker design with Waves Nx 3D audio', 'CNC Machined Aluminum chassis'],
    specs: {
      'Processor': 'Intel Core i9-13900H',
      'RAM': '32GB DDR5 4800MHz',
      'Storage': '1TB M.2 PCIe NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4070 8GB',
      'Display': '15.6" 3.5K OLED 400-nit Touch',
      'Weight': '1.92 kg',
      'OS': 'Windows 11 Home'
    },
    colors: ['Platinum Silver', 'Graphite'],
    variants: ['16GB / 512GB', '32GB / 1TB', '64GB / 2TB'],
    inStock: true,
    warranty: '1 Year Dell Onsite Hardware Service',
    isTrending: true
  },
  {
    id: 'lap-03',
    name: 'ASUS ROG Zephyrus G16 OLED (Intel Core Ultra 9 185H, 32GB RAM, 2TB SSD, RTX 4080)',
    brand: 'ASUS',
    category: 'Laptops',
    price: 289990,
    originalPrice: 329990,
    discountPercent: 12,
    rating: 4.8,
    ratingCount: 620,
    reviewCount: 145,
    thumbnail: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Precision gaming redefined. Slash lighting on the CNC aluminum lid, ROG Nebula Display 2.5K 240Hz OLED with 0.2ms response time, paired with AI-driven Intel Core Ultra 9 and RTX 4080.',
    features: ['ROG Nebula OLED 2.5K 240Hz Display', 'Intel Core Ultra 9 185H with dedicated NPU', 'NVIDIA RTX 4080 12GB Laptop GPU', 'Slash Lighting customizable LED matrix', 'Ultra-thin 1.49cm aluminum unibody'],
    specs: {
      'Processor': 'Intel Core Ultra 9 185H (16 cores)',
      'RAM': '32GB LPDDR5X 7467MHz',
      'Storage': '2TB PCIe 4.0 NVMe SSD',
      'Display': '16" 2.5K (2560x1600) 240Hz OLED',
      'Weight': '1.85 kg',
      'Battery': '90Wh'
    },
    colors: ['Eclipse Gray', 'Platinum White'],
    variants: ['32GB / 1TB RTX 4070', '32GB / 2TB RTX 4080'],
    inStock: true,
    warranty: '2 Years ASUS Global Warranty',
    isNewArrival: true
  },
  {
    id: 'lap-04',
    name: 'HP Spectre x360 2-in-1 14-inch (Intel Core Ultra 7 155H, 16GB RAM, 1TB SSD, 2.8K OLED)',
    brand: 'HP',
    category: 'Laptops',
    price: 154990,
    originalPrice: 179990,
    discountPercent: 14,
    rating: 4.6,
    ratingCount: 410,
    reviewCount: 92,
    thumbnail: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Transformative flexibility. A 360-degree convertible with a stunning 2.8K 120Hz OLED touch display, 9MP AI camera with night mode, and HP MPP 2.0 rechargeable stylus included.',
    features: ['360-degree convertible hinge with stylus', '14" 2.8K (2880x1800) OLED 120Hz Touch', 'Intel Core Ultra 7 155H with Intel Arc Graphics', '9MP IR AI camera with auto-framing', 'Poly Studio audio with quad speakers'],
    specs: {
      'Processor': 'Intel Core Ultra 7 155H',
      'RAM': '16GB LPDDR5x',
      'Storage': '1TB PCIe Gen4 SSD',
      'Display': '14-inch 2.8K OLED HDR 500 nits',
      'Weight': '1.44 kg',
      'Stylus': 'HP Rechargeable MPP 2.0 Tilt Pen included'
    },
    colors: ['Nightfall Black', 'Slate Blue'],
    variants: ['16GB / 1TB', '32GB / 2TB'],
    inStock: true,
    warranty: '1 Year Onsite Warranty + 1 Year ADP',
    isDealOfTheDay: true
  },
  {
    id: 'lap-05',
    name: 'Lenovo ThinkPad X1 Carbon Gen 12 (Intel Core Ultra 7 165U, 32GB RAM, 1TB SSD, 2.8K OLED)',
    brand: 'Lenovo',
    category: 'Laptops',
    price: 219990,
    originalPrice: 249990,
    discountPercent: 12,
    rating: 4.8,
    ratingCount: 510,
    reviewCount: 130,
    thumbnail: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The executive lightweight standard. Featherlight carbon fiber and recycled magnesium chassis weighing just 1.09 kg, legendary ThinkPad keyboard with TrackPoint, and MIL-STD 810H durability.',
    features: ['Ultra-light 1.09kg aerospace carbon fiber unibody', 'Intel Core Ultra 7 165U with Intel vPro Security', '14-inch 2.8K 120Hz OLED Display (400 nits, HDR 500)', 'Redesigned Communications Bar with 8MP MIPI camera', 'Sub-battery with Rapid Charge up to 80% in 60 minutes'],
    specs: {
      'Processor': 'Intel Core Ultra 7 165U vPro',
      'RAM': '32GB LPDDR5X 6400MHz',
      'Storage': '1TB PCIe Gen4 Performance SSD',
      'Weight': '1.09 kg',
      'Security': 'Match-on-Chip Fingerprint & dTPM 2.0'
    },
    colors: ['Deep Black Carbon Weave'],
    variants: ['32GB / 1TB SSD'],
    inStock: true,
    warranty: '3 Years Lenovo Premier Support Onsite',
    isBestSeller: false,
    isTrending: true
  },
  {
    id: 'lap-06',
    name: 'Apple MacBook Air 15-inch M3 (16GB Unified RAM, 512GB SSD, Liquid Retina, MagSafe)',
    brand: 'Apple',
    category: 'Laptops',
    price: 154900,
    originalPrice: 164900,
    discountPercent: 6,
    rating: 4.9,
    ratingCount: 1980,
    reviewCount: 460,
    thumbnail: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Lean. Mean. M3 machine. Incredibly thin 11.5mm design with a spacious 15.3-inch Liquid Retina display, silent fanless architecture, 1080p FaceTime HD camera, and six-speaker sound system with Spatial Audio.',
    features: ['Apple M3 chip with 8-core CPU and 10-core GPU', 'Spacious 15.3-inch Liquid Retina display with 500 nits', 'Completely silent fanless unibody aluminum design', 'Six-speaker sound system with force-cancelling woofers', 'Up to 18 hours battery life'],
    specs: {
      'Processor': 'Apple M3 8-core CPU / 10-core GPU',
      'RAM': '16GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '15.3-inch Liquid Retina (2880 x 1864)',
      'Weight': '1.51 kg'
    },
    colors: ['Midnight', 'Starlight', 'Space Gray', 'Silver'],
    variants: ['16GB / 512GB', '24GB / 1TB'],
    inStock: true,
    warranty: '1 Year Apple Warranty',
    isBestSeller: true
  },

  // 2. TABLETS (4 items)
  {
    id: 'tab-01',
    name: 'Apple iPad Pro 13-inch M4 (Ultra Retina XDR OLED, 256GB, Wi-Fi 6E)',
    brand: 'Apple',
    category: 'Tablets',
    price: 129900,
    originalPrice: 139900,
    discountPercent: 7,
    rating: 4.9,
    ratingCount: 980,
    reviewCount: 245,
    thumbnail: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The thinnest Apple product ever made. Packed with the revolutionary Apple M4 chip, tandem OLED Ultra Retina XDR display, and support for Apple Pencil Pro.',
    features: ['Next-gen Apple M4 chip with 9-core CPU', 'Ultra Retina XDR Tandem OLED display', 'Incredibly thin 5.1mm design', 'Landscape 12MP Center Stage camera', 'Apple Pencil Pro & Magic Keyboard compatible'],
    specs: {
      'Display': '13-inch Ultra Retina XDR OLED (2752 x 2064)',
      'Chipset': 'Apple M4 chip',
      'Storage': '256GB / 512GB / 1TB',
      'Camera': '12MP Wide rear + 12MP Ultra-wide landscape front',
      'Thickness': '5.1 mm',
      'Weight': '579 grams'
    },
    colors: ['Space Black', 'Silver'],
    variants: ['256GB Wi-Fi', '512GB Wi-Fi', '1TB Cellular'],
    inStock: true,
    warranty: '1 Year Apple Manufacturer Warranty',
    isBestSeller: true,
    isNewArrival: true
  },
  {
    id: 'tab-02',
    name: 'Samsung Galaxy Tab S9 Ultra (14.6-inch Dynamic AMOLED 2X, 12GB RAM, 256GB, S Pen Included)',
    brand: 'Samsung',
    category: 'Tablets',
    price: 108999,
    originalPrice: 124999,
    discountPercent: 13,
    rating: 4.8,
    ratingCount: 710,
    reviewCount: 168,
    thumbnail: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Gigantic canvas for productivity and cinema. Massive 14.6-inch Dynamic AMOLED 2X 120Hz display, IP68 water and dust resistance, Snapdragon 8 Gen 2 for Galaxy, and IP68 S Pen bundled.',
    features: ['14.6" Dynamic AMOLED 2X 120Hz screen', 'Bundled low-latency IP68 S Pen', 'IP68 water & dust resistance rating', 'Quad AKG speakers with Dolby Atmos', 'Samsung DeX workstation mode'],
    specs: {
      'Display': '14.6" Dynamic AMOLED 2X (2960 x 1848) 120Hz',
      'Processor': 'Snapdragon 8 Gen 2 for Galaxy',
      'RAM': '12GB LPDDR5X',
      'Storage': '256GB (microSD up to 1TB)',
      'Battery': '11,200 mAh with 45W Fast Charging'
    },
    colors: ['Graphite', 'Beige'],
    variants: ['12GB / 256GB Wi-Fi', '12GB / 512GB 5G'],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    isTrending: true
  },
  {
    id: 'tab-03',
    name: 'OnePlus Pad 2 (12.1-inch 3K 144Hz Display, Snapdragon 8 Gen 3, 12GB RAM, 256GB)',
    brand: 'OnePlus',
    category: 'Tablets',
    price: 42999,
    originalPrice: 47999,
    discountPercent: 10,
    rating: 4.7,
    ratingCount: 520,
    reviewCount: 88,
    thumbnail: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Flagship speed at an accessible price. Powered by Snapdragon 8 Gen 3, 7:5 ReadFit 3K display with 144Hz refresh rate, and 67W SUPERVOOC charging.',
    features: ['Snapdragon 8 Gen 3 flagship SoC', '12.1-inch 3K 144Hz 7:5 ReadFit display', '6 Omnidirectional speakers with Hi-Res Audio', '9510mAh battery with 67W fast charge', 'Open Canvas multi-window multitasking'],
    specs: {
      'Display': '12.1" 3K (3000 x 2120) 144Hz LCD',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM & Storage': '12GB RAM / 256GB Storage',
      'Battery': '9510 mAh',
      'Weight': '584g'
    },
    colors: ['Nimbus Gray'],
    variants: ['8GB / 128GB', '12GB / 256GB'],
    inStock: true,
    warranty: '1 Year Manufacturer Warranty',
    isDealOfTheDay: true
  },

  // 3. SMART WATCHES (3 items)
  {
    id: 'wat-01',
    name: 'Apple Watch Ultra 2 (GPS + Cellular 49mm Titanium Case, Trail Loop)',
    brand: 'Apple',
    category: 'Smart Watches',
    price: 89900,
    originalPrice: 94900,
    discountPercent: 5,
    rating: 4.9,
    ratingCount: 1850,
    reviewCount: 420,
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The most rugged and capable Apple Watch. Aerospace-grade 49mm titanium case, 3000-nit Always-On Retina display, dual-frequency precision GPS, and up to 72 hours in low power mode.',
    features: ['49mm aerospace-grade titanium case', '3000 nits brightest Apple display', 'Precision dual-frequency GPS (L1 and L5)', 'EN13319 certified dive computer up to 40m', 'Customizable orange Action Button'],
    specs: {
      'Case': '49mm Titanium',
      'Display': 'Always-On OLED (3000 nits)',
      'Water Resistance': '100m water resistant, 40m dive',
      'Sensors': 'ECG, Blood Oxygen, Skin Temp, Depth gauge',
      'Battery': 'Up to 36 hours normal, 72 hours Low Power'
    },
    colors: ['Titanium / Orange', 'Titanium / Blue', 'Black Titanium'],
    variants: ['Trail Loop', 'Alpine Loop', 'Ocean Band'],
    inStock: true,
    warranty: '1 Year Apple Warranty',
    isBestSeller: true
  },
  {
    id: 'wat-02',
    name: 'Samsung Galaxy Watch 6 Classic (47mm Rotating Bezel, Bluetooth + LTE)',
    brand: 'Samsung',
    category: 'Smart Watches',
    price: 36999,
    originalPrice: 43999,
    discountPercent: 16,
    rating: 4.7,
    ratingCount: 1120,
    reviewCount: 230,
    thumbnail: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Iconic mechanical rotating bezel with sapphire crystal glass. Features advanced sleep coaching, BioActive sensor for body composition BIA, ECG, and blood pressure tracking.',
    features: ['Physical rotating bezel for tactile control', 'Sapphire crystal glass screen', 'BioActive 3-in-1 health sensor (BIA, ECG, HR)', 'Wear OS powered by Samsung with Google Play', 'Sleep coaching & snore detection'],
    specs: {
      'Size': '47mm Stainless Steel',
      'Display': '1.5-inch Super AMOLED 480x480',
      'Protection': '5ATM + IP68 / MIL-STD-810H',
      'Battery': '425 mAh with wireless fast charge',
      'Compatibility': 'Android 10.0 and above'
    },
    colors: ['Black', 'Silver'],
    variants: ['43mm BT', '47mm BT', '47mm LTE'],
    inStock: true,
    warranty: '1 Year Samsung Warranty',
    isTrending: true
  },
  {
    id: 'wat-03',
    name: 'Garmin Fenix 7 Pro Sapphire Solar Edition (Multisport GPS, Solar Charging)',
    brand: 'Garmin',
    category: 'Smart Watches',
    price: 84990,
    originalPrice: 99990,
    discountPercent: 15,
    rating: 4.8,
    ratingCount: 430,
    reviewCount: 112,
    thumbnail: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pro multisport GPS watch with Power Sapphire solar charging lens, built-in LED flashlight, preloaded TopoActive maps, and up to 22 days of battery life in smartwatch mode.',
    features: ['Solar charging lens extends battery up to 22 days', 'Built-in multi-LED flashlight with strobe', 'Gen 5 wrist-based optical heart rate sensor', 'Preloaded TopoActive and ski maps worldwide', 'Hill Score and Endurance Score metrics'],
    specs: {
      'Lens': 'Power Sapphire solar glass',
      'Bezel': 'Titanium with DLC coating',
      'Display': '1.3" sunlight-visible transflective MIP',
      'Water Rating': '10 ATM (100 meters)',
      'Weight': '73 grams'
    },
    colors: ['Carbon Gray DLC Titanium', 'Fog Gray / Ember Orange'],
    variants: ['47mm Standard', '51mm 7X Pro'],
    inStock: true,
    warranty: '2 Years Garmin International Warranty'
  },

  // 4. HEADPHONES (4 items)
  {
    id: 'hdp-01',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones (30h Battery, Dual Processor)',
    brand: 'Sony',
    category: 'Headphones',
    price: 29990,
    originalPrice: 34990,
    discountPercent: 14,
    rating: 4.8,
    ratingCount: 3840,
    reviewCount: 940,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Industry-leading noise cancellation powered by two processors and 8 microphones. Auto NC Optimizer, specially engineered 30mm carbon fiber drivers, and crystal-clear hands-free calling.',
    features: ['HD Noise Cancelling Processor QN1 + V1', '8 microphones with precision voice pickup', 'Up to 30 hours battery (3 min charge = 3 hours playback)', 'Multipoint connection to 2 devices seamlessly', 'Speak-to-Chat & Wear detection sensors'],
    specs: {
      'Driver': '30mm carbon composite dome',
      'Frequency Response': '4 Hz - 40,000 Hz (Hi-Res Audio)',
      'Bluetooth': 'v5.2 with LDAC, AAC, SBC',
      'Battery Life': '30 hours with ANC ON, 40h ANC OFF',
      'Weight': '250 grams'
    },
    colors: ['Black', 'Silver', 'Midnight Blue'],
    variants: ['Standard ANC'],
    inStock: true,
    warranty: '1 Year Sony India Warranty',
    isBestSeller: true,
    isDealOfTheDay: true
  },
  {
    id: 'hdp-02',
    name: 'Bose QuietComfort Ultra Headphones (Spatial Audio, CustomTune, World-Class ANC)',
    brand: 'Bose',
    category: 'Headphones',
    price: 35900,
    originalPrice: 39900,
    discountPercent: 10,
    rating: 4.8,
    ratingCount: 1620,
    reviewCount: 410,
    thumbnail: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Breakthrough spatialized audio for more immersive listening that makes music feel realer than ever. CustomTune technology automatically shapes sound and noise cancellation to your ear canal.',
    features: ['Bose Immersive Audio spatial soundstage', 'CustomTune acoustic calibration', 'Quiet Mode, Aware Mode, Immersion Mode', 'Luxury protein leather cushions and cast aluminum arms', '24 hours battery life (up to 18 hours in Immersive mode)'],
    specs: {
      'Sound Modes': 'Quiet, Aware, Immersion',
      'Microphones': 'Array of 10 mics',
      'Connectivity': 'Bluetooth 5.3 + Snapdragon Sound (aptX Adaptive)',
      'Battery': '24 hours playback, USB-C fast charging',
      'Weight': '252 grams'
    },
    colors: ['Black', 'White Smoke', 'Sandstone'],
    variants: ['Over-Ear'],
    inStock: true,
    warranty: '1 Year Bose Manufacturer Warranty',
    isTrending: true
  },
  {
    id: 'hdp-03',
    name: 'Sennheiser Momentum 4 Wireless (Acoustic Perfection, 60-Hour Battery Life)',
    brand: 'Sennheiser',
    category: 'Headphones',
    price: 24990,
    originalPrice: 34990,
    discountPercent: 29,
    rating: 4.7,
    ratingCount: 1240,
    reviewCount: 310,
    thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Audiophile signature sound with an astounding 60 hours of continuous battery life. 42mm transducer system delivering brilliant dynamics, clarity and musicality.',
    features: ['Unrivalled 60-hour battery life with ANC on', 'Audiophile-inspired 42mm transducer system', 'Adaptive Noise Cancellation and Transparency mode', 'Custom sound personalization via Smart Control app', 'Padded headband and plush ear cushions'],
    specs: {
      'Driver Size': '42mm dynamic',
      'Frequency Range': '6 Hz to 22,000 Hz',
      'Codecs': 'aptX, aptX Adaptive, AAC, SBC',
      'Battery': '700 mAh (60 hours)',
      'Weight': '293g'
    },
    colors: ['Black/Copper', 'White/Stone'],
    variants: ['Standard Edition', 'Special Edition'],
    inStock: true,
    warranty: '2 Years Sennheiser Warranty',
    isDealOfTheDay: true
  },

  // 5. EARBUDS (3 items)
  {
    id: 'ear-01',
    name: 'Apple AirPods Pro 2 with USB-C (H2 Chip, Adaptive Audio, Lossless Audio)',
    brand: 'Apple',
    category: 'Earbuds',
    price: 23990,
    originalPrice: 24900,
    discountPercent: 4,
    rating: 4.9,
    ratingCount: 4500,
    reviewCount: 1100,
    thumbnail: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Up to 2x more Active Noise Cancellation than the previous generation. Features Adaptive Audio that dynamically blends Transparency mode with ANC, Conversation Awareness, and USB-C MagSafe case with Precision Finding.',
    features: ['Apple H2 headphone chip + U1 in case', 'Adaptive Audio, Transparency & Conversation Awareness', 'Personalized Spatial Audio with dynamic head tracking', 'IP54 dust, sweat, and water resistance', 'Up to 6 hours listening (30h with charging case)'],
    specs: {
      'Connectivity': 'Bluetooth 5.3',
      'Chip': 'Apple H2 chip',
      'Charging Case': 'USB-C, MagSafe, Apple Watch charger compatible',
      'Battery': '6 hours per charge, 30 hours total',
      'Weight': '5.3g per earbud'
    },
    colors: ['White'],
    variants: ['USB-C MagSafe'],
    inStock: true,
    warranty: '1 Year Apple Warranty',
    isBestSeller: true
  },
  {
    id: 'ear-02',
    name: 'Sony WF-1000XM5 True Wireless Earbuds (Integrated Processor V2, Dynamic Driver X)',
    brand: 'Sony',
    category: 'Earbuds',
    price: 21990,
    originalPrice: 24990,
    discountPercent: 12,
    rating: 4.7,
    ratingCount: 2100,
    reviewCount: 540,
    thumbnail: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Astonishing sound quality and the best noise canceling in an ultra-compact earbud. Equipped with Dynamic Driver X for wide frequency reproduction, Bone conduction sensors, and AI DNN call noise reduction.',
    features: ['Dynamic Driver X 8.4mm diaphragm', 'HD Noise Cancelling Processor QN2e + Integrated Processor V2', 'Bone conduction sensor for crystal clear calls', 'Hi-Res Audio Wireless with LDAC and DSEE Extreme', 'Multipoint connection and Qi wireless charging'],
    specs: {
      'Driver': '8.4mm Dynamic Driver X',
      'Codecs': 'LDAC, AAC, SBC, LC3',
      'Battery': '8 hours (buds) + 16 hours (case) with ANC',
      'Water Resistance': 'IPX4 rating',
      'Weight': '5.9 grams each'
    },
    colors: ['Black', 'Silver'],
    variants: ['Standard ANC'],
    inStock: true,
    warranty: '1 Year Sony Warranty',
    isTrending: true
  },
  {
    id: 'ear-03',
    name: 'Nothing Ear (2024 Flagship, 11mm Ceramic Driver, 24-bit Hi-Res LDAC, ChatGPT Integration)',
    brand: 'Nothing',
    category: 'Earbuds',
    price: 11999,
    originalPrice: 14999,
    discountPercent: 20,
    rating: 4.6,
    ratingCount: 1650,
    reviewCount: 380,
    thumbnail: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Transparent design elevated with a ceramic diaphragm for crisper highs and deeper bass. Smart Active Noise Cancellation up to 45dB, LHDC 5.0 and LDAC Hi-Res certified, with pinch-to-talk AI.',
    features: ['Custom 11mm ceramic driver with airflow chambers', 'Smart ANC up to 45dB with auto-adaptive modes', 'LHDC 5.0 and LDAC 24-bit/192kHz certification', 'Advanced Equalizer with Profile sharing', 'Up to 40.5 hours playback time'],
    specs: {
      'Diaphragm': 'Custom 11mm Ceramic',
      'ANC Depth': 'Up to 45 dB',
      'Battery Life': '8.5h buds, 40.5h total with case',
      'Fast Charge': '10 min for 10 hours playback',
      'Protection': 'IP54 buds / IP55 case'
    },
    colors: ['Transparent White', 'Transparent Black'],
    variants: ['Flagship Edition'],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    isNewArrival: true
  },

  // 6. BLUETOOTH SPEAKERS (3 items)
  {
    id: 'spk-01',
    name: 'Marshall Stanmore III Bluetooth Home Speaker (80W Stereo, Brass Accents)',
    brand: 'Marshall',
    category: 'Bluetooth Speakers',
    price: 36999,
    originalPrice: 41999,
    discountPercent: 12,
    rating: 4.8,
    ratingCount: 1450,
    reviewCount: 390,
    thumbnail: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Iconic vintage rock aesthetics meet room-shaking audio. Features outward-angled tweeters, updated waveguides for consistently expansive stereo sound, and Dynamic Loudness balance.',
    features: ['Wider soundstage with angled tweeters', 'Bluetooth 5.2 with LE Audio readiness', 'Analog knobs for Bass, Treble, and Volume', 'RCA and 3.5mm AUX inputs', 'PVC-free vegan materials and 70% recycled plastic'],
    specs: {
      'Amplifier': 'One 50W Class D (woofer) + Two 15W Class D (tweeters)',
      'Max SPL': '97 dB @ 1 m',
      'Frequency Range': '45–20,000 Hz',
      'Connectivity': 'Bluetooth 5.2, 3.5mm AUX, RCA',
      'Weight': '4.25 kg'
    },
    colors: ['Vintage Black', 'Cream', 'Brown'],
    variants: ['Standard Home Speaker'],
    inStock: true,
    warranty: '1 Year Official Marshall Warranty',
    isBestSeller: true
  },
  {
    id: 'spk-02',
    name: 'JBL Charge 5 Portable Waterproof Bluetooth Speaker with Built-in Powerbank',
    brand: 'JBL',
    category: 'Bluetooth Speakers',
    price: 14999,
    originalPrice: 18999,
    discountPercent: 21,
    rating: 4.7,
    ratingCount: 5200,
    reviewCount: 1250,
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Take the party with you anywhere. Optimized long excursion driver, separate tweeter, and dual pumping JBL bass radiators. IP67 waterproof and dustproof with a massive 20-hour battery that can charge your devices.',
    features: ['Bold JBL Original Pro Sound with punchy bass', '20 Hours of continuous playtime', 'IP67 waterproof and dustproof design', 'Built-in power bank to charge USB devices', 'PartyBoost allows pairing multiple JBL speakers'],
    specs: {
      'Output Power': '30W RMS (woofer) + 10W RMS (tweeter)',
      'Battery': '7500 mAh (20 hours)',
      'Charging Time': '4 hours via USB-C',
      'Protection': 'IP67 Waterproof & Dustproof',
      'Weight': '960 grams'
    },
    colors: ['Squad Camo', 'Black', 'Teal Blue', 'Red'],
    variants: ['Standard Edition'],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    isTrending: true
  },
  {
    id: 'spk-03',
    name: 'Bose SoundLink Flex Bluetooth Speaker (2nd Gen, PositionIQ Technology, Outdoor Rugged)',
    brand: 'Bose',
    category: 'Bluetooth Speakers',
    price: 15900,
    originalPrice: 17900,
    discountPercent: 11,
    rating: 4.8,
    ratingCount: 1800,
    reviewCount: 410,
    thumbnail: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Surprising clarity and deep bass in a go-anywhere size. PositionIQ technology automatically detects orientation to optimize audio whether standing upright, lying flat, or hanging from its utility loop.',
    features: ['Proprietary PositionIQ audio calibration', 'IP67 waterproof and floats in water', 'Powder-coated steel grille with silicone exterior', 'Up to 12 hours playback on one charge', 'Built-in microphone for speakerphone and voice assistant'],
    specs: {
      'Waterproof': 'IP67 waterproof (floats in pool)',
      'Battery': '12 hours lithium-ion',
      'Bluetooth': 'v5.3 with SimpleSync compatibility',
      'Weight': '580g',
      'Dimensions': '9 x 20.1 x 5.2 cm'
    },
    colors: ['Alpine Sage', 'Black', 'Chilled Lilac', 'White Smoke'],
    variants: ['Portable Gen 2'],
    inStock: true,
    warranty: '1 Year Bose Manufacturer Warranty'
  },

  // 7. SMART TVS (3 items)
  {
    id: 'tv-01',
    name: 'Sony BRAVIA XR 65-inch 4K OLED Smart Google TV (Cognitive Processor XR, Dolby Vision Atmos)',
    brand: 'Sony',
    category: 'Smart TVs',
    price: 199990,
    originalPrice: 249990,
    discountPercent: 20,
    rating: 4.9,
    ratingCount: 650,
    reviewCount: 190,
    thumbnail: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pure blacks and stunning brightness driven by the Cognitive Processor XR. Acoustic Surface Audio+ turns the entire screen into a speaker, creating sound that directly tracks the action.',
    features: ['Cognitive Processor XR with XR OLED Contrast Pro', 'Acoustic Surface Audio+ with built-in subwoofers', 'Google TV with hands-free voice search', 'HDMI 2.1 4K 120Hz, VRR, ALLM for PS5 gaming', 'Dolby Vision, Dolby Atmos, IMAX Enhanced'],
    specs: {
      'Screen Size': '65 inches (164 cm)',
      'Display Tech': '4K OLED (3840 x 2160)',
      'Refresh Rate': '120Hz Native',
      'Audio Output': '60W Acoustic Surface Audio+',
      'Ports': '4x HDMI (2x HDMI 2.1), 2x USB, eARC, Optical, LAN'
    },
    colors: ['Titanium Black'],
    variants: ['55-inch', '65-inch', '77-inch'],
    inStock: true,
    warranty: '2 Years Comprehensive Sony Warranty',
    isBestSeller: true
  },
  {
    id: 'tv-02',
    name: 'Samsung 55-inch Neo QLED 4K Smart TV (Quantum Matrix Tech, Neural Quantum Processor 4K)',
    brand: 'Samsung',
    category: 'Smart TVs',
    price: 124990,
    originalPrice: 159990,
    discountPercent: 22,
    rating: 4.8,
    ratingCount: 820,
    reviewCount: 215,
    thumbnail: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Quantum Mini LEDs deliver ultra-fine contrast and billion colors. Neural Quantum Processor with 20 neural networks for 4K AI upscaling, Anti-Glare screen, and SolarCell remote.',
    features: ['Quantum Matrix Technology Mini LEDs', 'Neural Quantum Processor 4K AI Upscaling', 'Neo Quantum HDR+ & Anti-Reflection coating', 'OTS+ (Object Tracking Sound+) 60W 4.2.2 channel', 'Gaming Hub with FreeSync Premium Pro 144Hz'],
    specs: {
      'Screen Size': '55 inches',
      'Resolution': '3840 x 2160 (4K Neo QLED)',
      'Refresh Rate': '144Hz VRR',
      'Sound': '60W 4.2.2CH Dolby Atmos',
      'Remote': 'SolarCell eco-friendly rechargeable remote'
    },
    colors: ['Eclipse Silver / Carbon'],
    variants: ['55-inch', '65-inch'],
    inStock: true,
    warranty: '1 Year Standard + 1 Year Additional on Panel',
    isTrending: true
  },
  {
    id: 'tv-03',
    name: 'LG 75-inch QNED 4K MiniLED Smart TV (α8 AI Processor 4K, Dolby Vision & Atmos, webOS 24)',
    brand: 'LG',
    category: 'Smart TVs',
    price: 184990,
    originalPrice: 249990,
    discountPercent: 26,
    rating: 4.7,
    ratingCount: 390,
    reviewCount: 95,
    thumbnail: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Giant-screen cinematic mastery combining Quantum Dot and NanoCell color technologies with Precision Dimming Mini LEDs.',
    features: ['Quantum Dot + NanoCell Mini LED display', 'Alpha 8 AI Processor 4K with deep learning', 'Magic Remote with gesture point and voice control', '4 guaranteed webOS upgrades over 5 years', 'NVIDIA G-Sync and AMD FreeSync certified'],
    specs: {
      'Screen Size': '75 inches',
      'Resolution': '3840 x 2160 4K',
      'Refresh Rate': '120Hz Native',
      'Operating System': 'webOS 24 with AI ThinQ',
      'Mount': 'VESA 400x400 compatible'
    },
    colors: ['Dark Titan'],
    variants: ['65-inch', '75-inch', '86-inch'],
    inStock: true,
    warranty: '3 Years LG Comprehensive Warranty',
    isDealOfTheDay: true
  },

  // 8. DIGITAL CAMERAS (3 items)
  {
    id: 'cam-01',
    name: 'Sony Alpha 7 IV Full-Frame Mirrorless Camera (33MP Exmor R Sensor, 4K 60p, 10-bit 4:2:2)',
    brand: 'Sony',
    category: 'Digital Cameras',
    price: 214990,
    originalPrice: 242990,
    discountPercent: 12,
    rating: 4.9,
    ratingCount: 940,
    reviewCount: 310,
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The benchmark hybrid creator camera. 33MP full-frame back-illuminated CMOS sensor, BIONZ XR processing engine with 8x higher processing speed, Real-time Eye AF for humans, animals, and birds.',
    features: ['33MP Full-Frame Exmor R CMOS sensor', '4K 60p video in Super 35mm & 4K 30p oversampled 7K', '10-bit 4:2:2 All-Intra recording & S-Cinetone', '759-point phase detection AF with Real-time tracking', '5.5-step 5-axis optical in-body image stabilization'],
    specs: {
      'Sensor': '35.9 x 23.9 mm Full-Frame (33 Megapixels)',
      'ISO Range': '100-51200 (expandable 50-204800)',
      'Viewfinder': '3.68 million dot Quad-VGA OLED',
      'Video': '4K 60p 10-bit 4:2:2 internal',
      'Weight': '658g with battery and memory card'
    },
    colors: ['Black'],
    variants: ['Body Only', 'With 28-70mm Lens Kit'],
    inStock: true,
    warranty: '2 Years Sony India Warranty',
    isBestSeller: true
  },
  {
    id: 'cam-02',
    name: 'Canon EOS R6 Mark II Mirrorless Camera (24.2MP, 40fps High-Speed Shooting, 6K 60p RAW)',
    brand: 'Canon',
    category: 'Digital Cameras',
    price: 219995,
    originalPrice: 243995,
    discountPercent: 10,
    rating: 4.8,
    ratingCount: 610,
    reviewCount: 185,
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Never miss a split second. Lightning-fast 40fps electronic shutter, 24.2MP CMOS sensor, Dual Pixel CMOS AF II with vehicle and aircraft subject detection, and up to 8.0 stops coordinated IS.',
    features: ['24.2 MP Full-Frame CMOS Sensor', 'Up to 40 fps continuous electronic burst', '6K 60p ProRes RAW external HDMI recording', 'Up to 8-stops in-body coordinated IS with RF lenses', 'Dual SD UHS-II card slots & weather sealing'],
    specs: {
      'Sensor': 'Full-frame 24.2MP CMOS',
      'Continuous Shoot': '40 fps electronic, 12 fps mechanical',
      'Autofocus': 'Dual Pixel CMOS AF II 1053 zones',
      'Battery': 'LP-E6NH (up to 760 shots)',
      'Weight': '670 grams'
    },
    colors: ['Matte Black'],
    variants: ['Body Only', '24-105mm IS STM Kit'],
    inStock: true,
    warranty: '2 Years Canon India Warranty'
  },
  {
    id: 'cam-03',
    name: 'Fujifilm X-T5 Mirrorless Camera (40.2MP X-Trans CMOS 5 HR, 6.2K 30p, Vintage Dial Control)',
    brand: 'Fujifilm',
    category: 'Digital Cameras',
    price: 169999,
    originalPrice: 189999,
    discountPercent: 11,
    rating: 4.8,
    ratingCount: 520,
    reviewCount: 140,
    thumbnail: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Photography first. Ultra-high resolution 40.2MP sensor in a classic dial-operated body with 19 film simulation modes including Nostalgic Neg and up to 7 stops 5-axis IBIS.',
    features: ['40.2MP APS-C X-Trans CMOS 5 HR sensor', 'Classic analog exposure dials on top plate', '19 Fujifilm legendary Film Simulation recipes', 'Three-way tilting LCD touchscreen', 'Pixel Shift Multi-Shot creates 160MP composite images'],
    specs: {
      'Sensor': '40.2MP X-Trans CMOS 5 HR',
      'Shutter Speed': 'Up to 1/180,000 sec electronic',
      'Video': '6.2K 30p 10-bit 4:2:2 internal',
      'Stabilization': '7.0 stops 5-axis IBIS',
      'Weight': '557 grams'
    },
    colors: ['Silver', 'Black'],
    variants: ['Body Only', '16-80mm Kit'],
    inStock: true,
    warranty: '2 Years Fujifilm India Warranty',
    isNewArrival: true
  },

  // 9. GAMING CONSOLES (3 items)
  {
    id: 'con-01',
    name: 'Sony PlayStation 5 Slim Console (1TB SSD, Ultra HD Blu-ray Disc Edition, DualSense)',
    brand: 'Sony PlayStation',
    category: 'Gaming Consoles',
    price: 54990,
    originalPrice: 59990,
    discountPercent: 8,
    rating: 4.9,
    ratingCount: 7800,
    reviewCount: 2100,
    thumbnail: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Experience lightning-fast loading with an ultra-high-speed 1TB SSD, deeper immersion with haptic feedback, adaptive triggers and 3D Audio, and an incredible lineup of new generation PlayStation games.',
    features: ['Slimmer design with 30% reduced volume', 'Custom 1TB Ultra-fast PCIe 4.0 SSD', 'Ray Tracing acceleration and up to 120fps with 4K output', 'Tempest 3D AudioTech', 'DualSense wireless controller included'],
    specs: {
      'CPU': 'x86-64-AMD Ryzen Zen 2, 8 cores / 16 threads',
      'GPU': 'AMD Radeon RDNA 2-based graphics (10.3 TFLOPs)',
      'Storage': '1TB NVMe SSD (M.2 expansion slot ready)',
      'Video Out': 'HDMI 2.1 support for 4K 120Hz, 8K, VRR',
      'Optical Drive': 'Ultra HD Blu-ray drive included'
    },
    colors: ['White'],
    variants: ['Disc Edition', 'Digital Edition'],
    inStock: true,
    warranty: '1 Year Sony PlayStation Warranty',
    isBestSeller: true,
    isTrending: true
  },
  {
    id: 'con-02',
    name: 'Microsoft Xbox Series X 1TB Gaming Console (True 4K Gaming, 12 Teraflops GPU)',
    brand: 'Microsoft Xbox',
    category: 'Gaming Consoles',
    price: 52990,
    originalPrice: 55990,
    discountPercent: 5,
    rating: 4.8,
    ratingCount: 3400,
    reviewCount: 890,
    thumbnail: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, custom SSD, and 4K gaming at up to 120 FPS.',
    features: ['12 Teraflops raw processing power', 'Xbox Velocity Architecture with Quick Resume', 'Backward compatibility across four Xbox generations', 'Dolby Vision and Dolby Atmos support for games', 'Xbox Wireless Controller included'],
    specs: {
      'Processor': 'Custom 8-core AMD Zen 2 @ 3.8 GHz',
      'GPU': '52 CUs @ 1.825 GHz Custom RDNA 2 (12 TFLOPS)',
      'Memory': '16GB GDDR6 bus',
      'Internal Storage': '1TB Custom NVME SSD',
      'Disc Drive': '4K UHD Blu-Ray drive'
    },
    colors: ['Carbon Black'],
    variants: ['1TB Disc Edition'],
    inStock: true,
    warranty: '1 Year Microsoft India Warranty'
  },
  {
    id: 'con-03',
    name: 'Nintendo Switch OLED Model with White Joy-Con (7-inch OLED, Enhanced Audio)',
    brand: 'Nintendo',
    category: 'Gaming Consoles',
    price: 31999,
    originalPrice: 35999,
    discountPercent: 11,
    rating: 4.8,
    ratingCount: 2890,
    reviewCount: 740,
    thumbnail: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Feast your eyes on vivid colors and crisp contrast with a vibrant 7-inch OLED screen. Wide adjustable stand, dock with wired LAN port, 64 GB of internal storage, and enhanced audio.',
    features: ['7-inch OLED screen with vibrant colors', 'Wide adjustable tabletop stand', 'Wired LAN port built into TV dock', '64GB internal storage', 'Play in TV mode, Tabletop mode, or Handheld mode'],
    specs: {
      'Display': '7.0-inch OLED (1280 x 720)',
      'Storage': '64GB (expandable via microSD)',
      'Battery': '4310 mAh (approx 4.5 - 9 hours)',
      'Audio': 'Stereo speakers with enhanced clarity',
      'Weight': '420 grams with Joy-Con'
    },
    colors: ['White', 'Neon Red / Neon Blue'],
    variants: ['OLED 64GB'],
    inStock: true,
    warranty: '1 Year Seller / Brand Warranty',
    isDealOfTheDay: true
  },

  // 10. GAMING ACCESSORIES (3 items)
  {
    id: 'gac-01',
    name: 'Razer BlackShark V2 Pro Wireless Gaming Headset (HyperClear Super Wideband Mic, TriForce 50mm)',
    brand: 'Razer',
    category: 'Gaming Accessories',
    price: 19999,
    originalPrice: 24999,
    discountPercent: 20,
    rating: 4.7,
    ratingCount: 1850,
    reviewCount: 420,
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The definitive esports wireless headset. Featuring a broadcast-grade detachable wideband microphone, on-headset FPS audio profiles, and breathable ultra-soft memory foam ear cushions.',
    features: ['Razer HyperClear Super Wideband Mic', 'TriForce Titanium 50mm Drivers', 'Ultra-low latency Razer HyperSpeed Wireless 2.4GHz + BT', 'Up to 70 hours battery life with Type-C fast charge', 'Passive noise-isolating earcups with FlowKnit memory foam'],
    specs: {
      'Drivers': 'Customized TriForce 50mm Titanium',
      'Microphone': 'Detachable 9.9mm Condenser (32kHz sampling)',
      'Battery': '70 Hours',
      'Connectivity': '2.4GHz Wireless, Bluetooth 5.2, USB Audio',
      'Weight': '320g'
    },
    colors: ['Classic Black', 'Mercury White'],
    variants: ['Wireless Esports Edition'],
    inStock: true,
    warranty: '2 Years Razer Official Warranty',
    isBestSeller: true
  },
  {
    id: 'gac-02',
    name: 'Sony DualSense Edge Wireless Controller (Ultra-Customizable Controls, Swappable Stick Modules)',
    brand: 'Sony PlayStation',
    category: 'Gaming Accessories',
    price: 18990,
    originalPrice: 20990,
    discountPercent: 10,
    rating: 4.8,
    ratingCount: 920,
    reviewCount: 260,
    thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Built for high performance and personalization. Replaceable analog stick modules, changeable stick caps and back buttons, tunable trigger travel sliders, and quick-swap control profiles.',
    features: ['Replaceable analog stick modules (sold separately if worn)', 'Customizable back buttons (lever or half dome styles)', 'Adjustable trigger dead zones and travel distances', 'On-controller profile swap function buttons', 'Braided USB cable with lockable connector housing'],
    specs: {
      'Compatibility': 'PS5 and PC (via DualSense app)',
      'Haptics': 'Dual actuators + Adaptive dynamic triggers',
      'Audio': 'Integrated speaker + 3.5mm jack',
      'Case': 'Heavy-duty carrying case included'
    },
    colors: ['White / High Gloss Black'],
    variants: ['Edge Pro Edition'],
    inStock: true,
    warranty: '1 Year Sony Warranty'
  },
  {
    id: 'gac-03',
    name: 'Elgato Stream Deck MK.2 (15 Custom Studio LCD Keys, Dynamic Macros, Detachable Faceplate)',
    brand: 'Elgato',
    category: 'Gaming Accessories',
    price: 13999,
    originalPrice: 16999,
    discountPercent: 18,
    rating: 4.9,
    ratingCount: 1640,
    reviewCount: 390,
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Command your stream and workspace. 15 tactile LCD keys ready to trigger unlimited actions with one tap. Integrates seamlessly with OBS, Twitch, YouTube, Spotify, and Philips Hue.',
    features: ['15 customizable LCD keys with visual feedback', 'One-touch actions, multi-actions, and smart profiles', 'Stream Deck Store for plugins, icons, and royalty-free music', 'Detachable desktop stand & swappable faceplate', 'USB-C detachable braided cable connection'],
    specs: {
      'Keys': '15 customizable tactile LCD keys',
      'Interface': 'USB 2.0 (Type-C cable to Type-A)',
      'Dimensions': '118 x 84 x 25 mm',
      'Weight': '145g (without stand)'
    },
    colors: ['Black', 'White'],
    variants: ['15 Keys MK.2'],
    inStock: true,
    warranty: '2 Years Corsair/Elgato Warranty',
    isTrending: true
  },

  // 11. KEYBOARDS (3 items)
  {
    id: 'kb-01',
    name: 'Logitech MX Mechanical Wireless Illuminated Keyboard (Tactile Quiet, Multi-Device, Backlit)',
    brand: 'Logitech',
    category: 'Keyboards',
    price: 16995,
    originalPrice: 19995,
    discountPercent: 15,
    rating: 4.8,
    ratingCount: 2300,
    reviewCount: 520,
    thumbnail: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High-performance low-profile mechanical switches with quiet tactile feedback. Smart hand proximity backlighting, aluminum top plate, and multi-OS pairing across up to 3 computers.',
    features: ['Low-profile mechanical switches with satisfying feedback', 'Smart illumination with ambient light adjustment', 'Pair with up to 3 devices via Bluetooth or Logi Bolt', 'Dual key layout optimized for both Mac and Windows', 'Up to 15 days on full charge (or up to 10 months backlighting off)'],
    specs: {
      'Switch Type': 'Tactile Quiet Mechanical',
      'Battery': 'Rechargeable Li-Po (1500 mAh)',
      'Connectivity': 'Bluetooth Low Energy & Logi Bolt USB Receiver',
      'Dimensions': '433.85 x 131.55 x 26.1 mm',
      'Weight': '828g'
    },
    colors: ['Graphite'],
    variants: ['Full-Size', 'Mini (75%)'],
    inStock: true,
    warranty: '1 Year Logitech Warranty',
    isBestSeller: true
  },
  {
    id: 'kb-02',
    name: 'Keychron Q1 Pro QMK/VIA Wireless Custom Mechanical Keyboard (Hot-swappable, CNC Aluminum)',
    brand: 'Keychron',
    category: 'Keyboards',
    price: 19999,
    originalPrice: 22999,
    discountPercent: 13,
    rating: 4.9,
    ratingCount: 1150,
    reviewCount: 340,
    thumbnail: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Full aluminum 75% mechanical keyboard with wireless Bluetooth 5.1 and double-gasket acoustic design. Fully customizable via QMK/VIA software with screw-in stabilizers.',
    features: ['CNC 6063 aluminum body with acoustic double-gasket', 'QMK/VIA open-source key remapping', 'South-facing RGB backlight with 22 presets', 'Hot-swappable sockets support 3-pin and 5-pin MX switches', 'Connects up to 3 devices wirelessly + wired type-C'],
    specs: {
      'Layout': '75% Layout with Rotary Knob',
      'Switches': 'Keychron K Pro Red / Banana / Brown',
      'Keycaps': 'KSA double-shot PBT keycaps',
      'Battery': '4000 mAh rechargeable battery',
      'Weight': '1730g solid aluminum'
    },
    colors: ['Carbon Black', 'Silver Grey', 'Shell White'],
    variants: ['K Pro Red Linear', 'K Pro Banana Tactile'],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    isTrending: true
  },
  {
    id: 'kb-03',
    name: 'Razer Huntsman V3 Pro Tenkeyless Analog Gaming Keyboard (Rapid Trigger, Gen-2 Optical)',
    brand: 'Razer',
    category: 'Keyboards',
    price: 21999,
    originalPrice: 24999,
    discountPercent: 12,
    rating: 4.8,
    ratingCount: 780,
    reviewCount: 190,
    thumbnail: 'https://images.unsplash.com/photo-1541140532154-b024d705b909?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b909?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pro-grade speed with Gen-2 Analog Optical Switches. Features Rapid Trigger for ultra-fast repeated inputs, adjustable actuation from 0.1 to 4.0mm, and textured doubleshot PBT keycaps.',
    features: ['Gen-2 Analog Optical Switches with Rapid Trigger mode', 'Adjustable actuation range from 0.1mm to 4.0mm', 'Onboard LED array indicator for quick calibration', 'Textured Doubleshot PBT keycaps for durability', 'Magnetic firm leatherette wrist rest included'],
    specs: {
      'Size': 'Tenkeyless (TKL)',
      'Actuation': 'Analog Optical 0.1mm to 4.0mm',
      'Polling Rate': '1000 Hz',
      'Top Plate': 'Brushed 5052 Aluminum Alloy',
      'Lighting': 'Razer Chroma RGB per-key'
    },
    colors: ['Matte Black'],
    variants: ['TKL Edition', 'Full Size'],
    inStock: true,
    warranty: '2 Years Razer Official Warranty',
    isDealOfTheDay: true
  },

  // 12. COMPUTER MOUSE (3 items)
  {
    id: 'mou-01',
    name: 'Logitech MX Master 3S Wireless Performance Mouse (8K DPI Glass Sensor, Quiet Clicks)',
    brand: 'Logitech',
    category: 'Computer Mouse',
    price: 9495,
    originalPrice: 10995,
    discountPercent: 14,
    rating: 4.9,
    ratingCount: 6100,
    reviewCount: 1840,
    thumbnail: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'An icon remastered. Quiet Click switches feel satisfying with 90% less click noise, paired with an 8,000 DPI track-on-glass optical sensor and MagSpeed electromagnetic scroll wheel that scrolls 1,000 lines per second.',
    features: ['MagSpeed electromagnetic scroll wheel (1,000 lines/sec)', '8,000 DPI Darkfield sensor tracks on any surface, even glass', 'Quiet clicks reduce 90% sound while keeping tactile feel', 'Ergonomic silhouette supports palm and wrist naturally', 'Logi Options+ app for app-specific workflow customizations'],
    specs: {
      'Sensor': 'Darkfield high precision (200-8000 DPI)',
      'Buttons': '7 buttons (Left/Right, Back/Forward, App-Switch, Wheel mode, Middle)',
      'Battery': '500 mAh (up to 70 days on full charge)',
      'Charging': 'USB-C (1 min charge = 3 hours use)',
      'Weight': '141 grams'
    },
    colors: ['Graphite', 'Pale Grey', 'Space Black'],
    variants: ['Standard Edition', 'For Mac'],
    inStock: true,
    warranty: '1 Year Logitech Warranty',
    isBestSeller: true,
    isTrending: true
  },
  {
    id: 'mou-02',
    name: 'Razer Viper V3 Pro Wireless Esports Gaming Mouse (54g Ultra-Lightweight, Focus Pro 35K)',
    brand: 'Razer',
    category: 'Computer Mouse',
    price: 15999,
    originalPrice: 17999,
    discountPercent: 11,
    rating: 4.8,
    ratingCount: 1420,
    reviewCount: 380,
    thumbnail: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Developed in collaboration with elite CS2 and Valorant pros. Weighs an incredible 54 grams without holes, equipped with Focus Pro 35K Optical Sensor Gen-2 and true 8000Hz wireless polling.',
    features: ['Ultra-lightweight 54g symmetrical body design', 'Razer Focus Pro 35K Optical Sensor Gen-2 with 99.8% resolution accuracy', 'True 8000Hz HyperPolling wireless included out of box', 'Gen-3 Optical Mouse Switches with 90-million click lifespan', 'Up to 95 hours of continuous esports battery life'],
    specs: {
      'Weight': '54 grams',
      'Sensor': 'Razer Focus Pro 35K Gen-2',
      'Max Speed / Accel': '750 IPS / 70G',
      'Polling Rate': 'Up to 8000 Hz true wireless',
      'Battery': '95 hours at 1000Hz (17 hours at 8000Hz)'
    },
    colors: ['Black', 'White'],
    variants: ['8K Wireless'],
    inStock: true,
    warranty: '2 Years Razer Warranty'
  },
  {
    id: 'mou-03',
    name: 'Logitech G PRO X SUPERLIGHT 2 Wireless Gaming Mouse (60g, HERO 2 Sensor, LIGHTFORCE Switches)',
    brand: 'Logitech G',
    category: 'Computer Mouse',
    price: 14995,
    originalPrice: 16995,
    discountPercent: 12,
    rating: 4.9,
    ratingCount: 3100,
    reviewCount: 820,
    thumbnail: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The preferred mouse of champion esports pros. LIGHTFORCE hybrid optical-mechanical switches deliver pro speed with crisp click feel, combined with HERO 2 sensor with 32,000 DPI and zero-additive PTFE feet.',
    features: ['60-gram featherlight weight without honeycombs', 'LIGHTFORCE hybrid optical-mechanical switches', 'HERO 2 sensor with over 500 IPS tracking', '4000Hz wireless polling rate capability', 'Zero-additive PTFE mouse feet for smooth glide'],
    specs: {
      'Weight': '60 grams',
      'Sensor': 'HERO 2 (100–32,000 DPI)',
      'Battery Life': '95 hours constant motion',
      'Connection': 'LIGHTSPEED 2.4GHz + USB-C',
      'Feet': 'No-additive PTFE feet'
    },
    colors: ['Black', 'White', 'Magenta Pink'],
    variants: ['Superlight 2'],
    inStock: true,
    warranty: '2 Years Logitech Warranty',
    isDealOfTheDay: true
  },

  // 13. MONITORS (3 items)
  {
    id: 'mon-01',
    name: 'Samsung Odyssey OLED G9 49-inch Curved Gaming Monitor (240Hz, 0.03ms, Dual QHD)',
    brand: 'Samsung',
    category: 'Monitors',
    price: 139990,
    originalPrice: 169990,
    discountPercent: 18,
    rating: 4.8,
    ratingCount: 780,
    reviewCount: 220,
    thumbnail: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Colossal 49-inch 32:9 curved OLED display equivalent to two QHD screens side by side. Neo Quantum Processor Pro optimizes every frame on the OLED panel for near-instant 0.03ms response time and 240Hz refresh rate.',
    features: ['49" Dual QHD (5120 x 1440) 1800R curved OLED display', 'Blazing 240Hz refresh rate and 0.03ms (GtG) response time', 'DisplayHDR True Black 400 for infinite black levels', 'Slim metal design with CoreSync and Core Lighting+', 'Smart TV apps and Gaming Hub built-in'],
    specs: {
      'Screen Size': '49 inches (124.5 cm)',
      'Resolution': '5120 x 1440 Dual QHD',
      'Curvature': '1800R',
      'Ports': 'HDMI 2.1, Micro HDMI 2.1, DisplayPort 1.4, USB Hub',
      'Speakers': 'Built-in 5W x 2 stereo speakers'
    },
    colors: ['Silver Metal'],
    variants: ['49-inch OLED G9'],
    inStock: true,
    warranty: '3 Years Samsung Manufacturer Warranty',
    isBestSeller: true,
    isTrending: true
  },
  {
    id: 'mon-02',
    name: 'Dell UltraSharp 32-inch 4K Thunderbolt 4 Hub Monitor (IPS Black, 98% DCI-P3, 90W Power)',
    brand: 'Dell UltraSharp',
    category: 'Monitors',
    price: 84990,
    originalPrice: 99990,
    discountPercent: 15,
    rating: 4.9,
    ratingCount: 650,
    reviewCount: 175,
    thumbnail: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Built for visual creators and developers. Revolutionary IPS Black technology achieves a 2000:1 contrast ratio for deep blacks on an IPS panel. Single Thunderbolt 4 cable delivers 4K video, high-speed data, and 90W laptop charging.',
    features: ['31.5-inch 4K UHD (3840 x 2160) IPS Black display', '2000:1 contrast ratio & 98% DCI-P3 wide color gamut', 'Thunderbolt 4 hub with 90W power delivery, RJ45 LAN, and USB-C', 'Built-in Auto KVM to switch between 2 PCs with 1 keyboard & mouse', 'ComfortView Plus hardware low blue light screen'],
    specs: {
      'Panel': 'IPS Black Technology',
      'Resolution': '3840 x 2160 at 60 Hz',
      'Color Support': '1.07 Billion colors (100% sRGB, 98% DCI-P3)',
      'Stand Adjustments': 'Height, tilt, swivel, and pivot 90°',
      'Weight': '10.36 kg (with stand)'
    },
    colors: ['Platinum Silver'],
    variants: ['32-inch 4K U3223QE'],
    inStock: true,
    warranty: '3 Years Dell Premium Panel Exchange',
    isDealOfTheDay: true
  },
  {
    id: 'mon-03',
    name: 'ASUS ROG Swift 27-inch 1440p OLED Gaming Monitor (360Hz, 0.03ms, Anti-Flicker OLED)',
    brand: 'ASUS ROG',
    category: 'Monitors',
    price: 94990,
    originalPrice: 109990,
    discountPercent: 14,
    rating: 4.8,
    ratingCount: 420,
    reviewCount: 110,
    thumbnail: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Unprecedented 360Hz refresh rate on a QHD OLED panel. Custom heatsink and intelligent voltage optimization ensure panel longevity without loud fans.',
    features: ['26.5-inch QHD (2560 x 1440) 3rd Gen ROG OLED panel', 'Extremely fast 360Hz refresh rate and 0.03 ms response time', 'Custom heatsink with graphene film prevents burn-in', 'ROG Anti-Flicker technology reduces brightness jumps', 'Uniform Brightness setting for comfortable desktop work'],
    specs: {
      'Screen Size': '26.5 inches',
      'Resolution': '2560 x 1440 (16:9)',
      'Refresh Rate': '360Hz G-SYNC compatible',
      'Contrast Ratio': '1,500,000:1',
      'Ports': 'DisplayPort 1.4 (DSC), 2x HDMI 2.1, USB hub'
    },
    colors: ['ROG Cyberpunk Black'],
    variants: ['27-inch 360Hz OLED'],
    inStock: true,
    warranty: '3 Years ASUS Warranty with Burn-In Coverage',
    isNewArrival: true
  },

  // 14. PRINTERS (3 items)
  {
    id: 'prn-01',
    name: 'HP Smart Tank 790 All-in-One Duplex Ink Tank Printer with Auto Document Feeder & Wi-Fi',
    brand: 'HP',
    category: 'Printers',
    price: 24999,
    originalPrice: 29999,
    discountPercent: 17,
    rating: 4.6,
    ratingCount: 1480,
    reviewCount: 320,
    thumbnail: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High-volume printing with ultra-low cost per page. Automatic two-sided duplex printing, 35-sheet automatic document feeder, magic touch screen interface, and dual-band Wi-Fi with self-healing.',
    features: ['Print, scan, copy, and fax with 35-page ADF', 'Automatic two-sided printing saves paper', 'Up to 12,000 black or 8,000 color pages included in box', 'Dual-band Wi-Fi with Bluetooth LE setup', 'Smart-guided buttons with intuitive touchscreen'],
    specs: {
      'Print Speed': 'Up to 15 ppm black, 9 ppm color',
      'Connectivity': 'Dual-band Wi-Fi, Ethernet, USB 2.0',
      'Duty Cycle': 'Up to 5,000 pages per month',
      'Tray Capacity': '250-sheet input tray',
      'Weight': '7.70 kg'
    },
    colors: ['White & Dark Surf Grey'],
    variants: ['All-in-One ADF Duplex'],
    inStock: true,
    warranty: '1 Year HP Onsite Warranty',
    isBestSeller: true
  },
  {
    id: 'prn-02',
    name: 'Epson EcoTank L3250 Wi-Fi All-in-One Multifunction Color InkTank Printer',
    brand: 'Epson',
    category: 'Printers',
    price: 13999,
    originalPrice: 17999,
    discountPercent: 22,
    rating: 4.7,
    ratingCount: 4200,
    reviewCount: 950,
    thumbnail: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The workhorse of Indian homes and small offices. Space-saving integrated tank design, spill-free bottle refills, borderless photo printing up to 4R, and Epson Smart Panel app control.',
    features: ['Low cost printing: 9 paise black, 24 paise color per page', 'Integrated ink tank with mess-free nozzle bottles', 'Wi-Fi & Wi-Fi Direct for easy phone printing', 'Heat-Free Technology consumes lower electricity', 'Borderless photo printing up to 4R size'],
    specs: {
      'Print Resolution': '5760 x 1440 dpi',
      'Speed': '33 ppm black, 15 ppm color draft',
      'Connectivity': 'Wi-Fi, Wi-Fi Direct, USB 2.0',
      'Power Consumption': '12W operating',
      'Weight': '3.9 kg'
    },
    colors: ['Black'],
    variants: ['EcoTank L3250'],
    inStock: true,
    warranty: '1 Year or 30,000 pages Epson Warranty',
    isTrending: true
  },
  {
    id: 'prn-03',
    name: 'Canon imageCLASS LBP2900B Single Function Monochrome Laser Printer',
    brand: 'Canon',
    category: 'Printers',
    price: 16499,
    originalPrice: 18999,
    discountPercent: 13,
    rating: 4.8,
    ratingCount: 3900,
    reviewCount: 880,
    thumbnail: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Legendary reliability and crisp laser printing. Instant warm-up with Canon On-Demand Fixing Technology, delivering first print out in under 9.2 seconds with smudge-free toner output.',
    features: ['On-Demand Fixing technology with zero warm-up waiting', 'Canon Advanced Printing Technology (CAPT) processing', 'Up to 2400 x 600 dpi equivalent crisp laser text', 'High yield Canon 303 all-in-one cartridge compatible', 'Compact footprint fits neatly on small office desks'],
    specs: {
      'Technology': 'Monochrome Laser Beam Printing',
      'Speed': '12 ppm (A4)',
      'Resolution': '600 x 600 dpi (2400 x 600 enhanced)',
      'Paper Input': '150-sheet multipurpose tray',
      'Weight': '5.7 kg'
    },
    colors: ['Black'],
    variants: ['Monochrome Laser'],
    inStock: true,
    warranty: '1 Year Canon Onsite Warranty'
  },

  // 15. POWER BANKS (3 items)
  {
    id: 'pb-01',
    name: 'Anker Prime 27650mAh Power Bank (250W Total Output, 140W Dual USB-C Fast Charge, Smart App)',
    brand: 'Anker',
    category: 'Power Banks',
    price: 14999,
    originalPrice: 17999,
    discountPercent: 17,
    rating: 4.9,
    ratingCount: 1320,
    reviewCount: 380,
    thumbnail: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The titan of portable power. Delivers up to 250W multi-device power with single port 140W max output capable of charging a 16-inch MacBook Pro to 50% in 28 minutes. Features real-time color digital display and Bluetooth companion app.',
    features: ['250W total multi-device output, 140W single port speed', '27,650 mAh capacity charges laptops and multiple devices', 'Real-time color digital display shows input/output watts & battery health', 'Bluetooth connection to Anker app to optimize charging speed', 'TSA approved airline carry-on compliant (99.54Wh)'],
    specs: {
      'Capacity': '27,650 mAh (99.54Wh)',
      'Ports': '2x USB-C (140W PD 3.1) + 1x USB-A (65W)',
      'Recharge Time': 'Recharges to 100% in only 37 minutes (with 170W dual input)',
      'Display': 'TFT Smart Digital Display',
      'Weight': '665 grams'
    },
    colors: ['Space Gray'],
    variants: ['250W 27,650mAh'],
    inStock: true,
    warranty: '2 Years Anker Global Warranty',
    isBestSeller: true,
    isTrending: true
  },
  {
    id: 'pb-02',
    name: 'Baseus Blade 100W Ultra-Thin Laptop Power Bank (20000mAh, 18mm Flat Profile, 4-Port)',
    brand: 'Baseus',
    category: 'Power Banks',
    price: 6999,
    originalPrice: 9999,
    discountPercent: 30,
    rating: 4.7,
    ratingCount: 2200,
    reviewCount: 510,
    thumbnail: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Uniquely designed flat blade form factor slips effortlessly into any laptop sleeve alongside your notebook. 100W PD output powers MacBooks, Dells, and gaming consoles.',
    features: ['Ultra-slim 18mm blade profile easily fits laptop bag slots', '100W Power Delivery output charges laptops at full speed', 'Large LED status screen shows remaining battery and power curve', 'Two USB-C and two USB-A ports charge 4 devices at once', 'Self-charges in 90 minutes with 65W PD wall charger'],
    specs: {
      'Capacity': '20,000 mAh / 74Wh',
      'Thickness': '18 mm',
      'Output Ports': '2x USB-C (100W max) + 2x USB-A (30W max)',
      'Input': 'Type-C 65W Fast Recharging',
      'Weight': '490 grams'
    },
    colors: ['Matte Black'],
    variants: ['100W 20000mAh'],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    isDealOfTheDay: true
  },
  {
    id: 'pb-03',
    name: 'UGREEN Nexode 20000mAh 130W Fast Charging Power Bank with Smart TFT Display',
    brand: 'UGREEN',
    category: 'Power Banks',
    price: 7499,
    originalPrice: 8999,
    discountPercent: 17,
    rating: 4.8,
    ratingCount: 980,
    reviewCount: 210,
    thumbnail: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Compact column design with automotive-grade 21700 lithium batteries. Supports 100W single port output, 130W multi-port combined output, and intelligent thermal management.',
    features: ['100W USB-C1 output fast charges power-hungry laptops', 'Automotive grade 21700 battery cells for 1000+ life cycles', 'Smart digital display with real-time battery status animations', 'Trickle charging mode for Bluetooth earbuds and watches', 'Multi-protection against over-voltage, short circuit, and heat'],
    specs: {
      'Capacity': '20,000 mAh (72Wh)',
      'Outputs': 'USB-C1 (100W) + USB-C2 (30W) + USB-A (22.5W)',
      'Total Output': '130W max',
      'Recharge Speed': '65W USB-C input (full in 2 hours)',
      'Weight': '480g'
    },
    colors: ['Space Metallic Gray'],
    variants: ['130W 20000mAh'],
    inStock: true,
    warranty: '18 Months UGREEN Official Warranty'
  },

  // 16. CHARGERS AND CABLES (3 items)
  {
    id: 'chg-01',
    name: 'Anker Prime 100W GaN Wall Charger (3-Port, GaNPrime Tech, Ultra-Compact Foldable)',
    brand: 'Anker',
    category: 'Chargers and Cables',
    price: 4999,
    originalPrice: 5999,
    discountPercent: 17,
    rating: 4.9,
    ratingCount: 2400,
    reviewCount: 610,
    thumbnail: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    description: '43% smaller than an original 96W single-port laptop charger. Charges 3 devices simultaneously with 2 USB-C ports and 1 USB-A port using GaNPrime technology and ActiveShield 2.0 temperature monitoring.',
    features: ['100W Max Power Delivery through single USB-C port', 'GaNPrime GaN 3 technology with improved thermal efficiency', 'ActiveShield 2.0 monitors temperature 3 million times per day', 'Compact foldable prong design ideal for travel', 'PowerIQ 4.0 dynamic power distribution between devices'],
    specs: {
      'Total Wattage': '100W',
      'Ports': '2x USB-C + 1x USB-A',
      'Dimensions': '44 x 39 x 60 mm',
      'Weight': '183 grams',
      'Compatibility': 'MacBooks, Dell XPS, iPads, Nintendo Switch, Audio gear'
    },
    colors: ['Black', 'Silver Gray'],
    variants: ['100W 3-Port'],
    inStock: true,
    warranty: '24 Months Anker Warranty',
    isBestSeller: true
  },
  {
    id: 'chg-02',
    name: 'Belkin BoostCharge Pro 140W 4-Port GaN Wall Charger (PPS, USB-IF Certified)',
    brand: 'Belkin',
    category: 'Chargers and Cables',
    price: 8999,
    originalPrice: 10999,
    discountPercent: 18,
    rating: 4.8,
    ratingCount: 890,
    reviewCount: 195,
    thumbnail: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Charge up to 4 devices at once with 140W total power. 3 USB-C and 1 USB-A ports with intelligent power sharing that auto-allocates watts based on connected devices.',
    features: ['140W total GaN charging power', 'Supports 140W single-port charging via PD 3.1 Extended Power Range', '3x USB-C and 1x USB-A ports', 'Integrated overvoltage and temperature protections', 'Environmentally conscious design with 72% post-consumer recycled plastic'],
    specs: {
      'Output': '140W Total (single port up to 140W EPR)',
      'Protocol': 'Power Delivery 3.1 + PPS',
      'Ports': '3x USB-C, 1x USB-A',
      'Weight': '340 grams'
    },
    colors: ['White', 'Black'],
    variants: ['140W 4-Port'],
    inStock: true,
    warranty: '2 Years Belkin Warranty + Connected Equipment Warranty'
  },
  {
    id: 'chg-03',
    name: 'UGREEN 240W USB-C to USB-C Braided Cable (2-Meter, 48V/5A PD 3.1, Zinc Alloy Housing)',
    brand: 'UGREEN',
    category: 'Chargers and Cables',
    price: 1499,
    originalPrice: 2299,
    discountPercent: 35,
    rating: 4.9,
    ratingCount: 4100,
    reviewCount: 920,
    thumbnail: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Future-proof charging speed up to 240W (48V/5A). Reinforced nylon braided jacket with zinc alloy shells and built-in E-marker chip for safe, certified high-wattage power transmission.',
    features: ['Next-generation 240W (48V/5A) Power Delivery 3.1', 'Smart E-marker chip ensures safe voltage handshake', 'Reinforced double-braided nylon jacket tested for 20,000+ bends', 'Zinc alloy connectors with laser-welded joint', 'Supports 480 Mbps data sync'],
    specs: {
      'Length': '2 Meters (6.6 ft)',
      'Power Rating': '240W Max (48V / 5A)',
      'Data Rate': '480 Mbps USB 2.0',
      'Jacket': 'Heavy-duty braided nylon'
    },
    colors: ['Space Gray & Black'],
    variants: ['1 Meter', '2 Meters'],
    inStock: true,
    warranty: '18 Months Warranty',
    isDealOfTheDay: true
  },

  // 17. PROJECTORS (3 items)
  {
    id: 'prj-01',
    name: 'XGIMI Horizon Ultra 4K Laser & LED Home Theater Projector (2300 ISO Lumens, Dolby Vision)',
    brand: 'XGIMI',
    category: 'Projectors',
    price: 189999,
    originalPrice: 229999,
    discountPercent: 17,
    rating: 4.9,
    ratingCount: 380,
    reviewCount: 105,
    thumbnail: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'World\'s first 4K long-throw home projector with Dolby Vision. Dual Light technology blends Laser and LED sources to achieve 2300 ISO Lumens, ultra-high color accuracy, and Harman Kardon built-in sound.',
    features: ['Dual Light Laser & LED technology for true 4K resolution', 'World\'s first 4K long throw projector with Dolby Vision', '2300 ISO Lumens ultra-bright projection up to 200 inches', 'ISA 3.0 Intelligent Screen Adaptation (auto focus, keystone, obstacle bypass)', 'Dual 12W Harman Kardon speakers with DTS-HD audio'],
    specs: {
      'Native Resolution': '3840 x 2160 (4K)',
      'Brightness': '2300 ISO Lumens',
      'Throw Ratio': '1.2–1.5:1 with optical zoom',
      'Sound': 'Harman Kardon 2x 12W',
      'OS': 'Android TV 11.0 with Google Assistant'
    },
    colors: ['Mist Gold with eco-leather front'],
    variants: ['Horizon Ultra 4K'],
    inStock: true,
    warranty: '2 Years Manufacturer Warranty',
    isBestSeller: true
  },
  {
    id: 'prj-02',
    name: 'BenQ TK700STi 4K HDR Gaming Projector (3000 ANSI Lumens, 16ms 4K Low Input Lag)',
    brand: 'BenQ',
    category: 'Projectors',
    price: 144990,
    originalPrice: 175000,
    discountPercent: 17,
    rating: 4.7,
    ratingCount: 460,
    reviewCount: 118,
    thumbnail: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Short throw 4K gaming projector projecting a 100-inch screen from just 6.5 feet. Engineered for console gaming with 16ms at 4K 60Hz and 4ms at 1080p 240Hz with dedicated Game Modes for FPS and RPG.',
    features: ['True 4K UHD 8.3 million pixel resolution', 'Short throw lens projects 100" at only 1.99 meters distance', '3000 ANSI Lumens high brightness for lit rooms', 'Lowest input lag: 16ms (4K/60Hz) & 4ms (1080p/240Hz)', 'Google-certified Android TV dongle included'],
    specs: {
      'Resolution': '4K UHD (3840 x 2160)',
      'Brightness': '3000 ANSI Lumens',
      'Contrast': '10,000:1',
      'Lamp Life': 'Up to 15,000 hours in SmartEco mode',
      'Weight': '3.1 kg'
    },
    colors: ['White'],
    variants: ['Short Throw Gaming'],
    inStock: true,
    warranty: '2 Years BenQ Onsite Warranty'
  },
  {
    id: 'prj-03',
    name: 'Anker Nebula Capsule 3 Laser 1080p Portable Smart Mini Projector with Battery',
    brand: 'Anker Nebula',
    category: 'Projectors',
    price: 69999,
    originalPrice: 79999,
    discountPercent: 13,
    rating: 4.8,
    ratingCount: 680,
    reviewCount: 160,
    thumbnail: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pint-sized portable laser power. Fits in a soda-can form factor, featuring Laser Forge technology for 300 ANSI Lumens at 1080p Full HD, built-in 52Wh battery for 2.5 hours of movie playback, and Google TV.',
    features: ['Laser Forge technology delivers bright 1080p cinema', 'Built-in 52Wh battery lasts up to 2.5 hours of playback', 'Ultra-portable 950g soda can size fits into backpack pockets', 'Google TV with licensed Netflix streaming built-in', '8W Dolby Digital speaker with punchy audio'],
    specs: {
      'Resolution': '1920 x 1080 (1080p FHD)',
      'Brightness': '300 ANSI Lumens Laser',
      'Battery': '52Wh (2.5 hours movie / 10 hours Bluetooth speaker)',
      'Dimensions': '83 x 83 x 170 mm',
      'Weight': '950 grams'
    },
    colors: ['Matte Black'],
    variants: ['Capsule 3 Laser'],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    isTrending: true
  },

  // 18. HOME APPLIANCES (3 items)
  {
    id: 'hap-01',
    name: 'Dyson V15 Detect Cordless Vacuum Cleaner (Laser Slim Fluffy, Piezo Sensor, 240AW Suction)',
    brand: 'Dyson',
    category: 'Home Appliances',
    price: 62900,
    originalPrice: 74900,
    discountPercent: 16,
    rating: 4.9,
    ratingCount: 2200,
    reviewCount: 580,
    thumbnail: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Dyson\'s most powerful, intelligent cordless vacuum. An illuminating laser reveals invisible dust on hard floors, a piezo sensor continuously sizes and counts dust particles, and the LCD screen gives real-time proof of a deep clean.',
    features: ['Illuminating laser reveals microscopic particles on hard floors', 'Acoustic Piezo Sensor automatically boosts power when needed', 'LCD screen displays real-time scientific count of particles sucked', 'Digital Motorbar cleaner head detangles hair automatically', 'Up to 60 minutes fade-free run time with click-in battery'],
    specs: {
      'Suction Power': '240 Air Watts',
      'Filtration': 'Whole-machine HEPA filtration traps 99.99% particles',
      'Bin Volume': '0.77 liters with point-and-shoot hygienic emptying',
      'Run Time': 'Up to 60 minutes',
      'Weight': '3.08 kg'
    },
    colors: ['Yellow / Nickel'],
    variants: ['V15 Detect Absolute'],
    inStock: true,
    warranty: '2 Years Dyson Official Comprehensive Warranty',
    isBestSeller: true
  },
  {
    id: 'hap-02',
    name: 'Ecovacs Deebot T20 Omni Robot Vacuum & Mop (6000Pa, Hot Water Mop Washing, Auto Emptying)',
    brand: 'Ecovacs',
    category: 'Home Appliances',
    price: 74900,
    originalPrice: 99900,
    discountPercent: 25,
    rating: 4.8,
    ratingCount: 890,
    reviewCount: 230,
    thumbnail: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'All-in-one hands-free floor cleaning robot. Automatically washes mop pads with 55°C hot water to dissolve oil and grease, lifts mop pads 9mm over carpets, empties dust into sealed bag, and self-dries with hot air.',
    features: ['55°C Hot Water Mop Washing cleans grease and stains effectively', 'Auto-lift 9mm mop system prevents wetting rugs and carpets', 'Massive 6000Pa suction power handles pet hair and deep crevices', 'Omni Station automatically empties dust for up to 75 days hands-free', 'TrueDetect 3D 3.0 obstacle avoidance and LiDAR navigation'],
    specs: {
      'Suction': '6000 Pa',
      'Station Tanks': '4L Clean Water + 4L Dirty Water + 3L Dust Bag',
      'Navigation': 'TrueMapping 2.0 LiDAR with 3D Structured Light',
      'Battery': '5200 mAh (up to 260 minutes run)',
      'Mop Speed': 'Dual pressurized rotary mops at 180 rpm'
    },
    colors: ['White & Silver'],
    variants: ['T20 Omni'],
    inStock: true,
    warranty: '1 Year Brand Warranty + 2 Years on Motor',
    isTrending: true
  },
  {
    id: 'hap-03',
    name: 'Dyson Purifier Hot+Cool Gen1 HP10 (HEPA H13 Air Purifier, Heater & Fan with Remote)',
    brand: 'Dyson',
    category: 'Home Appliances',
    price: 49900,
    originalPrice: 56900,
    discountPercent: 12,
    rating: 4.8,
    ratingCount: 1100,
    reviewCount: 290,
    thumbnail: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Triple function climate and clean air mastery. Captures dust, allergens and viruses while heating your entire room in winter and cooling you with purified airflow in summer.',
    features: ['Fully sealed HEPA H13 filter traps 99.95% particles as small as 0.1 microns', 'Air Multiplier technology projects 290 liters of airflow per second', 'Long-range ceramic PTC heating plates for fast, even room warmth', 'Oscillates up to 350 degrees to circulate purified air everywhere', 'Night mode with dimmed display and whisper-quiet operation'],
    specs: {
      'Filtration': 'HEPA H13 + Activated Carbon Filter',
      'Oscillation': 'Up to 350°',
      'Airflow': '290 L/s',
      'Power': '40W (cooling) / 2250W (heating)',
      'Weight': '5.29 kg'
    },
    colors: ['White / Silver'],
    variants: ['HP10 Gen1'],
    inStock: true,
    warranty: '2 Years Dyson Warranty',
    isDealOfTheDay: true
  },

  // 19. NETWORKING DEVICES (3 items)
  {
    id: 'net-01',
    name: 'TP-Link Deco BE85 Wi-Fi 7 Tri-Band Whole Home Mesh System (BE22000, 10Gbps Ports)',
    brand: 'TP-Link',
    category: 'Networking Devices',
    price: 64999,
    originalPrice: 79999,
    discountPercent: 19,
    rating: 4.9,
    ratingCount: 420,
    reviewCount: 115,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Enter the Wi-Fi 7 era with unprecedented 22 Gbps tri-band speeds, 320 MHz channels, and two 10 Gbps Ethernet/Fiber combo ports for multi-gigabit fiber connections.',
    features: ['Tri-Band Wi-Fi 7 speeds up to 22 Gbps (11520 Mbps on 6GHz)', 'Multi-Link Operation (MLO) enables devices to send data across bands simultaneously', 'Two 10 Gbps WAN/LAN ports + two 2.5 Gbps ports per node', 'Covers up to 9,600 sq. ft with seamless AI-roaming mesh', 'TP-Link HomeShield enhanced network security suite'],
    specs: {
      'Speed': 'BE22000 (11520 Mbps 6GHz + 8640 Mbps 5GHz + 1376 Mbps 2.4GHz)',
      'Ethernet Ports': '1x 10Gbps SFP+/RJ45 Combo + 1x 10Gbps RJ45 + 2x 2.5Gbps RJ45',
      'Antennas': '8x High-gain internal antennas',
      'Capacity': 'Connects up to 200+ devices simultaneously'
    },
    colors: ['White'],
    variants: ['1-Pack', '2-Pack (Whole Home)'],
    inStock: true,
    warranty: '3 Years TP-Link Warranty',
    isBestSeller: true
  },
  {
    id: 'net-02',
    name: 'ASUS ROG Rapture GT-AXE16000 Quad-Band Wi-Fi 6E Gaming Router (Dual 10G Ports, Aura RGB)',
    brand: 'ASUS',
    category: 'Networking Devices',
    price: 59999,
    originalPrice: 69999,
    discountPercent: 14,
    rating: 4.8,
    ratingCount: 310,
    reviewCount: 88,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The world\'s first quad-band Wi-Fi 6E gaming router. Unlocks a dedicated 6GHz band, equipped with dual 10G ports, four 1G ports, and 2.5G WAN port, powered by a 2.0 GHz 64-bit quad-core CPU.',
    features: ['World\'s first quad-band Wi-Fi 6E router reaching 16,000 Mbps', 'Ultimate 6GHz ultra-wideband with zero network congestion', 'Dual 10G ports and 2.5G WAN port for blazing throughput', 'Triple-level game acceleration prioritizes gaming packets', 'Infinity mirror top cover with customizable ASUS Aura RGB'],
    specs: {
      'CPU': '2.0 GHz 64-bit Quad-Core processor',
      'Bands': '6GHz + 5GHz-1 + 5GHz-2 + 2.4GHz',
      'Ports': '2x 10Gbps LAN/WAN, 1x 2.5Gbps WAN, 4x 1Gbps LAN, USB 3.2',
      'Antennas': '8 external antennas'
    },
    colors: ['ROG Stealth Black / RGB'],
    variants: ['Quad-Band GT-AXE16000'],
    inStock: true,
    warranty: '3 Years ASUS India Warranty'
  },
  {
    id: 'net-03',
    name: 'Netgear Nighthawk M6 Pro 5G Mobile Hotspot Router (Wi-Fi 6E, 2.5G Port, 2.8" Touchscreen)',
    brand: 'Netgear',
    category: 'Networking Devices',
    price: 49999,
    originalPrice: 59999,
    discountPercent: 17,
    rating: 4.7,
    ratingCount: 290,
    reviewCount: 65,
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High performance unlocked mobile gigabit router. Combines Sub-6 5G with Wi-Fi 6E speeds up to 3.6 Gbps for up to 32 devices on the go, with a 2.5G ethernet port and removable all-day battery.',
    features: ['Unlocked 5G Sub-6 NSA/SA connectivity for fast travel internet', 'Tri-Band Wi-Fi 6E with 3.6 Gbps speed for up to 32 devices', '2.5G Multi-Gig Ethernet port for wired laptop connection', '2.8-inch color LCD touchscreen for data usage tracking', 'Removable 5040mAh battery provides up to 13 hours run time'],
    specs: {
      'Cellular': '5G Sub-6 GHz, LTE Cat 20',
      'Wi-Fi': 'Tri-band Wi-Fi 6E (6GHz / 5GHz / 2.4GHz)',
      'Ethernet': '1x 2.5Gbps LAN/WAN',
      'Battery': '5040 mAh Li-ion removable',
      'Weight': '256g'
    },
    colors: ['Matte Black'],
    variants: ['Nighthawk M6 Pro'],
    inStock: true,
    warranty: '1 Year Netgear Warranty',
    isNewArrival: true
  },

  // 20. COMPUTER ACCESSORIES (4 items)
  {
    id: 'acc-01',
    name: 'CalDigit TS4 Thunderbolt 4 Dock (18 Ports, 98W Charging, 8K Display Support, 2.5GbE)',
    brand: 'CalDigit',
    category: 'Computer Accessories',
    price: 39999,
    originalPrice: 45999,
    discountPercent: 13,
    rating: 4.9,
    ratingCount: 1250,
    reviewCount: 380,
    thumbnail: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The pinnacle of desktop connectivity. 18 ports of extreme expansion including 3 Thunderbolt 4 ports, 5 USB-A, 3 USB-C (up to 20W front charging), 2.5 Gigabit Ethernet, SD and microSD UHS-II slots, and 98W laptop charging.',
    features: ['18 versatile ports on a single Thunderbolt 4 cable', '98W Power Delivery fast charges even power-hungry laptops', 'Up to dual 6K 60Hz displays or single 8K monitor support', '2.5 Gigabit Ethernet for high-speed network and NAS access', 'Heavy duty solid aluminum chassis with heat dissipation fins'],
    specs: {
      'Ports': '3x TB4, 3x USB-C 10Gbps, 5x USB-A 10Gbps, 1x DP 1.4, 2.5GbE, SD/microSD, 3.5mm combo audio',
      'Power Delivery': '98W to host computer',
      'Construction': 'Solid Aluminum',
      'Dimensions': '113 x 42 x 141 mm',
      'Weight': '640g'
    },
    colors: ['Space Gray Aluminum'],
    variants: ['TS4 18-Port'],
    inStock: true,
    warranty: '2 Years Manufacturer Warranty',
    isBestSeller: true
  },
  {
    id: 'acc-02',
    name: 'Logitech Brio 4K Ultra HD Pro Webcam (RightLight 3 with HDR, Windows Hello Facial Recognition)',
    brand: 'Logitech',
    category: 'Computer Accessories',
    price: 18995,
    originalPrice: 22995,
    discountPercent: 17,
    rating: 4.7,
    ratingCount: 3400,
    reviewCount: 780,
    thumbnail: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Stream crystal-clear video with 4K resolution, High Dynamic Range (HDR), and 5x digital zoom. Infrared sensor powers secure Windows Hello instant facial recognition login.',
    features: ['Ultra 4K HD recording at 30 fps or 1080p at 60 fps', 'RightLight 3 with HDR auto-adjusts to harsh lighting and backlights', 'Adjustable field of view: 65°, 78°, or 90° wide angle', 'Dual omnidirectional noise-canceling microphones', 'Infrared facial recognition for Windows Hello login'],
    specs: {
      'Resolution': '4K / 30fps, 1080p / 60fps, 720p / 90fps',
      'Field of View': '65°, 78°, and 90°',
      'Focus': 'Autofocus with RightLight 3 HDR',
      'Cable': 'Detachable USB-C to USB-A (2.2m)',
      'Privacy': 'Removable privacy shutter included'
    },
    colors: ['Black'],
    variants: ['Brio 4K Pro'],
    inStock: true,
    warranty: '3 Years Logitech Warranty',
    isTrending: true
  },
  {
    id: 'acc-03',
    name: 'Elgato Wave:3 Premium USB Condenser Microphone (Clipguard Anti-Distortion, 24-bit/96kHz)',
    brand: 'Elgato',
    category: 'Computer Accessories',
    price: 14499,
    originalPrice: 16999,
    discountPercent: 15,
    rating: 4.8,
    ratingCount: 2150,
    reviewCount: 490,
    thumbnail: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Studio-grade sound tailored for content creators. Proprietary Clipguard technology redirects sudden audio peaks through a secondary signal path to prevent clipping distortion.',
    features: ['Cardioid condenser capsule captures speech nuances clearly', 'Proprietary Clipguard anti-distortion technology prevents blowout', 'Wave Link digital mixer app blends up to 9 audio channels', '24-bit / 96kHz analog-to-digital converter for broadcast detail', 'Capacitive tap-to-mute button with LED status ring'],
    specs: {
      'Capsule': '17mm Electret Condenser',
      'Polar Pattern': 'Cardioid',
      'Resolution': '24-bit / 96kHz',
      'Frequency Response': '70 Hz – 20,000 Hz',
      'Headphone Output': '3.5 mm zero-latency jack'
    },
    colors: ['Matte Black', 'White'],
    variants: ['Wave:3 USB'],
    inStock: true,
    warranty: '2 Years Elgato Warranty',
    isDealOfTheDay: true
  },
  {
    id: 'acc-04',
    name: 'Satechi Aluminum Laptop Stand with 360-Degree Swivel Base (Ergonomic Elevation, Foldable)',
    brand: 'Satechi',
    category: 'Computer Accessories',
    price: 4999,
    originalPrice: 6499,
    discountPercent: 23,
    rating: 4.8,
    ratingCount: 920,
    reviewCount: 210,
    thumbnail: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Precision engineered from aircraft aluminum with a 360-degree rotating base to effortlessly share your screen in meetings. Elevates laptops to optimal ergonomic eye level while cooling airflow circulate.',
    features: ['360-degree smooth rotational base for easy collaboration', 'Ergonomic dual-hinge design adjusts angle and height', 'Rubber pads protect laptop finish and prevent slipping', 'Ventilated aluminum design pulls heat away from laptops', 'Folds completely flat for travel convenience'],
    specs: {
      'Material': 'Premium Anodized Aluminum',
      'Compatibility': 'Laptops from 11" to 17.3"',
      'Adjustment': 'Height and angle dual-axis tension hinges',
      'Weight': '1.18 kg'
    },
    colors: ['Space Gray', 'Silver'],
    variants: ['360 Swivel'],
    inStock: true,
    warranty: '1 Year Brand Warranty'
  }
];

// Pre-seeded initial reviews for immediate realism and testing
export const INITIAL_REVIEWS: ProductReview[] = [
  {
    id: 'rev-01',
    productId: 'lap-01',
    customerName: 'Aditya Sharma',
    rating: 5,
    title: 'Absolute powerhouse for video editing & development!',
    description: 'The M3 Max chip renders 4K ProRes footage like a warm knife through butter. Battery lasts a full workday even under heavy Docker workflows. The 120Hz Liquid Retina XDR screen is the best panel I have ever seen on a portable machine.',
    date: '2026-10-14',
    verifiedPurchase: true,
    helpfulCount: 42
  },
  {
    id: 'rev-02',
    productId: 'lap-01',
    customerName: 'Priya Narang',
    rating: 5,
    title: 'Space Black finish looks stunning in person',
    description: 'Much more resistant to fingerprints than previous generations. Sound quality from the 6 built-in speakers is studio grade. Expensive, but worth every single rupee for creative professionals.',
    date: '2026-10-28',
    verifiedPurchase: true,
    helpfulCount: 29
  },
  {
    id: 'rev-03',
    productId: 'lap-01',
    customerName: 'Vikram Menon',
    rating: 4,
    title: 'Flawless performance, slightly heavy for daily commute',
    description: 'No throttling under 2-hour sustained renders. Only minor critique is the weight at 2.16kg, but for a 16-inch workstation it is expected. Thermals remain silent most of the time.',
    date: '2026-11-05',
    verifiedPurchase: true,
    helpfulCount: 15
  },
  {
    id: 'rev-04',
    productId: 'hdp-01',
    customerName: 'Rahul Verma',
    rating: 5,
    title: 'Best Noise Cancellation for flights and metro',
    description: 'The dual processors block out constant engine hum and chatter effortlessly. Sound signature is punchy with great separation. Extremely light on the head, I wore them for an 8-hour flight without fatigue.',
    date: '2026-09-20',
    verifiedPurchase: true,
    helpfulCount: 88
  },
  {
    id: 'rev-05',
    productId: 'hdp-01',
    customerName: 'Ananya Deshmukh',
    rating: 5,
    title: 'Mic quality on Zoom calls is crystal clear',
    description: 'The 8 beamforming mics filter out background ambient kitchen and office sounds during work calls. Battery lasts almost two weeks on my typical daily usage.',
    date: '2026-10-12',
    verifiedPurchase: true,
    helpfulCount: 54
  },
  {
    id: 'rev-06',
    productId: 'hdp-01',
    customerName: 'Karthik Raja',
    rating: 4,
    title: 'Great sound with LDAC codec enabled',
    description: 'Make sure to turn on LDAC in the Sony app. The bass is clean and treble is crisp without harsh sibilance. Case is a bit large, but headphones fold flat securely.',
    date: '2026-11-01',
    verifiedPurchase: true,
    helpfulCount: 31
  },
  {
    id: 'rev-07',
    productId: 'mou-01',
    customerName: 'Deepak Nair',
    rating: 5,
    title: 'The gold standard for daily productivity and spreadsheets',
    description: 'The electromagnetic scroll wheel that switches automatically to free-spin is genius. The quiet clicks are so soothing in an office environment. Pairs with my MacBook and PC seamlessly.',
    date: '2026-09-15',
    verifiedPurchase: true,
    helpfulCount: 95
  },
  {
    id: 'rev-08',
    productId: 'mou-01',
    customerName: 'Sneha Patel',
    rating: 5,
    title: 'Tracks directly on my clear glass dining desk!',
    description: 'Previous mice always required a mousepad. The 8K Darkfield sensor works flawlessly directly on glass and granite. Ergonomic palm support solved my wrist strain.',
    date: '2026-10-04',
    verifiedPurchase: true,
    helpfulCount: 46
  },
  {
    id: 'rev-09',
    productId: 'con-01',
    customerName: 'Rohan Joshi',
    rating: 5,
    title: 'Next-gen gaming at 120Hz on my OLED TV',
    description: 'Games load in literally 2 to 3 seconds from the NVMe SSD. DualSense haptic feedback and dynamic triggers add whole new immersion to racing and action titles.',
    date: '2026-10-22',
    verifiedPurchase: true,
    helpfulCount: 112
  },
  {
    id: 'rev-10',
    productId: 'tv-01',
    customerName: 'Manish Gupta',
    rating: 5,
    title: 'Incredible OLED contrast and speaker surface technology',
    description: 'The sound actually comes out of the screen actors mouths thanks to Acoustic Surface Audio. Deep OLED blacks make movie nights an absolute treat.',
    date: '2026-10-19',
    verifiedPurchase: true,
    helpfulCount: 63
  }
];
