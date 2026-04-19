import "../styles/navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="top-bar">
        <span>📧 radhikamobile@gmail.com</span>
        <span>📞 +91 9876543210</span>
      </div>

      <div className="nav-main">
        <h2 className="logo">Radhika Mobile Institute</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}