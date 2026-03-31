interface CubicHistoryProps {
  savedEquations: Array<{a: number; b: number; c: number; d: number}>;
  onLoad: (a: number, b: number, c: number, d: number) => void;
}

const CubicHistory = ({ savedEquations, onLoad }: CubicHistoryProps) => {  return (
    <div className="mt-8 mx-auto max-w-[800px]">
      <h3 className="text-[#344966] font-bold mb-3 text-lg text-center">History</h3>
      <table className="w-full border-4 border-[#e6aace] rounded-[10px] overflow-hidden">
        <thead>
          <tr className="border-b-5 bg-[#BFCC94] border-[#344966] text-[#344966] text-lg font-bold">
            <th className="p-2">a</th>
            <th className="p-2">b</th>
            <th className="p-2">c</th>
            <th className="p-2">d</th>
           </tr>
        </thead>
        <tbody>
          {savedEquations.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-4 text-center text-[#344966]">
                No saved equations yet. Click the save button to add one! :)))
               </td>
            </tr>
          ) : (
            savedEquations.map((equation, index) => (
              <tr
                key={index}
                onClick={() => onLoad(equation.a, equation.b, equation.c, equation.d)}
                className="border-b-3 border-[#e6aace] hover:bg-[#344966] cursor-pointer transition group"
              >
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{equation.a}</td>
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{equation.b}</td>
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{equation.c}</td>
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{equation.d}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CubicHistory;