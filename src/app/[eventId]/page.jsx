import Image from "next/image";

import InputSection from "@/components/InputSection";

export default function page() {
  return (
    <>
      <main className="wrapper">
        <section className="blog-details pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-5 mb-md-0 ps-md-0">
                <div className="blog-details-inner">
                  <div className="post-content">
                    <figure className="block-gallery mb-4">
                      <Image
                        src="/assets/img/services/details.jpg"
                        alt="Banner Image"
                        width={600}
                        height={400}
                      />
                    </figure>
                    <div className="post-header">
                      <h1 className="post-title">Studio Photography</h1>
                    </div>
                    <div className="fulltext">
                      <p>
                        The talent at kimono runs wide and deep. Across many
                        markets, geographies &amp; typologies, our team members
                        are some of the finest professionals in the industry
                        wide and deep. Across many markets, geographies and
                        typologies, our team members are some of the finest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <InputSection />
      </main>
    </>
  );
}
