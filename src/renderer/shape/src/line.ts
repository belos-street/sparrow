import { SVGElementAttributes } from '../../../types/Shape'
import { Context } from '../../context'
import { shape } from '../shape'

export type SVGLine = {
  x1: number
  y1: number
  x2: number
  y2: number
} & SVGElementAttributes

export function line(context: Context, attributes: SVGLine) {
  return shape('line', context, attributes)
}
