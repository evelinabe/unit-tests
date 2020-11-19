export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  console.log(type);
  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0;
  }
  return false
}
