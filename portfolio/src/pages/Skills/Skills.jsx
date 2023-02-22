import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Skills.css";

const Skills = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // added to center horizontally
        flexDirection: "column",
        minHeight: "100vh", // added to center vertically
      }}
    >
      <div className="skillsTitle">Skillset</div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "gray",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Front-End</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ maxWidth: "900px" }}>
          <Typography>
            As a front-end developer, I possess a strong foundation in HTML,
            CSS, and JavaScript, and I have experience working with various
            front-end frameworks, including React. <br />
            My proficiency in React allows me to build responsive and
            interactive user interfaces that engage and retain users. I also
            have experience with other front-end tools like Bootstrap and
            Material UI, which help me create beautiful and easy-to-use
            interfaces.
            <br /> My knowledge of JavaScript is a key asset in developing
            dynamic, data-driven applications, and my experience in using REST
            APIs and asynchronous programming allows me to build highly scalable
            and efficient applications. In addition, my familiarity with
            back-end technologies like Node.js and Express enables me to build
            and deploy full-stack applications with ease. <br />I have
            experience working with databases like MongoDB, as well as deploying
            applications to cloud platforms like Heroku and AWS. As a
            well-rounded developer, I am committed to staying up-to-date with
            the latest technologies and trends.
            <br /> I am always looking for ways to improve my skills, and I
            enjoy collaborating with others to build innovative and impactful
            projects.
            <br /> With my strong foundation in front-end and back-end
            development, I am confident in my ability to deliver quality
            solutions that meet the needs of users and businesses alike.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Back-End</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ maxWidth: "900px" }}>
          <Typography>
            I have experience developing back-end systems using various
            technologies and languages, <br /> including Node.js, Express,
            MongoDB, and PostgreSQL. <br /> I enjoy creating scalable and
            efficient systems that can handle large amounts of traffic and data.
            <br /> Some of my past projects have involved building REST APIs,
            integrating with third-party APIs, and setting up authentication and
            authorization systems.
            <br /> I am passionate about creating reliable and secure back-end
            systems that support complex front-end applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>C++</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ maxWidth: "900px" }}>
          <Typography>
            I have a strong foundation in C++ programming, with experience in
            building complex systems and applications. I enjoy working on
            low-level programming challenges and optimizing code for
            performance. Some of my past projects have involved implementing
            algorithms and data structures, building simulations, and working
            with computer graphics. I am familiar with the latest C++ standards
            and best practices, and I always strive to write clean and
            maintainable code.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Artificial Intelligence</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ maxWidth: "900px" }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptate atque saepe repellat minus. Architecto nam
            laborum veniam a accusantium fugiat iure repellat placeat omnis qui
            quos, numquam eos. Cupiditate. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ullam cum suscipit quibusdam
            asperiores quod commodi et laudantium adipisci atque pariatur
            quisquam perferendis omnis vel numquam sapiente architecto eligendi,
            velit quia?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Skills;
