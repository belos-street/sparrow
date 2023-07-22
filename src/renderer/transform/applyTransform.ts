export function applyTransform(element: SVGElement, transform: any) {
  /** 加上之前的transform属性 */
  const oldTransform = element.getAttribute('transform') || ''
  const prefix = oldTransform ? `${oldTransform} ` : ''

  element.setAttribute('transform', `${prefix}${transform}`)
}
