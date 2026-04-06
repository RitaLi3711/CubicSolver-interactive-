import { useRef, useEffect } from "react";

type CubicGraphProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  roots: string[];
};

export const CubicGraph = ({ a, b, c, d, roots }: CubicGraphProps) => {
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
    drawGrid();

    if (a !== 0) {
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
    }

    roots.forEach((root) => {
      if (root !== "complex" && root !== "") {
        const numericRoot = parseFloat(root);
        if (!isNaN(numericRoot)) {
          ctx.beginPath();
          const canvasX = 300 + numericRoot * 20;
          const canvasY = 200;
          ctx.arc(canvasX, canvasY, 4, 0, 2 * Math.PI);
          ctx.fillStyle = "#0d1821";
          ctx.fill();
        }
      }
    });
  };

  useEffect(() => {
    drawFunction();
  }, [a, b, c, d, roots]);

  return <canvas ref={canvasRef} width="600" height="400" className="block bg-[#f9f9f9] border-3 border-[#15293a] rounded-[10px]" />;
};