import "../styles/benefits.css";
import { IoAccessibility } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { LuHeartPulse } from "react-icons/lu";

function Benefits() {
  return (
    <>
      <section className="benefits">
        <div className="benefit">
          <div className="benefit-icon">
            <LuHeartPulse />
          </div>
          <h3>Alívio das dores</h3>
          <p>Movimentos suaves para as costas e articulações.</p>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <IoAccessibility />
          </div>
          <h3>Mais mobilidade</h3>
          <p>Amplitude de movimento para o dia a dia.</p>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <FiSunrise />
          </div>
          <h3>Minutos por dia</h3>
          <p>Uma rotina simples, sem equipamentos.</p>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default Benefits;
