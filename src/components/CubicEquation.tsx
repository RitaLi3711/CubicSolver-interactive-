type CubicEquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
};

const formatSign = (value: number, variable: string) => {
  if (value === 0) return "";
  return value > 0 ? ` + ${value}${variable}` : ` - ${Math.abs(value)}${variable}`;
};

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
  const getEquationString = () => {
    if (a === 0) return "give a cubic equation ";
    let equation = `${a}x³${formatSign(b, "x²")}${formatSign(c, "x")}${formatSign(d, "")} = 0`;
    equation = equation.replace(/\+ -/g, "- ").replace(/^\s\+\s/, "");
    return equation;
  };

  return (
    <div className="my-5 mx-auto py-3 px-5 bg-white border-3 border-[#bfcc94] rounded-xl w-fit">
      <h2 className="m-0 text-[#344966] font-semibold">{getEquationString()}</h2>
    </div>
  );
};