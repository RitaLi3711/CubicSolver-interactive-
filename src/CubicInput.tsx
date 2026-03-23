interface CubicInputProps {
  a: number; b: number; c: number; d: number;
  onAChange: (value: number) => void;
  onBChange: (value: number) => void;
  onCChange: (value: number) => void;
  onDChange: (value: number) => void;
}

function CubicInput({ a, b, c, d, onAChange, onBChange, onCChange, onDChange }: CubicInputProps) {
  return (
    <div 
      style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        margin: '20px 0'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#344966', fontSize: '1rem', margin: '10px', lineHeight: 1.3 }}>a-value:</h2>
        <input
          type="number"
          step="any"
          value={a}
          onChange={(e) => onAChange(parseFloat(e.target.value) || 0)}
          style={{
            width: '80px',
            textAlign: 'center',
            textIndent: '15px',
            padding: '12px',
            border: '2px solid #e6aace',
            borderRadius: '20px',
            fontFamily: 'inherit',
            backgroundColor: 'white'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#344966', fontSize: '1rem', margin: '10px', lineHeight: 1.3 }}>b-value:</h2>
        <input
          type="number"
          step="any"
          value={b}
          onChange={(e) => onBChange(parseFloat(e.target.value) || 0)}
          style={{
            width: '80px',
            textAlign: 'center',
            textIndent: '15px',
            padding: '12px',
            border: '2px solid #e6aace',
            borderRadius: '20px',
            fontFamily: 'inherit',
            backgroundColor: 'white'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#344966', fontSize: '1rem', margin: '10px', lineHeight: 1.3 }}>c-value:</h2>
        <input
          type="number"
          step="any"
          value={c}
          onChange={(e) => onCChange(parseFloat(e.target.value) || 0)}
          style={{
            width: '80px',
            textAlign: 'center',
            textIndent: '15px',
            padding: '12px',
            border: '2px solid #e6aace',
            borderRadius: '20px',
            fontFamily: 'inherit',
            backgroundColor: 'white'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#344966', fontSize: '1rem', margin: '10px', lineHeight: 1.3 }}>d-value:</h2>
        <input
          type="number"
          step="any"
          value={d}
          onChange={(e) => onDChange(parseFloat(e.target.value) || 0)}
          style={{
            width: '80px',
            textAlign: 'center',
            textIndent: '15px',
            padding: '12px',
            border: '2px solid #e6aace',
            borderRadius: '20px',
            fontFamily: 'inherit',
            backgroundColor: 'white'
          }}
        />
      </div>
    </div>
  );
}

export default CubicInput;