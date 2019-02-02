
export const findByName = (tree, name) => {
  if (tree === undefined)
    return undefined;
  else if (tree.name === name)
    return tree;
  else
    return findByName(tree.left, name)
        || findByName(tree.right, name);
};

export const createFindAll = tree => (...names) => {
  return names.map(name => findByName(tree, name));
}