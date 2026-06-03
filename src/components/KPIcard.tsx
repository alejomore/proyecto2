interface KPIcardProps {
  title: string;
  value: string;
}

function KPIcard({ title, value }: KPIcardProps) {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default KPIcard;