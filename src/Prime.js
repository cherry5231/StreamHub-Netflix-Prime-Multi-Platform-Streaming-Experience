function Prime() {

  const movies = [
    {
      title: "The Boys",
      image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2024/07/GSxE6KHW8AAZTTx.jpg"
    },
    {
      title: "Reacher",
      image: "https://cdn.myportfolio.com/9bd278bd-9027-489b-8bd6-bca504975fd3/b3d2bc9f-b5ce-441b-8ecb-f8dcbfb49fa6_rw_1920.jpg?h=53b5cbcf885deab6edcccef45ad8ba77"
    },
    {
      title: "Fallout",
      image: "https://image.tmdb.org/t/p/original/3sLNnyQdluuIa13mHPEU7kcvM2t.jpg"
    },
    {
      title: "Invincible",
      image: "https://posterspy.com/wp-content/uploads/2024/03/INVINCIBLE-POSTER.jpg"
    },
    {
      title: "Jack Ryan",
      image: "https://posterspy.com/wp-content/uploads/2018/09/jack-ryan-posyter-1.jpg"
    }
  ];

  return (
    <div className="prime">

      <nav className="prime-navbar">
        <h1>prime video</h1>
      </nav>

      <section className="prime-hero">

        <div className="prime-overlay">

          <h1>Welcome to Prime Video</h1>

          <p>
            Watch blockbuster movies, exclusive originals,
            live sports and award-winning TV shows.
          </p>

          <div className="prime-buttons">

            <button className="watch-btn">
              Start Watching
            </button>

            <button className="membership-btn">
              Join Prime
            </button>

          </div>

        </div>

      </section>

      <h2 className="prime-title">
        Top Picks For You
      </h2>

      <div className="prime-row">

        {movies.map((movie) => (

          <div
            className="prime-card"
            key={movie.title}
          >

            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

          </div>

        ))}

      </div>

      <h2 className="prime-title">
        Prime Originals
      </h2>

      <div className="prime-row">

        {movies.map((movie) => (

          <div
            className="prime-card"
            key={movie.title + "2"}
          >

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

export default Prime;