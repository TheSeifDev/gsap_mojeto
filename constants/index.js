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

const allCocktails = [
  {
    id: 1,
    name: "Classic Mango",
    image: "/images/drink1.png",
    title: "Sweet & Sunny",
    description:
      "Ripe mangoes blended to perfection, delivering a tropical burst of sweetness in every sip.",
  },
  {
    id: 2,
    name: "Chocolate Bliss",
    image: "/images/drink2.png",
    title: "Rich & Creamy",
    description:
      "A smooth and indulgent chocolate drink, crafted for all the cocoa lovers out there.",
  },
  {
    id: 3,
    name: "Vanilla Dream",
    image: "/images/drink3.png",
    title: "Classic & Smooth",
    description:
      "A timeless vanilla blend with a silky texture and a touch of sweetness for pure comfort.",
  },
  {
    id: 4,
    name: "Watermelon Splash",
    image: "/images/drink4.png",
    title: "Fresh & Juicy",
    description:
      "Crisp watermelon served icy-cold, the ultimate thirst-quencher for hot sunny days.",
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
  allCocktails,
};
