"use client";

import NextImage from "next/image";
import InputSection from "@/components/InputSection";
import { useState, useEffect, useRef } from "react";

export default function Page({ params }) {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customData, setCustomData] = useState(null);
  const canvasRef = useRef(null);
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

  const generateBanner = (data) => {
    setCustomData(data);
  };

  useEffect(() => {
    if (customData && eventData) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const bannerImage = new window.Image();
      bannerImage.src = `/documents/${eventData.banners[0].document}`;
      bannerImage.onload = () => {
        ctx.drawImage(bannerImage, 0, 0, canvas.width, canvas.height);

        const userImage = new window.Image();
        userImage.src = customData.photo;
        userImage.onload = () => {
          ctx.drawImage(userImage, 50, 50, 100, 100);

          const orgLogo = new window.Image();
          orgLogo.src = customData.logo;
          orgLogo.onload = () => {
            ctx.drawImage(orgLogo, canvas.width - 150, 50, 100, 100);
            ctx.fillstyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText(customData.name, 200, 100);
            ctx.fillText(customData.designation, 200, 150);
            ctx.fillText(customData.organization, 200, 200);
          };
        };
      };
    }
  }, [customData, eventData]);

  const downloadBanner = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "custom-banner.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

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
                      {banners.map((banner, index) => (
                        <div className="col-md-6" key={index}>
                          <figure className="mb-4">
                            <NextImage
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
                      <h1 className="post-title">{event.title}</h1>
                    </div>
                    <div className="fulltext">
                      <p>{event.description}</p>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 col-md-12 mb-5 mb-md-0 ps-md-0 ms-3">
                        <canvas ref={canvasRef} width={1200} height={800} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InputSection onGenerateBanner={generateBanner} />

        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={downloadBanner}>
            Download Banner
          </button>
        </div>
      </main>
    </>
  );
}
