import { services } from "../data/company.js";

export default function Services() {
  return (
    <section className="sec" id="services" aria-labelledby="svc-h">
      <div className="sec-head">
        <p className="label">Services</p>
        <h2 id="svc-h">일곱 개 그룹, 열다섯 가지 서비스</h2>
        <p>필요한 것만 골라 시작하고, 병원의 단계에 맞춰 넓혀 갑니다.</p>
      </div>
      <div className="svc">
        {services.map((s) => (
          <article key={s.en}>
            <h3>
              {s.ko} <span className="en">{s.en}</span>
            </h3>
            <p>{s.desc}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="svc-note">이 밖에 병원·치과 성장 전략, 검색·AI 마케팅을 주제로 세미나와 강연을 진행합니다.</p>
    </section>
  );
}
