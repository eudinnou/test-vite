import { lazy, Suspense } from "react";

const CompA = lazy(() => import("./CompA"));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <CompA />
    </Suspense>
  );
}

export default App;
