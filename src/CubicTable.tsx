interface CubicTableProps {
  pValue: string;
  qValue: string;
  discValue: string;
  root1Value: number | string;
  root2Value: number | string;
  root3Value: number | string;
}

function CubicTable({ 
  pValue, 
  qValue, 
  discValue, 
  root1Value, 
  root2Value, 
  root3Value 
}: CubicTableProps) {
  return (
    <table className="w-[340px] bg-white border-[3px] border-[#e6aace] rounded-[10px] font-inherit text-[#0d1822] border-separate overflow-hidden">
      <tbody>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left m-0">p</th>
          <td className="text-right pr-[35px] tracking-[55px] m-0">{pValue} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left m-0">q</th>
          <td className="text-right pr-[35px] tracking-[55px] m-0">{qValue} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left m-0">Discriminant</th>
          <td className="text-right pr-[35px] tracking-[55px] m-0">{discValue} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 bg-[#e6aace]">
          <th className="font-bold text-left m-0">Values</th>
          <td className="text-right pr-[35px] tracking-[80px] m-0">
            <span>x</span> <span>y</span>
          </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left m-0">Root 1</th>
          <td className="text-right pr-[35px] tracking-[55px] m-0">{root1Value} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left m-0">Root 2</th>
          <td className="text-right pr-[35px] tracking-[55px] m-0">{root2Value} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left m-0">Root 3</th>
          <td className="text-right pr-[35px] tracking-[55px] m-0">{root3Value} </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CubicTable;