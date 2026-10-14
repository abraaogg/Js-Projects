import React, { useState } from "react";
import "../styles/video-testimonials.css";
import renatoImg from "../images/pexels-renato.jpg";
import lucasImg from "../images/lucas-gabriel.jpg";
import leonardoImg from "../images/leonardodourado.jpg";
import pessoasImg from "../images/pexels-pessoas.jpg";
import pessoas1Img from "../images/pexels-pessoas-1.jpg";

function VideoTestimonial() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const videos = [
    { id: 1, title: "Depoimento 1", image: renatoImg },
    { id: 2, title: "Depoimento 2", image: lucasImg },
    { id: 3, title: "Depoimento 3", image: leonardoImg },
    { id: 4, title: "Depoimento 4", image: pessoasImg },
    { id: 5, title: "Depoimento 5", image: pessoas1Img },
  ];

  function nextVideo() {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  }

  function previousVideo() {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  }

  const visibleVideos = [
    videos[(activeVideo - 1 + videos.length) % videos.length],
    videos[activeVideo],
    videos[(activeVideo + 1) % videos.length],
  ];

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

        <div
          className="video-window"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const touchEnd = e.changedTouches[0].clientX;

            if (touchStart - touchEnd > 50) nextVideo();
            if (touchEnd - touchStart > 50) previousVideo();
          }}
        >
          <div className="video-list" key={activeVideo}>
            {visibleVideos.map((video) => (
              <article className="video-card" key={video.id}>
                <div className="video-placeholder">
                  <img src={video.image} alt={video.title} />
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
