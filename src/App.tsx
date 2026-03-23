import { useState, useRef, useEffect } from 'react';
import CubicInput from './CubicInput';
import CubicEquation from './CubicEquation';

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
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [equationText, setEquationText] = useState('1x³ + 0x² + 0x + 0 = 0');
  const [pValue, setPValue] = useState('');
  const [qValue, setQValue] = useState('');
  const [discValue, setDiscValue] = useState('');
  const [root1Value, setRoot1Value] = useState('');
  const [root2Value, setRoot2Value] = useState('');
  const [root3Value, setRoot3Value] = useState('');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawGrid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 600, 400);

    ctx.beginPath();
    ctx.strokeStyle = "#cccccc";
    ctx.lineWidth = 0.5;

    for (let x = -15; x <= 15; x++) {
      const canvasX = 300 + x * 20;
      ctx.moveTo(canvasX, 0);
      ctx.lineTo(canvasX, 400);
    }

    for (let y = -10; y <= 10; y++) {
      const canvasY = 200 - y * 20;
      ctx.moveTo(0, canvasY);
      ctx.lineTo(600, canvasY);
    }
    
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.moveTo(0, 200);
    ctx.lineTo(600, 200);
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 400);
    ctx.stroke();
  };

  const drawFunction = (a: number, b: number, c: number, d: number, roots: (number | string)[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    drawGrid();

    ctx.beginPath();
    ctx.strokeStyle = "#e6aace";
    ctx.lineWidth = 3;
    let first = true;

    for (let x = -15; x <= 15; x += 0.1) {
      const y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
      const canvasX = 300 + x * 20;
      const canvasY = 200 - y * 20;

      if (first) {
        ctx.moveTo(canvasX, canvasY);
        first = false;
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }
    ctx.stroke();

    roots.forEach((root) => {
      if (typeof root === "number") {
        ctx.beginPath();
        const canvasX = 300 + root * 20;
        const canvasY = 200;
        ctx.arc(canvasX, canvasY, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#0d1821";
        ctx.fill();
      }
    });
  };

  const updateResults = () => {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
      setEquationText('no blanks in input');
      drawGrid();
      setPValue('');
      setQValue('');
      setDiscValue('');
      setRoot1Value('');
      setRoot2Value('');
      setRoot3Value('');
      return;
    }
    
    if (a === 0) {
      setEquationText('give a cubic equation');
      drawGrid();
      setPValue('');
      setQValue('');
      setDiscValue('');
      setRoot1Value('');
      setRoot2Value('');
      setRoot3Value('');
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

    const roots = getRoots(discriminant, p, q, translation);
    setRoot1Value(formatRoot(roots[0]));
    setRoot2Value(formatRoot(roots[1]));
    setRoot3Value(formatRoot(roots[2]));

    drawFunction(a, b, c, d, roots);
  };

  useEffect(() => {
    updateResults();
  }, [a, b, c, d]);

  const handleAChange = (value: number) => {
    setA(value);
  };

  const handleBChange = (value: number) => {
    setB(value);
  };

  const handleCChange = (value: number) => {
    setC(value);
  };

  const handleDChange = (value: number) => {
    setD(value);
  };

  return (
    <div 
      style={{ 
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', sans-serif",
        backgroundColor: '#f0f4ef',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1 
        style={{ 
          color: '#e6aace',
          textShadow: '2px 2px #0d1821',
          fontSize: '2rem',
          margin: 0,
          lineHeight: 1.3
        }}
      >
        Cubic Solver
      </h1>

      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        onAChange={handleAChange}
        onBChange={handleBChange}
        onCChange={handleCChange}
        onDChange={handleDChange}
      />

      {/* Equation display */}
      <div 
        style={{ 
          margin: '20px auto',
          padding: '12px 20px',
          background: 'white',
          border: '3px solid #bfcc94',
          borderRadius: '12px',
          width: 'fit-content'
        }}
      >
        <h2 
          style={{ 
            margin: 0,
            color: '#344966',
            fontWeight: 600
          }}
        >
          {equationText}
        </h2>
      </div>

      {/* Table and Graph side by side */}
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '30px',
          margin: '30px auto',
          maxWidth: '1200px',
          padding: '20px'
        }}
      >
        <CubicEquation
          pValue={pValue}
          qValue={qValue}
          discValue={discValue}
          root1Value={root1Value}
          root2Value={root2Value}
          root3Value={root3Value}
        />
        
        <canvas
          ref={canvasRef}
          id="graph"
          width="600"
          height="400"
          style={{
            display: 'block',
            background: '#f9f9f9',
            border: '3px solid #15293a',
            borderRadius: '10px'
          }}
        ></canvas>
      </div>
    </div>
  );
}

export default App;