import { company } from "../data/company.js";

export default function Contact() {
  const rows = [
    ["회사명", company.name],
    ["대표", company.ceo],
    ["주소", company.address],
    ["전화", company.tel],
    ["팩스", company.fax],
    ["이메일", company.email],
    ["홈페이지", company.site],
  ];
  return (
    <section className="sec contact" id="contact" aria-labelledby="ct-h">
      <div className="cta">
        <p className="label">Free Diagnosis</p>
        <h2 id="ct-h">우리 병원은 지금 어디서 환자를 놓치고 있을까요?</h2>
        <p>계약 여부와 관계없이 현재 마케팅 상태와 개선 방향을 진단해 드립니다.</p>
        <a className="tel" href={`tel:${company.tel.replace(/-/g, "")}`}>{company.tel}</a>
      </div>
      <dl className="info">
        {rows.map(([k, v]) => (
          <div key={k} className="row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
