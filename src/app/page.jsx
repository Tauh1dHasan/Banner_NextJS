import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="wrapper">
        <section className="wptb-slider style15">
          <div className="wptb-heading-two">
            <div className="wptb-item--inner text-center">
              <h6 className="wptb-item--subtitle">Photography Agency</h6>
              <h1 className="wptb-item--title">
                {" "}
                We Capture Your Best <br /> <span>Memories</span> Here
              </h1>
              <div className="wptb-item--description">
                kimono photography Agency runs wide and deep. Across many <br />{" "}
                markets, geographies &amp; typologies, our team memberss
              </div>
            </div>
          </div>
          <div className="swiper-container wptb-swiper-slider-fifteen">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/37.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/38.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/39.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/40.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/41.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/38.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/39.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="wptb-slider--item">
                  <div className="wptb-slider--image">
                    <img src="./assets/img/slider/40.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wptb-item-layer wptb-item-layer-one both-version">
            <img src="./assets/img/slider/texture-1.png" alt="img" />
            <img src="./assets/img/slider/texture-1-light.png" alt="img" />
          </div>
          <div className="wptb-item-layer wptb-item-layer-two both-version">
            <img src="./assets/img/slider/round.png" alt="img" />
            <img src="./assets/img/slider/round-light.png" alt="img" />
          </div>
          <div className="wptb-item-layer wptb-item-layer-three both-version">
            <img src="./assets/img/slider/overlay.png" alt="img" />
            <img src="./assets/img/slider/overlay-light.png" alt="img" />
          </div>
        </section>
        <div className="divider-line-hr" />
        <section className="wptb-project pt-0">
          <div className="container">
            <div className="wptb-heading-two">
              <div className="wptb-item--inner text-center">
                <h6 className="wptb-item--subtitle">Kimono Projects</h6>
                <h1 className="wptb-item--title">
                  {" "}
                  Explore Kimono <br /> Photography <span>Projects</span>{" "}
                </h1>
                <div className="wptb-item--description">
                  kimono photography Agency runs wide and deep. Across many{" "}
                  <br /> markets, geographies &amp; typologies, our team members
                </div>
              </div>
            </div>
            <div className="style-masonry effect-blur">
              <div className="grid grid-3 gutter-10 clearfix">
                <div className="grid-sizer" />
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/1.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">
                            Bright Boho Sunshine
                          </a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/2.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">
                            California Fall Collection 2023
                          </a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/3.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">
                            Brown girl next door
                          </a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/4.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">Fashion next stage</a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/5.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">Jenifer in green</a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/6.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">Sunflower Boho girl</a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/7.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">Iceland girl</a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/8.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">Summer sadness</a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/9.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">Festive mode one</a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <img src="./assets/img/projects/1/10.jpg" alt="img" />
                    </div>
                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <a href="project-details.html">
                            Bright Boho Sunshine0
                          </a>
                        </h4>
                        <p>By Jonathon Willson</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-line-hr" />
        <section className="wptb-contact-form style2">
          <div className="wptb-item-layer both-version">
            <img src="./assets/img/more/texture-2.png" alt="" />
            <img src="./assets/img/more/texture-2-light.png" alt="" />
          </div>
          <div className="container">
            <div className="wptb-form--wrapper no-bg">
              <div className="row">
                <div className="col-lg-5">
                  <div className="wptb-heading-two pe-lg-5">
                    <div className="wptb-item--inner">
                      <h6 className="wptb-item--subtitle"> Contact Us</h6>
                      <h1 className="wptb-item--title">
                        {" "}
                        Feel Free To Ask Us Anything <span>Contact Us</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form
                    className="wptb-form"
                    action="https://wpthemebooster.com/demo/themeforest/html/kimono/dark/contact.php"
                    method="post"
                  >
                    <div className="wptb-form--inner">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Name*"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="E-mail*"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mb-4">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12 mb-4">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              placeholder="Text"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                          <div className="wptb-item--button">
                            <button className="btn" type="submit">
                              <span className="btn-wrap">
                                <span className="text-first">Send Mail</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
