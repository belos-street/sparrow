import type { Shape } from '../shape/shape'

/**
 * 创建一个具有指定的命名空间 URI 和限定名称的元素
 */
type SVGElementType = 'svg' | 'g' | Shape
export type CreateSVGType = ReturnType<typeof createSVGElement>

export function createSVGElement(type: SVGElementType) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}
