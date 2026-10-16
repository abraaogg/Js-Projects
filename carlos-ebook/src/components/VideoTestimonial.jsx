import { useState } from "react";
import "../styles/video-testimonials.css";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.png";
import cover3 from "../images/cover3.png";

function VideoTestimonial() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const videos = [
    { video: video1, cover: cover1 },
    { video: video2, cover: cover2 },
    { video: video3, cover: cover3 },
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
        <button
          className="video-arrow"
          onClick={previousVideo}
          aria-label="Vídeo anterior"
        >
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
            {visibleVideos.map((video, index) => (
              <article
                className={`video-card ${index !== 1 ? "side-video" : ""}`}
                key={`${activeVideo}-${index}`}
                onClick={() => {
                  if (index === 0) previousVideo();
                  if (index === 2) nextVideo();
                }}
              >
                <div className="video-placeholder">
                  <video
                    src={video.video}
                    poster={video.cover}
                    controls={index === 1}
                    playsInline
                    preload="metadata"
                    tabIndex={index === 1 ? 0 : -1}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className="video-arrow"
          onClick={nextVideo}
          aria-label="Próximo vídeo"
        >
          →
        </button>
      </div>

      <div className="video-dots">
        {videos.map((_, index) => (
          <button
            key={index}
            className={activeVideo === index ? "active" : ""}
            onClick={() => setActiveVideo(index)}
            aria-label={`Ir para vídeo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoTestimonial;
