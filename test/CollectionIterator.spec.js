import {CollectionIterator} from '../src/javascript/CollectionIterator'
import {assert, expect, should} from 'chai';

describe('CollectionIterator', () => {

  describe('Iterate trough collection', () => {

    it('Should not exit out of index range', ()=> {
      const collection = new CollectionIterator(['one', 'two', 'tree']);
      assert.typeOf(collection, 'object');
      assert.equal(collection.currentIndex, 0);
      collection.next();
      assert.equal(collection.currentIndex, 1);
      collection.next();
      assert.equal(collection.currentIndex, 2);
      collection.next();
      assert.equal(collection.currentIndex, 2);
      collection.prev();
      assert.equal(collection.currentIndex, 1);
      collection.prev();
      assert.equal(collection.currentIndex, 0);
      collection.prev();
      assert.equal(collection.currentIndex, 0);
    });
    it('Iterate trough elements', ()=> {
      const collection = new CollectionIterator(['one', 'two', 'tree']);
      assert.equal(collection.getValue(), 'one');
      collection.prev();
      assert.equal(collection.getValue(), 'one');
      collection.prev();
      assert.equal(collection.getValue(), 'one');
      collection.next();
      assert.equal(collection.getValue(), 'two');
      collection.next();
      assert.equal(collection.getValue(), 'tree');
      collection.next();
      assert.equal(collection.getValue(), 'tree');
    })
  });
});
