"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="wptb-slider style15">
      <div className="wptb-heading-two">
        <div className="wptb-item--inner text-center">
          <h6 className="wptb-item--subtitle">ServicEngine Ltd.</h6>
          <h1 className="wptb-item--title">
            {" "}
            Create your custom
            <br /> <span>Banner</span> for free
          </h1>
          {/* <div className="wptb-item--description">
            kimono photography Agency runs wide and deep. Across many <br />{" "}
            markets, geographies &amp; typologies, our team memberss
          </div> */}
        </div>
      </div>
      <div className="swiper-container wptb-swiper-slider-fifteen">
        <div className="swiper-wrapper">
          {events.map((event) => (
            <div className="swiper-slide">
              <div className="wptb-slider--item">
                <div className="wptb-slider--image">
                  <Image
                    src={`/documents/${event.img}`}
                    alt={event.title}
                    width={700}
                    height={400}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wptb-item-layer wptb-item-layer-one both-version">
        <Image
          src="/assets/img/slider/texture-1.png"
          alt="img"
          width={700}
          height={400}
          layout="responsive"
        />
        <Image
          src="/assets/img/slider/texture-1-light.png"
          alt="img"
          width={700}
          height={400}
          layout="responsive"
        />
      </div>
      <div className="wptb-item-layer wptb-item-layer-two both-version">
        <Image
          src="/assets/img/slider/round.png"
          alt="img"
          width={700}
          height={400}
          layout="responsive"
        />
        <Image
          src="/assets/img/slider/round-light.png"
          alt="img"
          width={700}
          height={400}
          layout="responsive"
        />
      </div>
      <div className="wptb-item-layer wptb-item-layer-three both-version">
        <Image
          src="/assets/img/slider/overlay.png"
          alt="img"
          width={700}
          height={400}
          layout="responsive"
        />
        <Image
          src="/assets/img/slider/overlay-light.png"
          alt="img"
          width={700}
          height={400}
          layout="responsive"
        />
      </div>
    </section>
  );
}
