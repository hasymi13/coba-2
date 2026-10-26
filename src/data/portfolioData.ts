import { Project, Service, Experience, Testimonial } from '../types';
import heroPortrait from '../assets/images/hero_somaida_portrait_1792383042044.jpg';
import aboutWorkspace from '../assets/images/about_somaida_workspace_1792383042817.jpg';
import fintechApp from '../assets/images/project_fintech_app_1792382533942.jpg';
import ecommerceMinimal from '../assets/images/project_ecommerce_minimal_1792382533781.jpg';

export const HERO_IMAGE = heroPortrait;
export const ABOUT_IMAGE = aboutWorkspace;
export const FINTECH_IMAGE = fintechApp;
export const ECOMMERCE_IMAGE = ecommerceMinimal;

export const PROJECTS: Project[] = [
  {
    id: 'apex-vault',
    title: 'ApexVault Neo-Bank & Crypto Interface',
    category: 'mobile',
    categoryLabel: 'Mobile App UI/UX',
    description: 'Next-generation banking experience with instant biometric payments, multi-asset crypto portfolios, and micro-animations.',
    longDescription: 'ApexVault was designed to demystify complex decentralized finance without alienating traditional banking users. Featuring intuitive gesture-driven card interactions, contextual balance privacy shields, and a custom dark mode palette with violet and indigo luminous accents.',
    image: FINTECH_IMAGE,
    client: 'Apex Financial Technologies',
    year: '2025',
    role: 'Lead UI/UX Designer',
    metrics: '+184% Daily Active Engagement · 4.9 App Store Rating',
    tags: ['Mobile UI', 'Figma', 'Fintech', 'Design System', 'Micro-Interactions'],
    deliverables: ['Design System', 'Interactive High-Fi Prototype', 'iOS & Android App UI', 'Motion Design Specs'],
  },
  {
    id: 'archetype-minimal',
    title: 'Archetype Objects Luxury E-Commerce',
    category: 'web-dev',
    categoryLabel: 'Web Design & Frontend',
    description: 'Minimalist editorial digital commerce platform for architectural furniture and handmade stoneware ceramics.',
    longDescription: 'Engineered for an award-winning Scandinavian design studio, Archetype Objects pairs brutalist typography with generous breathing space. Built with sub-second page transitions, dynamic material configurators, and an immersive editorial catalog view.',
    image: ECOMMERCE_IMAGE,
    client: 'Studio Lin & Archetype Nordics',
    year: '2024',
    role: 'Full-Stack UI/UX & Frontend Developer',
    metrics: '3.2x Checkout Conversion Lift · 0.4s Fast LCP',
    tags: ['React', 'Tailwind CSS', 'Editorial E-Commerce', 'Fluid Animations'],
    deliverables: ['Custom E-Commerce Architecture', 'Brand Guideline System', 'Performance Optimization'],
  },
  {
    id: 'zenith-ai-os',
    title: 'Zenith Studio Creative Workflow Engine',
    category: 'ui-ux',
    categoryLabel: 'Product & Web App',
    description: 'Cloud collaborative canvas combining node-based asset pipelines with seamless real-time team reviews.',
    longDescription: 'Zenith Studio replaces fragmented creative stacks with a single fluid workspace. Designed with glassmorphic spatial panels, low-latency drag-and-drop mechanics, and custom animated kinetic indicators.',
    image: FINTECH_IMAGE, // fallback or paired showcase
    client: 'Zenith Interactive Labs',
    year: '2024',
    role: 'Principal UX Architect',
    metrics: '42,000+ Active Creative Teams',
    tags: ['Web Application', 'SaaS', 'Canvas UI', 'Framer Motion'],
    deliverables: ['Information Architecture', 'Complete Component Library', 'Accessibility Audit'],
  },
  {
    id: 'solaris-spatial',
    title: 'Solaris Smart Environmental Dashboard',
    category: 'web-dev',
    categoryLabel: 'Data & Dashboard',
    description: 'Interactive real-time solar yield and battery telemetry dashboard with kinetic 3D micro-charts.',
    longDescription: 'A high-contrast interface designed for rapid situational awareness across commercial solar arrays. Features reactive ambient gradient gauges, tabular numerical precision, and buttery smooth animated transitions.',
    image: ECOMMERCE_IMAGE, // fallback or paired showcase
    client: 'Solaris Energy Group',
    year: '2025',
    role: 'Senior UI/UX & Frontend Specialist',
    metrics: '99.98% Telemetry Uptime Visualized',
    tags: ['Dashboard', 'Data Visualization', 'Tailwind', 'Real-time UI'],
    deliverables: ['Design Tokens', 'Responsive Web Layouts', 'Dark Mode Architecture'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    subtitle: 'Human-centered interfaces crafted with pixel precision',
    description: 'Transforming complex product workflows into intuitive, engaging user experiences through deep user research, wireframing, and rigorous usability testing.',
    iconName: 'Layout',
    skills: ['User Journey Mapping', 'Wireframing & Prototyping', 'Design Systems & Tokens', 'Usability Testing'],
    deliverables: ['Figma Source Files', 'Interactive Clickable Prototypes', 'Component Documentation'],
  },
  {
    id: 'frontend',
    title: 'Frontend Web Development',
    subtitle: 'High-performance web apps built with modern React & Motion',
    description: 'Bridging design and engineering with clean, accessible, and ultra-performant code. Specializing in fluid micro-interactions and responsive layouts.',
    iconName: 'Code2',
    skills: ['React 19 & TypeScript', 'Tailwind CSS', 'Framer Motion / Motion', 'Next.js Architecture'],
    deliverables: ['Production-Ready Code', 'Mobile-First Responsive UI', 'Lighthouse 95+ Scores'],
  },
  {
    id: 'mobile-ui',
    title: 'Mobile App Experiences',
    subtitle: 'Native feel with smooth gesture navigation & kinetic feedback',
    description: 'Creating stunning iOS and Android interfaces that feel delightfully tactile, memorable, and aligned with modern platform design standards.',
    iconName: 'Smartphone',
    skills: ['iOS Human Interface', 'Android Material 3', 'Haptic Touch Design', 'Micro-Animations'],
    deliverables: ['Full App Screens', 'Interaction Specifications', 'Developer Handoff Kits'],
  },
  {
    id: 'motion-brand',
    title: 'Creative Motion & Branding',
    subtitle: 'Distinctive visual identities and physics-based animations',
    description: 'Giving your digital brand a beating pulse through curated micro-animations, animated SVGs, page transitions, and cohesive visual storytelling.',
    iconName: 'Sparkles',
    skills: ['Kinetic Typography', 'SVG Morphing & Paths', 'Scroll-Linked Motion', 'Sound & Haptic Sync'],
    deliverables: ['Lottie / Motion Assets', 'Brand Motion Guidelines', 'Visual Identity Kits'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    period: '2023 - Present',
    role: 'Lead UI/UX & Creative Technologist',
    company: 'HyperCraft Studio',
    location: 'Melbourne, Australia / Remote',
    description: 'Leading design direction for international tech startups and enterprise SaaS products, orchestrating design systems and high-fidelity prototypes.',
    achievements: [
      'Scaled design tokens across 6 web and mobile applications',
      'Increased average customer onboarding speed by 43%',
      'Mentored a team of 5 junior designers and frontend developers',
    ],
  },
  {
    id: '2',
    period: '2021 - 2023',
    role: 'Senior UI/UX Designer',
    company: 'Vanguard Interactive',
    location: 'Sydney, Australia',
    description: 'Conceptualized and delivered cross-platform fintech applications, creative web experiences, and interactive marketing platforms.',
    achievements: [
      'Delivered 28+ end-to-end client design projects on time',
      'Awarded Best Mobile UI at Awwwards & CSSDA nominee',
    ],
  },
  {
    id: '3',
    period: '2019 - 2021',
    role: 'Frontend UI Developer & Designer',
    company: 'Nova Digital Agency',
    location: 'Victoria, Australia',
    description: 'Collaborated directly with product managers to transform Figma wireframes into pixel-perfect React components with custom motion physics.',
    achievements: [
      'Reduced component bundle size by 35% through modular refactoring',
      'Built reusable library of 50+ animated interactive components',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Somaida transformed our clunky SaaS platform into an absolute work of art. The animations are buttery smooth, and our user signups jumped by 72% within the first month after release.',
    author: 'Marcus Vance',
    role: 'VP of Product',
    company: 'Apex Technologies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Rarely do you find someone who possesses both world-class visual design sensibility and deep frontend coding mastery. Somaida nailed every micro-interaction and delivery milestone.',
    author: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Archetype Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Working with Somaida was effortless. The fluid anime-inspired motion transitions brought our mobile app to life in a way our competitors simply cannot match.',
    author: 'David Tan',
    role: 'Founder & CEO',
    company: 'Zenith Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
  },
];

export const SOCIAL_LINKS = [
  { name: 'Dribbble', url: 'https://dribbble.com', label: 'dribbble' },
  { name: 'Behance', url: 'https://behance.net', label: 'behance' },
  { name: 'Instagram', url: 'https://instagram.com', label: 'instagram' },
  { name: 'GitHub', url: 'https://github.com', label: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', label: 'linkedin' },
];

export const SKILL_ITEMS = [
  { name: 'Figma & Design Systems', level: 96, category: 'Design' },
  { name: 'UI/UX Architecture', level: 94, category: 'Design' },
  { name: 'React 19 & TypeScript', level: 92, category: 'Code' },
  { name: 'Framer Motion & Animations', level: 95, category: 'Code' },
  { name: 'Tailwind CSS & Styling', level: 98, category: 'Code' },
  { name: 'Mobile App Prototyping', level: 90, category: 'Design' },
];
