import "../styles/benefits.css";
const benefits = [
  {
    icon: "⌁",
    title: "Reduza dores",
    description: "e melhore sua mobilidade",
  },
  {
    icon: "♧",
    title: "Ganhe autonomia",
    description: "para as atividades diárias",
  },
  {
    icon: "♡",
    title: "Mais saúde,",
    description: "disposição e bem-estar",
  },
  {
    icon: "✓",
    title: "Exercícios seguros,",
    description: "aprovados por especialistas",
  },
];

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-heading">
          <span>BENEFÍCIOS PARA SUA VIDA</span>
          <h2>
            Movimento para viver
            <br />
            melhor todos os dias.
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.title}>
              <div className="benefit-icon">{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
