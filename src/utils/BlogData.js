const blog = [
  {
    _id: "1",
    title: "Understanding React Hooks",
    slug: "understanding-react-hooks",
    author: {
      name: "Amit Kumar",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Frontend Developer passionate about React and UI/UX design.",
      social: {
        twitter: "https://twitter.com/amitdev",
        linkedin: "https://linkedin.com/in/amitkumar",
        github: "https://github.com/amitdev",
      },
    },
    content:
      "## useState and useEffect explained...\nReact Hooks allow you to use state and other React features without writing a class...",
    summary:
      "Learn the basics of React Hooks like useState and useEffect in this beginner-friendly guide.",
    coverImage: "https://source.unsplash.com/random/800x400?react",
    tags: ["React", "JavaScript", "Frontend"],
    category: "Web Development",
    published: true,
    publishedAt: "2024-06-10T09:00:00Z",
    updatedAt: "2024-06-11T10:00:00Z",
    readingTime: "6 min read",
    likes: 52,
    comments: [
      {
        user: {
          name: "Priya Sharma",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        comment: "Great explanation! Helped me a lot.",
        createdAt: "2024-06-11T12:30:00Z",
      },
    ],
    meta: {
      title: "React Hooks for Beginners",
      description:
        "A beginner-friendly guide to understanding and using React Hooks.",
      keywords: ["react", "hooks", "javascript", "frontend"],
    },
  },
  {
    _id: "2",
    title: "Mastering MongoDB for Beginners",
    slug: "mastering-mongodb-for-beginners",
    author: {
      name: "Neha Verma",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Backend Developer and MongoDB enthusiast.",
      social: {
        twitter: "https://twitter.com/nehadev",
        linkedin: "https://linkedin.com/in/nehaverma",
        github: "https://github.com/nehadev",
      },
    },
    content:
      "## What is MongoDB?\nMongoDB is a NoSQL database that stores data in JSON-like documents...",
    summary:
      "Start your MongoDB journey with this step-by-step beginner's guide.",
    coverImage: "https://source.unsplash.com/random/800x400?mongodb",
    tags: ["MongoDB", "Database", "Backend"],
    category: "Database",
    published: true,
    publishedAt: "2024-07-01T15:00:00Z",
    updatedAt: "2024-07-02T08:00:00Z",
    readingTime: "5 min read",
    likes: 34,
    comments: [
      {
        user: {
          name: "Ravi Yadav",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        comment: "Very well written for beginners!",
        createdAt: "2024-07-02T09:15:00Z",
      },
    ],
    meta: {
      title: "Learn MongoDB",
      description: "Beginner-friendly guide to using MongoDB effectively.",
      keywords: ["mongodb", "nosql", "database", "beginner"],
    },
  },
  {
    _id: "3",
    title: "Getting Started with Tailwind CSS",
    slug: "getting-started-with-tailwind-css",
    author: {
      name: "Ritika Singh",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      bio: "CSS expert and design perfectionist.",
      social: {
        twitter: "https://twitter.com/ritikaui",
        linkedin: "https://linkedin.com/in/ritikasingh",
        github: "https://github.com/ritikaui",
      },
    },
    content:
      "## Why Tailwind?\nTailwind CSS is a utility-first framework for rapidly building custom designs...",
    summary:
      "Discover how Tailwind CSS can supercharge your frontend development process.",
    coverImage: "https://source.unsplash.com/random/800x400?tailwind",
    tags: ["CSS", "Tailwind", "Design"],
    category: "Frontend Design",
    published: true,
    publishedAt: "2024-06-25T13:00:00Z",
    updatedAt: "2024-06-25T13:30:00Z",
    readingTime: "4 min read",
    likes: 45,
    comments: [
      {
        user: {
          name: "Sumit Roy",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        comment: "Tailwind is my favorite too!",
        createdAt: "2024-06-26T10:00:00Z",
      },
    ],
    meta: {
      title: "Tailwind CSS Guide",
      description: "Introduction to Tailwind CSS with real examples.",
      keywords: ["tailwind", "css", "frontend", "design"],
    },
  },
  {
    _id: "4",
    title: "How to Deploy MERN Stack on Vercel",
    slug: "deploy-mern-stack-vercel",
    author: {
      name: "Ankit Mehra",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      bio: "Full Stack Developer and DevOps learner.",
      social: {
        twitter: "https://twitter.com/ankitdev",
        linkedin: "https://linkedin.com/in/ankitmehra",
        github: "https://github.com/ankitdev",
      },
    },
    content:
      "## Step-by-step deployment\nLearn how to deploy your MERN stack app using Vercel, including frontend/backend setup...",
    summary:
      "This guide will walk you through deploying a MERN app on Vercel step-by-step.",
    coverImage: "https://source.unsplash.com/random/800x400?deployment",
    tags: ["MERN", "Vercel", "Deployment"],
    category: "DevOps",
    published: true,
    publishedAt: "2024-06-18T10:00:00Z",
    updatedAt: "2024-06-19T10:00:00Z",
    readingTime: "7 min read",
    likes: 61,
    comments: [
      {
        user: {
          name: "Pooja Gupta",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        },
        comment: "This helped me deploy my project in one go!",
        createdAt: "2024-06-19T11:00:00Z",
      },
    ],
    meta: {
      title: "Deploy MERN Stack on Vercel",
      description: "Guide to deploying your MERN full-stack project on Vercel.",
      keywords: ["mern", "vercel", "deployment", "fullstack"],
    },
  },
  {
    _id: "5",
    title: "Top 10 VS Code Extensions for Web Developers",
    slug: "top-vscode-extensions-web-dev",
    author: {
      name: "Sanya Jha",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      bio: "VS Code power user and productivity nerd.",
      social: {
        twitter: "https://twitter.com/sanyacodes",
        linkedin: "https://linkedin.com/in/sanyajha",
        github: "https://github.com/sanyacodes",
      },
    },
    content:
      "## Boost your productivity\nDiscover the most useful VS Code extensions for web developers...",
    summary:
      "Boost your productivity with these handpicked VS Code extensions for frontend and backend devs.",
    coverImage: "https://source.unsplash.com/random/800x400?vscode",
    tags: ["VS Code", "Productivity", "Tools"],
    category: "Developer Tools",
    published: true,
    publishedAt: "2024-07-01T11:00:00Z",
    updatedAt: "2024-07-01T12:00:00Z",
    readingTime: "3 min read",
    likes: 89,
    comments: [
      {
        user: {
          name: "Deepak Narayan",
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        comment: "These extensions saved me hours. Thanks!",
        createdAt: "2024-07-01T14:00:00Z",
      },
    ],
    meta: {
      title: "Best VS Code Extensions 2024",
      description:
        "A curated list of top VS Code extensions for web developers.",
      keywords: ["vscode", "extensions", "web development", "productivity"],
    },
  },
];

export default blog;
