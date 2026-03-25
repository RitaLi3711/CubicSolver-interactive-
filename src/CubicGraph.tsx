import { useRef, useEffect } from "react";

interface CubicGraphProps {
  a: number;
  b: number;
  c: number;
  d: number;
  roots: (number | string)[];
}

function CubicGraph({ a, b, c, d, roots }: CubicGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawGrid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
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

  const drawFunction = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    // Always draw grid first
    drawGrid();

    // Only draw the cubic function if a is not 0 and not NaN
    if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
      // Just draw grid, no function
      return;
    }

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

    // Only draw roots if they are valid numbers
    roots.forEach((root) => {
      if (typeof root === "number" && !isNaN(root)) {
        ctx.beginPath();
        const canvasX = 300 + root * 20;
        const canvasY = 200;
        ctx.arc(canvasX, canvasY, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#0d1821";
        ctx.fill();
      }
    });
  };

  useEffect(() => {
    drawFunction();
  }, [a, b, c, d, roots]);

  return <canvas ref={canvasRef} width="600" height="400" className="block bg-[#f9f9f9] border-3 border-[#15293a] rounded-[10px]" />;
}

export default CubicGraph;