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
    <table 
      style={{
        width: '340px',
        background: 'white',
        border: '3px solid #e6aace',
        borderRadius: '10px',
        fontFamily: 'inherit',
        color: '#0d1822',
        borderCollapse: 'separate',
        overflow: 'hidden'
      }}
    >
      <tbody>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>p</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '55px', margin: 0 }}>{pValue}</td>
        </tr>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>q</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '55px', margin: 0 }}>{qValue}</td>
        </tr>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Discriminant</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '55px', margin: 0 }}>{discValue}</td>
        </tr>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', backgroundColor: '#e6aace' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Values</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '80px', margin: 0 }}>
            <span>x</span> <span>y</span>
          </td>
        </tr>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Root 1</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '55px', margin: 0 }}>{root1Value}</td>
        </tr>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Root 2</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '55px', margin: 0 }}>{root2Value}</td>
        </tr>
        <tr style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <th style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Root 3</th>
          <td style={{ textAlign: 'right', paddingRight: '35px', wordSpacing: '55px', margin: 0 }}>{root3Value}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CubicTable;