import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import SiteHeader from "@/components/SiteHeader";
import ScrollProgress from "@/components/ui-custom/ScrollProgress";
import SitePreviewProvider from "@/components/site-preview/SitePreviewProvider";

const Index = () => (
  <SitePreviewProvider>
    <div className="page-light relative min-h-screen">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  </SitePreviewProvider>
);

export default Index;
