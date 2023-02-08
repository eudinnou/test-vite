import { lazy } from "react";

const CompB = lazy(() => import("./CompB"));
const CompC = lazy(() => import("./CompC"));

function CompA() {
  return (
    <div>
      <div>This is CompA</div>
      <CompB />
      <CompC />
    </div>
  );
}

export default CompA;
