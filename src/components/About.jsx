import { strengths } from "../data/company.js";

export default function About() {
  return (
    <section className="sec about" id="about" aria-labelledby="about-h">
      <blockquote id="about-h">흩어진 마케팅을 하나의 환자 유입 구조로 연결합니다.</blockquote>
      <div className="body">
        <p className="label">About</p>
        <p>
          (주)윈에이드는 병·의원만 맡는 병원마케팅 대행사입니다. 치과, 피부과, 성형외과, 한의원,
          동물병원까지 진료과마다 다른 환자의 검색 경로를 분석해 필요한 채널을 순서대로 이어 붙입니다.
        </p>
        <ul>
          {strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
