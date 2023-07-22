import type { TranslateParams } from '../../../types/Transform'
import { Context } from '../../context'
import { transform } from '../transform'

export function translate(context: Context, params: TranslateParams) {
  transform('translate', context, params.tx, params.ty)
}
