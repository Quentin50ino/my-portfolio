import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { ReactTyped } from "react-typed";
import { Menu } from "lucide-react";
import './App.css';

const avatarUrl = "/assets/avatar.png";

const colabIcon = (
  <img
    src="https://colab.research.google.com/img/colab_favicon_256px.png"
    alt="Colab"
    className="w-5 h-5 ml-2"
    style={{ verticalAlign: "middle" }}
  />
);

const experiences = [
  {
    title: "R&D Software Engineer",
    company: "Ascom",
    duration: "May 2024 - Present",
    location: "Florence, Italy",
    description: "Development and maintenance of advanced medical software as part of the R&D team.",
    logo: "https://www.ascom.com/favicon.ico",
    info: "Ascom is a global solutions provider focused on healthcare ICT and mobile workflow solutions.",
    website: "https://www.ascom.com/"
  },
  {
    title: "Software Engineer",
    company: "Enel Group",
    duration: "Nov 2022 - May 2024",
    location: "Turin, Italy",
    description: "Web and mobile software solutions development for business operations.",
    logo: "https://www.enel.com/favicon.ico",
    info: "Enel is a multinational energy company and one of the world's leading integrated electricity and gas operators.",
    website: "https://www.enel.com/"
  },
  {
    title: "Application Development Associate",
    company: "Accenture Italia",
    duration: "Apr 2022 - Nov 2022",
    location: "Turin, Italy",
    description: "Agile team collaboration on web projects in the automotive sector.",
    logo: "https://www.accenture.com/favicon.ico",
    info: "Accenture is a global professional services company with leading capabilities in digital, cloud and security.",
    website: "https://www.accenture.com/"
  },
  {
    title: "Web Development Intern",
    company: "CESIN GROUP",
    duration: "Jan 2021 - Dec 2021",
    location: "Turin, Italy",
    description: "Developed web applications from scratch in a team of five.",
    logo: "https://static.wixstatic.com/media/9cc025_0ab3b3121b3449b5b7d2a3c4c65f1cd6~mv2.png/v1/fill/w_95,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-Cesin-colore%20copia%203.png",
    info: "CESIN GROUP specializes in industrial automation and engineering solutions.",
    website: "https://www.cesingroup.it/"
  },
];

const education = [
  { title: "Master's Degree in Computer Engineering", school: "Politecnico di Milano", track: "Music & Acoustics", location: "Milan, Italy" },
  { title: "Bachelor's Degree in Computer Engineering", school: "Politecnico di Torino", track: "Cinema and Media Engineering", location: "Turin, Italy" },
];

const projects = [
  { title: "Interior Designer Portfolio", link: "https://github.com/Quentin50ino/portfolio-chiara/tree/master", description: "Portfolio website built and maintained for an interior designer.", hostedWebsite: "https://chiara-zeloni-portfolio.web.app/", isColab: false },
  { title: "Florence Tourism Office Website", link: "https://github.com/Quentin50ino/hyp-project-21-22", description: "Informative portal for the Florence tourism office.", hostedWebsite: "https://yes-florence-client.onrender.com/", isColab: false },
  { title: "Rhythm Wheel Web App", link: "https://github.com/mazamin7/rhythm_wheel", description: "Create musical rhythms via interactive visual interface.", hostedWebsite: "https://rythm-wheel.web.app/#canvas", isColab: false },
  { title: "Spotify Playlist Creator", link: "https://github.com/Quentin50ino/Spotify/tree/master", description: "App integrating Spotify API to generate custom playlists.", hostedWebsite: "https://spotify-create-playlist.web.app/", isColab: false },
  { title: "DOA Estimation with MATLAB", link: "https://github.com/Quentin50ino/DOA-Estimation-MATLAB", description: "Direction of Arrival analysis of audio files using MATLAB.", hostedWebsite: null, isColab: false },
  { title: "AI Sound Detection", link: "https://colab.research.google.com/drive/1ILHcoOvno52jwNawqpL_AiJuIzmhoEZX?usp=sharing", description: "Neural network for recognizing vehicle sounds (IDMT-traffic dataset).", hostedWebsite: null, isColab: true },
  { title: "Auto Wah Audio Plugin", link: "https://github.com/mazamin7/YetAnotherAutoWah", description: "JUCE-based plugin replicating the Auto Wah audio effect.", hostedWebsite: null, isColab: false },
  { title: "Chordophone Champions", link: "https://github.com/mazamin7/Chordophone-Champion", description: "Guitar Hero-style game using phone gyroscope, built with Supercollider and Processing.", hostedWebsite: null, isColab: false},
  {title: "FM Synth", link: "https://github.com/mazamin7/FM-Synth", description: "A simple software implementing FM synthesis, built with Supercollider.", hostedWebsite: null, isColab: false},
];

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Versatile scripting language for the web." },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "JavaScript with static typing." },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", description: "Object-oriented, cross-platform language." },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", description: "Microsoft language for .NET development." },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "JavaScript library for building user interfaces." },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", description: "Framework for structured single-page applications." },
  { name: "AngularJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg", description: "Legacy version of Angular framework." },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", description: "Progressive framework for building UI." },
  { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg", description: "Vue framework with server-side rendering." },
  { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", description: "Cross-platform framework by Microsoft." },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", description: "Java framework for enterprise apps." },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", description: "Relational database by Microsoft." },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Advanced open-source relational database." },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Multi-paradigm, high-level language." },
  { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", description: "Numerical computing and simulation environment." },
];

const heroStrings = [
  "Hi, I'm Alberto Bollino",
  "I am a Software Engineer",
  "I am a Web Developer",
  "I am an Audio Engineer",
  "I am a Tech Enthusiast"
];

export default function Portfolio() {

  const [mobileIndex, setMobileIndex] = React.useState(0);
  const [phraseKey, setPhraseKey] = React.useState(0);
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => {
        const next = (prev + 1) % heroStrings.length;
        setPhraseKey(next); // Cambia chiave per triggerare animazione
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-lg w-full bg-gray-950 text-white">
      {/* Navbar responsive */}
      <header className="bg-gray-900 py-6 px-10 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="text-xl font-bold">Alberto Bollino</div>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-20 text-white text-lg">
          <a href="#education" className="hover:underline">Education</a>
          <a href="#experience" className="hover:underline">Work</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#technologies" className="hover:underline">Technologies</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Open navigation"
        >
          <Menu className="w-8 h-8" />
        </button>
        {/* Mobile menu */}
        {navOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
            <a href="#education" className="py-2 text-lg hover:underline" onClick={() => setNavOpen(false)}>Education</a>
            <a href="#experience" className="py-2 text-lg hover:underline" onClick={() => setNavOpen(false)}>Work</a>
            <a href="#projects" className="py-2 text-lg hover:underline" onClick={() => setNavOpen(false)}>Projects</a>
            <a href="#technologies" className="py-2 text-lg hover:underline" onClick={() => setNavOpen(false)}>Technologies</a>
            <a href="#contact" className="py-2 text-lg hover:underline" onClick={() => setNavOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main className="w-full">
        <section className="bg-gray-800 md:py-20 px-10 text-center">
  <div className="flex flex-col md:flex-row items-center justify-center">
    {/* Avatar */}
    <img
      src={avatarUrl}
      alt="Alberto Bollino"
      width={200}
      className="object-cover mb-6 md:mb-0"
    />
    {/* Frasi */}
    <div className="">
      {/* Typed solo su desktop */}
      <h1 className="hidden md:block text-6xl font-bold my-20">
        <ReactTyped
          strings={heroStrings}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
      {/* Frase mobile con animazione */}
      <motion.h1
        key={phraseKey}
        className="block md:hidden text-3xl font-bold pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {heroStrings[mobileIndex]}
      </motion.h1>
    </div>
  </div>
</section>

        <Section id="education" title="Education" bgColor="bg-gray-700" items={education} renderItem={(edu, i) => (
          <Card className="bg-gray-800 text-white h-full">
            <Card.Body className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-bold">{edu.title}</h3>
              <p>{edu.school} - {edu.track}</p>
              <p>{edu.location}</p>
            </Card.Body>
          </Card>
        )} />

        <section id="experience" className="py-16 px-4 md:px-10 bg-gray-600 w-full">
          <motion.h2 className="text-4xl font-semibold mb-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            Work Experience
          </motion.h2>
          <div className="border-gray-400 ml-6 relative">
            {experiences.map((exp, i) => (
              <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="perspective-1000 mb-10"
      >
        <div className="group w-full h-56">
          <div className="flip-card-inner w-full h-full relative">
            {/* Front */}
            <div className="flip-card-front bg-gray-800 text-white rounded shadow flex flex-col justify-center p-6 h-full">
              <h3 className="text-xl md:text-2xl font-bold">{exp.title} @ {exp.company}</h3>
              <p>{exp.duration} | {exp.location}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
            {/* Back */}
            <div className="flip-card-back bg-gray-900 text-white rounded shadow p-6 flex flex-col items-center justify-center h-full">
              <img src={exp.logo} alt={exp.company} className="w-18 h-18 mb-2 rounded-full bg-white" />
              <p className="mb-2 text-center text-md">{exp.info}</p>
              <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-md">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </motion.div>
            ))}
          </div>
        </section>

        <Section id="projects" title="Projects" bgColor="bg-gray-800" items={projects} renderItem={(proj, i) => (
          <Card className="bg-gray-900 text-white h-full">
            <Card.Body className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="mb-4">{proj.description}</p>
              <Button variant="outline" className="border-gray-400 text-white hover:bg-gray-700 flex flex-row justify-center items-center" asChild>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.isColab ? "Colab" : "GitHub"} </a>
                {proj.isColab ? <span>{colabIcon}</span> : <Github className="w-4 h-4 hover:text-white ml-2" />}
              </Button>
              {proj.hostedWebsite && 
              <Button variant="outline" className="mt-2 border-gray-400 text-white hover:bg-gray-700 flex flex-row justify-center items-center" asChild>
                <a href={proj.hostedWebsite} target="_blank" rel="noopener noreferrer">Hosted Website</a>
                <Globe className="w-4 h-4 hover:text-white ml-2" />
              </Button>}
            </Card.Body>
          </Card>
        )} />

       <section id="technologies" className="py-16 px-10 bg-gray-700 w-full">
      <h2 className="text-4xl font-semibold mb-8 text-center">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {technologies.map((tech, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="perspective-1000">
            <div className="group w-full h-40">
              <div className="flip-card-inner w-full h-full relative">
                <div className="flip-card-front bg-gray-900 text-white rounded shadow flex flex-col items-center justify-center p-4">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2" />
                  <span className="text-lg font-semibold">{tech.name}</span>
                </div>
                <div className="flip-card-back bg-gray-800 text-white rounded shadow p-4 text-sm">
                  {tech.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

        
      </main>

      <footer id="contact" className="bg-gray-800 py-10 mt-16 text-center w-full">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="flex justify-center gap-8">
          <a href="mailto:alberto.bollino@outlook.it" aria-label="Email"><Mail className="w-8 h-8 hover:text-gray-400" /></a>
          <a href="https://www.linkedin.com/in/alberto-bollino-5298b0201/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-8 h-8 hover:text-blue-400" /></a>
          <a href="https://github.com/Quentin50ino" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="w-8 h-8 hover:text-white" /></a>
        </div>
      </footer>
    </div>
  );
}


function Section({ id, title, bgColor, items, renderItem }) {
  return (
    <section id={id} className={`py-16 px-10 w-full ${bgColor}`}>
      <motion.h2 className="text-4xl font-semibold mb-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        {title}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }}>
            {renderItem(item, i)}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


