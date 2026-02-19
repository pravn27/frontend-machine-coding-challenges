import { aboutMe_mockData } from "../mock-data/aboutMe.js";

// Bio component
const Bio = ({ data }) => {
  const { title, description } = data;
  return (
    <div>
      <h4 className="sub-title">{title}</h4>
      <p className="content-data">{description}</p>
    </div>
  );
};

// Skills component
const Skills = ({ data }) => {
  const { title, items } = data;
  return (
    <div>
      <h4 className="sub-title">{title}</h4>
      <ul className="content-data">
        {items.map((item) => (
          <li key={item.id}>{item.skill}</li>
        ))}
      </ul>
    </div>
  );
};

// Main AboutMe component
const AboutMe = () => {
  return (
    <>
      <h1>Challenge 1</h1>
      <h2 className="title">About Me</h2>
      <Bio data={aboutMe_mockData.aboutMe.bio} />
      <Skills data={aboutMe_mockData.aboutMe.skills} />
    </>
  );
};

export default AboutMe;
