import ProcessCard from "./ProcessCard";

const AboutProcess = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="section_title">
            <p className="section_tag">HOW IT'S WORK</p>
            <h2 className="section_heding">The Data Science Process</h2>
            <p className="section_descrip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <ProcessCard
            img="./img/process1.png"
            heading="Frame the Problem"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <ProcessCard
            img="./img/process2.png"
            heading="Collect the Raw Data"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <ProcessCard
            img="./img/process3.png"
            heading="Process the Data"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <ProcessCard
            img="./img/process6.png"
            heading="Explore the Data"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <ProcessCard
            img="./img/process5.png"
            heading="Perform In-depth Analysis"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <ProcessCard
            img="./img/process6.png"
            heading="Communicate Results"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
        </div>
      </div>
    </>
  );
};

export default AboutProcess;
