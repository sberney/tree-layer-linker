import zip from 'lodash/zip';

const concat = Array.prototype.concat.call;

export const listLayer = (node, level, currentLevel=0) => {
  // base cases
  if (level === currentLevel)
    return [node];
  if (level < currentLevel)
    throw new Error(`Invalid currentLevel ${currentLevel}`);

  return concat(
    listLayer(node.left, level, currentLevel + 1),
    listLayer(node.right, level, currentLevel + 1)
  );
}

// O(n)
export const linkLevel = (node, level) => {
  const items = listLayer(node, level);
  const pairs = zip(items.slice(0, items.length - 1), items.slice(1));
  for (let [ first, second ] of pairs) {
    first.next = second;
  }
};

export const getDepth = node => {
  if (node === undefined)
    return 0;
  else
    return 1 + Math.max(getDepth(node.left), getDepth(node.right));
}

export const linkAll = node => {
  const depth = getDepth(node);
  for (let level = 0; level < depth; ++level) {
    linkLevel(node, level);
  }
}