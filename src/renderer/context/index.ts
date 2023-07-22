import { createSVGElement } from '../utils/createSVGElement'
import { nodeMount } from '../utils/nodeMount'

export type Context = ReturnType<typeof createContext>

export function createContext(width: number, height: number) {
  // 创建画布svg节点
  const svgEle = createSVGElement('svg')
  svgEle.setAttribute('width', width + '')
  svgEle.setAttribute('height', height + '')
  svgEle.setAttribute('viewBox', `0 0 ${width} ${height}`)

  // 创建挂载g节点，并且把该g节点挂载到 svg 节点上
  const gEle = createSVGElement('g')
  nodeMount(svgEle, gEle)

  //返回画布节点和挂载节点
  return {
    node: svgEle,
    group: gEle
  }
}
