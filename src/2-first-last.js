export const firstLast = (items) => {
  if (items.length > 1) {
    return `First: ${items[0]}, Last: ${items.slice (- 1)[0]}`
  } else if (items.length === 1) {
    return `Only item: ${items}`
  } else {
    return "No items!"
  };
}
