import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Developer Intern</h4>
                <h5>Infosys Ltd., Mysuru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Contributed to a Fleet Management System by implementing vehicle management, maintenance and role-based workflow features.<br />
              <b>Worked with:</b> Git, Jira, Xcode, Agile development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>iOS Student Developer Program</h4>
                <h5>Apple × Infosys</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Selected from more than 2,000 applicants for the one-year Apple × Infosys iOS Development Student Program. Collaborated in a four-member team to design and develop Talkables, following the software development lifecycle from requirements and prototyping through testing and iteration.<br />
              <b>Technologies/practices:</b> Swift, SwiftUI, Git, UI/UX, Sprint planning, SDLC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
