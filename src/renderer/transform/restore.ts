import { Context } from '../context'
import { CreateSVGType } from '../utils/createSVGElement'

export function restore(context: Context) {
  const { group } = context
  const { parentNode } = group
  context.group = parentNode as CreateSVGType
}
