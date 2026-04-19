import "../styles/about.scss";

export default function About() {
  return (
    <section className="about">
      <div className="text">
        <h2>About Us</h2>
        <h3>Radhika Mobile Institute</h3>

        <p>
          We provide professional mobile repairing training including
          hardware, software and chip-level repairing with practical learning.
        </p>

        <button>View More</button>
      </div>

      <div className="image">
        <img src="/about.jpg" alt="about" />
      </div>
    </section>
  );
}