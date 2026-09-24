import React, { useState } from "react";
import "../styles/faq.css";
import { IoIosArrowDown } from "react-icons/io";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Em qual formato recebo o ebook?",
      answer: "Em PDF, para ler no celular, tablet ou computador.",
    },
    {
      question: "Como recebo o material?",
      answer:
        "Após a compra, você receberá o material diretamente no seu e-mail.",
    },
    {
      question: "Preciso de equipamentos?",
      answer:
        "Não. Você pode acompanhar o conteúdo utilizando equipamentos básicos.",
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: "Você terá acesso ao material após a confirmação da compra.",
    },
  ];

  function toggleFaq(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="faq">
      <h2>Perguntas frequentes</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <article className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>

              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                <IoIosArrowDown />
              </span>
            </button>

        <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
  <p>{faq.answer}</p>
</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
