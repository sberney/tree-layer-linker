import test from 'ava';
import { expect } from 'chai';

import { sampleTree } from '../src/sampleTree.js';
import { linkAll } from '../src/layer.js';
import { createFindAll } from '../src/find.js';


/* expect:
 * A -> undefined
 * B -> C
 * D -> E -> F
 * G -> H -> I -> J
 */

test.group('SampleTree by Level', () => {

  /*
   * Test set up
   */
  let find;
  before(function () {
    linkAll(sampleTree);
    find = createFindAll(sampleTree);
  });

  it('[A]', function () {
    const [ A ] = find('A');
    expect(A.next).to.be.undefined;
  });

  it('[B,C]', function () {
    const [ B, C ] = find('B', 'C');
    expect(B.next).to.equal(C);
    expect(C.next).to.be.undefined;
  });

  it('[D,E,F]', function () {
    const [ D, E, F ] = find('D', 'E', 'F');
    expect(D.next).to.equal(E);
    expect(E.next).to.equal(F);
    expect(F.next).to.be.undefined;
  });

  it('[G,H,I,J]', function () {
    const [ G, H, I, J ] = find('G', 'H', 'I', 'J');
    expect(G.next).to.equal(H);
    expect(H.next).to.equal(I);
    expect(I.next).to.equal(J);
    expect(J.next).to.be.undefined;
  });
});