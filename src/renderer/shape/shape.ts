import { Context } from '../context'
import { applyAttributes } from '../utils/applyAttributes'
import { createSVGElement } from '../utils/createSVGElement'
import { nodeMount } from '../utils/nodeMount'
import { SVGLine } from './src/line'

export type Shape = 'line'
export type ShapeAttributes = SVGLine

export function shape(type: Shape, context: Context, attributes: ShapeAttributes) {
  const { group } = context // 挂载元素
  const el = createSVGElement(type) // 创建对应的元素
  applyAttributes(el, attributes) // 设置属性

  nodeMount(group, el) // 挂载
  return el // 返回该元素
}
