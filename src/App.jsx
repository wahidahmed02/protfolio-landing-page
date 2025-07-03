import './App.css'
import AboutMe from './components/section/About/AboutMe'
import Timeline from './components/section/About/TimeLine'
import BlogPost from './components/section/blog/BlogPost'
import ContactSection from './components/section/Contact/ContactSection'
import FotterSection from './components/section/Fotter/FotterSection'
import HeroSection from './components/section/HeroSection/HeroSection'
import Navbar from './components/section/Navbar/Navbar'
import SkillsSection from './components/section/Skills/SkillsSection'
import AlsoWorkSectiopn from './components/section/TtitleSection/AlsoWorkSectiopn'
import ProjectWork from './components/section/TtitleSection/ProjectWork'




function App() {

  const timelineItems = [
    {
      title: "Project Kickoff",
      date: "January 2023",
      description: "Initial meeting with stakeholders to define project scope and objectives.",
    },
    {
      title: "Design Phase",
      date: "March 2023",
      description: "Created wireframes and mockups for the application interface.",
    },
    {
      title: "Development Started",
      date: "May 2023",
      description: "Began implementing core features with React and Node.js.",
    },
    {
      title: "Beta Testing",
      date: "August 2023",
      description: "Released first beta version to selected users for feedback.",
    },
    {
      title: "Official Launch",
      date: "October 2023",
      description: "Public release of the application with all planned features.",
    },
  ];


  return (
    <div className='bg-slate-50'>
     <Navbar />
     <HeroSection />
     <SkillsSection />
     <AlsoWorkSectiopn />
     <BlogPost />
     <ProjectWork />
     <AboutMe />
     <ContactSection />
     <FotterSection />
    </div>
  )
}

export default App
