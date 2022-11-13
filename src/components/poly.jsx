import { useState } from "react"
import { segmentStyle } from "../constants/segmentStyle"

export const Poly = ({ id, color, dir, text, handleClick }) => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const handleMouseLeave = () => setHovered(false)
  const handleMouseEnter = () => setHovered(true)
  const handleMouseUp = () => setActive(false)
  const handleMouseDown = () => setActive(true)

  return <svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={dir == "v" ? "23.0389mm" : "76.8627mm"}
    height={dir == "v" ? "77.1322mm" : "17.1744mm"}
    version="1.1"
    viewBox={dir == "v" ? "0 0 757.35 2535.55" : "0 0 9797.05 2189.08"}
    onMouseLeave={handleMouseLeave}
    onMouseEnter={handleMouseEnter}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onClick={e => handleClick(e)(text)}
    style={{ cursor: "pointer" }}
  >
    < g id="Layer_x0020_1" >
      <metadata id="CorelCorpID_0Corel-Layer" />
      <polygon
        fill={active ? segmentStyle.activeColor : hovered && color !== segmentStyle.activeColor ? segmentStyle.hoverColor : color}
        stroke="#373435"
        strokeWidth={dir == "v" ? "14px" : "50.6px"}
        strokeMiterlimit={dir == "v" ? "10px" : "29.9256px"}
        points={dir == "v" ? "6.02,2249.37 198.36,286.18 502.08,8.23 751.33,286.18 558.99,2249.37 255.28,2527.32 " : "31.76,1094.54 1214.51,22.48 8792.6,22.48 9765.28,1094.54 8582.54,2166.59 1004.45,2166.59 "} />
    </g >
    {
      dir == "v" ?
        <text textAnchor="center" x={250} y={1300} fontSize="500">{text}</text>
        : <text textAnchor="center" x={4200} y={1800} fontSize="2000">{text}</text>
    }
  </svg >
}