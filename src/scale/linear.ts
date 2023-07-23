import { normalize } from './utils/normalize'

type Params = {
  domain: [number, number]
  range: [number, number]
  interpolate: typeof interpolateNumber
}

export function createLinear({ domain: [d0, d1], range: [r0, r1], interpolate = interpolateNumber }: Params) {
  return (x: number) => {
    const t = normalize(x, d0, d1)
    // 默认是使用线性的数值插值器
    // 如果是颜色可以使用颜色插入器
    return interpolate(t, r0, r1)
  }
}

export function interpolateNumber(t: number, start: number, stop: number) {
  return start * (1 - t) + stop * t
}
