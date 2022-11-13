import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Poly } from './components/poly'
import { segmentStyle } from './constants/segmentStyle'

function App() {

  const [segment, setSegment] = useState({
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'E': 0,
    'F': 0,
    'G': 0,
    'DP': 0,
  })
  const [code, setCode] = useState({
    msb: {
      bin: '',
      dec: '',
      hex: ''
    },
    lsb: {
      bin: '',
      dec: '',
      hex: ''
    }
  })



  const handleClick = e => l => setSegment(old => { return { ...old, [l]: segment[l] ? 0 : 1, } })

  const on = useMemo(() => Object.values(segment).includes(1), [segment])
  const { activeColor, color } = segmentStyle

  useEffect(() => {
    if (on) {
      let msb = '', lsb = ''
      lsb = Object.values(segment).map(v => v ? '0' : '1').join('')
      msb = Object.values(segment).reverse().map(v => v ? '0' : '1').join('')

      setCode(old => {
        return {
          msb: {
            bin: msb,
            dec: parseInt(msb, 2),
            hex: parseInt(msb, 2).toString(16).toUpperCase()
          },
          lsb: {
            bin: lsb,
            dec: parseInt(lsb, 2),
            hex: parseInt(lsb, 2).toString(16).toUpperCase()
          }
        }
      })
    }
  }, [segment])


  return (
    <div className="App">
      <div className='code'>
        {on ?
          <>
            <h1>MSB:</h1>
            <h3>Binary: {code.msb.bin}</h3>
            <h3>Decimal: {code.msb.dec}</h3>
            <h3>Hex: {code.msb.hex}</h3>
            <h1>LSB:</h1>
            <h3>Binary: {code.lsb.bin}</h3>
            <h3>Decimal: {code.lsb.dec}</h3>
            <h3>Hex: {code.lsb.hex}</h3>

          </> : <h1>Select letters</h1>}
      </div>
      <div id='rightSec'>
        <div className='seg'>
          <Poly color={segment["A"] ? activeColor : color} dir="h" text="A" handleClick={handleClick} />
          <div className='seg-row'>
            <Poly color={segment["F"] ? activeColor : color} dir="v" text="F" handleClick={handleClick} />
            <Poly color={segment["B"] ? activeColor : color} dir="v" text="B" handleClick={handleClick} />
          </div>
          <Poly color={segment["G"] ? activeColor : color} dir="h" text="G" handleClick={handleClick} />
          <div className='seg-row'>
            <Poly color={segment["E"] ? activeColor : color} dir="v" text="E" handleClick={handleClick} />
            <Poly color={segment["C"] ? activeColor : color} dir="v" text="C" handleClick={handleClick} />
          </div>
          <Poly color={segment["D"] ? activeColor : color} dir="h" text="D" handleClick={handleClick} />
        </div>
        <div id='dp' style={{ backgroundColor: segment["DP"] ? activeColor : color }} onClick={e => handleClick(e)('DP')}>DP</div>
      </div>
    </div>
  )
}

export default App
