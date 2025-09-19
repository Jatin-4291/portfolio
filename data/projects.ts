interface Projects {
  title: string;
  description: string;
  link: string;
  Technologies: string[];
  githubLink: string;
  imageUrl: string;
}
export const projects: Projects[] = [
  {
    title: "NeoVerse",
    description:
      "Step into NeoVerse — a 2D metaverse where you can move, chat, and interact with others in real time. Built with PIXI.js and WebSockets, it delivers smooth animations, multiplayer sync, and a truly immersive experience right in your browser.",
    link: "https://neoverse-topaz.vercel.app/",
    Technologies: ["TypeScript", "PIXI.js", "WebSockets", "Node.js", "Express"],
    githubLink: "https://github.com/Jatin-4291/Neoverse",
    imageUrl: "/project/neoverse.jpg",
  },
  {
    title: "Flowboard",
    description:
      "A real-time collaborative whiteboard with AI assistance — brainstorm, sketch, and ideate with your team live. Built for smooth collaboration and creativity, perfect for remote work and hackathons.",
    link: "https://flow-board-three.vercel.app/",
    Technologies: [
      "Next.js",
      "React",
      "Socket.io",
      "TailwindCSS",
      "Clerk Auth",
    ],
    githubLink: "https://github.com/Jatin-4291/Flowboard",
    imageUrl: "/project/flowboard.jpeg",
  },
  {
    title: "Apni Dukan",
    description:
      "Welcome to Apni Dukan — an intuitive e-commerce platform where browsing, shopping, and checkout happen seamlessly. Designed to feel like a real online store, it’s fast, responsive, and built to give users a delightful shopping experience.",
    link: "https://apni-dukan-sandy.vercel.app/",
    Technologies: ["MERN Stack", "Redux", "Stripe API", "TailwindCSS"],
    githubLink: "https://github.com/Jatin-4291/ShopMe",
    imageUrl: "/project/ecommerce-hero.jpg",
  },
  {
    title: "Ball Blast",
    description:
      "Dive into the Ball Blast — a fun and addictive casual game with smooth animations and responsive controls. Aim, shoot, and match bubbles in real time for an entertaining browser experience.",
    link: "https://ball-blast.vercel.app/",
    Technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    githubLink: "https://github.com/Jatin-4291/ballblast",
    imageUrl: "/project/ballbl.webp",
  },
  {
    title: "Streamly",
    description:
      "Streamly is a real-time video streaming application that allows users to connect and share their screens effortlessly. Built with cutting-edge technologies, it ensures low-latency communication and high-quality video.",
    link: "https://streamly-tau.vercel.app/",
    Technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "WebRTC",
      "Socket.io",
    ],
    githubLink: "https://github.com/Jatin-4291/Streamly",
    imageUrl: "/project/videoCall.avif",
  },
];
