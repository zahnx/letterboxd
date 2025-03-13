import avatar from "../images/avatar.jpg";
export default function Header() {
  return (
    <>
      <header>
        <div className="profile">
          <div className="profile-image">
            <img src={avatar} alt="Zahn Avatar" />
          </div>
          <div className="profile-bio">
            <h1>zahn.dev </h1>
            <p>Just someone who loves watching movies 🍿</p>
          </div>
        </div>
        <div className="profile-socials">
          <div className="social-github">
            <a
              href="https://github.com/zahnx?tab=overview&from=2025-03-01&to=2025-03-13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="50" height="50">
                <use xlinkHref="/icons.svg#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <hr></hr>
    </>
  );
}
