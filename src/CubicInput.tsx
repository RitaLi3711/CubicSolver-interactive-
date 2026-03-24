interface CubicInputProps {
  a: number; 
  b: number; 
  c: number; 
  d: number;
  onAChange: (value: number) => void;
  onBChange: (value: number) => void;
  onCChange: (value: number) => void;
  onDChange: (value: number) => void;
}

function CubicInput({ a, b, c, d, onAChange, onBChange, onCChange, onDChange }: CubicInputProps) {
  return (
    <div className="flex justify-center items-center gap-5 my-5">
      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">a-value:</h2>
        <input
          type="number"
          step="any"
          value={a}
          onChange={(e) => onAChange(parseFloat(e.target.value) || 0)}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">b-value:</h2>
        <input
          type="number"
          step="any"
          value={b}
          onChange={(e) => onBChange(parseFloat(e.target.value) || 0)}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">c-value:</h2>
        <input
          type="number"
          step="any"
          value={c}
          onChange={(e) => onCChange(parseFloat(e.target.value) || 0)}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">d-value:</h2>
        <input
          type="number"
          step="any"
          value={d}
          onChange={(e) => onDChange(parseFloat(e.target.value) || 0)}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
        />
      </div>
    </div>
  );
}

export default CubicInput;