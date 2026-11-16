import { company } from "../data/company.js";

export default function Footer() {
  return (
    <footer>
      <span>© {company.name} {company.brand}</span>
      <span>대표 {company.ceo}</span>
      <span className="mono">사업자등록번호 {company.bizNo}</span>
    </footer>
  );
}
