import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa6";

function Testimonials() {
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

  return (
    <>
      <section className="testimonials">
        <h2>Quem já praticou</h2>

        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial" key={index}>
              <div className="testimonial-stars" aria-label="5 estrelas">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p>“{testimonial.text}”</p>

              <span>{testimonial.name}</span>
            </article>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default Testimonials;
