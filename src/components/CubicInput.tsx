type CubicInputProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  onAChange: (value: number) => void;
  onBChange: (value: number) => void;
  onCChange: (value: number) => void;
  onDChange: (value: number) => void;
  onSave: () => void;
};

export const CubicInput = ({ a, b, c, d, onAChange, onBChange, onCChange, onDChange, onSave }: CubicInputProps) => {
  return (
    <div className="flex justify-center items-center gap-5 my-5">
      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">a-value:</h2>
        <input
          type="number"
          step="any"
          value={a === 0 ? "" : a}
          onChange={(e) => onAChange(e.target.value === "" ? 0 : parseFloat(e.target.value))}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
          placeholder="0"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">b-value:</h2>
        <input
          type="number"
          step="any"
          value={b === 0 ? "" : b}
          onChange={(e) => onBChange(e.target.value === "" ? 0 : parseFloat(e.target.value))}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
          placeholder="0"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">c-value:</h2>
        <input
          type="number"
          step="any"
          value={c === 0 ? "" : c}
          onChange={(e) => onCChange(e.target.value === "" ? 0 : parseFloat(e.target.value))}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
          placeholder="0"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[#344966] text-base my-2.5 leading-[1.3]">d-value:</h2>
        <input
          type="number"
          step="any"
          value={d === 0 ? "" : d}
          onChange={(e) => onDChange(e.target.value === "" ? 0 : parseFloat(e.target.value))}
          className="w-20 text-center indent-[15px] p-3 border-2 border-[#e6aace] rounded-[20px] font-inherit bg-white"
          placeholder="0"
        />
      </div>

      <button 
        onClick={onSave}
        className="bg-[#bfcc94] text-[#0d1821] font-inherit font-bold leading-[1.3] m-[3px] h-10 mt-10 self-start px-8 pt-2 pb-4 border-none rounded-[20px] hover:bg-[#e6aace]"
      >
        Save
      </button>
    </div>
  );
};