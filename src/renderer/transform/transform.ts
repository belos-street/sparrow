import { Context } from '../context'
import { applyTransform } from './applyTransform'
type transformType = 'scale' | 'translate' | 'rotate'

export function transform(type: transformType, context: Context, ...params: any[]) {
  // type 是希望的变换种类：scale，translate，rotate 等
  const { group } = context

  applyTransform(group, `${type}(${params.join(', ')})`)
}
