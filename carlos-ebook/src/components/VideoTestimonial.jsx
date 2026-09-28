import React, { useState } from "react";
import "../styles/video-testimonials.css";

function VideoTestimonial() {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    { id: 1, title: "Depoimento 1" },
    { id: 2, title: "Depoimento 2" },
    { id: 3, title: "Depoimento 3" },
    { id: 4, title: "Depoimento 4" },
    { id: 5, title: "Depoimento 5" },
  ];

  function nextVideo() {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  }

  function previousVideo() {
    setActiveVideo(
      (prev) => (prev - 1 + videos.length) % videos.length
    );
  }

  const visibleVideos = [0, 1, 2].map(
    (offset) => videos[(activeVideo + offset) % videos.length]
  );

  return (
    <section className="video-testimonials">
      <h2>Depoimentos em vídeo</h2>

      <p>
        Veja como as práticas e a mentoria mudaram a rotina e a saúde de quem
        acompanha o trabalho.
      </p>

      <div className="video-carousel">
        <button className="video-arrow" onClick={previousVideo}>
          ←
        </button>

        <div className="video-window">
          <div className="video-list">
            {visibleVideos.map((video) => (
              <article className="video-card" key={video.id}>
                <div className="video-placeholder">
                  <span>▶</span>
                </div>

                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>

        <button className="video-arrow" onClick={nextVideo}>
          →
        </button>
      </div>

      <div className="video-dots">
        {videos.map((video, index) => (
          <span
            key={video.id}
            className={activeVideo === index ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoTestimonial;