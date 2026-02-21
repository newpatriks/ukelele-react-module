export interface Finger {
  /** 1-based string numbers pressed by this finger */
  strings: number[]
  /** 1-based fret number */
  fret: number
  /** Optional identifier — used for React keys when passing custom chords */
  fingerId?: number
}

export type ChordMap = Record<string, Finger[]>

const CHORDS: ChordMap = {
  'A': [
    { strings: [3], fret: 1 },
    { strings: [4], fret: 2 },
  ],
  'Am': [
    { strings: [4], fret: 2 },
  ],
  'A7': [
    { strings: [3], fret: 1 },
  ],
  'B': [
    { strings: [1, 2], fret: 2 },
    { strings: [3], fret: 3 },
    { strings: [4], fret: 4 },
  ],
  'Bm': [
    { strings: [1, 2, 3], fret: 2 },
    { strings: [4], fret: 4 },
  ],
  'B7': [
    { strings: [1, 2, 4], fret: 2 },
    { strings: [3], fret: 3 },
  ],
  'C': [
    { strings: [1], fret: 3 },
  ],
  'Cm': [
    { strings: [1, 2, 3], fret: 3 },
  ],
  'C7': [
    { strings: [1], fret: 1 },
  ],
  'D': [
    { strings: [2], fret: 2 },
    { strings: [3], fret: 2 },
    { strings: [4], fret: 2 },
  ],
  'Dm': [
    { strings: [2], fret: 1 },
    { strings: [4], fret: 2 },
    { strings: [3], fret: 2 },
  ],
  'D7': [
    { strings: [2, 3, 4], fret: 2 },
    { strings: [1], fret: 3 },
  ],
  'E': [
    { strings: [4], fret: 1 },
    { strings: [1], fret: 2 },
    { strings: [3], fret: 4 },
  ],
  'Em': [
    { strings: [1], fret: 2 },
    { strings: [2], fret: 3 },
    { strings: [3], fret: 4 },
  ],
  'E7': [
    { strings: [4], fret: 1 },
    { strings: [3], fret: 2 },
    { strings: [1], fret: 2 },
  ],
  'F': [
    { strings: [2], fret: 1 },
    { strings: [4], fret: 2 },
  ],
  'Fm': [
    { strings: [2], fret: 1 },
    { strings: [4], fret: 1 },
    { strings: [1], fret: 3 },
  ],
  'F7': [
    { strings: [2], fret: 1 },
    { strings: [4], fret: 2 },
    { strings: [3], fret: 3 },
    { strings: [1], fret: 3 },
  ],
  'G': [
    { strings: [1], fret: 2 },
    { strings: [3], fret: 2 },
    { strings: [2], fret: 3 },
  ],
  'Gm': [
    { strings: [1], fret: 1 },
    { strings: [3], fret: 2 },
    { strings: [2], fret: 3 },
  ],
  'G7': [
    { strings: [2], fret: 1 },
    { strings: [3], fret: 2 },
    { strings: [1], fret: 2 },
  ],
}

export default CHORDS
