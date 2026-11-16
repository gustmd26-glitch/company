import { figures } from "../data/company.js";

export default function Figures() {
  return (
    <>
      <div className="figs">
        {figures.map((f) => (
          <div className="fig" key={f.label}>
            <strong>
              {f.value}
              <sup>{f.unit}</sup>
            </strong>
            <span>{f.label}</span>
          </div>
        ))}
      </div>
      <p className="footnote">2026년 7월 내부 집계 기준</p>
    </>
  );
}
