const navLinks = [
  {
    id: "cocktails",
    title: "Smoothies",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const smoothieLists = [
  { name: "Mango Sunshine", country: "EG", detail: "350 ml", price: "$10" },
  { name: "Berry Fusion", country: "US", detail: "500 ml", price: "$15" },
  { name: "Tropical Twist", country: "BR", detail: "400 ml", price: "$12" },
  { name: "Minty Fresh", country: "MA", detail: "350 ml", price: "$11" },
];

const mockTailLists = [
  { name: "Tropical Bloom", country: "US", detail: "350 ml", price: "$10" },
  { name: "Passionfruit Mint", country: "US", detail: "500 ml", price: "$14" },
  { name: "Citrus Glow", country: "CA", detail: "400 ml", price: "$13" },
  { name: "Lavender Fizz", country: "FR", detail: "350 ml", price: "$12" },
];
const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Fresh fruits, handpicked daily",
  "Chilled & refreshing always",
  "Unique flavors crafted with care",
];

const goodLists = [
  "100% natural ingredients",
  "Signature smoothie recipes",
  "Freshly blended to order",
  "Healthy & energizing choices",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "000, Raq Blvd. #404, LAs Vegas, CA 12345",
  contact: {
    phone: "(000) 000-000",
    email: "hello@smoothie.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allSmoothies = [
  {
    id: 1,
    name: "Classic Strawberry",
    image: "/images/drink1.png",
    title: "Simple & Refreshing",
    description:
      "Fresh strawberries blended with ice and a hint of sweetness. A timeless favorite for everyone.",
  },
  {
    id: 2,
    name: "Raspberry Delight",
    image: "/images/drink2.png",
    title: "Berry Good Vibes",
    description:
      "A tangy, refreshing mix of raspberries and mint, perfect for summer days and chill nights.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Smooth & Unique",
    description:
      "A floral-inspired smoothie with fresh berries, violet essence, and a cool finish.",
  },
  {
    id: 4,
    name: "Curacao Splash",
    image: "/images/drink4.png",
    title: "Tropical Paradise",
    description:
      "A colorful blend of tropical fruits and citrus for that ultimate island escape in a glass.",
  },
];

export {
  navLinks,
  smoothieLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allSmoothies,
};
