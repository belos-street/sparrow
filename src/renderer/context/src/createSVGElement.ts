/**
 * 创建一个具有指定的命名空间 URI 和限定名称的元素
 */
type ElementType = 'svg' | 'g'

export function createSVGElement(type: ElementType) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}
