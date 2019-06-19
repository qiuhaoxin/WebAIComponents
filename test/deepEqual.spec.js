const deepEqual = require('fast-deep-equal');
const assert = require('assert');

describe('deepEqual', function () {
    const objA = { "id": "166" };
    const objB = { 'id': '167' };
    const result = deepEqual(objA, objB);
    assert.ok(result);
})


