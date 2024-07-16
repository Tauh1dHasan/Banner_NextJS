import Image from "next/image";

export default function inputSection() {
  return (
    <>
      <section className="wptb-contact-form style2">
        <div className="wptb-item-layer both-version">
          <Image
            src="/assets/img/more/texture-2.png"
            alt="texture-2"
            width={700}
            height={400}
          />
          <Image
            src="/assets/img/more/texture-2-light.png"
            alt="texture-2-light"
            width={700}
            height={400}
          />
        </div>
        <div className="container">
          <div className="wptb-form--wrapper no-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="wptb-heading-two pe-lg-5">
                  <div className="wptb-item--inner">
                    <h1 className="wptb-item--title">
                      Feel Free To Ask Us Anything <span>Contact Us</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <form className="wptb-form" action="#" method="post">
                  <div className="wptb-form--inner">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="orgname"
                            className="form-control"
                            placeholder="Org Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="designation"
                            className="form-control"
                            placeholder="Designation*"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="file"
                            name="picture"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="file"
                            name="logo"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 mb-4">
                        <div className="wptb-item--button">
                          <button className="btn" type="submit">
                            <span className="btn-wrap">
                              <span className="text-first">Submit</span>
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
    </>
  );
}
