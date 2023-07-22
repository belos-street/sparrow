import './style.css'
import { createRenderer } from './renderer/index.ts'

const renderer = createRenderer(200, 500)
renderer.line({
  x1: 0,
  y1: 0,
  x2: 200,
  y2: 500,
  stroke: '#fff'
})

renderer.line({
  x1: 200,
  y1: 0,
  x2: 0,
  y2: 500,
  stroke: '#fff'
})

document.querySelector<HTMLDivElement>('#app')!.appendChild(renderer.node())
