import { useEffect, useState } from "react";
import gsap from "gsap";
import "../styles/loading-screen.css";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPage() {
      const images = Array.from(document.images);

      await Promise.all([
        ...images.map((img) =>
          img.decode
            ? img.decode().catch(() => {})
            : img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  img.addEventListener("load", resolve, { once: true });
                  img.addEventListener("error", resolve, { once: true });
                }),
        ),
        document.fonts.ready,
      ]);

      if (cancelled) return;

      setProgress(100);

      gsap.delayedCall(0.6, () => {
        if (!cancelled) setIsExiting(true);
      });
    }

    loadPage();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isExiting) onFinish();
  }, [isExiting, onFinish]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <span className="loading-name">Carlos Oliveira</span>

        <div className="loading-line">
          <div
            className="loading-line-progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="loading-percentage">{progress}%</span>
      </div>
    </div>
  );
}
