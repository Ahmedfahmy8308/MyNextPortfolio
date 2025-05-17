import { Metadata } from "next";

const baseMetadata = {
  title: {
    template: "%s | Ahmed Fahmy",
    default: "Ahmed Fahmy - Software Engineer & Back-End Developer",
  },
  description:
    "Ahmed Fahmy is a Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision.",
  metadataBase: new URL("https://ahmedfahmy.me"),
  authors: [{ name: "Ahmed Fahmy" }],
  creator: "Ahmed Fahmy",
  publisher: "Ahmed Fahmy",
  robots: "index, follow",
};

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About Me | Ahmed Fahmy",
  description:
    "Learn about Ahmed Fahmy's background, experience, and education in software engineering and back-end development.",
  openGraph: {
    title: "About Ahmed Fahmy - Software Engineer",
    description:
      "Learn about Ahmed Fahmy's background, experience, and education in software engineering and back-end development.",
    url: "https://ahmedfahmy.me/about",
    type: "website",
    images: [
      {
        url: "/images/me1.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Fahmy - Software Engineer",
      },
    ],
  },
};

export const projectsMetadata: Metadata = {
  ...baseMetadata,
  title: "Projects | Ahmed Fahmy",
  description:
    "Explore Ahmed Fahmy's portfolio of projects in back-end development, web applications, APIs, and computer vision.",
  openGraph: {
    title: "Projects by Ahmed Fahmy - Software Engineer",
    description:
      "Explore Ahmed Fahmy's portfolio of projects in back-end development, web applications, APIs, and computer vision.",
    url: "https://ahmedfahmy.me/projects",
    type: "website",
    images: [
      {
        url: "/images/me1.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Fahmy - Software Engineer",
      },
    ],
  },
};

export const servicesMetadata: Metadata = {
  ...baseMetadata,
  title: "Services | Ahmed Fahmy",
  description:
    "Services offered by Ahmed Fahmy including back-end development, API design, web development, and computer vision solutions.",
  openGraph: {
    title: "Services by Ahmed Fahmy - Software Engineer",
    description:
      "Services offered by Ahmed Fahmy including back-end development, API design, web development, and computer vision solutions.",
    url: "https://ahmedfahmy.me/services",
    type: "website",
    images: [
      {
        url: "/images/me1.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Fahmy - Software Engineer",
      },
    ],
  },
};

export const skillsMetadata: Metadata = {
  ...baseMetadata,
  title: "Skills | Ahmed Fahmy",
  description:
    "Discover Ahmed Fahmy's technical skills in .NET Core, Node.js, Nest.js, Flask, React, and more.",
  openGraph: {
    title: "Skills of Ahmed Fahmy - Software Engineer",
    description:
      "Discover Ahmed Fahmy's technical skills in .NET Core, Node.js, Nest.js, Flask, React, and more.",
    url: "https://ahmedfahmy.me/skills",
    type: "website",
    images: [
      {
        url: "/images/me1.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Fahmy - Software Engineer",
      },
    ],
  },
};

export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: "Contact | Ahmed Fahmy",
  description:
    "Get in touch with Ahmed Fahmy for your software development or back-end development projects.",
  openGraph: {
    title: "Contact Ahmed Fahmy - Software Engineer",
    description:
      "Get in touch with Ahmed Fahmy for your software development or back-end development projects.",
    url: "https://ahmedfahmy.me/contact",
    type: "website",
    images: [
      {
        url: "/images/me1.jpg",
        width: 800,
        height: 600,
        alt: "Ahmed Fahmy - Software Engineer",
      },
    ],
  },
};
