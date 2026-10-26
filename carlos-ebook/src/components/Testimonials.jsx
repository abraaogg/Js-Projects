import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    text: "Comecei sem medo e hoje me movimento muito melhor.",
    name: "Maria Aparecida, 72 anos",
  },
  {
    text: "Exercícios simples, práticos e que realmente funcionam.",
    name: "Seu João, 68 anos",
  },
  {
    text: "Recuperei minha autonomia e minha disposição no dia.",
    name: "Ana Lúcia, 70 anos",
  },
];

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <h2>Quem já praticou</h2>

        <div className="testimonials-list">
          {testimonials.map(({ text, name }) => (
            <article className="testimonial" key={name}>
              <div className="testimonial-stars" aria-label="5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p>“{text}”</p>
              <span>{name}</span>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />
    </>
  );
}

export default Testimonials;
