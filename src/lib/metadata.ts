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

const baseArabicMetadata = {
  title: {
    template: "%s | أحمد فهمي",
    default: "أحمد فهمي - مهندس برمجيات ومطور خلفية",
  },
  description:
    "أحمد فهمي مهندس برمجيات متخصص في تطوير الخلفية، دوت نت كور، نود جي إس، نست جي إس، فلاسك، والرؤية الحاسوبية.",
  metadataBase: new URL("https://ahmedfahmy.me"),
  authors: [{ name: "أحمد فهمي" }],
  creator: "أحمد فهمي",
  publisher: "أحمد فهمي",
  robots: "index, follow",
};

export const baseImages = [
  {
    url: "/images/me1.jpg",
    width: 800,
    height: 600,
    alt: "Ahmed Fahmy - Software Engineer",
  },
  {
    url: "/images/me2.jpg",
    width: 800,
    height: 600,
    alt: "Ahmed Fahmy  - At ECPC 2024",
  },
  {
    url: "/images/me3.jpg",
    width: 800,
    height: 600,
    alt: "Ahmed Fahmy - At faculty of computer and information kafrelsheikh university",
  },
];

export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: "Ahmed Fahmy - Software Engineer & Back-End Developer",
  description:
    "Ahmed Fahmy is a Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision.",
  openGraph: {
    title: "Ahmed Fahmy - Software Engineer & Back-End Developer",
    description:
      "Ahmed Fahmy is a Software Engineer specializing in back-end development, .NET Core, Node.js, Nest.js, Flask, and Computer Vision.",
    url: "https://ahmedfahmy.me",
    type: "website",
    images: baseImages,
  },
};

export const homeArabicMetadata: Metadata = {
  ...baseArabicMetadata,
  title: "أحمد فهمي - مهندس برمجيات ومطور خلفية",
  description:
    "أحمد فهمي مهندس برمجيات متخصص في تطوير الخلفية، دوت نت كور، نود جي إس، نست جي إس، فلاسك، والرؤية الحاسوبية.",
  openGraph: {
    title: "أحمد فهمي - مهندس برمجيات ومطور خلفية",
    description:
      "أحمد فهمي مهندس برمجيات متخصص في تطوير الخلفية، دوت نت كور، نود جي إس، نست جي إس، فلاسك، والرؤية الحاسوبية.",
    url: "https://ahmedfahmy.me",
    type: "website",
    images: baseImages,
  },
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
    images: baseImages,
  },
};

export const aboutArabicMetadata: Metadata = {
  ...baseArabicMetadata,
  title: "عني | أحمد فهمي",
  description:
    "تعرف على خلفية أحمد فهمي وخبراته وتعليمه في هندسة البرمجيات وتطوير الخلفية.",
  openGraph: {
    title: "عن أحمد فهمي - مهندس برمجيات",
    description:
      "تعرف على خلفية أحمد فهمي وخبراته وتعليمه في هندسة البرمجيات وتطوير الخلفية.",
    url: "https://ahmedfahmy.me/about",
    type: "website",
    images: baseImages,
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
    images: baseImages,
  },
};

export const projectsArabicMetadata: Metadata = {
  ...baseArabicMetadata,
  title: "المشاريع | أحمد فهمي",
  description:
    "استكشف محفظة مشاريع أحمد فهمي في تطوير الخلفية، وتطبيقات الويب، وواجهات برمجة التطبيقات، والرؤية الحاسوبية.",
  openGraph: {
    title: "مشاريع أحمد فهمي - مهندس برمجيات",
    description:
      "استكشف محفظة مشاريع أحمد فهمي في تطوير الخلفية، وتطبيقات الويب، وواجهات برمجة التطبيقات، والرؤية الحاسوبية.",
    url: "https://ahmedfahmy.me/projects",
    type: "website",
    images: baseImages,
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
    images: baseImages,
  },
};

export const servicesArabicMetadata: Metadata = {
  ...baseArabicMetadata,
  title: "الخدمات | أحمد فهمي",
  description:
    "الخدمات التي يقدمها أحمد فهمي بما في ذلك تطوير الخلفية، وتصميم واجهات برمجة التطبيقات، وتطوير الويب، وحلول الرؤية الحاسوبية.",
  openGraph: {
    title: "خدمات أحمد فهمي - مهندس برمجيات",
    description:
      "الخدمات التي يقدمها أحمد فهمي بما في ذلك تطوير الخلفية، وتصميم واجهات برمجة التطبيقات، وتطوير الويب، وحلول الرؤية الحاسوبية.",
    url: "https://ahmedfahmy.me/services",
    type: "website",
    images: baseImages,
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
    images: baseImages,
  },
};

export const skillsArabicMetadata: Metadata = {
  ...baseArabicMetadata,
  title: "المهارات | أحمد فهمي",
  description:
    "اكتشف المهارات التقنية لأحمد فهمي في دوت نت كور، نود جي إس، نست جي إس، فلاسك، رياكت، والمزيد.",
  openGraph: {
    title: "مهارات أحمد فهمي - مهندس برمجيات",
    description:
      "اكتشف المهارات التقنية لأحمد فهمي في دوت نت كور، نود جي إس، نست جي إس، فلاسك، رياكت، والمزيد.",
    url: "https://ahmedfahmy.me/skills",
    type: "website",
    images: baseImages,
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
    images: baseImages,
  },
};

export const contactArabicMetadata: Metadata = {
  ...baseArabicMetadata,
  title: "اتصل | أحمد فهمي",
  description:
    "تواصل مع أحمد فهمي لمشاريع تطوير البرمجيات أو تطوير الخلفية الخاصة بك.",
  openGraph: {
    title: "تواصل مع أحمد فهمي - مهندس برمجيات",
    description:
      "تواصل مع أحمد فهمي لمشاريع تطوير البرمجيات أو تطوير الخلفية الخاصة بك.",
    url: "https://ahmedfahmy.me/contact",
    type: "website",
    images: baseImages,
  },
};
