import "../styles/included.css";
const items = [
  "Exercícios práticos e ilustrados passo a passo",
  "Programas adaptados para diferentes níveis",
  "Dicas para prevenir dores e lesões",
  "Orientações para manter a constância",
  "Bônus: alongamentos e mobilidade",
];

function Included() {
  return (
    <section className="included">
      <div className="container included-container">
        <div className="included-content">
          <span className="included-label">O QUE ESTÁ INCLUSO</span>

          <h2>Tudo o que você precisa para começar.</h2>

          <ul>
            {items.map((item) => (
              <li key={item}>
                <span>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="included-visual">
          {/* IMAGE PLACEHOLDER */}
          <div className="book-pages-placeholder">
            <span>PRÉVIA DO EBOOK</span>
            <strong>EXERCÍCIOS</strong>
            <small>IMAGEM / MOCKUP</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Included;
