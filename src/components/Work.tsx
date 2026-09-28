import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      name: "MolecuLens",
      category: "Apple Swift Student Challenge 2026",
      tools: "Swift, SwiftUI, ARKit, RealityKit, SceneKit, Vision",
      image: "/images/placeholder.webp",
      link: "https://github.com/Namanmittal18"
    },
    {
      name: "Talkables",
      category: "iOS App / Apple × Infosys",
      tools: "Swift, SwiftUI, Git, UI/UX, SDLC",
      image: "/images/placeholder.webp",
      link: "https://github.com/Namanmittal18"
    },
    {
      name: "Fleet Management System",
      category: "Enterprise / iOS Application",
      tools: "Swift, SwiftUI, Supabase, Git, Jira, Xcode",
      image: "/images/placeholder.webp",
      link: "https://github.com/Namanmittal18"
    },
    {
      name: "Billing Software",
      category: "Client / Freelance Project",
      tools: "Fullstack Development, Database Management",
      image: "/images/placeholder.webp",
      link: ""
    },
    {
      name: "Brisko Pizza App",
      category: "Client / Freelance Project",
      tools: "Mobile Development, UI/UX Design",
      image: "/images/placeholder.webp",
      link: ""
    },
    {
      name: "Brisko Pizza Website",
      category: "Client / Freelance Project",
      tools: "Web Development, Responsive Design",
      image: "/images/placeholder.webp",
      link: ""
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link || undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
