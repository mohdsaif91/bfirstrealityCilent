import React from "react";
import "./Cards.scss";
import imge5 from "../../images/caro5.jpg";
import imge2 from "../../images/caro2.jpg";
import imge3 from "../../images/caro3.jpg";
import imge4 from "../../images/caro4.jpg";
// import buldinglogo from './building-2.png';

export default function cards({ imageUrl, Title, Body }) {
  return (
    <>
      <div className="card-heading">
        <h1>HANDPICKED FOR YOU</h1>

        {/* card-1 */}

        <div className="cards-main">
          <div className="card-container">
            <div className="image-container">
              <img src={imge3} alt="" />
            </div>

            <div className="card-content">
              <div className="card-body">
                <div className="bl-tit">
                  <p>
                    <span className="buld-tit"> Godrej Nest</span>
                    <span className="location">Kandivali East</span>
                  </p>
                </div>

                <p className="apart-area">
                  <span className="prize">₹1.2 Crore</span>
                  <br />
                  <span className="flat">1BHK,2BHK,3BHK Apartment</span>
                  <br />
                  <span className="area">425-600 sq.ft.</span>
                </p>
                <div className="btn">
                  <button>
                    <a href="/#">view more</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card-2 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imge2} alt="" />
            </div>
            <div className="card-content">
              <div className="card-body">
                <div className="bl-tit">
                  <p>
                    <span className="buld-tit"> Gallaxy palace</span>
                    <span className="location">kalyaan</span>
                  </p>
                </div>
                <p className="apart-area">
                  <span className="prize">₹1.4 Crore</span>
                  <br />
                  <span className="flat">1BHK,2BHK,3BHK Apartment</span>
                  <br />
                  <span className="area">425-600 sq.ft.</span>
                </p>
                <div className="btn">
                  <button>
                    <a href="/#">view more</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card-3 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imge4} alt="" />
            </div>
            <div className="card-content">
              <div className="card-body">
                <div className="bl-tit">
                  <p>
                    <span className="buld-tit">tokeyo</span>
                    <span className="location">navi mumbai</span>
                  </p>
                </div>
                <p className="apart-area">
                  <span className="prize">₹2 Crore</span>
                  <br />
                  <span className="flat">1BHK,2BHK,3BHK Apartment</span>
                  <br />
                  <span className="area">425-600 sq.ft.</span>
                </p>
                <div className="btn">
                  <button>
                    <a href="/#">view more</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card-4 */}

          <div className="card-container">
            <div className="image-container">
              <img src={imge5} alt="" />
            </div>
            <div className="card-content">
              <div className="card-body">
                <div className="bl-tit">
                  <p>
                    <span className="buld-tit"> white house</span>
                    <span className="location">thana</span>
                  </p>
                </div>
                <p className="apart-area">
                  <span className="prize">₹1.8 Crore</span>
                  <br />
                  <span className="flat">1BHK,2BHK,3BHK Apartment</span>
                  <br />
                  <span className="area">425-600 sq.ft.</span>
                </p>
                <div className="btn">
                  <button>
                    <a href="/#">view more</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card-5*/}

          <div className="card-container">
            <div className="image-container">
              <img src={imge2} alt="" />
            </div>
            <div className="card-content">
              <div className="card-body">
                <div className="bl-tit">
                  <p>
                    <span className="buld-tit"> kalu palace</span>
                    <span className="location">Kandivali East</span>
                  </p>
                </div>
                <p className="apart-area">
                  <span className="prize">₹1.7 Crore</span>
                  <br />
                  <span className="flat">1BHK,2BHK,3BHK Apartment</span>
                  <br />
                  <span className="area">425-600 sq.ft.</span>
                </p>
                <div className="btn">
                  <button>
                    <a href="/#">view more</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card-container">
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
          </div> */}

          {/* card-3 */}

          {/* <div className="card-container">
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
          </div> */}

          {/* card-4 */}

          {/* <div className="card-container">
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
          </div> */}

          {/* card-5 */}

          {/* <div className="card-container">
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
          </div> */}

          {/* card-6 */}
          {/* 
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
          </div> */}
        </div>
      </div>
    </>
  );
}
