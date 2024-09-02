"use client";

import { useState } from "react";

export default function InputSection({ onGenerateBanner }) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [photo, setPhoto] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const orgReader = new FileReader();
    let photoData = "";
    let logoData = "";

    reader.onload = () => {
      photoData = reader.result;
      orgReader.onload = () => {
        logoData = orgReader.result;
        onGenerateBanner({
          name,
          designation,
          organization,
          photo: photoData,
          logo: logoData,
        });
      };
      orgReader.readAsDataURL(logo);
    };
    reader.readAsDataURL(photo);
  };

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
                <form class="wptb-form" onSubmit={handleSubmit}>
                  <div class="wptb-form--inner">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 mb-4">
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Name*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
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
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
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
                            onChange={(e) => setPhoto(e.target.files[0])}
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
                            onChange={(e) => setLogo(e.target.files[0])}
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
