/**
 * 将 child 节点挂载到 parent 节点上面
 * @param parent Element
 * @param child Element
 */

export function nodeMount(parent: Element, child: Element) {
  parent && parent.appendChild(child)
}
