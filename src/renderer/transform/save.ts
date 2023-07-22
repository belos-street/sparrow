import { Context } from '../context'
import { createSVGElement } from '../utils/createSVGElement'
import { nodeMount } from '../utils/nodeMount'

export function save(context: Context) {
  const { group } = context
  const newGroup = createSVGElement('g')
  nodeMount(group, newGroup)
  context.group = newGroup
}
