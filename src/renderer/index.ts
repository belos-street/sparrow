import { createContext } from './context'
import { line, circle, text, rect, path, ring } from './shape'
import { restore, save, scale, translate, rotate } from './transform'

export function createRenderer(width: number, height: number) {
  const context = createContext(width, height)
  return {
    line: (options) => line(context, options)
  }
}
