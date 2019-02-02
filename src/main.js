import { linkAll } from './layer.js';
import { sampleTree } from './sampleTree.js';

export const main = () => {
  linkAll(sampleTree);
  demoCorrectness(sampleTree);
};