// allows any number of attributes, any type
// const person: Record<string, any> = {

// locks object as specified, better to let TS infer type
// also can create a type of const value?
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Doug',
//     age: 54,
//     hobbies: ['raid', 'panic'],
//     role: [0, 'king']
// };

enum Role {
    ADMIN, READONLY, AUTHOR
}
const person = {
    name: 'Doug',
    age: 54,
    hobbies: ['raid', 'panic'],
    role: Role.ADMIN
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log(person.role);
}

// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
//   }

//   console.log(product.tags[0]);

//   product.tags[0] = 'no it is not';
//   console.log(product.tags[0]);
//   console.log(product);