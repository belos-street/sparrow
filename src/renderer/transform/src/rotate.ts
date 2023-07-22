import { Context } from '../../context'
import { transform } from '../transform'

export function rotate(context: Context, theta: number) {
  transform('rotate', context, theta)
}
