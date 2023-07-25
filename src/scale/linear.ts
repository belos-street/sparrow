import { interpolateNumber } from './utils/interpolate'
import { normalize } from './utils/normalize'

type Params = {
  domain: [number, number]
  range: [number, number]
  interpolate?: typeof interpolateNumber
}

export function createLinear({ domain: [d0, d1], range: [r0, r1], interpolate = interpolateNumber }: Params) {
  const scale = (x: number) => {
    const t = normalize(x, d0, d1)
    // 默认是使用线性的数值插值器
    // 如果是颜色可以使用颜色插入器
    return interpolate(t, r0, r1)
  }

  scale.ticks = (tickCount: number) => 5 + tickCount

  return scale
}

const scale = createLinear({
  domain: [0, 1],
  range: [0, 1]
})

scale.ticks(10)
