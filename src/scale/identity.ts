/**
 * Identity 恒等映射
 *  将输入原封不动的返回
 *  所以不需要指定定义域和值域
 */

export function createIdentity() {
  return <T>(x: T) => x
}

// const scale = createIdentity()
// scale(1); // 1
// scale({ a: 1 }); // { a: 1 }
// scale('sparrow'); // 'sparrow'
