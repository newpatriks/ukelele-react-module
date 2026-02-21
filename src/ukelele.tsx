import React from 'react'
import CHORDS, { type Finger } from './ukelele-chords'

export interface UkeleleProps {
  /** Named chord (e.g. "Am") or a custom array of finger positions */
  chord: string | Finger[]
  /** SVG width in pixels. Defaults to 400 */
  width?: number
  /** SVG height in pixels. Defaults to 200 */
  height?: number
}

export function Ukelele({ chord, width = 400, height = 200 }: UkeleleProps) {
  const fretWidth = width / 5
  const stringHeight = height / 2
  const verticalOffset = 50
  const headStockOffset = 10
  const circleRadius = fretWidth / 6

  const stringYPosition = [
    verticalOffset,
    stringHeight / 3 + verticalOffset,
    stringHeight * 2 / 3 + verticalOffset,
    stringHeight + verticalOffset,
  ]
  const fretXPosition = [
    fretWidth + headStockOffset,
    fretWidth * 2 + headStockOffset,
    fretWidth * 3 + headStockOffset,
    fretWidth * 4 + headStockOffset,
  ]

  let chordSchema: Finger[] | undefined
  if (typeof chord === 'string') {
    chordSchema = CHORDS[chord]
  } else if (Array.isArray(chord)) {
    chordSchema = chord
  }

  const circleComponents: React.ReactElement[] = []
  if (chordSchema) {
    chordSchema.forEach((finger, fingerIndex) => {
      finger.strings.forEach((string, stringIndex) => {
        const keyId = finger.fingerId ?? fingerIndex
        circleComponents.push(
          <circle
            key={`${keyId}_${stringIndex}`}
            cx={fretWidth / 2 + fretWidth * (finger.fret - 1) + headStockOffset}
            cy={stringYPosition[string - 1]}
            r={circleRadius}
            fill="black"
          />
        )
      })
    })
  }

  return (
    <div>
      <svg width={width} height={height}>
        <rect
          x={headStockOffset}
          y={stringYPosition[0]}
          width={headStockOffset}
          height={stringHeight}
          fill="transparent"
          stroke="black"
          strokeWidth={1}
        />
        {stringYPosition.map((y, i) => (
          <line
            key={i}
            x1={headStockOffset * 2}
            y1={y}
            x2={width}
            y2={y}
            stroke="black"
            strokeWidth={1}
          />
        ))}
        {fretXPosition.map((x, i) => (
          <line
            key={i}
            x1={x}
            y1={verticalOffset}
            x2={x}
            y2={stringHeight + verticalOffset}
            stroke="black"
            strokeWidth={0.5}
          />
        ))}
        {circleComponents}
      </svg>
    </div>
  )
}

export default Ukelele
