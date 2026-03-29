interface SavedEntry {
  id: number;
  a: number;
  b: number;
  c: number;
  d: number;
}

interface CubicHistoryProps {
  savedValues: SavedEntry[];
  onLoad: (a: number, b: number, c: number, d: number) => void;
}

function CubicHistory({ savedValues, onLoad }: CubicHistoryProps) {
  return (
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
          {savedValues.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-4 text-center text-[#e6aace]">
                No saved equations yet. Click Save to add one!
              </td>
            </tr>
          ) : (
            savedValues.map((entry) => (
              <tr
                key={entry.id}
                onClick={() => onLoad(entry.a, entry.b, entry.c, entry.d)}
                className="border-b-3 border-[#e6aace] hover:bg-[#344966] cursor-pointer transition group"
              >
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{entry.a}</td>
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{entry.b}</td>
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{entry.c}</td>
                <td className="p-3 text-[#344966] group-hover:text-[#e6aace] text-center font-mono">{entry.d}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CubicHistory;
