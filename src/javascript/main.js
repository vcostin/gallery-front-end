import {CollectionIterator} from './libraries/CollectionIterator'
import {User} from './libraries/User'

const userCollection = [];

userCollection.push(new User('Pana', 'Panamana'));
userCollection.push(new User('John', 'Doe'));
userCollection.push(new User('Hage', 'Manto'));
userCollection.push(new User('Rukia', 'Kuchiki'));
userCollection.push(new User('Joe', 'Black'));

console.log(userCollection);

userCollection.forEach(user => {
  console.log(user.fullName())
});

const collection = new CollectionIterator(['one', 'two', 'tree']);

console.log(collection);
