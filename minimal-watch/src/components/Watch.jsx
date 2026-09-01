import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/watch.css";
import watchImage from "../images/watch.jpg";

gsap.registerPlugin(ScrollTrigger);

function Watch() {
  const watchRef = useRef(null);

  useEffect(() => {
    let rotation = 0;

    ScrollTrigger.create({
      trigger: watchRef.current,
      start: "top bottom",
      end: "bottom top",

      onUpdate: (self) => {
        // Scroll down
        if (self.direction === 1) {
          rotation += 3;
        }

        // Scroll up
        if (self.direction === -1) {
          rotation -= 3;
        }

        gsap.to(watchRef.current, {
          rotation: rotation,
          duration: 0.2,
          ease: "power2.out",
          overwrite: true,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="watch">
      <img
        ref={watchRef}
        className="watch-image"
        src={watchImage}
        alt="Minimal watch"
      />
    </section>
  );
}

export default Watch;