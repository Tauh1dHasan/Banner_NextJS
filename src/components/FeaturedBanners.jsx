"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeaturedBanners() {
  const [feEvents, setfeEvents] = useState([]);

  useEffect(() => {
    fetch("/api/featuredEvents")
      .then((response) => response.json())
      .then((data) => setfeEvents(data));
  }, []);

  return (
    <section className="wptb-project pt-0">
      <div className="wptb-item-layer both-version">
        <Image
          src="/assets/img/more/texture-2.png"
          alt="texture-2"
          width={700}
          height={400}
          layout="responsive"
        />
        <Image
          src="/assets/img/more/texture-2-light.png"
          alt="texture-2-light"
          width={700}
          height={400}
          layout="responsive"
        />
      </div>
      <div className="container">
        <div className="wptb-heading-two">
          <div className="wptb-item--inner text-center">
            {/* <h6 className="wptb-item--subtitle">Kimono Projects</h6> */}
            <h1 className="wptb-item--title">
              Featured <span>Banners</span>
            </h1>
            <div className="wptb-item--description">
              Create your own banner for <br />
              all major events
            </div>
          </div>
        </div>

        <div className="effect-gradient has-radius">
          <div className="row">
            {feEvents.map((feEvent) => (
              <div className="col-md-4 pt-3">
                <div className="grid-item" key={feEvent.id}>
                  <div className="wptb-item--inner">
                    <div className="wptb-item--image">
                      <Image
                        src={`/documents/${feEvent.img}`}
                        alt={feEvent.title}
                        width={200}
                        height={50}
                      />
                      <Link className="wptb-item--link" href={`/event/${feEvent.id}`}>
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </div>

                    <div className="wptb-item--holder">
                      <div className="wptb-item--meta">
                        <h4>
                          <Link href={`/event/${feEvent.id}`}>{feEvent.title}</Link>
                        </h4>
                        <p>{feEvent.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
