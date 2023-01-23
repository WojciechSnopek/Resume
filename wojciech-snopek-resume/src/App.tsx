import "./App.css";
import resume_profile_picture from "./static/resume_profile_picture.png";

function App() {
  return (
    //     <div className="container">
    //   <nav className="navbar">
    //       <ul>
    //           <li><a href="#home">Home</a></li>
    //           <li><a href="#about">About</a></li>
    //           <li><a href="#service">Service</a></li>
    //           <li><a href="#contact">Contact</a></li>
    //         </ul>
    //       </nav>
    <div className="holster">
      <div className="container y mandatory-scroll-snapping">
        <section id="home">
          <h1>FRONTEND MASTER SITE</h1>
          <p>Hello, I'm Wojtek!</p>
          <img
            src={resume_profile_picture}
            alt="resume_picture"
            width={"30%"}
            height={"auto"}
          />
        </section>
        <section id="about">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            quis!
          </p>
        </section>
        <section id="service">
          <h1>Service</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            quis!
          </p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            quis!
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
