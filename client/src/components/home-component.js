import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="firstsection">
        <img src="/study.jpg" alt="" />
        <div className="content">
          <span className="sectiontitle">
            Open the Door Learning and Embrace an Amazing Life!
          </span>
          <p>
            Varied and top-notch courses, fulfilling learning needs. Skillfully
            selected, spanning diverse areas. Adaptable learning, scheduling
            freedom,suiting busy lives.
          </p>
        </div>
      </div>
      <div className="secondsection">
        <img src="/outdoor.jpg" alt="" />
        <div className="content">
          <span className="sectiontitle">Diverse Subjects</span>
          <p>
            From academic disciplines to practical skills, platform covers a
            wide range of topics to meet your learning requirements.
          </p>
          <span className="sectiontitle">Flexible Learning</span>
          <p>
            With the flexibility to schedule your learning at your convenience,
            our platform adapts to your busy life.
          </p>
        </div>

        {/* <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>
                Students can register in courses they like. This website is for
                practice purpose only, so please do not provide any personal
                information, such as credit card numbers.
              </p>
              <button class="btn btn-outline-light" type="button">
                Login or Register Now
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                You can become an instructor by registering as one, and start
                making online courses. This website is for practice purpose
                only, so please do not provide any personal information, such as
                credit card numbers.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Login or Register Now
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default HomeComponent;
