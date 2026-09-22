import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <header className="header">
        <a href="#home" className="logo">
          Chandan<span>.</span>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="home" id="home">

        <div className="home-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>Chandan N M</h1>

          <h2>
            <span>Data Analyst</span>
          </h2>

          <p className="hero-description">
            Computer Science Engineering graduate specializing in
            Artificial Intelligence and Machine Learning, with experience
            in sports analysis, data visualization, machine learning,
            and Generative AI.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn-box">
              More About Me
            </a>

            <a href="#contact" className="btn-box btn-outline">
              Contact Me
            </a>
          </div>

          <div className="home-sci">
            <a
              href="https://github.com/Chandan-nm"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              Git
            </a>

            <a
              href="https://www.linkedin.com/in/chandu-nm"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>

          <div className="hero-image">
            <img
              src="/chandan-profile.jpg"
              alt="Chandan N M"
            />
          </div>
        </div>

      </section>

      {/* Placeholder sections */}
      {/* About Section */}
{/* =========================
    ABOUT SECTION
========================= */}

<section className="about-section" id="about">

  <div className="about-heading">
    <p>GET TO KNOW ME</p>
    <h2>
      About <span>Me</span>
    </h2>
  </div>

  <div className="about-container">

    {/* LEFT SIDE */}
    <div className="about-content">

      <p className="about-label">
        DATA, TECHNOLOGY &amp;
      </p>

      <h3>
        Intelligent <span>Solutions</span>
      </h3>

      <p className="about-text">
        I am a Computer Science Engineering graduate specializing in
        Artificial Intelligence and Machine Learning, with a strong
        interest in Data Analytics, Data Visualization, Machine Learning,
        and Generative AI.
      </p>

      <p className="about-text">
        Currently, I work as a Sports Analyst at Hudl India, where I work
        with sports videos and data through video analysis, event tagging,
        data management, and Excel.
      </p>

      <p className="about-text">
        Previously, I worked as a Data Visualization Intern at
        S.R. Innovative Technologies, where I worked with Power BI,
        Tableau, data analysis, interactive dashboards, and Generative AI.
      </p>

      {/* HIGHLIGHTS */}
      <div className="about-highlights">

        <div className="about-highlight">
          <span className="highlight-number">01</span>
          <h4>BE CSE (AI &amp; ML)</h4>
          <p>Graduate</p>
        </div>

        <div className="about-highlight">
          <span className="highlight-number">02</span>
          <h4>Data Analytics</h4>
          <p>Passion</p>
        </div>

        <div className="about-highlight">
          <span className="highlight-number">03</span>
          <h4>Problem Solving</h4>
          <p>Mindset</p>
        </div>

        <div className="about-highlight">
          <span className="highlight-number">04</span>
          <h4>Continuous Learning</h4>
          <p>Growth</p>
        </div>

      </div>

      <div className="about-quote">
        "Turning data into insights and ideas into impact."
      </div>

    </div>

    {/* RIGHT SIDE — ANIME IMAGE */}
    <div className="about-image-area">

      <div className="about-image-glow"></div>

      <div className="about-image-circle">
        <img
          src="/anime.png"
          alt="Chandan N M anime portrait"
        />
      </div>

      <div className="about-note note-one">
        Analyze<br />
        Visualize<br />
        Solve
      </div>

      <div className="about-note note-two">
        Better Data<br />
        Brighter Decisions
      </div>

      <div className="about-note note-three">
        Learn<br />
        Build<br />
        Grow
      </div>

    </div>

  </div>

</section>

      {/* =========================
    SERVICES SECTION
========================= */}

<section className="services-section" id="services">

  <div className="services-heading">

    <p>WHAT I WORK WITH</p>

    <h2>
      My <span>Services</span>
    </h2>

    <p className="services-subtitle">
      Applying data, analytics, machine learning, and AI
      to build meaningful and data-driven solutions.
    </p>

  </div>


  <div className="services-container">

    {/* Service 01 */}
    <div className="service-card">

      <div className="service-icon">
        01
      </div>

      <h3>Data Analytics</h3>

      <p>
        Analyze and interpret data to identify patterns,
        trends, and meaningful insights that support
        data-driven decisions.
      </p>

      <div className="service-line"></div>

    </div>


    {/* Service 02 */}
    <div className="service-card">

      <div className="service-icon">
        02
      </div>

      <h3>Data Visualization</h3>

      <p>
        Create interactive dashboards and visual reports
        using Power BI and Tableau to communicate data
        clearly and effectively.
      </p>

      <div className="service-line"></div>

    </div>


    {/* Service 03 */}
    <div className="service-card">

      <div className="service-icon">
        03
      </div>

      <h3>Machine Learning</h3>

      <p>
        Work with data preprocessing, exploratory analysis,
        model training, and evaluation to develop
        machine learning solutions.
      </p>

      <div className="service-line"></div>

    </div>


    {/* Service 04 */}
    <div className="service-card">

      <div className="service-icon">
        04
      </div>

      <h3>Generative AI</h3>

      <p>
        Explore Generative AI applications and intelligent
        solutions using modern AI concepts and tools.
      </p>

      <div className="service-line"></div>

    </div>

  </div>

</section>
      {/* =========================
    SKILLS SECTION
========================= */}

<section className="skills-section" id="skills">

  <div className="skills-heading">
    <p>MY EXPERTISE</p>

    <h2>
      Technical <span>Skills</span>
    </h2>

    <p className="skills-subtitle">
      Technologies and tools I use for data, analytics,
      machine learning, and intelligent solutions.
    </p>
  </div>

  <div className="skills-container">

    {/* Programming & Data */}
    <div className="skill-card">

      <div className="skill-number">
        01
      </div>

      <div className="skill-icon">
        &lt;/&gt;
      </div>

      <h3>Programming &amp; Data</h3>

      <p>
        Working with programming, databases, spreadsheets,
        and data manipulation.
      </p>

      <div className="skill-tags">
        <span>Python</span>
        <span>SQL</span>
        <span>Excel</span>
        <span>Pandas</span>
        <span>NumPy</span>
      </div>

    </div>


    {/* Data Analytics */}
    <div className="skill-card">

      <div className="skill-number">
        02
      </div>

      <div className="skill-icon">
        ◫
      </div>

      <h3>Data Analytics &amp; Visualization</h3>

      <p>
        Turning data into meaningful insights through
        analysis, visualization, and reporting.
      </p>

      <div className="skill-tags">
        <span>Power BI</span>
        <span>Tableau</span>
        <span>Data Analysis</span>
        <span>Data Visualization</span>
        <span>EDA</span>
      </div>

    </div>


    {/* Machine Learning */}
    <div className="skill-card">

      <div className="skill-number">
        03
      </div>

      <div className="skill-icon">
        AI
      </div>

      <h3>Machine Learning &amp; AI</h3>

      <p>
        Building and evaluating machine learning models
        and exploring Generative AI applications.
      </p>

      <div className="skill-tags">
        <span>Machine Learning</span>
        <span>Scikit-learn</span>
        <span>Generative AI</span>
        <span>Data Preprocessing</span>
        <span>Model Training</span>
      </div>

    </div>


    {/* Web Technologies */}
    <div className="skill-card">

      <div className="skill-number">
        04
      </div>

      <div className="skill-icon">
        &lt;/&gt;
      </div>

      <h3>Web Technologies</h3>

      <p>
        Building basic web applications and interfaces
        using modern web technologies.
      </p>

      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Flask</span>
      </div>

    </div>

  </div>

</section>

      {/* =========================
    EXPERIENCE SECTION
========================= */}

<section className="experience-section" id="experience">

  <div className="experience-heading">

    <p>MY JOURNEY</p>

    <h2>
      Work <span>Experience</span>
    </h2>

    <p className="experience-subtitle">
      Professional experience in sports analysis,
      data visualization, analytics, and AI.
    </p>

  </div>


  <div className="experience-container">

    {/* =================================
        EXPERIENCE 01 — HUDL
    ================================= */}

    <article className="experience-card experience-current">

      <div className="experience-number">
        01
      </div>

      <div className="experience-top">

        <div>
          <p className="experience-date">
            July 2026 – Present
          </p>

          <h3>Sports Analyst</h3>

          <h4>Hudl India</h4>
        </div>

        <div className="experience-status">
          Current Role
        </div>

      </div>


      <div className="experience-content">

        <p>
          Working with sports videos and data through video
          analysis, event tagging, data management, and Excel.
        </p>

        <ul>
          <li>
            Analyze sports videos and identify relevant events
            for tagging.
          </li>

          <li>
            Perform accurate event tagging as part of sports
            video analysis.
          </li>

          <li>
            Manage and organize sports-related data for
            analysis and reporting.
          </li>

          <li>
            Use Microsoft Excel for working with and
            managing data.
          </li>
        </ul>

      </div>


      <div className="experience-skills">

        <span>Sports Analysis</span>
        <span>Video Analysis</span>
        <span>Event Tagging</span>
        <span>Data Management</span>
        <span>Excel</span>

      </div>

    </article>


    {/* =================================
        EXPERIENCE 02 — SRIT
    ================================= */}

    <article className="experience-card">

      <div className="experience-number">
        02
      </div>

      <div className="experience-top">

        <div>
          <p className="experience-date">
            February 2026 – May 2026
          </p>

          <h3>Data Visualization Intern</h3>

          <h4>S.R. Innovative Technologies</h4>
        </div>

        <div className="experience-status previous">
          Internship
        </div>

      </div>


      <div className="experience-content">

        <p>
          Worked on data visualization and analytics projects
          using Power BI and Tableau, with exposure to
          Generative AI and real-world datasets.
        </p>

        <ul>
          <li>
            Developed interactive dashboards and visualizations
            using Power BI.
          </li>

          <li>
            Created reports and visual representations using
            Tableau.
          </li>

          <li>
            Performed data analysis on real-world datasets.
          </li>

          <li>
            Explored Generative AI applications and
            data-driven solutions.
          </li>

        </ul>

      </div>


      <div className="experience-skills">

        <span>Power BI</span>
        <span>Tableau</span>
        <span>Data Analysis</span>
        <span>Generative AI</span>
        <span>Dashboards</span>

      </div>

    </article>

  </div>

</section>

      {/* =========================
    PROJECTS SECTION
========================= */}

<section className="projects-section" id="projects">

  <div className="projects-heading">

    <p>MY WORK</p>

    <h2>
      Featured <span>Projects</span>
    </h2>

    <p className="projects-subtitle">
      Projects built while exploring artificial intelligence,
      machine learning, data, and software development.
    </p>

  </div>


  <div className="projects-container">

    {/* PROJECT 01 */}

    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          01
        </span>

        <span className="project-category">
          AI / ML
        </span>

      </div>

      <h3>Smart Voting System</h3>

      <h4>Facial Recognition</h4>

      <p>
        A smart voting system project focused on using
        facial recognition technology as part of the
        voting process.
      </p>

      <div className="project-footer">

        <span>AI</span>
        <span>Machine Learning</span>
        <span>Facial Recognition</span>

      </div>

    </article>


    {/* PROJECT 02 */}

    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          02
        </span>

        <span className="project-category">
          RECOMMENDATION
        </span>

      </div>

      <h3>Movie Recommendation System</h3>

      <h4>TMDB</h4>

      <p>
        A movie recommendation project using TMDB data
        to provide movie recommendations based on
        available movie information.
      </p>

      <div className="project-footer">

        <span>Python</span>
        <span>Machine Learning</span>
        <span>TMDB</span>

      </div>

    </article>


    {/* PROJECT 03 */}

    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          03
        </span>

        <span className="project-category">
          GAME
        </span>

      </div>

      <h3>Card Matching Memory Game</h3>

      <h4>Interactive Game</h4>

      <p>
        An interactive card matching memory game developed
        as a software project focused on game interaction
        and user experience.
      </p>

      <div className="project-footer">

        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>

      </div>

    </article>


    {/* PROJECT 04 */}

    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          04
        </span>

        <span className="project-category">
          MACHINE LEARNING
        </span>

      </div>

      <h3>Heart Disease Prediction</h3>

      <h4>Predictive Analytics</h4>

      <p>
        A machine learning project focused on predicting
        heart disease using data analysis and predictive
        modelling techniques.
      </p>

      <div className="project-footer">

        <span>Python</span>
        <span>Machine Learning</span>
        <span>Data Analysis</span>

      </div>

    </article>


    {/* PROJECT 05 */}

    <article className="project-card project-featured">

      <div className="project-top">

        <span className="project-number">
          05
        </span>

        <span className="project-category">
          CAPSTONE
        </span>

      </div>

      <h3>Manufacturing Equipment Output Prediction</h3>

      <h4>Capstone Project</h4>

      <p>
        A capstone project focused on predicting manufacturing
        equipment output using data analysis and machine
        learning techniques.
      </p>

      <div className="project-footer">

        <span>Python</span>
        <span>Machine Learning</span>
        <span>Data Analysis</span>

      </div>

    </article>

  </div>

</section>

      {/* =========================
    EDUCATION & CERTIFICATIONS
========================= */}

<section className="education-section" id="education">

  <div className="education-heading">

    <p>MY ACADEMIC JOURNEY</p>

    <h2>
      Education &amp; <span>Certifications</span>
    </h2>

    <p className="education-subtitle">
      My academic background and professional learning journey.
    </p>

  </div>


  <div className="education-container">

    {/* EDUCATION */}

    <div className="education-main-card">

      <div className="education-number">
        01
      </div>

      <div className="education-icon">
        🎓
      </div>

      <p className="education-date">
        2022 – 2026
      </p>

      <h3>
        Bachelor of Engineering
      </h3>

      <h4>
        Computer Science Engineering
        <span> (AI &amp; ML)</span>
      </h4>

      <p className="education-institute">
        Don Bosco Institute of Technology
      </p>

      <div className="education-cgpa">
        <span>CGPA</span>
        <strong>8.32 / 10</strong>
      </div>

    </div>


    {/* CERTIFICATIONS */}

    <div className="certifications-container">

      <div className="certification-card">

        <div className="certification-number">
          01
        </div>

        <div>
          <p>2026</p>

          <h3>
            Data Science
          </h3>

          <h4>
            DataProPulse | MastersCampus Academy
          </h4>
        </div>

      </div>


      <div className="certification-card">

        <div className="certification-number">
          02
        </div>

        <div>
          <p>2024</p>

          <h3>
            Artificial Intelligence
          </h3>

          <h4>
            IBM
          </h4>
        </div>

      </div>


      <div className="certification-card">

        <div className="certification-number">
          03
        </div>

        <div>
          <p>2024</p>

          <h3>
            Data Analytics Fundamentals
          </h3>

          <h4>
            Infosys Springboard
          </h4>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* =========================
    CONTACT SECTION
========================= */}

<section className="contact-section" id="contact">

  <div className="contact-heading">

    <p>GET IN TOUCH</p>

    <h2>
      Let's <span>Connect</span>
    </h2>

    <p className="contact-subtitle">
      Have an opportunity, project, or professional connection in mind?
      Feel free to reach out.
    </p>

  </div>


  <div className="contact-container">

    {/* GitHub */}

    <a
      href="https://github.com/Chandan-nm"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >

      <div className="contact-icon">
        GH
      </div>

      <div className="contact-info">
        <span>GITHUB</span>
        <h3>Chandan N M</h3>
        <p>View my projects &amp; repositories</p>
      </div>

      <div className="contact-arrow">
        ↗
      </div>

    </a>


    {/* LinkedIn */}

    <a
      href="https://www.linkedin.com/in/chandu-nm"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >

      <div className="contact-icon">
        in
      </div>

      <div className="contact-info">
        <span>LINKEDIN</span>
        <h3>Chandan N M</h3>
        <p>Connect with me professionally</p>
      </div>

      <div className="contact-arrow">
        ↗
      </div>

    </a>


    {/* Phone */}

    <a
      href="tel:+919740377609"
      className="contact-card"
    >

      <div className="contact-icon">
        ☎
      </div>

      <div className="contact-info">
        <span>PHONE</span>
        <h3>+91 97403 77609</h3>
        <p>Call me directly</p>
      </div>

      <div className="contact-arrow">
        ↗
      </div>

    </a>

  </div>


  {/* EMAIL */}

  <div className="contact-email">

    <p>
      Prefer email?
    </p>

    <a href="mailto:chandannm609@gmail.com">
      chandannm609@gmail.com
    </a>

  </div>


  {/* Availability */}

  <div className="contact-bottom">

    <span className="availability-dot"></span>

    <p>
      Open to professional opportunities and collaborations
    </p>

  </div>

</section>

    </div>
  );
}

export default App;