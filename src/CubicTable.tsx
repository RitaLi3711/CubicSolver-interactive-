interface CubicTableProps {
  pValue: string;
  qValue: string;
  discValue: string;
  root1Value: string;
  root2Value: string;
  root3Value: string;
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
    <div className="w-[340px] bg-white border-[3px] border-[#e6aace] rounded-[10px] overflow-hidden">
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 border-b border-[#eee]">
        <div className="font-bold">p</div>
        <div className="text-right pr-[35px]">{pValue}</div>
      </div>
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 border-b border-[#eee]">
        <div className="font-bold">q</div>
        <div className="text-right pr-[35px]">{qValue}</div>
      </div>
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 border-b border-[#eee]">
        <div className="font-bold">Discriminant</div>
        <div className="text-right pr-[35px]">{discValue}</div>
      </div>
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 bg-[#e6aace]">
        <div className="font-bold">Values</div>
        <div className="text-right pr-[35px] [word-spacing:80px]">
          <span>x</span> <span>y</span>
        </div>
      </div>
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 border-b border-[#eee]">
        <div className="font-bold">Root 1</div>
        <div className="text-right pr-[35px] [word-spacing:55px]">
          <span>{root1Value}</span> <span>0</span>
        </div>
      </div>
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 border-b border-[#eee]">
        <div className="font-bold">Root 2</div>
        <div className="text-right pr-[35px] [word-spacing:55px]">
          <span>{root2Value}</span> <span>0</span>
        </div>
      </div>
      <div className="grid grid-cols-[100px_1fr] px-4 py-3 border-b border-[#eee]">
        <div className="font-bold">Root 3</div>
        <div className="text-right pr-[35px] [word-spacing:55px]">
          <span>{root3Value}</span> <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default CubicTable;