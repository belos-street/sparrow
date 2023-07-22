import { ScaleParams } from '../../../types/Transform'
import { Context } from '../../context'
import { transform } from '../transform'

export function scale(context: Context, params: ScaleParams) {
  if (!params.sy) {
    transform('scale', context, params.sx)
  } else {
    transform('scale', context, params.sx, params.sy)
  }
}
