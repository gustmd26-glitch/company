import { stages } from "../data/company.js";

export default function Framework() {
  return (
    <section className="band" id="framework" aria-labelledby="fw-h">
      <div className="wrap sec">
        <div className="sec-head">
          <p className="label">Growth Framework</p>
          <h2 id="fw-h">다섯 단계로 쌓는 환자 유입 구조</h2>
          <p>환자가 지나가는 순서대로 채널을 배치합니다. 앞 단계가 다음 단계의 신뢰를 만듭니다.</p>
        </div>
        <div className="stages">
          {stages.map((s, i) => (
            <div className="stage" key={s.en}>
              <span className="no">{String(i + 1).padStart(2, "0")} · {s.ko}</span>
              <h3>{s.en}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
