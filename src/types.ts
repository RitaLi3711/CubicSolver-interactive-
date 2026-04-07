type Coefficients = {
  a: number;
  b: number;
  c: number;
  d: number;
};

type Point = {
  x: string;
  y: string;
};

export type CubicEquationProps = Coefficients;

export type CubicGraphProps = Coefficients & {
  roots: string[];
};

export type CubicHistoryProps = {
  savedEquations: Coefficients[];
  onLoad: (a: number, b: number, c: number, d: number) => void;
};

export type CubicInputProps = Coefficients & {
  onAChange: (value: number) => void;
  onBChange: (value: number) => void;
  onCChange: (value: number) => void;
  onDChange: (value: number) => void;
  onSave: () => void;
};

export type CubicTableProps = {
  pValue: string;
  qValue: string;
  discValue: string;
  root1Value: string;
  root2Value: string;
  root3Value: string;
  minMaxPoints: { max: Point; min: Point } | null;
};