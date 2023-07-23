// Identity 是恒等映射，所以不需要指定定义域和值域

export function createIdentity() {
  return <T>(x: T) => x
}
