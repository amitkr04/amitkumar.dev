import { FaPalette } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaServer } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
export const services = [
  {
    id: 1,
    title: "UI/UX Design",
    shortDescription:
      "Creating intuitive and visually appealing user interfaces that enhance user experience.",
    icon: FaPalette,
    details: {
      description:
        "We craft exceptional user experiences through thoughtful design and user-centered approach. Our UI/UX design services focus on creating interfaces that are not only beautiful but also functional and intuitive.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Responsive Design",
        "Design Systems",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      deliverables: [
        "User Journey Maps",
        "Interactive Prototypes",
        "Design Specifications",
        "Style Guides",
        "Usability Reports",
      ],
    },
  },
  {
    id: 2,
    title: "Mobile App Development",
    shortDescription:
      "Building native and cross-platform mobile applications for iOS and Android.",
    icon: MdOutlineSmartphone,
    color: "bg-green-500",
    details: {
      description:
        "Transform your ideas into powerful mobile applications. We develop high-performance, scalable mobile apps that provide seamless user experiences across all devices and platforms.",
      features: [
        "Native iOS & Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Performance Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      deliverables: [
        "Fully Functional Mobile App",
        "App Store Submission",
        "Technical Documentation",
        "Testing Reports",
        "Maintenance & Support",
      ],
    },
  },
  {
    id: 3,
    title: "SEO Optimization",
    shortDescription:
      "Improving your website's visibility and ranking on search engines.",
    icon: CiSearch,
    color: "bg-purple-500",
    details: {
      description:
        "Boost your online presence with our comprehensive SEO strategies. We help your website rank higher in search results, drive organic traffic, and increase conversions through proven optimization techniques.",
      features: [
        "Keyword Research & Analysis",
        "On-page Optimization",
        "Technical SEO Audit",
        "Content Strategy",
        "Link Building",
        "Performance Monitoring",
      ],
      technologies: [
        "Google Analytics",
        "SEMrush",
        "Ahrefs",
        "Google Search Console",
        "Screaming Frog",
      ],
      deliverables: [
        "SEO Audit Report",
        "Keyword Strategy",
        "Optimized Content",
        "Technical Improvements",
        "Monthly Performance Reports",
      ],
    },
  },
  {
    id: 4,
    title: "Backend API Development",
    shortDescription:
      "Developing robust and scalable server-side solutions and APIs.",
    icon: FaServer,
    color: "bg-orange-500",
    details: {
      description:
        "Build powerful backend systems that support your applications. We create secure, scalable, and efficient APIs and server-side solutions that handle your business logic and data management needs.",
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "Authentication & Security",
        "Cloud Integration",
        "Performance Optimization",
        "API Documentation",
      ],
      technologies: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Docker",
      ],
      deliverables: [
        "Scalable API Architecture",
        "Database Schema",
        "Security Implementation",
        "API Documentation",
        "Deployment & Monitoring",
      ],
    },
  },
  {
    id: 5,
    title: "Branding & Graphic Design",
    shortDescription:
      "Creating compelling visual identities and marketing materials for your brand.",
    icon: FaPaintBrush,

    details: {
      description:
        "Establish a strong brand presence with our comprehensive branding and graphic design services. We create memorable visual identities that communicate your brand's values and connect with your target audience.",
      features: [
        "Logo Design & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Brand Guidelines",
        "Packaging Design",
      ],
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Canva",
        "Sketch",
        "InDesign",
      ],
      deliverables: [
        "Brand Identity Package",
        "Logo Variations",
        "Brand Guidelines",
        "Marketing Collateral",
        "Digital Assets",
      ],
    },
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager at Walsis India",
    content:
      "Amit consistently delivers high-quality code and has excellent problem-solving skills. His attention to detail and user experience is remarkable.",
    rating: 5,
  },
  {
    name: "Rajesh Sharma",
    role: "Senior Developer at Webstack Academy",
    content:
      "Working with Amit was a great experience. He's quick to learn new technologies and always brings creative solutions to complex problems.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    content:
      "Amit has a great eye for design implementation. He translates designs into pixel-perfect, responsive interfaces with smooth animations.",
    rating: 5,
  },
];
