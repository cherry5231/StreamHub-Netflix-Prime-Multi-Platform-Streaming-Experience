function Netflix() {

  const movies = [
    {
      title: "Stranger Things",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzT0KCj3xFEEmbs8fS7andoLlj_eX8Yv3zA&s"
    },
    {
      title: "Wednesday",
      image: "https://everanta.in/cdn/shop/files/Dark_Vibes_Wednesday_Wall_Poster_Main_Image.webp?v=1754548778&width=1946"
    },
    {
      title: "Dark",
      image: "https://m.media-amazon.com/images/I/A11DlZLBe7S._AC_UF894,1000_QL80_.jpg"
    },
    {
      title: "Money Heist",
      image: "https://m.media-amazon.com/images/I/91fNL3q0hYS.jpg"
    },
    {
      title: "Breaking Bad",
      image: "https://m.media-amazon.com/images/I/81d+ctRGhcL.jpg"
    }
  ];

  return (
    <div className="netflix">

      <nav className="netflix-navbar">
        <h1>NETFLIX</h1>
      </nav>

      <section className="netflix-hero">
        <div className="hero-overlay">

          <h1>STRANGER THINGS</h1>

          <p>
            When a young boy vanishes, a small town uncovers a mystery
            involving secret experiments and supernatural forces.
          </p>

          <div className="hero-buttons">
            <button className="play-btn">
              ▶ Play
            </button>

            <button className="info-btn">
              More Info
            </button>
          </div>

        </div>
      </section>

      <h2 className="row-title">
        Trending Now
      </h2>

      <div className="movie-row">

        {movies.map((movie) => (

          <div className="movie-card" key={movie.title}>

            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

          </div>

        ))}

      </div>

      <h2 className="row-title">
        Popular on Netflix
      </h2>

      <div className="movie-row">

        {movies.map((movie) => (

          <div className="movie-card" key={movie.title + "2"}>

            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Netflix;