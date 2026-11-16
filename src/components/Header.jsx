import { company } from "../data/company.js";

const nav = [
  { href: "#about", label: "회사소개" },
  { href: "#framework", label: "프레임워크" },
  { href: "#services", label: "서비스" },
  { href: "#contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="top">
      <div className="wrap top-inner">
        <a className="logo" href="#">
          {company.brand} <small>윈에이드 · 병원마케팅</small>
        </a>
        <nav aria-label="주요 메뉴">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a className="call" href={`tel:${company.tel.replace(/-/g, "")}`}>{company.tel}</a>
      </div>
    </header>
  );
}
