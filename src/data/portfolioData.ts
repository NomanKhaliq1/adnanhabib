export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: { value: string; label: string }[];
  image: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: {
    headings: string[];
    paragraphs: string[];
  };
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  category: string;
  shortDesc: string;
  iconName: string;
  items: string[];
}

export const PORTFOLIO_DATA = {
  meta: {
    name: "Adnan Habib",
    role: "Technology Consultant, Ecommerce Strategist & AI Solutions Expert",
    location: "Dubai, United Arab Emirates",
    email: "info@adnanhabib.com",
    phoneDubai: "+971 58 983 6436",
    phoneDubaiRaw: "+971589836436",
    whatsappPak: "+92 334 7331785",
    whatsappPakRaw: "923347331785",
    website: "https://adnanhabib.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/adnanlatki/",
      twitter: "https://x.com/adnannlatki",
      instagram: "https://www.instagram.com/adnanlatki",
      facebook: "https://www.facebook.com/adnannlatki",
      pinterest: "https://www.pinterest.com/adnannlatki/"
    }
  },

  trustMetrics: [
    {
      value: "14+",
      label: "Years Experience",
      desc: "Over a decade in software engineering & marketing"
    },
    {
      value: "300+",
      label: "Projects Delivered",
      desc: "High-performance websites, stores, and automations"
    },
    {
      value: "100%",
      label: "AI Powered Solutions",
      desc: "Next-generation intelligent workflows & autonomous agents"
    },
    {
      value: "Dubai",
      label: "Based Representation",
      desc: "Local physical verification and concierge services"
    }
  ],

  biography: {
    p1: "I am a Technology Consultant, Ecommerce Strategist, and on-ground Business Concierge in Dubai. Unlike standard developers, I combine deep technical expertise (custom full-stack web, AWS deployments, LLM integrations) with localized, high-value business representation.",
    p2: "Whether engineering highly optimized digital storefronts that generate millions in revenue, designing secure AWS cloud systems, automating supply chain workflows with autonomous AI agents, or inspecting physical supplier warehouses in Jebel Ali, I serve as a single trusted tech and operations partner."
  },

  timeline: [
    {
      year: "2012",
      title: "Started Web Development",
      description:
        "Began coding custom websites using HTML, CSS, JavaScript, and PHP, laying the foundation of technical expertise."
    },
    {
      year: "2014",
      title: "Digital Marketing",
      description:
        "Expanded into pay-per-click (PPC) campaigns, copywriting, and performance marketing to drive traffic to custom websites."
    },
    {
      year: "2016",
      title: "SEO Strategy",
      description:
        "Specialized in search engine optimization, technical site structures, and speed optimization to win organic search rankings."
    },
    {
      year: "2018",
      title: "Ecommerce Launchpad",
      description:
        "Engineered stores on Shopify, WooCommerce, and Magento, assisting brands in capturing the surging online retail wave."
    },
    {
      year: "2020",
      title: "Cloud & Scaling Hosting",
      description:
        "Transitioned setups to AWS, secure VPS, and serverless infrastructures, guaranteeing enterprise-grade speed and reliability."
    },
    {
      year: "2022",
      title: "AI Automation & Integration",
      description:
        "Integrated OpenAI, custom LLMs, and workflow tools like Make/Zapier to automate complex business processes and sales funnels."
    },
    {
      year: "2024",
      title: "Technology Leadership",
      description:
        "Steered technical strategy for global brands, managing cross-functional developers, marketers, and product launch lifecycles."
    },
    {
      year: "2025 - Present",
      title: "Dubai Business Concierge",
      description:
        "Established on-ground representation in Dubai, helping global businesses handle verification, logistics, site visits, and setup."
    }
  ],

  services: [
    {
      id: "tech-solutions",
      category: "Technology Solutions",
      shortDesc:
        "Custom web development and engineering tailored to optimize performance, scalability, and UX.",
      iconName: "Code2",
      items: [
        "Website Development",
        "Custom Web Applications",
        "WordPress Customization",
        "PHP & Laravel Development",
        "API Integrations",
        "CMS Development"
      ]
    },
    {
      id: "ecommerce",
      category: "Ecommerce Solutions",
      shortDesc:
        "End-to-end ecommerce development, marketplace operations, and conversion optimization.",
      iconName: "ShoppingBag",
      items: [
        "Shopify & Shopify Plus",
        "WooCommerce Development",
        "Magento Store Engineering",
        "Amazon UAE & KSA Operations",
        "Noon, Namshi & Trendyol Setup",
        "Marketplace Management",
        "Product Upload & Catalog Design",
        "Store Conversion Rate Optimization"
      ]
    },
    {
      id: "marketing",
      category: "Digital Marketing",
      shortDesc:
        "Data-driven user acquisition campaigns and technical search ranking domination.",
      iconName: "TrendingUp",
      items: [
        "Search Engine Optimization (SEO)",
        "Technical & On-Page SEO",
        "Local SEO & Google Maps",
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Facebook & Instagram)",
        "Social Media Management & Strategy",
        "Analytics & Customer Attribution",
        "Conversion Funnel Optimization"
      ]
    },
    {
      id: "cloud",
      category: "Hosting & Cloud",
      shortDesc:
        "Secure, reliable, and high-performance server administration and migration services.",
      iconName: "Cloud",
      items: [
        "Domain Registration & DNS",
        "Managed Web Hosting",
        "Virtual Private Servers (VPS)",
        "AWS Cloud Infrastructure",
        "Zero-Downtime Website Migration",
        "SSL, Firewalls & Security Audits",
        "Ongoing Maintenance & Backups"
      ]
    },
    {
      id: "ai",
      category: "AI Solutions",
      shortDesc:
        "Custom artificial intelligence integrations and workflow automation to scale operations.",
      iconName: "Bot",
      items: [
        "AI Chatbots for Customer Support",
        "GPT-4 API & Custom LLM Integration",
        "Workflow Automation (Make, Zapier)",
        "Autonomous AI Agents",
        "Business Process Automation",
        "AI Consulting & Feasibility Studies",
        "Prompt Engineering & Training"
      ]
    },
    {
      id: "concierge",
      category: "Dubai Business Concierge",
      shortDesc:
        "Your trusted eyes and ears on the ground in Dubai for business representation and verification.",
      iconName: "MapPin",
      items: [
        "Dubai Business Representation",
        "Supplier & Manufacturer Verification",
        "Property Inspections & Video Walkthroughs",
        "Site Inspections & Audits",
        "Local Document Collection & Delivery",
        "Luxury Shopping & Product Purchasing",
        "Live Video Site Visits",
        "Exhibition & Trade Show Representation",
        "Logistics & Freight Coordination",
        "Warehouse Visits & Stock Audit",
        "Custom Business Assistance"
      ]
    }
  ] as ServiceCategory[],

  industries: [
    "Healthcare",
    "Real Estate",
    "Construction",
    "Retail",
    "Finance",
    "Education",
    "Hospitality",
    "Manufacturing",
    "Startups",
    "Government",
    "Travel",
    "Ecommerce"
  ],

  projects: [
    {
      id: "case-1",
      title: "Luxury Ecommerce Replatforming",
      category: "Ecommerce Solutions",
      subtitle: "Shopify Plus Migration & ERP Integration for Dubai Fashion Retailer",
      challenge:
        "A luxury fashion retailer in Dubai was operating on a self-hosted legacy Magento 1 platform. Due to sluggish load times (5.4 seconds average), poor mobile checkouts, and manual inventory updates with their Oracle ERP system, they were losing high-intent buyers and spending massive resources on administration.",
      solution:
        "Engineered a headless-inspired custom Shopify Plus storefront using Liquid, Tailwind CSS, and lightweight JS. Developed a middleware backend using Node.js and AWS Lambda to sync inventory, customer profiles, and orders between Shopify and Oracle ERP in near real-time. Configured advanced multi-currency support and localized checkout for UAE, KSA, and international markets.",
      techStack: [
        "Shopify Plus",
        "Liquid",
        "Node.js",
        "AWS Lambda",
        "Tailwind CSS",
        "Oracle ERP API"
      ],
      metrics: [
        { value: "42%", label: "Conversion Rate Increase" },
        { value: "1.2s", label: "Page Load Speed" },
        { value: "300%", label: "Traffic Surge Capacity" }
      ],
      image: "/images/mockups/ecommerce_dashboard.png"
    },
    {
      id: "case-2",
      title: "AI-Powered Fleet Dispatcher",
      category: "AI Solutions",
      subtitle: "Custom Route Optimization & Dispatch Automation for Nexus Logistics",
      challenge:
        "Nexus Logistics, operating a fleet of 200+ delivery trucks across the UAE, relied on manual dispatchers to assign daily routes. This led to sub-optimal routing, high fuel expenditures, delayed delivery windows, and zero real-time progress tracking for regional customers.",
      solution:
        "Developed an AI-Powered Routing Dashboard. The system processes PDF delivery invoices using GPT-4 Vision, extracts destination addresses, and maps optimal multi-stop routes using genetic algorithms. Created a lightweight mobile web app for drivers to update delivery states, integrated with an interactive dispatch board for operations management.",
      techStack: [
        "Python",
        "FastAPI",
        "OpenAI GPT-4",
        "React.js",
        "PostgreSQL",
        "Google Maps API",
        "Docker"
      ],
      metrics: [
        { value: "18%", label: "Daily Fuel Reduction" },
        { value: "4h to 2m", label: "Dispatch Prep Time" },
        { value: "99.2%", label: "On-Time Delivery Rate" }
      ],
      image: "/images/mockups/ai_dispatcher.png"
    },
    {
      id: "case-3",
      title: "AWS Cloud Infrastructure Scaling",
      category: "Hosting & Cloud",
      subtitle: "High-Availability Serverless Architecture for Media Platform",
      challenge:
        "Veloce Media faced frequent database crashes and server timeouts during global breaking news events. Their single-instance VPS setup could not handle random traffic spikes, and lack of web application firewalls left them exposed to DDoS vulnerabilities.",
      solution:
        "Redesigned their infrastructure from scratch on AWS. Implemented an autoscaling Amazon ECS (Fargate) setup running Dockerized microservices behind an Application Load Balancer. Configured CloudFront CDN for global caching, Amazon RDS (Aurora) with read replicas for scalable querying, and AWS WAF to mitigate malicious security requests.",
      techStack: [
        "AWS (ECS, RDS, CloudFront, WAF)",
        "Terraform",
        "Docker",
        "GitHub Actions CI/CD",
        "Nginx"
      ],
      metrics: [
        { value: "100%", label: "Guaranteed Uptime" },
        { value: "65%", label: "Hosting Spend Reduction" },
        { value: "Grade-A", label: "Security Vulnerability Rating" }
      ],
      image: "/images/mockups/cloud_infrastructure.png"
    }
  ] as ProjectItem[],

  executionStrategy: [
    {
      step: "01",
      title: "Discover",
      desc: "Assessing system requirements, operational pain points, and commercial targets."
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Structuring technology architecture, timeline roadmaps, and scope milestones."
    },
    {
      step: "03",
      title: "Design",
      desc: "Crafting modern, high-converting UX/UI wireframes and system blueprints."
    },
    {
      step: "04",
      title: "Development",
      desc: "Building clean, scalable code across modern frontend, backend, and cloud stacks."
    },
    {
      step: "05",
      title: "Testing",
      desc: "Performing rigorous cross-device audits, security scans, and QA verification."
    },
    {
      step: "06",
      title: "Launch",
      desc: "Executing zero-downtime go-live deployments and marketplace rollouts."
    },
    {
      step: "07",
      title: "Growth",
      desc: "Continuous post-launch optimization, AI integration, and on-ground operational support."
    }
  ],

  whyChooseMe: [
    {
      title: "Technology Leadership",
      desc: "Building lightning-fast Web apps using clean, robust architectural design principles.",
      iconName: "Code2"
    },
    {
      title: "Ecommerce Architecture",
      desc: "Replatforming storefronts to Shopify Plus and managing GCC marketplaces.",
      iconName: "ShoppingBag"
    },
    {
      title: "AI Automation",
      desc: "Automating complex back-office business tasks using custom-trained autonomous AI agents.",
      iconName: "Sparkles"
    },
    {
      title: "Dubai Representation",
      desc: "Trusted physical audits, inspections, documents collection, and logistics verification in the UAE.",
      iconName: "ShieldCheck"
    },
    {
      title: "Fast Communication",
      desc: "Rapid coordination via direct calls or WhatsApp, ensuring zero downtime for your questions.",
      iconName: "Zap"
    },
    {
      title: "Long-Term Partnerships",
      desc: "Providing ongoing optimizations, system updates, and consulting support as your company scales.",
      iconName: "Handshake"
    }
  ],

  testimonials: [
    {
      quote:
        "Adnan is not just a technology consultant; he is an indispensable business partner. When we needed local supplier verification and site inspection for our high-end offices, his Dubai Concierge service saved us weeks of travel. His technical execution is top-tier.",
      name: "Tariq Al-Mansoori",
      role: "Managing Director",
      company: "Apex Luxury Real Estate Dubai",
      stars: 5
    },
    {
      quote:
        "Migrating our legacy infrastructure to AWS was a daunting task. Adnan planned the architecture meticulously and executed the transition with zero downtime. His clarity of communication and mastery of cloud environments are exceptional.",
      name: "Sarah Jenkins",
      role: "Operations Director",
      company: "Veloce Group UK",
      stars: 5
    },
    {
      quote:
        "Adnan completely overhauled our Shopify store and optimized our local Amazon UAE/KSA channels. Sales increased dramatically within months. He understands the Middle Eastern digital landscape better than anyone we've worked with.",
      name: "Muhammad Rizwan",
      role: "Founder",
      company: "Shine Ecommerce KSA",
      stars: 5
    }
  ] as TestimonialItem[],

  blogs: [
    {
      id: "blog-1",
      slug: "expanding-to-dubai",
      title: "Expanding to Dubai: The Business Owner's On-Ground Checklist",
      category: "Dubai Business",
      date: "June 25, 2026",
      readTime: "6 min read",
      excerpt:
        "Establishing a physical or corporate presence in Dubai requires localized knowledge. Learn how supplier verification, site audits, and local representation prevent costly mistakes.",
      image: "/images/blog/dubai_business.jpg",
      content: {
        headings: [
          "Why Dubai is the Ultimate Business Hub",
          "The Risks of Remote Business Operations",
          "The Dubai Business Concierge Checklist"
        ],
        paragraphs: [
          "Dubai has evolved into a global business powerhouse, bridging East and West. However, establishing a physical or corporate presence in the UAE from abroad comes with unique administrative and operational challenges. Without local, on-ground verification, international business owners frequently fall victim to unreliable suppliers, misaligned real estate agreements, and administrative gridlock.",
          "Running operations remotely in the GCC region exposes companies to critical failure points:\n1. Unverified Suppliers: Ordering bulk shipments from manufacturers without physical warehouse inspection can lead to subpar product quality or outright fraud.\n2. Inaccurate Real Estate Representation: Commercial properties or warehouses listed online often look vastly different in reality. Real estate inspections are vital.\n3. Logistics Bottlenecks: Clearing customs, managing local freight handlers, and coordinating warehouse drops in Dubai require a local contact who speaks the language of logistics.",
          "To safeguard your investments, ensure you execute the following:\n- Physical Supplier Verification: Never wire large deposits until someone physically visits the supplier's warehouse, verifies their trade license, and inspects product quality.\n- Live Video Inspections: Use real-time video feeds during property walkthroughs or warehouse audits to ask immediate questions and view actual conditions.\n- Exhibition & Trade Show Audits: Send a representative to regional exhibitions like GITEX or Gulfood to collect documentation, vet competitors, and build direct networks.\n\nPartnering with a reliable, local business consultant in Dubai guarantees your interests are protected on the ground, allowing you to scale operations with complete peace of mind."
        ]
      }
    },
    {
      id: "blog-2",
      slug: "maximizing-ecommerce-conversions",
      title: "Maximizing Ecommerce Conversions: Lessons from Shopify Plus Migrations",
      category: "Ecommerce",
      date: "May 18, 2026",
      readTime: "8 min read",
      excerpt:
        "Slow loading speeds and cluttered checkouts kill sales. Explore how we re-engineered a luxury brand's checkout flow to boost conversions by 42%.",
      image: "/images/blog/ecommerce_conversion.jpg",
      content: {
        headings: [
          "The Hidden Cost of Slow Load Times",
          "Case Study: Replatforming for Speed",
          "The Solution Framework",
          "The Outcome"
        ],
        paragraphs: [
          "In ecommerce, milliseconds equal millions. Studies show that a 1-second delay in page load time can reduce conversions by up to 7%. For premium brands selling in competitive markets like Dubai, Abu Dhabi, and Riyadh, a slow store doesn't just lose sales—it damages brand equity.",
          "When analyzing a legacy Magento 1 store recently, we discovered three main structural issues:\n1. Bloated Monolithic Database: Over 5 years of historical order data was query-blocking live checkouts.\n2. Unoptimized Assets: High-resolution product images were loading without lazy-loading tags or modern WebP compression.\n3. Fragmented Checkout Flow: The checkout path required 4 page-reloads, driving cart abandonment rates to 78%.",
          "To achieve a sub-1.5 second loading speed and optimize conversions, we implemented a core three-pillar strategy:\n- Liquid-Optimized Storefront: Rebuilt the theme from scratch on Shopify Plus, stripping out heavy jQuery dependencies and replacing them with native CSS Grid and vanilla JS.\n- Automated Asset Pipelines: Set up automated image compressors and next-gen format conversion to serve pixel-perfect, light assets.\n- Single-Page Checkout Integration: Designed a streamlined, single-screen checkout with auto-address fill (linked to UAE map APIs) and express payment triggers (Apple Pay, Google Pay).",
          "By simplifying the tech stack and prioritizing the mobile checkout experience, the store saw a 42% lift in conversion rate and a complete elimination of database timeouts during peak promotional sales."
        ]
      }
    },
    {
      id: "blog-3",
      slug: "deploying-ai-agents-customer-service",
      title: "Deploying AI Agents in Customer Service: Best Practices for 2026",
      category: "AI Automation",
      date: "April 12, 2026",
      readTime: "5 min read",
      excerpt:
        "AI chatbots are no longer basic button-selectors. Discover how custom GPT integrations and workflow automation can handle 80% of support queries autonomously.",
      image: "/images/blog/ai_agents.jpg",
      content: {
        headings: [
          "Beyond Simple Auto-Responders",
          "How Modern AI Support Agents Work",
          "Implementation Best Practices"
        ],
        paragraphs: [
          "The era of frustrating, rule-based chatbots that only repeat canned responses is over. In 2026, large language models (LLMs) like GPT-4, combined with retrieval-augmented generation (RAG) and function calling, allow businesses to deploy autonomous AI agents capable of resolving complex client issues.",
          "Instead of looking up simple keyword matches, modern AI agents connect directly to your business databases and APIs:\n1. Contextual Comprehension: The agent understands customer sentiment, tone, and typos, responding in natural, brand-aligned language.\n2. API Interaction: Using function calling, the agent can check shipping status in real-time, modify order items, or issue refunds within authorized limits.\n3. Smart Escalation: When a query exceeds the agent's threshold (e.g. high-value refunds or complex disputes), it compiles a summary and hands it off to a human agent seamlessly.",
          "Implementation Best Practices:\n- Establish Strict Guardrails: Limit the AI agent's access to write APIs. Use validation schemas to ensure it cannot execute arbitrary transactions.\n- Implement Vector Search (RAG): Feed your company policies, FAQs, and product manuals into a vector database. This keeps the agent's answers factual, reducing hallucinations.\n- Continuous Prompt Engineering: Analyze chat transcripts weekly. Refine system prompts to address edge cases and improve compliance.\n\nAutomating standard customer support workflows saves operational capital while providing immediate, 24/7 service to your global customer base."
        ]
      }
    }
  ] as BlogItem[],

  faqs: [
    {
      question: "Are you a single freelancer or an agency?",
      answer:
        "I operate as a high-level Technology Consultant and On-Ground Business Partner. While I design and build core systems myself to maintain absolute premium quality, I also lead a trusted network of specialized developers, cloud engineers, and local logistics experts for large-scale enterprise deployments."
    },
    {
      question: "How does the Dubai Business Concierge service work?",
      answer:
        "I act as your trusted representative in Dubai. If you are importing goods, buying real estate, or setting up a corporate entity, I physically go to warehouses, inspect factories, verify supplier licenses, and conduct property audits. I record high-definition video walkthroughs and host live video calls, providing you with real-time on-ground intelligence."
    },
    {
      question: "Can you help with marketplace management on Amazon UAE and Noon?",
      answer:
        "Yes. I provide comprehensive setup and operations management for Amazon UAE, Amazon KSA, and Noon. This includes product listing optimization, A+ content design, brand registry support, inventory coordination, and PPC advertisement strategy."
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "A standard custom web application or complex Shopify migration takes between 4 to 8 weeks, including design, coding, testing, and deployment. Dubai Concierge verification tasks are usually executed within 24 to 48 hours depending on location details in the UAE."
    },
    {
      question: "Do you offer post-launch support and security maintenance?",
      answer:
        "Absolutely. I provide ongoing retainer-based website maintenance, AWS cloud monitoring, security patches, regular backups, and conversion optimization audits to ensure your platforms remain fast, secure, and profitable."
    }
  ] as FaqItem[],

  mainCta: {
    heading: "Let's Build Something Amazing Together",
    text: "Need a website? Need an ecommerce store? Need AI automation? Or need someone trusted on-ground in Dubai? Let's consult.",
    buttonLabel: "Book a Free Consultation"
  },

  footer: {
    brandDescription:
      "Premium Technology Consultant & local Dubai Concierge helping global businesses build, grow, and operate successfully.",
    copyright:
      "© 2026 Adnan Habib. All rights reserved. Registered Technology Representative Dubai.",
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ],
    newsletter:
      "Stay Informed — Subscribe to receive tech briefs, ecommerce scaling tactics, and AI insights direct to your inbox."
  }
};
