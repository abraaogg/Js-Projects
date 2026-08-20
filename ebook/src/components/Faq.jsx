import { useState } from "react";
import "../styles/faq.css";
const questions = [
  {
    question: "O ebook é em qual formato?",
    answer:
      "O ebook será disponibilizado em formato digital, podendo ser acessado facilmente pelo celular, tablet ou computador.",
  },
  {
    question: "Os exercícios são seguros?",
    answer:
      "O conteúdo foi desenvolvido com foco em exercícios adaptados e orientações relacionadas à mobilidade e fisioterapia.",
  },
  {
    question: "Como receberei o ebook?",
    answer:
      "Após a confirmação da compra, você receberá as instruções para acessar o material digital.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim. A compra conta com garantia conforme as condições apresentadas no momento da aquisição.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. O material foi pensado para ser fácil de acessar em diferentes dispositivos.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer:
      "O acesso ao material será disponibilizado de acordo com as condições apresentadas no momento da compra.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  function toggle(index) {
    setActive(active === index ? null : index);
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-heading">
          <span>DÚVIDAS FREQUENTES</span>

          <h2>Tudo o que você precisa saber antes de começar.</h2>
        </div>

        <div className="faq-grid">
          {questions.map((item, index) => (
            <div
              className={`faq-item ${active === index ? "active" : ""}`}
              key={item.question}
            >
              <button onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{active === index ? "−" : "+"}</span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
