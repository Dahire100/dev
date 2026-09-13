import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Code, Palette, Users } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "November 2025 — Present",
      title: "Junior Associate - Software Division",
      subtitle: "ESDS Software Solution Limited // Full Time",
      description:
        "Develop and maintain high-performance, robust full-stack software solutions and intelligent database integrations. Architect, build, and deploy secure, scalable corporate applications while integrating AI models and automation algorithms.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "August 2024 — October 2024",
      title: "Web Development Intern",
      subtitle: "FireFist, Nashik // Internship",
      description:
        "Worked on frontend development using React and Elementor, building responsive, intuitive user interfaces. Designed reusable UI components and interactive pages, contributing directly to optimized user experience.",
      icon: <Code className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "June 2022 — August 2022",
      title: "Fullstack Development Intern",
      subtitle: "Golden Dream Software Solution // Internship",
      description:
        "Built responsive websites using PHP, HTML, CSS, and JavaScript. Gained valuable hands-on experience in UI design, relational database integration with MySQL, and collaborative Git & GitHub workflows.",
      icon: <Code className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – 2025",
      title: "Creative Head",
      subtitle: "Phoenix Club, KKWIEER",
      description:
        "Spearheaded creative operations of the club, orchestrating event planning, digital poster design, promotional campaigns, and brand consistency across college initiatives.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "Design Team Member",
      subtitle: "Innov-era, KKWIEER",
      description:
        "Contributed to the design and branding of Innov-era flagship events by creating high-impact graphics, banners, and visual content.",
      icon: <Palette className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
