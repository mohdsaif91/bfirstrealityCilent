import React from "react";
import "./Cards.scss";

export default function cards({ imageUrl, Title, Body }) {
  return (
    <>
      <div className="card-heading">
        <h1>HANDPICKED FOR YOU</h1>

        {/* card-1 */}

        <div className="cards-main">
          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{Title}</h3>
              </div>
              <div className="card-body">
                <p>{Body}</p>
              </div>
              <div className="btn">
                <button>
                  <a href="/#">view more</a>
                </button>
              </div>
            </div>
          </div>

          {/* card-2 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{Title}</h3>
              </div>
              <div className="card-body">
                <p>{Body}</p>
              </div>
              <div className="btn">
                <button>
                  <a href="/#">view more</a>
                </button>
              </div>
            </div>
          </div>

          {/* card-3 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{Title}</h3>
              </div>
              <div className="card-body">
                <p>{Body}</p>
              </div>
              <div className="btn">
                <button>
                  <a href="/#">view more</a>
                </button>
              </div>
            </div>
          </div>

          {/* card-4 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{Title}</h3>
              </div>
              <div className="card-body">
                <p>{Body}</p>
              </div>
              <div className="btn">
                <button>
                  <a href="/#">view more</a>
                </button>
              </div>
            </div>
          </div>

          {/* card-5 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{Title}</h3>
              </div>
              <div className="card-body">
                <p>{Body}</p>
              </div>
              <div className="btn">
                <button>
                  <a href="/#">view more</a>
                </button>
              </div>
            </div>
          </div>

          {/* card-6 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>{Title}</h3>
              </div>
              <div className="card-body">
                <p>{Body}</p>
              </div>
              <div className="btn">
                <button>
                  <a href="/#">view more</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
