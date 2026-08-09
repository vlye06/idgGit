import marzoliLogo from "../assets/partners/marzoli-black.png";
import icomatexLogo from "../assets/partners/icomatex.png";
import picanolLogo from "../assets/partners/picanol.jpg";
import prosmhLogo from "../assets/partners/prosmh.png";
import erbatechLogo from "../assets/partners/erbatech.png";
import demsanLogo from "../assets/partners/demsan.png";
import tomsicLogo from "../assets/partners/tomsic.webp";
import tufekciLogo from "../assets/partners/tufekci.png";

export type Lang = "en" | "ua";

export type IconName =
  | "spindle" | "spool" | "shuttle" | "droplet" | "waves" | "expand"
  | "check-square" | "flask" | "thermometer" | "globe" | "shield"
  | "compass" | "bolt" | "grid" | "cog" | "sliders" | "life-buoy"
  | "handshake" | "layers" | "calendar" | "search" | "target" | "truck"
  | "pin" | "mail" | "phone" | "clock" | "arrow-down" | "arrow-right"
  | "menu" | "close" | "external-link" | "gear";

export interface ServiceItem {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
  subcards: { title: string; desc: string }[];
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: string;
  categoryDesc: string;
  role: string;
  desc: string;
}

export interface SiteContent {
  meta: { langLabel: string };
  nav: { home: string; services: string; about: string; partners: string; contact: string; contactCta: string };
  hero: {
    eyebrow: string;
    pre: string;
    highlight: string;
    post: string;
    sub: string;
    btnPrimary: string;
    btnSecondary: string;
    stats: { value: string; label: string }[];
  };
  overview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlights: { icon: IconName; title: string; text: string }[];
    cta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    knowMore: string;
    quoteBtn: string;
    ctaTitle: string;
    ctaText: string;
    items: ServiceItem[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: IconName; title: string; text: string }[];
  };
  partners: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    ctaTitle: string;
    ctaText: string;
    items: PartnerItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    storyEyebrow: string;
    storyTitle: string;
    storyParagraphs: string[];
    stats: { value: string; label: string }[];
    valuesEyebrow: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: { icon: IconName; title: string; text: string }[];
    approachEyebrow: string;
    approachTitle: string;
    steps: { icon: IconName; title: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    infoText: string;
    addressLabel: string;
    address: string[];
    emailLabel: string;
    emails: string[];
    phoneLabel: string;
    phones: string[];
    hoursLabel: string;
    hours: string[];
    formTitle: string;
    formText: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      company: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    servicesLabel: string;
    companyLabel: string;
    contactLabel: string;
    aboutLabel: string;
    allServicesLabel: string;
    copyright: string;
  };
}

const partnersShared: Omit<PartnerItem, "category" | "categoryDesc" | "role" | "desc">[] = [
  { id: "marzoli", name: "Marzoli", logo: marzoliLogo, url: "https://en.marzoli.camozzi.com/" },
  { id: "icomatex", name: "Icomatex", logo: icomatexLogo, url: "https://icomatex.com/en/about-us/" },
  { id: "picanol", name: "Picanol", logo: picanolLogo, url: "https://www.picanol.be/en/machines-features/machines" },
  { id: "prosmh", name: "PROSMH", logo: prosmhLogo, url: "https://prosmh.com/" },
  { id: "erbatech", name: "ERBATECH", logo: erbatechLogo, url: "https://www.erbatech.com/textile/" },
  { id: "demsan", name: "Demsan", logo: demsanLogo, url: "https://demsan.com.tr/en/" },
  { id: "tomsic", name: "Tomsic", logo: tomsicLogo, url: "https://www.tomsic.it/" },
  { id: "tufekci", name: "Tüfekçi", logo: tufekciLogo, url: "http://www.tufekci.com.tr/" },
];

const en: SiteContent = {
  meta: { langLabel: "UA" },
  nav: {
    home: "Home", services: "Services", about: "About", partners: "Partners", contact: "Contact",
    contactCta: "Contact Us",
  },
  hero: {
    eyebrow: "Trusted Textile Machinery Partner",
    pre: "Your Gateway to",
    highlight: "Premium",
    post: "Textile Machinery",
    sub: "At IDG-Weave, we connect textile manufacturers with world-class machinery and solutions. From spinning to finishing — we represent the industry's top names with decades of hands-on expertise.",
    btnPrimary: "Explore Our Services",
    btnSecondary: "Get In Touch",
    stats: [
      { value: "9+", label: "Service Areas" },
      { value: "20+", label: "Years Experience" },
      { value: "Top", label: "Global Brands" },
    ],
  },
  overview: {
    eyebrow: "Who We Are",
    title: "A Trusted Name in Textile Machinery",
    subtitle: "IDG-Weave bridges the gap between world-class textile machinery manufacturers and the producers who need them most.",
    highlights: [
      { icon: "grid", title: "Comprehensive coverage", text: "We represent leading manufacturers across every major segment of textile production." },
      { icon: "cog", title: "Technical expertise", text: "Our team brings deep industry knowledge and hands-on experience to every engagement." },
      { icon: "sliders", title: "Tailored solutions", text: "We match the right machinery to your specific production requirements and budget." },
      { icon: "life-buoy", title: "Ongoing support", text: "From selection to installation and beyond, we stay with you through the entire process." },
    ],
    cta: "About IDG-Weave",
  },
  services: {
    eyebrow: "What We Offer",
    title: "Our Services & Solutions",
    subtitle: "Comprehensive machinery and technical expertise across every stage of textile production.",
    knowMore: "Know More",
    quoteBtn: "Request a Quote",
    ctaTitle: "Looking for a Specific Machine?",
    ctaText: "Our team will find the right solution for your production requirements.",
    items: [
      {
        id: "spinning", icon: "spindle", title: "Spinning",
        desc: "Complete spinning solutions — converting natural or synthetic fibers into yarns of desired thickness, twist and strength.",
        subcards: [{ title: "Spinning Machinery", desc: "Full-line spinning solutions covering opening, carding, drawing, roving and ring spinning — engineered for consistent yarn quality and maximum productivity." }],
      },
      {
        id: "sizing-warping", icon: "spool", title: "Sizing & Warping",
        desc: "Direct & sectional warpers, sizing lines for staple, filament and glass fibers, creels, ball warpers, re-beamers and open-width systems.",
        subcards: [
          { title: "Warping Machines", desc: "Direct warpers, sectional warpers and creels for all yarn types — precision tension control and consistent beam quality." },
          { title: "Sizing Lines", desc: "Sizing systems for staple fibers, filament fibers and glass fibers — optimal size penetration and uniform film coating." },
          { title: "Auxiliary Systems", desc: "Re-beamers, open-width systems and assembling lines to complete your beam preparation workflow." },
        ],
      },
      {
        id: "weaving", icon: "shuttle", title: "Airjet & Rapier Weaving",
        desc: "High-tech weaving machines using airjet and rapier technology — precision engineering combined with high-speed performance.",
        subcards: [
          { title: "Airjet Weaving Machines", desc: "High-speed airjet weaving for mass production of a wide range of fabrics. Optimized air consumption with superior weft insertion rates and consistent quality." },
          { title: "Rapier Weaving Machines", desc: "Versatile rapier technology for complex patterns, technical textiles and specialty fabrics. Ideal for diverse yarn types and intricate weave structures." },
        ],
      },
      {
        id: "dyeing", icon: "droplet", title: "Dyeing Machines",
        desc: "High-performance dyeing systems for uniform color application, energy efficiency, and precise process control across all fabric types.",
        subcards: [
          { title: "KTM Krantz Systems", desc: "Industrial dyeing machines engineered for consistent, repeatable color results with low liquor ratios and optimized energy consumption." },
          { title: "Rope Dye Range", desc: "Rope dyeing systems for denim and specialty fabric production — known for deep penetration and consistent yarn-level coloring." },
        ],
      },
      {
        id: "washing", icon: "waves", title: "Washing, Bleaching & Mercerizing",
        desc: "High-efficiency open-width washing and ultrasonic treatment systems for superior fabric preparation and finishing.",
        subcards: [
          { title: "Open-Width Washing", desc: "Open-width continuous washing ranges for efficient desizing, scouring and rinsing with minimal water and energy consumption." },
          { title: "Ultrasonic Treatment", desc: "Ultrasonic washing systems that deliver deep cleaning and chemical penetration at lower temperatures, reducing processing time and chemical usage." },
        ],
      },
      {
        id: "stenters", icon: "expand", title: "Stenters",
        desc: "Finishing machines for heat-setting, drying and precise width and dimensional stability control — essential for high-quality fabric finishing.",
        subcards: [{ title: "Stenter Frames", desc: "Multi-zone stenter frames with precise temperature control, adjustable width settings and energy-efficient air circulation. Suitable for wovens, knits, and technical textiles." }],
      },
      {
        id: "quality", icon: "check-square", title: "Quality Control & Packing",
        desc: "Advanced fabric inspection, rolling, batching, plaiting, folding and palletizing equipment for flawless end-of-line processing.",
        subcards: [
          { title: "Rolling & Batching", desc: "Fabric rolling machines, batching machines, and combined rolling-batching-plaiting units for efficient end-of-line processing." },
          { title: "Palletizing & Folding", desc: "Single-fold, double-fold and double-four fold palletizing machines, fabric folding & rolling combinations, and tulle sewing machines." },
          { title: "Packing & Finishing", desc: "Fabric spreading, packaging, wet rope opening and beam winding machines for complete end-line efficiency." },
        ],
      },
      {
        id: "laboratory", icon: "flask", title: "Laboratory Testing",
        desc: "Comprehensive laboratory instruments for precise quality measurement and process validation across textile and spinning applications.",
        subcards: [
          { title: "Textile Laboratory Solutions", desc: "Complete instruments for fabric testing — tensile strength, color fastness, pilling, abrasion resistance and more." },
          { title: "Spinning Lab Solutions", desc: "Yarn testing instruments for evenness, count, twist, hairiness and strength — essential for spinning process control." },
          { title: "Specialty Solutions", desc: "Sugar and specialty industry laboratory solutions, rounding out our comprehensive product portfolio." },
        ],
      },
      {
        id: "climate", icon: "thermometer", title: "Climate & Waste Control",
        desc: "Systems that maintain optimal temperature, humidity and air quality while efficiently managing lint, dust and process waste.",
        subcards: [
          { title: "Climate Control", desc: "Precision humidification and temperature management systems to keep production conditions stable and product quality consistent." },
          { title: "Waste Management", desc: "Lint, dust and fiber waste collection and filtration systems — protecting machinery, workers and the environment from airborne particles." },
        ],
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Choose Us",
    title: "The IDG-Weave Advantage",
    subtitle: "We combine global reach with local knowledge to deliver unmatched value for textile operations of every scale.",
    items: [
      { icon: "globe", title: "Global Manufacturer Network", text: "We maintain direct relationships with the world's top textile machinery manufacturers, giving you access to the best technology available." },
      { icon: "shield", title: "Quality Guaranteed", text: "Every solution we recommend meets rigorous performance and reliability standards, backed by manufacturer warranties and our expertise." },
      { icon: "compass", title: "Expert Consultation", text: "Our team of specialists analyzes your production needs and recommends the optimal machinery configuration for your facility." },
      { icon: "bolt", title: "Fast & Responsive", text: "We understand that time matters in production. We act quickly on inquiries and ensure efficient delivery and commissioning timelines." },
    ],
  },
  partners: {
    eyebrow: "Our Network",
    title: "Our Manufacturing Partners",
    subtitle: "We represent world-class machinery brands at every stage of textile production — each chosen for engineering excellence, reliability and after-sales support.",
    intro: "IDG-Weave acts as the exclusive or authorized regional representative for eight manufacturers whose equipment spans the full textile production chain — from spinning raw fiber to climate-controlled finishing. Click any partner below to visit their official website.",
    ctaTitle: "Interested in a Partnership?",
    ctaText: "Get in touch to discuss representation, pricing or technical details for any of our partner brands.",
    items: [
      { ...partnersShared[0], category: "Fiber to Yarn", categoryDesc: "Converting raw natural or synthetic fibers into yarns ready for weaving.", role: "Spinning Machinery", desc: "A Camozzi Group company and global leader in complete spinning lines. Marzoli manufactures blow-room systems, cards, draw frames, lap formers, combers, roving frames and ring spinning machines — delivering full-plant solutions from fiber opening to finished yarn." },
      { ...partnersShared[1], category: "Beam Preparation", categoryDesc: "Warping and sizing the yarn onto beams before it enters the loom.", role: "Warping & Sizing Machines", desc: "Belgian manufacturer of warping and sizing equipment. Icomatex produces direct warpers, sectional warpers, ball warpers, creels, sizing lines for all fiber types, re-beamers and open-width systems — covering every beam preparation requirement for weaving mills." },
      { ...partnersShared[2], category: "Yarn to Fabric", categoryDesc: "High-speed airjet and rapier looms that interlace warp and weft into finished cloth.", role: "Airjet & Rapier Looms", desc: "Belgian weaving technology leader with over 85 years of innovation. Picanol's airjet and rapier machines are used in mills worldwide for apparel, home textiles and technical fabrics — renowned for high speed, reliability, and low energy consumption per meter woven." },
      { ...partnersShared[3], category: "Wet Processing", categoryDesc: "Chemical and thermal treatment of fabric for color, cleanliness and preparation for finishing.", role: "Dyeing & Washing Systems", desc: "Specialist in industrial wet-processing machinery, PROSMH offers KTM Krantz dyeing systems, rope dye ranges for denim, open-width continuous washing lines and ultrasonic treatment technology — covering both dyeing and washing / bleaching / mercerizing needs in a single partnership." },
      { ...partnersShared[4], category: "Finishing & Heat-Setting", categoryDesc: "Width, dimensional stability and surface finish are locked in at the stenter frame.", role: "Stenter Frames & Finishing", desc: "Turkish manufacturer of stenter frames and textile finishing equipment. ERBATECH stenters feature multi-zone heating, precise width and overfeed control, energy-efficient air circulation and are suited to wovens, knits and technical textiles across all fiber compositions." },
      { ...partnersShared[5], category: "Inspection & Packing", categoryDesc: "End-of-line inspection, rolling, folding, palletizing and packaging of finished fabric.", role: "Inspection, Rolling & Packing Machines", desc: "Turkish manufacturer of fabric-handling and packing machinery. Demsan's range covers fabric rolling and batching machines, plaiting machines, single- and double-fold palletizers, fabric spreading tables, packaging lines and beam winding units — ensuring every meter leaving the mill is perfectly presented." },
      { ...partnersShared[6], category: "Testing & Measurement", categoryDesc: "Instruments to verify yarn and fabric quality against international standards at every process step.", role: "Textile & Spinning Lab Instruments", desc: "Italian distributor and integrator of laboratory testing instruments for textiles, spinning and specialty industries. Tomsic's portfolio covers tensile strength testers, color fastness equipment, yarn evenness and hairiness testers, pilling and abrasion testers — providing complete process-control metrology for quality-focused mills." },
      { ...partnersShared[7], category: "Environmental Control", categoryDesc: "Keeping the factory floor at the right temperature, humidity and air quality while safely handling lint and dust.", role: "Climate & Waste Control Systems", desc: "Turkish specialist in factory climate control and textile waste management. Tüfekçi systems include precision humidification units, air-conditioning solutions tailored for weaving and spinning environments, and lint & dust collection filtration systems — protecting both machinery life and worker health." },
    ],
  },
  about: {
    eyebrow: "Our Story",
    title: "About IDG-Weave",
    subtitle: "Industrial Development Group — your trusted partner for premium textile machinery solutions and technical expertise.",
    storyEyebrow: "Our Story",
    storyTitle: "Connecting Industry with Innovation",
    storyParagraphs: [
      "IDG-Weave — Industrial Development Group — was founded with a clear mission: to bridge the gap between the world's most advanced textile machinery manufacturers and the producers who need them. Operating out of Odessa, Ukraine, we have built a strong international network spanning manufacturers, distributors and textile mills across Europe and beyond.",
      "With over two decades of hands-on experience in the textile machinery industry, our team understands both the technical demands of modern production and the commercial realities faced by our clients. We don't just sell equipment — we deliver solutions.",
      "Whether you are setting up a new production facility or upgrading an existing line, IDG-Weave provides the expertise, the partnerships and the support to make it happen efficiently and reliably.",
    ],
    stats: [
      { value: "20+", label: "Years in Industry" },
      { value: "9+", label: "Service Segments" },
      { value: "Top", label: "Global Brands" },
      { value: "EU", label: "Market Reach" },
    ],
    valuesEyebrow: "What Drives Us",
    valuesTitle: "Our Core Values",
    valuesSubtitle: "Every decision we make is guided by our commitment to quality, integrity and long-term partnerships.",
    values: [
      { icon: "shield", title: "Quality First", text: "We partner exclusively with manufacturers who meet the highest engineering and quality standards. Every machine we recommend has been vetted for reliability and performance." },
      { icon: "handshake", title: "Partnership Mindset", text: "We view every client relationship as a long-term partnership. Your success in production is our success — and we stay engaged long after the sale." },
      { icon: "globe", title: "Global Reach", text: "Our manufacturer network spans Europe and Asia, giving clients access to cutting-edge technology regardless of where the best solution originates." },
      { icon: "layers", title: "Deep Expertise", text: "Our team has decades of combined experience across spinning, weaving, dyeing and finishing — enabling practically-grounded technical advice." },
      { icon: "bolt", title: "Responsive Service", text: "We act fast. From initial inquiry to proposal and delivery, we work to timelines that respect the urgency of industrial production." },
      { icon: "calendar", title: "Long-term Thinking", text: "We recommend solutions that make sense for your operation today and five years from now — with upgradeability and support always in mind." },
    ],
    approachEyebrow: "Our Approach",
    approachTitle: "How We Work",
    steps: [
      { icon: "search", title: "Understand Your Needs", text: "We begin with a thorough consultation to understand your production requirements, constraints and goals before recommending any solution." },
      { icon: "target", title: "Match the Right Solution", text: "We draw on our manufacturer network to identify equipment that precisely matches your technical and commercial requirements." },
      { icon: "truck", title: "Support Through Delivery", text: "We manage the process from order confirmation through delivery, installation coordination and commissioning — keeping you informed throughout." },
      { icon: "handshake", title: "Ongoing Partnership", text: "Our relationship doesn't end at delivery. We stay available for technical questions, future expansions and continuous improvement support." },
    ],
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Get In Touch",
    subtitle: "Have a question about machinery, need a quote, or want to discuss your production requirements? We're here to help.",
    infoTitle: "Contact Information",
    infoText: "Reach us directly — we typically respond within one business day.",
    addressLabel: "Office Address",
    address: ["Troitskaya Street, 50, office 1", "Odessa, Odessa Oblast", "Ukraine, 65045"],
    emailLabel: "Email Address",
    emails: ["info@weave.com.ua", "anatoliy.a.yefremov@gmail.com"],
    phoneLabel: "Phone Numbers",
    phones: ["+380 67 484 06 70", "+45 22 52 27 44"],
    hoursLabel: "Business Hours",
    hours: ["Monday – Friday: 9:00 – 18:00 (EET)", "Saturday – Sunday: Closed"],
    formTitle: "Send Us a Message",
    formText: "Tell us about your machinery needs and we'll get back to you with a tailored proposal.",
    form: {
      firstName: "First Name", lastName: "Last Name",
      email: "Email Address", phone: "Phone Number",
      company: "Company / Organisation",
      subject: "Area of Interest",
      subjectPlaceholder: "Select a service area...",
      message: "Message",
      submit: "Send Message",
      success: "Thank you! Your message has been sent. We'll be in touch shortly.",
      error: "Please fill in all required fields.",
    },
  },
  footer: {
    tagline: "Your trusted partner in textile machinery — connecting manufacturers with world-class solutions.",
    servicesLabel: "Services", companyLabel: "Company", contactLabel: "Contact",
    aboutLabel: "About IDG-Weave", allServicesLabel: "All Services",
    copyright: "All rights reserved.",
  },
};

const ua: SiteContent = {
  meta: { langLabel: "EN" },
  nav: {
    home: "Головна", services: "Послуги", about: "Про нас", partners: "Партнери", contact: "Контакти",
    contactCta: "Зв'язатися",
  },
  hero: {
    eyebrow: "Надійний партнер у текстильному машинобудуванні",
    pre: "Ваш шлях до",
    highlight: "першокласного",
    post: "текстильного обладнання",
    sub: "IDG-Weave з'єднує текстильних виробників з обладнанням та рішеннями найвищого рівня. Від прядіння до оздоблення — ми представляємо провідні марки галузі з багаторічним практичним досвідом.",
    btnPrimary: "Наші послуги",
    btnSecondary: "Зв'язатися",
    stats: [
      { value: "9+", label: "Напрямки послуг" },
      { value: "20+", label: "Років досвіду" },
      { value: "Топ", label: "Світові бренди" },
    ],
  },
  overview: {
    eyebrow: "Хто ми",
    title: "Надійний партнер у текстильному машинобудуванні",
    subtitle: "IDG-Weave усуває розрив між виробниками текстильного обладнання світового рівня та підприємствами, яким воно потрібне.",
    highlights: [
      { icon: "grid", title: "Комплексний асортимент", text: "Ми представляємо провідних виробників у всіх основних сегментах текстильного виробництва." },
      { icon: "cog", title: "Технічна експертиза", text: "Наша команда привносить глибокі галузеві знання та практичний досвід у кожен проект." },
      { icon: "sliders", title: "Індивідуальний підхід", text: "Ми підбираємо оптимальне обладнання під конкретні виробничі вимоги та бюджет клієнта." },
      { icon: "life-buoy", title: "Постійна підтримка", text: "Від вибору обладнання до монтажу та пуску — ми поруч на кожному етапі." },
    ],
    cta: "Про IDG-Weave",
  },
  services: {
    eyebrow: "Що ми пропонуємо",
    title: "Наші послуги та рішення",
    subtitle: "Комплексне обладнання та технічна експертиза на кожному етапі текстильного виробництва.",
    knowMore: "Детальніше",
    quoteBtn: "Запросити пропозицію",
    ctaTitle: "Шукаєте конкретну машину?",
    ctaText: "Наша команда знайде оптимальне рішення для ваших виробничих вимог.",
    items: [
      {
        id: "spinning", icon: "spindle", title: "Прядіння",
        desc: "Повнолінійні прядильні рішення — перетворення натуральних або синтетичних волокон у пряжу заданої товщини, крутки та міцності.",
        subcards: [{ title: "Прядильне обладнання", desc: "Повнолінійні прядильні рішення від розпушування та чесання до витягування, рівничного та кільцевого прядіння — для стабільної якості пряжі та максимальної продуктивності." }],
      },
      {
        id: "sizing-warping", icon: "spool", title: "Снування та шліхтування",
        desc: "Прямі та секційні снувальники, шліхтувальні лінії для штапельних, комплексних та скляних волокон, шпулярники, клубковидні снувальники та системи відкритої ширини.",
        subcards: [
          { title: "Снувальні машини", desc: "Прямі та секційні снувальники, шпулярники для всіх видів пряжі — точне натягування та стабільна якість навоїв." },
          { title: "Шліхтувальні лінії", desc: "Шліхтувальні системи для штапельних, комплексних та скляних волокон — оптимальне просочення та рівномірне плівкоутворення." },
          { title: "Допоміжне обладнання", desc: "Перенавивальні машини, системи відкритої ширини та збірні лінії для повного циклу підготовки навоїв." },
        ],
      },
      {
        id: "weaving", icon: "shuttle", title: "Аерожетне та рапірне ткацтво",
        desc: "Високотехнологічні ткацькі верстати з аерожетною та рапірною технологією — точна механіка та висока швидкість роботи.",
        subcards: [
          { title: "Аерожетні ткацькі верстати", desc: "Швидкісне аерожетне ткацтво для масового виробництва широкого асортименту тканин. Оптимізоване споживання повітря та стабільна якість прокладання утоку." },
          { title: "Рапірні ткацькі верстати", desc: "Універсальна рапірна технологія для складних малюнків, технічних та спеціальних тканин. Оптимальна для різноманітних видів пряжі та складних структур переплетення." },
        ],
      },
      {
        id: "dyeing", icon: "droplet", title: "Фарбувальне обладнання",
        desc: "Високопродуктивні фарбувальні системи для рівномірного нанесення кольору, енергоефективності та точного управління процесом.",
        subcards: [
          { title: "Системи KTM Krantz", desc: "Промислові фарбувальні машини для стабільного та відтворюваного фарбування з низьким модулем ванни та оптимізованим енергоспоживанням." },
          { title: "Джгутове фарбування", desc: "Системи джгутового фарбування для денімових та спеціальних тканин — глибоке проникнення та стабільне забарвлення на рівні ниток." },
        ],
      },
      {
        id: "washing", icon: "waves", title: "Промивання, вибілювання та мерсеризація",
        desc: "Високоефективні системи промивання у розправленому вигляді та ультразвукової обробки для підготовки та оздоблення тканин.",
        subcards: [
          { title: "Промивання у розправленому вигляді", desc: "Безперервні лінії промивання у розправленому вигляді для ефективного розшліхтування, відварювання та полоскання з мінімальними витратами води та енергії." },
          { title: "Ультразвукова обробка", desc: "Ультразвукові промивальні системи для глибокого очищення та проникнення хімічних речовин при нижчих температурах, що скорочує час обробки та витрати хімікатів." },
        ],
      },
      {
        id: "stenters", icon: "expand", title: "Стентерне обладнання",
        desc: "Обробне обладнання для термофіксації, сушіння та точного контролю ширини та розмірної стабільності тканини.",
        subcards: [{ title: "Стентерні рами", desc: "Багатозонні стентерні рами з точним управлінням температурою, регульованою шириною та енергоефективною циркуляцією повітря. Для тканих, трикотажних та технічних матеріалів." }],
      },
      {
        id: "quality", icon: "check-square", title: "Контроль якості та пакування",
        desc: "Сучасне обладнання для контролю якості тканини, накочування, партіювання, розкладання, складання та паллетування.",
        subcards: [
          { title: "Накочування та партіювання", desc: "Тканинонакочувальні та партіювальні машини, комбіновані агрегати для накочування, партіювання та розкладання тканини." },
          { title: "Паллетування та складання", desc: "Машини для одинарного, подвійного та подвійно-четверного складання, комбіновані агрегати та машини для зшивання тюлю." },
          { title: "Пакування та фінішна обробка", desc: "Машини для розкладання тканини, пакування, розкриття мокрого джгута та намотування навоїв для завершального етапу виробництва." },
        ],
      },
      {
        id: "laboratory", icon: "flask", title: "Лабораторне тестування",
        desc: "Широкий асортимент лабораторних приладів для точного вимірювання якості та перевірки процесів у текстильних та прядильних виробництвах.",
        subcards: [
          { title: "Лабораторне обладнання для тканин", desc: "Повний комплекс приладів для випробування тканин — міцність на розрив, стійкість забарвлення, пілінг, стійкість до стирання та інше." },
          { title: "Лабораторне обладнання для прядіння", desc: "Прилади для контролю нерівномірності, номера, крутки, ворсистості та міцності пряжі — необхідне для управління прядильним процесом." },
          { title: "Спеціалізоване обладнання", desc: "Лабораторне обладнання для цукрової та суміжних галузей промисловості, що доповнює наш комплексний асортимент." },
        ],
      },
      {
        id: "climate", icon: "thermometer", title: "Кліматконтроль та управління відходами",
        desc: "Системи для підтримки оптимальної температури, вологості та якості повітря у виробничих приміщеннях з управлінням промисловими відходами.",
        subcards: [
          { title: "Контроль мікроклімату", desc: "Точні системи зволоження та управління температурою для підтримки стабільних виробничих умов та незмінної якості продукції." },
          { title: "Управління відходами", desc: "Системи збору та фільтрації пуху, пилу та волокнистих відходів — захист обладнання, персоналу та довкілля від зважених часток." },
        ],
      },
    ],
  },
  whyUs: {
    eyebrow: "Чому обирають нас",
    title: "Переваги IDG-Weave",
    subtitle: "Ми поєднуємо глобальне охоплення з місцевими знаннями для досягнення максимальної цінності для текстильних підприємств будь-якого масштабу.",
    items: [
      { icon: "globe", title: "Глобальна мережа виробників", text: "Ми підтримуємо прямі партнерські відносини з провідними виробниками текстильного обладнання у світі, надаючи вам доступ до найкращих технологій." },
      { icon: "shield", title: "Гарантована якість", text: "Кожне рекомендоване нами рішення відповідає суворим стандартам продуктивності та надійності й підкріплене гарантіями виробника." },
      { icon: "compass", title: "Фахова консультація", text: "Наші фахівці аналізують виробничі потреби клієнта та рекомендують оптимальну конфігурацію обладнання для конкретного виробництва." },
      { icon: "bolt", title: "Швидкість та оперативність", text: "Ми розуміємо, що час у виробництві має значення. Ми швидко реагуємо на запити та забезпечуємо чіткі строки постачання та введення в експлуатацію." },
    ],
  },
  partners: {
    eyebrow: "Наша мережа",
    title: "Наші виробничі партнери",
    subtitle: "Ми представляємо бренди текстильного обладнання світового рівня на кожному етапі виробництва — відібрані за інженерною досконалістю, надійністю та сервісом.",
    intro: "IDG-Weave є ексклюзивним або авторизованим регіональним представником восьми виробників, чиє обладнання охоплює повний технологічний ланцюг текстильного виробництва — від прядіння сировини до кліматичного контролю оздоблення. Натисніть на будь-якого партнера, щоб відвідати їхній офіційний сайт.",
    ctaTitle: "Зацікавлені у співпраці?",
    ctaText: "Зв'яжіться з нами для обговорення представництва, цін або технічних деталей щодо будь-якого з наших партнерських брендів.",
    items: [
      { ...partnersShared[0], category: "Від волокна до нитки", categoryDesc: "Перетворення сирих натуральних або синтетичних волокон у пряжу, готову до ткацтва.", role: "Прядильне обладнання", desc: "Компанія групи Camozzi та світовий лідер у сфері комплектних прядильних ліній. Marzoli виробляє розпушувально-тіпальні агрегати, кардочесальні машини, витяжні прилади, рівничні та кільцево-прядильні машини — постачаючи повні заводські рішення від розпушування волокна до готової пряжі." },
      { ...partnersShared[1], category: "Підготовка навоїв", categoryDesc: "Снування та шліхтування пряжі на навої перед подачею на ткацький верстат.", role: "Снувальні та шліхтувальні машини", desc: "Бельгійський виробник снувального та шліхтувального обладнання. Icomatex випускає прямі та секційні снувальники, клубковидні снувальники, шпулярники, шліхтувальні лінії для всіх типів волокон, перенавивальні машини та системи відкритої ширини — закриваючи всі потреби у підготовці навоїв для ткацьких підприємств." },
      { ...partnersShared[2], category: "Від нитки до тканини", categoryDesc: "Швидкісні аерожетні та рапірні верстати, що переплітають основу та уток у готову тканину.", role: "Аерожетні та рапірні верстати", desc: "Бельгійський лідер у галузі ткацьких технологій з понад 85-річною інноваційною діяльністю. Аерожетні та рапірні верстати Picanol використовуються на підприємствах по всьому світу для виготовлення одягових, домашніх та технічних тканин — відомі своєю швидкістю, надійністю та низьким споживанням енергії на метр тканини." },
      { ...partnersShared[3], category: "Мокра обробка", categoryDesc: "Хімічна та термічна обробка тканини для забарвлення, очищення та підготовки до оздоблення.", role: "Системи фарбування та промивання", desc: "Спеціаліст з промислового обладнання для мокрої обробки, PROSMH пропонує фарбувальні системи KTM Krantz, лінії джгутового фарбування для денімових тканин, безперервні лінії промивання у розправленому вигляді та ультразвукові технології обробки — охоплюючи потреби фарбування та промивання/вибілювання/мерсеризації в рамках єдиного партнерства." },
      { ...partnersShared[4], category: "Оздоблення та термофіксація", categoryDesc: "Ширина, розмірна стабільність та якість поверхні тканини фіксуються на стентерній рамі.", role: "Стентерні рами та оздоблювальне обладнання", desc: "Турецький виробник стентерних рам та текстильного оздоблювального обладнання. Стентери ERBATECH оснащені багатозонним нагріванням, точним контролем ширини та натягу, енергоефективною циркуляцією повітря і підходять для тканих, трикотажних та технічних матеріалів усіх волокнистих складів." },
      { ...partnersShared[5], category: "Контроль та пакування", categoryDesc: "Контроль якості, накочування, складання, паллетування та пакування готової тканини.", role: "Контрольно-пакувальне обладнання", desc: "Турецький виробник обладнання для роботи з тканиною та її пакування. Асортимент Demsan охоплює тканинонакочувальні та партіювальні машини, машини для розкладання тканини, паллетизатори одинарного та подвійного складання, столи для розкладання тканини, пакувальні лінії та машини для намотування навоїв — забезпечуючи бездоганний вигляд кожного метру, що виходить з підприємства." },
      { ...partnersShared[6], category: "Випробування та вимірювання", categoryDesc: "Прилади для перевірки якості пряжі та тканини відповідно до міжнародних стандартів на кожному етапі процесу.", role: "Лабораторні прилади для текстилю та прядіння", desc: "Італійський дистриб'ютор та інтегратор лабораторного випробувального обладнання для текстильної, прядильної та суміжних галузей промисловості. Портфель Tomsic охоплює прилади для визначення міцності на розрив, обладнання для контролю стійкості забарвлення, прилади для визначення нерівномірності та ворсистості пряжі, прилади для визначення пілінгу та стійкості до стирання — забезпечуючи комплексну метрологію управління якістю для орієнтованих на якість підприємств." },
      { ...partnersShared[7], category: "Управління мікрокліматом", categoryDesc: "Підтримання оптимальної температури, вологості та якості повітря у виробничому приміщенні з безпечним видаленням пуху та пилу.", role: "Системи кліматконтролю та управління відходами", desc: "Турецький спеціаліст у сфері кліматичного контролю на фабриках та управління текстильними відходами. Системи Tüfekçi включають точні зволожувачі повітря, кліматичні рішення, адаптовані для ткацьких та прядильних виробництв, а також системи фільтрації та збору пуху і пилу — захищаючи як ресурс обладнання, так і здоров'я персоналу." },
    ],
  },
  about: {
    eyebrow: "Наша історія",
    title: "Про IDG-Weave",
    subtitle: "Industrial Development Group — ваш надійний партнер у сфері текстильного обладнання та технічної експертизи.",
    storyEyebrow: "Наша історія",
    storyTitle: "Об'єднуємо промисловість та інновації",
    storyParagraphs: [
      "IDG-Weave — Industrial Development Group — заснована з чіткою місією: усунути розрив між найбільш передовими у світі виробниками текстильного обладнання та підприємствами, яким воно необхідне. Працюючи з Одеси, Україна, ми побудували потужну міжнародну мережу, що охоплює виробників, дистриб'юторів та текстильні підприємства по всій Європі та за її межами.",
      "Маючи понад два десятиліття практичного досвіду в галузі текстильного машинобудування, наша команда розуміє як технічні вимоги сучасного виробництва, так і комерційні реалії, з якими стикаються наші клієнти. Ми не просто продаємо обладнання — ми надаємо комплексні рішення.",
      "Незалежно від того, чи ви організовуєте нове виробництво, чи модернізуєте наявну лінію, IDG-Weave забезпечує необхідну експертизу, партнерські зв'язки та підтримку для ефективного та надійного результату.",
    ],
    stats: [
      { value: "20+", label: "Років у галузі" },
      { value: "9+", label: "Напрямки послуг" },
      { value: "Топ", label: "Світові бренди" },
      { value: "ЄС", label: "Охоплення ринку" },
    ],
    valuesEyebrow: "Що нас рухає",
    valuesTitle: "Наші основні цінності",
    valuesSubtitle: "Кожне наше рішення ґрунтується на прагненні до якості, чесності та довгострокового партнерства.",
    values: [
      { icon: "shield", title: "Якість понад усе", text: "Ми співпрацюємо виключно з виробниками, що відповідають найвищим інженерним стандартам. Кожна рекомендована машина перевірена на надійність та продуктивність." },
      { icon: "handshake", title: "Партнерський підхід", text: "Ми розглядаємо відносини з кожним клієнтом як довгострокове партнерство. Ваш виробничий успіх — наш успіх, і ми залишаємося залученими довго після укладання угоди." },
      { icon: "globe", title: "Глобальне охоплення", text: "Наша мережа виробників охоплює Європу та Азію, надаючи клієнтам доступ до передових технологій незалежно від того, де знаходиться найкраще рішення." },
      { icon: "layers", title: "Глибока експертиза", text: "Наша команда має десятиліття сукупного досвіду у прядінні, ткацтві, фарбуванні та оздобленні — що дозволяє надавати практично обґрунтовані технічні поради." },
      { icon: "bolt", title: "Оперативне обслуговування", text: "Ми діємо швидко. Від першого запиту до комерційної пропозиції та постачання — ми дотримуємося термінів, що відповідають потребам виробництва." },
      { icon: "calendar", title: "Довгострокове мислення", text: "Ми рекомендуємо рішення, що є виправданими сьогодні та через п'ять років — з урахуванням перспектив розширення та наявності сервісу." },
    ],
    approachEyebrow: "Наш підхід",
    approachTitle: "Як ми працюємо",
    steps: [
      { icon: "search", title: "Розуміємо ваші потреби", text: "Ми починаємо з детальної консультації, щоб з'ясувати виробничі вимоги, обмеження та цілі клієнта перш ніж пропонувати будь-яке рішення." },
      { icon: "target", title: "Підбираємо оптимальне рішення", text: "Ми використовуємо нашу мережу виробників для пошуку обладнання, що точно відповідає технічним та комерційним вимогам клієнта." },
      { icon: "truck", title: "Супровід до постачання", text: "Ми ведемо процес від підтвердження замовлення до постачання, координації монтажу та введення в експлуатацію — інформуючи вас на кожному кроці." },
      { icon: "handshake", title: "Постійне партнерство", text: "Наша співпраця не завершується після постачання. Ми залишаємося доступними для технічних консультацій, майбутніх розширень та вдосконалення виробництва." },
    ],
  },
  contact: {
    eyebrow: "Зв'яжіться з нами",
    title: "Зв'яжіться з нами",
    subtitle: "Маєте питання щодо обладнання, потребуєте комерційної пропозиції або хочете обговорити виробничі завдання? Ми тут, щоб допомогти.",
    infoTitle: "Контактна інформація",
    infoText: "Зв'яжіться з нами напряму — зазвичай ми відповідаємо протягом одного робочого дня.",
    addressLabel: "Адреса офісу",
    address: ["вул. Троїцька, 50, офіс 1", "Одеса, Одеська область", "Україна, 65045"],
    emailLabel: "Електронна пошта",
    emails: ["info@weave.com.ua", "anatoliy.a.yefremov@gmail.com"],
    phoneLabel: "Номери телефонів",
    phones: ["+380 67 484 06 70", "+45 22 52 27 44"],
    hoursLabel: "Години роботи",
    hours: ["Понеділок – п'ятниця: 9:00 – 18:00 (EET)", "Субота – неділя: вихідний"],
    formTitle: "Надіслати повідомлення",
    formText: "Розкажіть нам про ваші потреби в обладнанні, і ми підготуємо індивідуальну пропозицію.",
    form: {
      firstName: "Ім'я", lastName: "Прізвище",
      email: "Електронна пошта", phone: "Номер телефону",
      company: "Компанія / Організація",
      subject: "Напрямок запиту",
      subjectPlaceholder: "Оберіть напрямок...",
      message: "Повідомлення",
      submit: "Надіслати",
      success: "Дякуємо! Ваше повідомлення надіслано. Ми зв'яжемося з вами найближчим часом.",
      error: "Будь ласка, заповніть усі обов'язкові поля.",
    },
  },
  footer: {
    tagline: "Ваш надійний партнер у текстильному машинобудуванні — з'єднуємо виробників зі світовими рішеннями.",
    servicesLabel: "Послуги", companyLabel: "Компанія", contactLabel: "Контакти",
    aboutLabel: "Про IDG-Weave", allServicesLabel: "Всі послуги",
    copyright: "Усі права захищені.",
  },
};

export const content: Record<Lang, SiteContent> = { en, ua };

export const company = {
  name: "IDG-Weave",
  fullName: "Industrial Development Group",
};
