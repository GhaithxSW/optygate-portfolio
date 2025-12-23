import { Project } from "@/types/project";

export const projects: Project[] = [
  // 1. Art Gate VR - Showstopper: VR, WebGL, cross-platform, multiplayer
  {
    id: "1",
    slug: "art-gate-vr",
    title: "Art Gate VR",
    shortDescription:
      "Cross-platform immersive virtual art gallery experience enabling users to explore 583+ galleries and 5,700+ artworks across VR, web, and mobile with real-time multiplayer interaction.",
    fullDescription:
      "Art Gate is a comprehensive virtual reality art platform that brings museum and gallery experiences to users worldwide. The platform hosts over 583 galleries featuring 5,700+ artworks from prestigious Canadian institutions including the Art Gallery of Ontario, National Gallery of Canada, and McMichael Canadian Art Collection. Users can explore exhibitions, interact with artworks, and communicate with other visitors in real-time across all platforms - whether on Meta Quest VR headsets, desktop browsers, or mobile devices. The system includes a full content management system for galleries to upload and manage their exhibitions, process payments, and track visitor engagement.",
    industry: "Arts & Culture",
    technologies: [
      "Unity",
      "URP",
      "Normcore",
      "Agora",
      "Meta SDK",
      "WebGL",
      "Laravel",
      "PHP",
      "MySQL",
      "AWS",
      "Stripe",
      "Next.js",
    ],
    thumbnailImage: "/images/projects/artgate-1.jpg",
    images: [
      "/images/projects/artgate-1.jpg",
      "/images/projects/artgate-2.jpg",
      "/images/projects/artgate-3.jpg",
      "/images/projects/artgate-4.jpg",
    ],
    challenge:
      "Delivering a high-fidelity virtual museum experience on web browsers presented significant technical hurdles due to browser resource limitations. The platform needed to handle massive 3D environments with thousands of high-resolution artworks while maintaining smooth performance across VR headsets, desktops, and mobile devices - all while enabling real-time cross-platform multiplayer interaction with voice chat.",
    solution:
      "Optygate built the WebGL and Mobile WebGL applications from scratch using optimized Unity pipelines (URP), implemented aggressive asset streaming with Asset Bundles, and utilized Memory Profiler for mobile-specific optimizations. The team integrated Agora for cross-platform voice communication, contributed improvements to the VR application, fixed critical bugs across all platforms, and architected the entire AWS cloud infrastructure including CDN delivery via CloudFront for global performance.",
    results: [
      { metric: "Platforms", value: "VR, Web, Mobile" },
      { metric: "Voice Chat", value: "Cross-platform" },
      { metric: "Streaming", value: "Asset Bundles" },
      { metric: "Infra", value: "AWS + CDN" },
    ],
    link: "https://www.artgatevr.com/",
    featured: true,
    year: "2022 - Ongoing",
  },
  // 2. 1ov1 Talent Portal - Complex enterprise SaaS, 6 user roles
  {
    id: "2",
    slug: "1ov1-talent-portal",
    title: "1ov1 Talent Portal",
    shortDescription:
      "Comprehensive talent and casting management platform streamlining profile management, booking workflows, and financial operations for casting agencies.",
    fullDescription:
      "A full-featured talent portal designed for casting agencies to manage their entire operation. The platform includes a 12-step talent onboarding flow, role-based dashboards for owners, admins, staff, accountants, casting directors, and talent. Features a complete booking workflow (Production → Project → Booking → Assignment), invoicing and payment ledger system, public shareable galleries for casting directors, real-time notifications, and secure document management with AWS S3 integration.",
    industry: "Media & Entertainment",
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Next.js 14",
      "React",
      "Material-UI",
      "AWS",
      "Docker",
      "JWT",
    ],
    thumbnailImage: "/images/projects/1ov1-portal.png",
    images: ["/images/projects/1ov1-portal.png"],
    challenge:
      "Casting agencies struggled with fragmented systems for managing talent profiles, coordinating bookings across multiple productions, and tracking complex financial transactions including commissions, taxes, and fees. Manual processes led to scheduling conflicts, missed communications, and accounting errors.",
    solution:
      "Optygate contributed to the backend development and handled all cloud infrastructure, implementing AWS services for file storage (S3), transactional emails (SES), push notifications (SNS), and database hosting (RDS), ensuring scalable and secure deployment with Docker containerization.",
    results: [
      { metric: "User Roles", value: "6 Types" },
      { metric: "Onboarding Steps", value: "12 Automated" },
      { metric: "Business Modules", value: "30+" },
      { metric: "Notifications", value: "Real-time" },
    ],
    link: "https://1ov1portal.com",
    featured: true,
    year: "2024",
  },
  // 3. Learning Management System - Modern full-stack with RTL, live video, gamification
  {
    id: "3",
    slug: "learning-management-system",
    title: "Learning Management System",
    shortDescription:
      "Comprehensive educational platform featuring video-based learning, live classes, one-to-one tutoring, quizzes, and gamification with full Arabic RTL support.",
    fullDescription:
      "A full-featured Learning Management System offering recorded video lessons with progress tracking, interactive smart notes, live group classes via Jitsi video integration, one-to-one private tutoring with teacher availability scheduling, and a Q&A system for asynchronous student support. The platform includes timed MCQ quizzes with instant feedback, subscription management with Stripe payments, and a gamification points system. Built with Arabic RTL as the primary language and English as secondary, the system supports students, teachers, and administrators with role-specific dashboards and features.",
    industry: "Education",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Zustand",
      "TanStack Query",
      "Framer Motion",
      "Laravel 12",
      "PHP 8.2",
      "PostgreSQL",
      "Redis",
      "Filament 3.2",
      "Laravel Sanctum",
      "Spatie Permissions",
      "AWS S3",
      "Stripe",
      "Twilio SMS",
      "Pusher",
      "Jitsi",
      "Docker",
      "Playwright",
    ],
    thumbnailImage: "/images/projects/lms.png",
    images: [],
    challenge:
      "Building a comprehensive educational platform required full Arabic RTL support alongside English, real-time video capabilities for live classes and tutoring, complex scheduling systems for teacher availability, and a robust assessment system - all while ensuring smooth performance across varying internet conditions.",
    solution:
      "Optygate developed the entire platform from scratch, implementing a Laravel 12 backend with Filament admin panel and a Next.js 15 frontend with full internationalization support. The team integrated Jitsi for live video sessions, Pusher for real-time notifications and messaging, Stripe for subscription payments, and built a comprehensive gamification system to drive student engagement.",
    results: [
      { metric: "Languages", value: "Arabic RTL + EN" },
      { metric: "Video Learning", value: "Live & Recorded" },
      { metric: "User Roles", value: "3 Dashboards" },
      { metric: "Engagement", value: "Gamified" },
    ],
    featured: true,
    year: "2025",
  },
  // 4. PayReb - Modern fintech with RTL, GSAP animations
  {
    id: "4",
    slug: "payreb",
    title: "PayReb",
    shortDescription:
      "Arabic-first digital wallet and fintech platform website for a licensed payment services provider in Syria, featuring RTL design, currency exchange rates, and mobile app promotion.",
    fullDescription:
      "PayReb is a comprehensive digital wallet platform offering financial services for individuals and businesses in Syria. The website showcases personal wallet services, virtual Visa/Mastercard cards for international online shopping, money transfers, bill payments, and currency exchange (USD, TRY, EUR). For businesses, it features payment gateway integration, merchant solutions, and developer APIs. Built with an Arabic-first RTL approach using Almarai typography, the site includes interactive components like animated counters, bento grids, and GSAP-powered animations, along with full SEO optimization with JSON-LD structured data.",
    industry: "Financial Services",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion 12",
      "GSAP 3.13",
      "Tabler Icons",
      "Lucide React",
      "Nodemailer",
      "Google reCAPTCHA",
      "JSON-LD",
      "Web Vitals",
      "Turbopack",
    ],
    thumbnailImage: "/images/projects/payreb.png",
    images: ["/images/projects/payreb.png"],
    challenge:
      "Building a fintech website for the Syrian market required a fully Arabic RTL-first design approach, with careful attention to typography, animations that work in reverse direction, and comprehensive financial service presentation across individuals, businesses, and developers.",
    solution:
      "Optygate developed a modern Next.js website with complete RTL support, implementing custom Arabic navigation, RTL-aware Framer Motion and GSAP animations, interactive UI components (MagicBento grid, animated counters, typewriter effects), and comprehensive SEO with Arabic keyword optimization and JSON-LD structured data schemas.",
    results: [
      { metric: "Design", value: "Arabic RTL-first" },
      { metric: "Features", value: "Bento Grid" },
      { metric: "Apps", value: "iOS & Android" },
      { metric: "SEO", value: "JSON-LD Rich" },
    ],
    link: "https://payreb.optygate.com/",
    featured: false,
    year: "2025",
  },
  // 5. AKBag - Full-stack React/Laravel with crawler automation
  {
    id: "5",
    slug: "akbags",
    title: "AKBag",
    shortDescription:
      "Leather goods gallery application with React frontend, Laravel admin panel, and automated Yupoo image import system for product catalog management.",
    fullDescription:
      "AKBag is a leather goods gallery application serving as a product catalog for a leather goods supplier. The platform features a React-based frontend with category browsing, product details, and image galleries. The Laravel admin panel includes an automated Yupoo image import system that crawls and extracts product images, storing them on AWS S3. The system supports category management, product organization, and provides a streamlined workflow for maintaining an up-to-date product catalog from external sources.",
    industry: "Retail & E-commerce",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Laravel 12",
      "Filament 3.3",
      "Laravel Sanctum",
      "AWS S3",
      "Symfony DOM Crawler",
      "MySQL",
    ],
    thumbnailImage: "/images/projects/akbags.png",
    images: ["/images/projects/akbags.png"],
    challenge:
      "The client needed a modern product catalog to showcase their leather goods inventory, with the ability to automatically import product images from Yupoo galleries rather than manually uploading each image, saving significant time on catalog maintenance.",
    solution:
      "Optygate developed a full-stack solution with a React frontend for the public gallery and a Laravel backend with Filament admin panel. The team built a custom Yupoo crawler using Symfony DOM Crawler that automatically extracts and imports product images to AWS S3, enabling efficient catalog updates with minimal manual effort.",
    results: [
      { metric: "Frontend", value: "React + Vite" },
      { metric: "Admin", value: "Filament Panel" },
      { metric: "Import", value: "Auto Crawler" },
      { metric: "Storage", value: "AWS S3" },
    ],
    link: "https://akbags.vercel.app/",
    featured: false,
    year: "2025",
  },
  // 6. Reddit Engagement Automation - Unique AI/automation project
  {
    id: "6",
    slug: "reddit-engagement-automation",
    title: "Reddit Engagement Automation",
    shortDescription:
      "Intelligent n8n automation system that discovers relevant Reddit discussions, generates AI-powered contextual comments, and manages reputation through automated vote monitoring.",
    fullDescription:
      "A sophisticated marketing automation solution built for a medical tourism company to increase brand awareness and engage potential customers on Reddit. The system automatically searches for relevant posts across multiple subreddits based on targeted keywords, analyzes post content to ensure relevance, and uses GPT to generate helpful, informal comments that provide genuine value to discussions. The automation includes a reputation management layer that continuously monitors comment performance and automatically removes any comments that receive negative reception (below -1 votes) to protect brand reputation.",
    industry: "Healthcare",
    technologies: [
      "n8n",
      "OpenAI GPT",
      "Reddit API",
      "PostgreSQL",
      "VPS",
    ],
    thumbnailImage: "/images/projects/reddit-automation.png",
    images: [],
    challenge:
      "The client needed to build organic brand awareness on Reddit - a platform notoriously hostile to marketing - while maintaining authenticity and avoiding spam detection. Manual engagement was time-consuming and inconsistent, and negative community reactions could damage brand reputation quickly.",
    solution:
      "Optygate developed a fully automated n8n workflow that intelligently identifies relevant discussions using keyword-based subreddit monitoring, generates contextually appropriate and helpful comments using GPT, and implements a self-protecting reputation system that tracks comment votes in PostgreSQL and removes underperforming content before it damages credibility.",
    results: [
      { metric: "Daily Comments", value: "10 Auto" },
      { metric: "Monthly Upvotes", value: "300+" },
      { metric: "Monitoring", value: "Multi-sub" },
      { metric: "Intervention", value: "Zero" },
    ],
    featured: false,
    year: "2025",
  },
  // 7. Horizon Medical Center - Clean modern Next.js
  {
    id: "7",
    slug: "horizon-medical-center",
    title: "Horizon Medical Center",
    shortDescription:
      "Modern, responsive medical clinic website for a premium healthcare facility in Dubai Healthcare City featuring multi-step appointment booking and dark/light mode support.",
    fullDescription:
      "A polished marketing website for Horizon Medical Center, a premium healthcare facility in Dubai Healthcare City. The website showcases 8 medical services, a team of 45+ specialists across 12 departments, and features a multi-step appointment booking wizard. Built with a luxury/refined aesthetic combining deep navy backgrounds with sage green health accents, the site includes individual doctor profile pages, service detail pages, a news/blog section, patient testimonials, and comprehensive contact information with FAQ. The design supports both dark and light modes with system-aware auto-switching.",
    industry: "Healthcare",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion 12",
      "Lucide React",
      "Google Fonts",
    ],
    thumbnailImage: "/images/projects/horizon-medical.png",
    images: [],
    challenge:
      "The client needed a premium, modern website that would convey trust and professionalism while providing a seamless patient experience for browsing services, learning about doctors, and booking appointments online.",
    solution:
      "Optygate developed a fully responsive Next.js website with a refined luxury aesthetic, implementing a multi-step appointment booking wizard, individual pages for doctors and services, dark/light theme support, and comprehensive SEO optimization with full metadata, Open Graph, and Twitter Cards.",
    results: [
      { metric: "Pages", value: "Services + Doctors" },
      { metric: "Theme", value: "Dark/Light" },
      { metric: "Booking", value: "Multi-step Wizard" },
      { metric: "SEO", value: "Full Metadata" },
    ],
    link: "https://horizon.optygate.com",
    featured: false,
    year: "2025",
  },
  // 8. AbbaMedix - Complex e-commerce with medical compliance
  {
    id: "8",
    slug: "abbamedix",
    title: "AbbaMedix",
    shortDescription:
      "Medical cannabis e-commerce platform with patient verification, prescription tracking, and cannabinoid filtering built on Shopify with a custom Strapi backend.",
    fullDescription:
      "AbbaMedix is a comprehensive medical cannabis dispensary platform serving patients with prescription-based cannabis products in Canada. The platform features a custom Shopify storefront with patient authentication, prescription limit tracking with gram deductions, advanced product filtering by THC/CBD percentages and terpene profiles, and strain categorization. The system integrates with Ample API for patient verification and order processing, includes age verification gates for compliance, and provides a full patient dashboard for managing orders, prescriptions, and favorites.",
    industry: "Healthcare",
    technologies: [
      "Shopify",
      "Liquid",
      "Strapi CMS",
      "Node.js",
      "PostgreSQL",
      "Knex.js",
      "AWS S3",
      "JWT",
      "AES-256",
      "Ample API",
      "Webpack",
      "Sentry",
    ],
    thumbnailImage: "/images/projects/abbamedix.png",
    images: [],
    challenge:
      "The existing platform had numerous problems and couldn't rely solely on Ample APIs. The client faced ongoing bugs, performance issues, compliance requirements, and needed new features while maintaining a complex integration between Shopify, Strapi, and the third-party Ample medical cannabis system.",
    solution:
      "Optygate took over the platform's development and support, tackling bugs, implementing new features, ensuring compliance requirements, and significantly improving both the backend and storefront performance. The team enhanced the Strapi backend structure, optimized API speed, and continuously maintains the platform to meet evolving medical cannabis regulations.",
    results: [
      { metric: "Performance", value: "Improved" },
      { metric: "API Speed", value: "Optimized" },
      { metric: "Languages", value: "Bilingual" },
      { metric: "Support", value: "Ongoing" },
    ],
    link: "https://abbamedix.com/",
    featured: false,
    year: "2022 - Ongoing",
  },
  // 9. Aesthetic Airways - CRM, automation workflows, lead tracking
  {
    id: "9",
    slug: "aesthetic-airways",
    title: "Aesthetic Airways",
    shortDescription:
      "Medical tourism platform with custom CRM, lead tracking, and automation workflows for a cosmetic surgery clinic in Istanbul serving international patients.",
    fullDescription:
      "Aesthetic Airways is a medical tourism platform for a cosmetic surgery and dental clinic based in Istanbul, Turkey, serving international patients from Europe, UK, and the US. The platform features a WordPress website with DIVI builder, integrated with a custom-built CRM system for lead management and pipeline tracking. Comprehensive user behavior tracking captures page views, clicks, form interactions, scroll depth, and session data. Make (Integromat) automations handle instant lead alerts, follow-up sequences, CRM record creation, and daily statistics reporting across WhatsApp, email, and SMS channels.",
    industry: "Healthcare",
    technologies: [
      "WordPress",
      "DIVI Theme Builder",
      "Custom CRM System",
      "Custom REST APIs",
      "Make (Integromat)",
      "JavaScript",
      "Google reCAPTCHA",
      "WhatsApp Business API",
      "Google Analytics",
    ],
    thumbnailImage: "/images/projects/aestheticairways.png",
    images: ["/images/projects/aestheticairways.png"],
    challenge:
      "The client needed a comprehensive lead management system that could capture, track, and nurture international patients across multiple touchpoints while providing full visibility into the sales pipeline and marketing attribution from various ad sources (Google, Facebook, Instagram).",
    solution:
      "Optygate improved the website and built a complete lead management ecosystem including custom CRM integration, REST APIs for data synchronization, comprehensive user behavior tracking, Make automation workflows for multi-channel notifications, and an automated bot to contact and categorize incoming leads.",
    results: [
      { metric: "Lead Management", value: "Custom CRM" },
      { metric: "Lead Contact", value: "Auto Bot" },
      { metric: "Tracking", value: "Full Behavior" },
      { metric: "Notifications", value: "Real-time" },
    ],
    link: "https://aestheticairways.com/",
    featured: false,
    year: "2024",
  },
  // 10. Nectar - Rich GSAP animations, marketing site
  {
    id: "10",
    slug: "nectar",
    title: "Nectar",
    shortDescription:
      "Modern marketing website for a MarTech/AdTech company showcasing their Web3-powered Non-Fungible Audiences™ platform with rich animations and interactive elements.",
    fullDescription:
      "Nectar is a marketing technology company that helps brands build direct relationships with their customers using Web3 technology and smart contracts. The website serves as their primary marketing and lead generation platform, featuring a full-page scroll experience with smooth section transitions, rich GSAP-powered animations, and an interactive product diagram showcasing their proprietary Non-Fungible Audiences™ (NFA) platform. The site includes separate lead capture flows for publishers and advertisers, integrated with Zoho CRM for sales pipeline management.",
    industry: "Technology",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "GSAP",
      "ScrollMagic",
      "Lottie",
      "Font Awesome",
      "Zoho CRM",
      "CloudFront",
    ],
    thumbnailImage: "/images/projects/nectar.png",
    images: ["/images/projects/nectar.png"],
    challenge:
      "The client required a visually striking, animation-rich marketing website that would effectively communicate their complex Web3/blockchain-based advertising technology to both publishers and advertisers, while maintaining smooth performance across all devices.",
    solution:
      "Optygate redesigned the website based on the client's specifications, implementing a full-page scroll experience with color-transitioning sections, GSAP-powered animations, ScrollMagic scroll-triggered effects, and an interactive SVG diagram with mouse-following elements. The team integrated Zoho CRM for lead capture with dynamic forms tailored to different business types.",
    results: [
      { metric: "Experience", value: "Full-page" },
      { metric: "Animations", value: "GSAP Rich" },
      { metric: "Lead Flows", value: "Dual CRM" },
      { metric: "Design", value: "Responsive" },
    ],
    link: "https://www.nectarfirst.com/",
    featured: false,
    year: "2022",
  },
  // 11. Game Changerz - Sports platform with subscriptions
  {
    id: "11",
    slug: "game-changerz",
    title: "Game Changerz",
    shortDescription:
      "Sports betting information platform providing expert picks, video content, and subscription-based packages across NFL, NBA, NHL, MLB, and NCAA sports.",
    fullDescription:
      "Game Changerz is a comprehensive sports betting destination platform that connects users with expert analysts and their betting picks. The platform features video streaming content via Vimeo, expert profiles with subscription packages, blog articles and stories organized by sports categories, and a dynamic advertisement system. Users can purchase expert packages through Stripe-powered checkout, browse picks across major sports leagues, and access premium content through tiered subscriptions. The system includes a full CMS for content and expert management, email notifications, and geolocation-based content targeting.",
    industry: "Sports",
    technologies: [
      "React",
      "React Router",
      "Bootstrap",
      "SASS",
      "Strapi CMS",
      "Node.js",
      "PostgreSQL",
      "Knex.js",
      "AWS S3",
      "Stripe",
      "Vimeo API",
      "SendGrid",
    ],
    thumbnailImage: "/images/projects/gamechangerz.png",
    images: ["/images/projects/gamechangerz.png"],
    challenge:
      "The platform was built on deprecated and outdated technologies (Strapi 3.4, React 17, Node.js 10-14) with the client unwilling to upgrade to modern versions. Optygate had to implement improvements, fix bugs, and optimize performance while working within the constraints of the legacy stack.",
    solution:
      "Optygate improved the backend structure and optimized API response speeds without breaking compatibility with the older framework versions. The team fixed numerous bugs across both frontend and backend, added new features, and enhanced overall platform stability while respecting the client's requirement to maintain the existing technology versions.",
    results: [
      { metric: "API Speed", value: "Improved" },
      { metric: "Bug Fixes", value: "Multiple" },
      { metric: "Stability", value: "Enhanced" },
      { metric: "Features", value: "New Added" },
    ],
    link: "https://gamechangerz.ca/",
    featured: false,
    year: "2022",
  },
  // 12. Kabinetry - WordPress with comprehensive tracking
  {
    id: "12",
    slug: "kabinetry",
    title: "Kabinetry",
    shortDescription:
      "Custom cabinet maker website for a GTA-based millwork company featuring location-based SEO pages, portfolio showcases, and comprehensive lead tracking.",
    fullDescription:
      "Kabinetry is a marketing website for a trusted custom cabinet maker serving the Greater Toronto Area, specializing in high-end kitchen cabinets, custom cabinetry, and millwork for residential and commercial spaces. The website features service pages, location-specific landing pages for local SEO (Toronto, Newmarket, Markham, Richmond Hill, North York), project portfolio galleries, customer testimonials, and lead capture forms. Built on WordPress with DIVI theme builder, the site includes comprehensive lead tracking with source attribution, form submission tracking, phone click tracking, and analytics integration.",
    industry: "Home & Construction",
    technologies: [
      "WordPress",
      "DIVI Theme Builder",
      "Google Analytics",
      "Google Tag Manager",
      "Lead Tracking System",
      "Contact Forms",
      "Local SEO",
      "Schema Markup",
    ],
    thumbnailImage: "/images/projects/kabinetry.png",
    images: ["/images/projects/kabinetry.png"],
    challenge:
      "The client needed a professional website that would generate leads from homeowners and commercial clients across multiple GTA locations, requiring strong local SEO presence and comprehensive tracking to measure marketing ROI.",
    solution:
      "Optygate developed a WordPress website with DIVI, implementing location-specific landing pages for each service area, portfolio galleries showcasing completed projects, and a comprehensive lead tracking system with source attribution, form tracking, phone click tracking, and CRM integration.",
    results: [
      { metric: "Locations", value: "5+ GTA Areas" },
      { metric: "SEO", value: "Local Optimized" },
      { metric: "Tracking", value: "Full Attribution" },
      { metric: "Design", value: "Mobile-first" },
    ],
    link: "https://kabinetry.ca/",
    featured: false,
    year: "2024",
  },
  // 13. SEDRA - Corporate site with animations
  {
    id: "13",
    slug: "sedra",
    title: "SEDRA",
    shortDescription:
      "Corporate website for a Saudi Arabian low-current systems provider, showcasing building technology solutions and services across the Kingdom.",
    fullDescription:
      "SEDRA is a corporate website for a low-current systems company founded in 2012, headquartered in Riyadh, Saudi Arabia. The company specializes in cutting-edge building technology systems focused on comfort, sustainability, and efficiency. The website presents the company's services, vision, mission, and value propositions with a modern design featuring full-page scrolling sections, image sliders, and smooth animations. Built on WordPress with Elementor page builder based on the client's requested design.",
    industry: "Home & Construction",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL",
      "Google Analytics",
      "Google reCAPTCHA",
      "Google Fonts",
      "Swiper.js",
      "fullPage.js",
      "jQuery",
    ],
    thumbnailImage: "/images/projects/sedra.png",
    images: ["/images/projects/sedra.png"],
    challenge:
      "The client needed a professional corporate website that would effectively communicate their expertise in low-current building systems to potential clients across Saudi Arabia, with a modern design that reflects their commitment to cutting-edge technology.",
    solution:
      "Optygate created a WordPress website with Elementor based on the client's design specifications, implementing full-page scrolling sections with fullPage.js, image sliders with Swiper.js, Google Analytics for tracking, and reCAPTCHA for form security.",
    results: [
      { metric: "Layout", value: "Full-page Scroll" },
      { metric: "Sliders", value: "Swiper Animated" },
      { metric: "Analytics", value: "GA Integrated" },
      { metric: "Design", value: "Responsive" },
    ],
    link: "https://sedra.optygate.com/",
    featured: false,
    year: "2024",
  },
  // 14. MIST - Bilingual corporate site
  {
    id: "14",
    slug: "mist",
    title: "MIST",
    shortDescription:
      "Bilingual corporate website for a Saudi Arabian IT and educational solutions company, featuring Arabic/English language support aligned with Saudi Vision 2030.",
    fullDescription:
      "MIST is a corporate website for an information technology and advanced educational solutions company founded in 2022 in Saudi Arabia. The company focuses on innovative technological solutions that support education and enhance digital transformation, aligned with Saudi Vision 2030. The website presents the company's services, mission, vision, and goals with full bilingual support for Arabic (RTL) and English, serving both public and private sector clients across the Kingdom.",
    industry: "Education",
    technologies: [
      "WordPress",
      "DIVI Theme Builder",
      "PHP",
      "MySQL",
      "Bilingual (AR/EN)",
    ],
    thumbnailImage: "/images/projects/mist.png",
    images: ["/images/projects/mist.png"],
    challenge:
      "The client needed a professional bilingual website that would effectively communicate their IT and educational technology services to both Arabic and English-speaking clients across Saudi Arabia's public and private sectors.",
    solution:
      "Optygate developed a WordPress website with DIVI, implementing full bilingual support with Arabic RTL and English versions, presenting the company's services, mission aligned with Saudi Vision 2030, and goals for supporting digital transformation in education.",
    results: [
      { metric: "Languages", value: "Arabic + English" },
      { metric: "RTL Support", value: "Full Arabic" },
      { metric: "Platform", value: "WordPress" },
      { metric: "Design", value: "Responsive" },
    ],
    link: "https://mistsa.net/",
    featured: false,
    year: "2024",
  },
  // 15. Wellness Route - Shopify migration
  {
    id: "15",
    slug: "wellness-route",
    title: "Wellness Route",
    shortDescription:
      "Shopify e-commerce store for a Canadian woman-owned self-care and wellness brand, migrated from WordPress with full product catalog and custom store setup.",
    fullDescription:
      "Wellness Route is an e-commerce platform for a woman-owned, small-batch self-care brand based in Canada, founded by Diana Jenne. The store offers curated wellness products including skincare (cleansers, toners, serums, moisturizers, masks, tools), body care, hair care, and subscription boxes (The ROUTEine Box). The platform features product collections, brand filtering, a wellness quiz, and subscription services with promotional offers.",
    industry: "Retail & E-commerce",
    technologies: [
      "Shopify",
      "Liquid Templates",
      "Theme Customization",
      "Product Migration",
      "Category Management",
      "Shipping Config",
    ],
    thumbnailImage: "/images/projects/wellness-route.png",
    images: ["/images/projects/wellness-route.png"],
    challenge:
      "The client had an existing WordPress store but needed a more robust e-commerce solution on Shopify, requiring a complete store build with all products, categories, and features migrated and enhanced.",
    solution:
      "Optygate created the Shopify store from the ground up, migrating all products from the previous WordPress site, setting up and customizing the theme, organizing products into categories (skincare, body care, hair care, collections, brands), configuring shipping options, and building new pages to deliver a complete wellness-focused shopping experience.",
    results: [
      { metric: "Store", value: "Full Shopify Build" },
      { metric: "Migration", value: "WordPress → Shopify" },
      { metric: "Categories", value: "Multi-level" },
      { metric: "Features", value: "Quiz + Subs" },
    ],
    link: "https://wellnessroute.com/",
    featured: false,
    year: "2022",
  },
];

export const industries = [
  "All",
  "Healthcare",
  "Education",
  "Media & Entertainment",
  "Arts & Culture",
  "Sports",
  "Technology",
  "Financial Services",
  "Home & Construction",
  "Retail & E-commerce",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByIndustry(industry: string): Project[] {
  if (industry === "All") return projects;
  return projects.filter((project) => project.industry === industry);
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return projects.slice(0, limit);

  return projects
    .filter(
      (project) =>
        project.slug !== currentSlug &&
        (project.industry === currentProject.industry ||
          project.technologies.some((tech) => currentProject.technologies.includes(tech)))
    )
    .slice(0, limit);
}
