import { journey } from "../data/company.js";

export default function Hero() {
  return (
    <section className="hero">
      <p className="label">Hospital Marketing Agency · 13 Years</p>
      <h1>
        <span className="dim">보이는 병원에서,</span>
        <br />
        <em>선택되는 병원</em>으로.
      </h1>
      <p className="lede">
        환자가 병원을 찾는 방식이 달라졌습니다. 윈에이드는 채널을 따로 맡지 않습니다. 환자가 병원을
        발견하고, 비교하고, 문의하고, 예약해 내원하기까지의 흐름 전체를 설계하고 운영합니다.
      </p>
      <div className="journey" aria-label="환자 유입 흐름">
        <ol>
          {journey.map((j) => (
            <li key={j.step}>
              <b>{j.step}</b>
              <span>{j.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
