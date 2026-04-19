import "../styles/hero.scss";
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content">
        
        {/* 👇 YAHAN ADD KARO (test ke liye) */}
        <img src={heroImg} alt="test" width="300" />

        <h1>Learn Mobile Repairing</h1>
        <h2>Build Your Career</h2>
        <p>
          Join Radhika Mobile Training Institute and become an expert technician.
        </p>
        <button>Enroll Now</button>
      </div>
    </div>
  );
}

export default Hero;
