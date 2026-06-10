import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-page">

      <div className="home-overlay">

        <h1 className="home-title">
          STREAM HUB
        </h1>

        <p className="home-subtitle">
          Choose your entertainment universe
        </p>

        <div className="platforms">

          <div
            className="platform-card netflix-home"
            onClick={() => navigate("/netflix")}
          >
            <div className="platform-content">

              <h2>NETFLIX</h2>

              <p>
                Unlimited movies, TV shows and originals.
              </p>

              <button>
                Enter Netflix
              </button>

            </div>
          </div>

          <div
            className="platform-card prime-home"
            onClick={() => navigate("/prime")}
          >
            <div className="platform-content">

              <h2>PRIME VIDEO</h2>

              <p>
                Movies, series and exclusive Prime content.
              </p>

              <button>
                Enter Prime
              </button>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;