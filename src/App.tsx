import { useState, useEffect } from "react";
import { CubicTable } from "./components/CubicTable";
import { CubicInput } from "./components/CubicInput";
import { CubicHistory } from "./components/CubicHistory";
import { CubicGraph } from "./components/CubicGraph";
import { CubicEquation } from "./components/CubicEquation";

const trigMethod = (p: number, q: number, translation: number) => {
  const k = 2 * Math.sqrt(-p / 3);
  const theta = Math.acos(-q / (2 * Math.sqrt(Math.pow(-p / 3, 3)))) / 3;
  return [
    k * Math.cos(theta) + translation,
    k * Math.cos(theta + (2 * Math.PI) / 3) + translation,
    k * Math.cos(theta + (4 * Math.PI) / 3) + translation,
  ];
};

const cardanoMethod = (p: number, q: number, translation: number) => {
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
  const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
  return u + v + translation;
};

const getRoots = (discriminant: number, p: number, q: number, translation: number) => {
  if (Math.abs(discriminant) < 1e-12) discriminant = 0;

  if (discriminant < 0) {
    return trigMethod(p, q, translation);
  } else if (discriminant > 0) {
    const realRoot = cardanoMethod(p, q, translation);
    return [realRoot, "complex", "complex"];
  } else {
    if (p === 0 && q === 0) {
      const realRoot = cardanoMethod(p, q, translation);
      return [realRoot, realRoot, realRoot];
    } else {
      const r1 = Math.cbrt(q / 2);
      const r2 = -2 * r1;
      return [r1 + translation, r1 + translation, r2 + translation];
    }
  }
};

const formatRoot = (r: number | string) => {
  if (typeof r === "number") return `${r.toFixed(4)}`;
  return "complex";
};

const getMinMaxPoints = (a: number, b: number, c: number, d: number) => {
  if (a === 0) return null;

  const A = 3 * a;
  const B = 2 * b;
  const C = c;
  const discriminant = B * B - 4 * A * C;

  if (discriminant < 0) return null;

  const sqrtDisc = Math.sqrt(discriminant);
  const x1 = (-B + sqrtDisc) / (2 * A);
  const x2 = (-B - sqrtDisc) / (2 * A);

  const y1 = a * Math.pow(x1, 3) + b * Math.pow(x1, 2) + c * x1 + d;
  const y2 = a * Math.pow(x2, 3) + b * Math.pow(x2, 2) + c * x2 + d;

  if (y1 > y2) {
    return {
      max: { x: x1.toFixed(4), y: y1.toFixed(4) },
      min: { x: x2.toFixed(4), y: y2.toFixed(4) },
    };
  } else {
    return {
      max: { x: x2.toFixed(4), y: y2.toFixed(4) },
      min: { x: x1.toFixed(4), y: y1.toFixed(4) },
    };
  }
};

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const [pValue, setPValue] = useState("");
  const [qValue, setQValue] = useState("");
  const [discValue, setDiscValue] = useState("");
  const [roots, setRoots] = useState<string[]>(["0", "0", "0"]);
  const [minMaxPoints, setMinMaxPoints] = useState<{
    max: { x: string; y: string };
    min: { x: string; y: string };
  } | null>(null);
  const [savedEquations, setSavedEquations] = useState<Array<{ a: number; b: number; c: number; d: number }>>([]);

  const loadEquation = (loadedA: number, loadedB: number, loadedC: number, loadedD: number) => {
    setA(loadedA);
    setB(loadedB);
    setC(loadedC);
    setD(loadedD);
  };

  const notCubic = () => {
    if (a === 0) {
      setPValue("");
      setQValue("");
      setDiscValue("");
      setRoots(["", "", ""]);
      setMinMaxPoints(null);
      return;
    }

    const p = (3 * a * c - b * b) / (3 * a * a);
    const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    const translation = -b / (3 * a);

    setPValue(p.toFixed(4));
    setQValue(q.toFixed(4));
    setDiscValue(discriminant.toFixed(4));

    const calculatedRoots = getRoots(discriminant, p, q, translation);
    const formattedRoots = calculatedRoots.map((root) => formatRoot(root));
    setRoots(formattedRoots);
    setMinMaxPoints(getMinMaxPoints(a, b, c, d));
  };

  useEffect(() => {
    notCubic();
  }, [a, b, c, d]);

  const saveEquation = () => {
    const newEquation = { a, b, c, d };
    setSavedEquations([...savedEquations, newEquation]);
  };

  return (
    <div className="font-['Trebuchet_MS','Lucida_Sans_Unicode',sans-serif] bg-[#f0f4ef] text-center p-5">
      <h1 className="text-[#e6aace] text-4xl m-0 leading-[1.3]" style={{ textShadow: "2px 2px #0d1821" }}>
        Cubic Solver
      </h1>

      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        onAChange={setA}
        onBChange={setB}
        onCChange={setC}
        onDChange={setD}
        onSave={saveEquation}
      />

      <CubicEquation a={a} b={b} c={c} d={d} />

      <div className="flex justify-center items-center gap-[30px] my-[30px] mx-auto max-w-[1200px]">
        <CubicTable
          pValue={pValue}
          qValue={qValue}
          discValue={discValue}
          root1Value={roots[0]}
          root2Value={roots[1]}
          root3Value={roots[2]}
          minMaxPoints={minMaxPoints}
        />
        <CubicGraph a={a} b={b} c={c} d={d} roots={roots} />
      </div>

      <CubicHistory savedEquations={savedEquations} onLoad={loadEquation} />
    </div>
  );
};