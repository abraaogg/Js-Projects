import { useState } from "react";
import "../styles/faq.css";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Em qual formato recebo o ebook?",
    answer: "Em PDF, para ler no celular, tablet ou computador.",
  },
  {
    question: "Como recebo o material?",
    answer: "Após a compra, você receberá o material diretamente no seu e-mail.",
  },
  {
    question: "Preciso de equipamentos?",
    answer: "Não. Você pode acompanhar o conteúdo utilizando equipamentos básicos.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Você terá acesso vitalício após a confirmação da compra.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <h2>Perguntas frequentes</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>

                <span className={`faq-icon ${isOpen ? "open" : ""}`}>
                  <IoIosArrowDown />
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${isOpen ? "open" : ""}`}
                aria-hidden={!isOpen}
              >
                <p>{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;