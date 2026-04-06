type CubicTableProps = {
  pValue: string;
  qValue: string;
  discValue: string;
  root1Value: string;
  root2Value: string;
  root3Value: string;
};

export const CubicTable = ({ pValue, qValue, discValue, root1Value, root2Value, root3Value }: CubicTableProps) => {
  return (
    <div className="w-[340px] border-[3px] border-[#e6aace] rounded-[10px] overflow-hidden">
      <table className="w-full bg-white border-collapse">
        <tbody>
          <tr className="border-b border-[#eee]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">p</th>
            <td className="text-right pr-[35px]">{pValue}</td>
          </tr>
          <tr className="border-b border-[#eee]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">q</th>
            <td className="text-right pr-[35px]">{qValue}</td>
          </tr>
          <tr className="border-b border-[#eee]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">Discriminant</th>
            <td className="text-right pr-[35px]">{discValue}</td>
          </tr>
          <tr className="bg-[#e6aace]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">Values</th>
            <td className="text-right pr-[35px] [word-spacing:80px]">
              <span>x</span> <span>y</span>
            </td>
          </tr>
          <tr className="border-b border-[#eee]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">Root 1</th>
            <td className="text-right pr-[35px] [word-spacing:55px]">
              <span>{root1Value}</span> <span>0</span>
            </td>
           </tr>
          <tr className="border-b border-[#eee]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">Root 2</th>
            <td className="text-right pr-[35px] [word-spacing:55px]">
              <span>{root2Value}</span> <span>0</span>
            </td>
           </tr>
          <tr className="border-b border-[#eee]">
            <th className="font-bold text-left px-4 py-3 w-[100px]">Root 3</th>
            <td className="text-right pr-[35px] [word-spacing:55px]">
              <span>{root3Value}</span> <span>0</span>
            </td>
           </tr>
        </tbody>
      </table>
    </div>
  );
};