export default function InputSection() {
  return (
    <>
      <section class="wptb-contact-form-two pt-5">
        <div class="container">
          <h2 className="text-center mb-4">
            Provide Inputs and Generate Banner
          </h2>
          <div class="wptb-form--wrapper">
            <div class="row">
              <div class="col-lg-12">
                <form class="wptb-form" action="#" method="post">
                  <div class="wptb-form--inner">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 mb-4">
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Name*"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6 mb-4">
                        <div class="form-group">
                          <input
                            type="text"
                            name="designation"
                            class="form-control"
                            placeholder="Designation"
                          />
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12 mb-4">
                        <div class="form-group">
                          <input
                            type="text"
                            name="organization"
                            class="form-control"
                            placeholder="Organization*"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6 mb-4">
                        <div class="form-group">
                          <input
                            type="file"
                            name="photo"
                            class="form-control"
                            placeholder="Your photo*"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6 mb-4">
                        <div class="form-group">
                          <input
                            type="file"
                            name="logo"
                            class="form-control"
                            placeholder="Organization logo*"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-12 col-lg-12">
                        <div class="wptb-item--button">
                          <button class="btn" type="submit">
                            <span class="btn-wrap">
                              <span class="text-first">Generate Banner</span>
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
