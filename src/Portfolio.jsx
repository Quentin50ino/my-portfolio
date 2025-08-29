import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";
import './App.css'

const experiences = [
  { title: "R&D Software Engineer", company: "Ascom", duration: "May 2024 - Present", location: "Florence, Italy", description: "Development and maintenance of advanced medical software as part of the R&D team." },
  { title: "Software Engineer", company: "Enel Group", duration: "Nov 2022 - May 2024", location: "Turin, Italy", description: "Web and mobile software solutions development for business operations." },
  { title: "Application Development Associate", company: "Accenture Italia", duration: "Apr 2022 - Nov 2022", location: "Turin, Italy", description: "Agile team collaboration on web projects in the automotive sector." },
  { title: "Web Development Intern", company: "CESIN GROUP", duration: "Jan 2021 - Dec 2021", location: "Turin, Italy", description: "Developed web applications from scratch in a team of five." },
];

const education = [
  { title: "Master's Degree in Computer Engineering", school: "Politecnico di Milano", track: "Music & Acoustics", location: "Milan, Italy" },
  { title: "Bachelor's Degree in Computer Engineering", school: "Politecnico di Torino", track: "Cinema and Media Engineering", location: "Turin, Italy" },
];

const projects = [
  { title: "Interior Designer Portfolio", link: "#", description: "Portfolio website built and maintained for an interior designer." },
  { title: "Florence Tourism Office Website", link: "#", description: "Informative portal for the Florence tourism office." },
  { title: "Spotify Playlist Creator", link: "#", description: "App integrating Spotify API to generate custom playlists." },
  { title: "DOA Estimation with MATLAB", link: "#", description: "Direction of Arrival analysis of audio files using MATLAB." },
  { title: "AI Sound Detection", link: "#", description: "Neural network for recognizing vehicle sounds (IDMT-traffic dataset)." },
  { title: "Rhythm Wheel Web App", link: "#", description: "Create musical rhythms via interactive visual interface." },
  { title: "Auto Wah Audio Plugin", link: "#", description: "JUCE-based plugin replicating the Auto Wah audio effect." },
  { title: "Chordophone Champions", link: "#", description: "Guitar Hero-style game using phone gyroscope, built with Supercollider and Processing." },
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

export default function Portfolio() {
  return (
    <div className="text-lg w-full bg-gray-950 text-white">
      <header className="bg-gray-900 py-6 px-10 flex justify-center items-center sticky top-0 z-50 shadow-md">
        <nav className="space-x-20 text-white text-lg">
          <a href="#education" className="hover:underline">Education</a>
          <a href="#experience" className="hover:underline">Work</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#technologies" className="hover:underline">Technologies</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="w-full">
        <section className="bg-gray-800 py-20 px-10 text-center">
          <h1 className="text-6xl font-bold my-20">
            <ReactTyped
              strings={["Hi, I'm Alberto Bollino!", "I am a Software Engineer...", "I am a Web Developer...", "I am an Audio Engineer...", "I am a Tech Enthusiast."]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
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

        <section id="experience" className="py-16 px-10 bg-gray-600 w-full">
          <motion.h2 className="text-4xl font-semibold mb-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            Work Experience
          </motion.h2>
          <div className="border-l-4 border-gray-400 ml-6 relative">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} viewport={{ once: true }} className="mb-10 pl-6 relative">
                <div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-2 top-2.5"></div>
                <h3 className="text-2xl font-bold">{exp.title} @ {exp.company}</h3>
                <p>{exp.duration} | {exp.location}</p>
                <p className="mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Section id="projects" title="Projects" bgColor="bg-gray-800" items={projects} renderItem={(proj, i) => (
          <Card className="bg-gray-900 text-white h-full">
            <Card.Body className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="mb-4">{proj.description}</p>
              <Button variant="outline" className="border-gray-400 text-white hover:bg-gray-700" asChild>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">Visit</a>
              </Button>
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


