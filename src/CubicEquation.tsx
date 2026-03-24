interface CubicEquationProps {
  pValue: string;
  qValue: string;
  discValue: string;
  root1Value: string;
  root2Value: string;
  root3Value: string;
}

function CubicEquation({ 
  pValue, 
  qValue, 
  discValue, 
  root1Value, 
  root2Value, 
  root3Value 
}: CubicEquationProps) {
  return (
    <table className="w-[340px] bg-white border-[3px] border-[#e6aace] rounded-[10px] font-[inherit] text-[#0d1822] border-separate overflow-hidden">
      <tbody>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left">p</th>
          <td className="text-right pr-[35px] tracking-[55px]">{pValue} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left">q</th>
          <td className="text-right pr-[35px] tracking-[55px]">{qValue} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left">Discriminant</th>
          <td className="text-right pr-[35px] tracking-[55px]">{discValue} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 bg-[#e6aace]">
          <th className="font-bold text-left">Values</th>
          <td className="text-right pr-[35px] tracking-[80px]">
            <span>x</span> <span>y</span>
          </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left">Root 1</th>
          <td className="text-right pr-[35px] tracking-[55px]">{root1Value} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left">Root 2</th>
          <td className="text-right pr-[35px] tracking-[55px]">{root2Value} </td>
        </tr>
        <tr className="grid grid-cols-[100px_1fr] p-3 border-b border-[#eee]">
          <th className="font-bold text-left">Root 3</th>
          <td className="text-right pr-[35px] tracking-[55px]">{root3Value} </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CubicEquation;