import { useState, useEffect } from 'react';
import CubicInput from './CubicInput';
import CubicTable from './CubicTable';
import CubicGraph from './CubicGraph';

const formatSign = (value: number, variable: string) => {
  if (value === 0) return "";
  return value > 0 ? ` + ${value}${variable}` : ` - ${Math.abs(value)}${variable}`;
};

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
    return [realRoot, 'complex', 'complex'];
  } else {
    if (p === 0 && q === 0) {
      const realRoot = cardanoMethod(p, q, translation);
      return [realRoot, realRoot, realRoot];
    } else {
      const r1 = Math.cbrt(q / 2);
      const r2 = -2 * r1;
      return [r1 + translation, r2 + translation, r2 + translation];
    }
  }
};

const formatRoot = (r: number | string) => {
  if (typeof r === 'number') return `${r.toFixed(4)} 0`;
  return 'complex 0';
};

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [equationText, setEquationText] = useState('1x³ + 0x² + 0x + 0 = 0');
  const [pValue, setPValue] = useState('');
  const [qValue, setQValue] = useState('');
  const [discValue, setDiscValue] = useState('');
  const [roots, setRoots] = useState<(number | string)[]>([0, 0, 0]);

  const updateResults = () => {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
      setEquationText('no blanks in input');
      setPValue('');
      setQValue('');
      setDiscValue('');
      setRoots([0, 0, 0]);
      return;
    }
    
    if (a === 0) {
      setEquationText('give a cubic equation');
      setPValue('');
      setQValue('');
      setDiscValue('');
      setRoots([0, 0, 0]);
      return;
    }

    let eq = `${a}x³${formatSign(b, "x²")}${formatSign(c, "x")}${formatSign(d, "")} = 0`;
    eq = eq.replace(/\+ -/g, "- ").replace(/^\s\+\s/, "");
    setEquationText(eq);

    const p = (3 * a * c - b * b) / (3 * a * a);
    const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    const translation = -b / (3 * a);

    setPValue(p.toFixed(4));
    setQValue(q.toFixed(4));
    setDiscValue(discriminant.toFixed(4));

    const calculatedRoots = getRoots(discriminant, p, q, translation);
    const formattedRoots = calculatedRoots.map(root => formatRoot(root));
    setRoots(formattedRoots);
  };

  useEffect(() => {
    updateResults();
  }, [a, b, c, d]);

  return (
    <div className="font-['Trebuchet_MS','Lucida_Sans_Unicode',sans-serif] bg-[#f0f4ef] text-center p-5">
      <h1 className="text-[#e6aace] text-4xl m-0 leading-[1.3]" style={{ textShadow: '2px 2px #0d1821' }}>
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
      />

      {/* Equation display */}
      <div className="my-5 mx-auto py-3 px-5 bg-white border-3 border-[#bfcc94] rounded-xl w-fit">
        <h2 className="m-0 text-[#344966] font-semibold">
          {equationText}
        </h2>
      </div>

      {/* Table and Graph side by side */}
      <div className="flex justify-center items-start gap-[30px] my-[30px] mx-auto max-w-[1200px] p-5">
        <CubicTable
          pValue={pValue}
          qValue={qValue}
          discValue={discValue}
          root1Value={roots[0]}
          root2Value={roots[1]}
          root3Value={roots[2]}
        />
        
        <CubicGraph a={a} b={b} c={c} d={d} roots={roots} />
      </div>
    </div>
  );
}

export default App;