import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import car3 from "../assets/images/car3.jpg";
import "../pagesCss/homeCss.css";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* <h1 className='text-3xl font-bold mb-6'>Home</h1> */}
      <Slider />

      {/* Main */}

      <main id="main">
        {/* <section class="section-property section-t8">
        
          <div class="container">
            <div id="property-carousel" class="swiper">
              <div class="swiper-wrapper">
                aa
              </div>
            </div>
          </div>
        </section> */}

        <section class="section-agents section-t8">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrap d-flex justify-content-between">
                  <div class="title-box">
                    <h2 class="title-a">New Cars</h2>
                  </div>
                  <div class="title-link">
                    <a href="#">
                      All Cars
                      <span class="bi bi-chevron-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="card-box-d">
                  <div class="card-img-d">
                    <img src={car3} alt="" class="img-d img-fluid" />
                  </div>
                  <div class="card-overlay card-overlay-hover">
                    <div class="card-header-d">
                      <div class="card-title-d align-self-center">
                        <h3 class="title-d">
                          <a href="agent-single.html" class="link-two">
                            G Class
                            <br />{" "}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div class="card-body-d">
                      <p class="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div class="info-agents color-a">
                        <p>
                          <strong>Price :</strong> $4000
                        </p>
                        <p>
                          <strong>Fuel :</strong> Petrol
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              <div class="col-md-4">
                <div class="card-box-d">
                  <div class="card-img-d">
                    <img src={car3} alt="" class="img-d img-fluid" />
                  </div>
                  <div class="card-overlay card-overlay-hover">
                    <div class="card-header-d">
                      <div class="card-title-d align-self-center">
                        <h3 class="title-d">
                          <a href="agent-single.html" class="link-two">
                            G Class
                            <br />{" "}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div class="card-body-d">
                      <p class="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div class="info-agents color-a">
                        <p>
                          <strong>Price :</strong> $4000
                        </p>
                        <p>
                          <strong>Fuel :</strong> Petrol
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}

              <div class="col-md-4">
                <div class="card-box-d">
                  <div class="card-img-d">
                    <img src={car3} alt="" class="img-d img-fluid" />
                  </div>
                  <div class="card-overlay card-overlay-hover">
                    <div class="card-header-d">
                      <div class="card-title-d align-self-center">
                        <h3 class="title-d">
                          <a href="agent-single.html" class="link-two">
                            G Class
                            <br />{" "}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div class="card-body-d">
                      <p class="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div class="info-agents color-a">
                        <p>
                          <strong>Price :</strong> $4000
                        </p>
                        <p>
                          <strong>Fuel :</strong> Petrol
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}

              
            </div>
            
          </div>
        </section>
      </main>

      {/* Main Over */}
      <Footer />
    </>
  );
};

export default Home;
