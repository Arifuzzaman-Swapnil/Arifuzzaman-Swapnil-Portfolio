import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Deck from "@/components/deck/Deck";

const pages = [
  { id: "home", label: "Home", node: <HeroSection /> },
  { id: "about", label: "About", node: <AboutSection /> },
  { id: "education", label: "Education", node: <EducationSection /> },
  { id: "experience", label: "Experience", node: <ExperienceSection /> },
  { id: "projects", label: "Projects", node: <ProjectsSection /> },
  { id: "skills", label: "Skills", node: <SkillsSection /> },
  { id: "awards", label: "Awards", node: <AwardsSection /> },
  { id: "contact", label: "Contact", node: <ContactSection /> },
];

const Index = () => (
  <div className="relative h-full">
    <Deck pages={pages} />
  </div>
);

export default Index;
