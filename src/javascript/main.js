class User {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let userCollection = [];

userCollection.push(new User());
userCollection.push(new User());
userCollection.push(new User());
userCollection.push(new User());
userCollection.push(new User());

console.dir(userCollection);
