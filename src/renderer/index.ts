import type { ScaleParams, TranslateParams } from '../types/Transform'
import { createContext } from './context'
import { line } from './shape'
import type { ShapeAttributes } from './shape/shape'
import { restore, rotate, save, scale, translate } from './transform'

// import { restore, save, scale, translate, rotate } from './transform'

export function createRenderer(width: number, height: number) {
  const context = createContext(width, height)
  return {
    line: (options: ShapeAttributes) => line(context, options),

    restore: () => restore(context),
    save: () => save(context),
    scale: (params: ScaleParams) => scale(context, params),
    rotate: (params: number) => rotate(context, params),
    translate: (params: TranslateParams) => translate(context, params),

    node: () => context.node,
    group: () => context.group
  }
}
