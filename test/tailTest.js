const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['hi'] for ['hello', 'hi']", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [2, 3, 4, 5, 6, 7, 8] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8]), [2, 3, 4, 5, 6, 7, 8]);
  });

});
