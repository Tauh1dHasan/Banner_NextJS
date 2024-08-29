"use client";

import Image from "next/image";
import InputSection from "@/components/InputSection";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { eventId } = params;

  useEffect(() => {
    if (eventId) {
      fetch(`/api/event/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setEventData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
          setLoading(false);
        });
    }
  }, [eventId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!eventData) {
    return <p>Event data not found.</p>;
  }

  const { event, banners } = eventData;

  return (
    <>
      <main className="wrapper">
        <section className="blog-details pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-5 mb-md-0 ps-md-0">
                <div className="blog-details-inner">
                  <div className="post-content">
                    <div className="row">
                      {/* Render banners */}
                      {banners.map((banner, index) => (
                        <div className="col-md-6" key={index}>
                          <figure className="mb-4">
                            <Image
                              src={`/documents/${banner.document}`}
                              alt={banner.title}
                              width={600}
                              height={400}
                            />
                          </figure>
                        </div>
                      ))}
                    </div>

                    <div className="post-header">
                      {/* Render event title */}
                      <h1 className="post-title">{event.title}</h1>
                    </div>
                    <div className="fulltext">
                      {/* Render event description */}
                      {/* render html from database */}
                      {/* <p
                        dangerouslySetInnerHTML={{ __html: event.description }}
                      ></p> */}
                      <p>{event.description}</p>
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
