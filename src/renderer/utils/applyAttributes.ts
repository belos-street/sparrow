import { ShapeAttributes } from '../shape/shape'

/** 给SVG元素添加属性 */
export function applyAttributes(element: Element, attributes: ShapeAttributes) {
  for (const [key, value] of Object.entries(attributes)) {
    /**
     *   将大写字母替成 - 对应的小写字母的形式 如：strokeWidth 的属性转换成 stroke-width 的形式
     */
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`)
    element.setAttribute(kebabCaseKey, value + '')
  }
}
