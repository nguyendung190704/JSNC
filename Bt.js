const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

const ageGroups = voters.reduce((result, vote) => {
    if (vote.age >= 20 && vote.age < 30) {
        result.from20to29 = (result.from20to29 || 0) + 1;
    } else if (vote.age >= 30 && vote.age < 40) {
        result.from30to39 = (result.from30to39 || 0) + 1;
    } else if (vote.age >= 40) {
        result.from40 = (result.from40 || 0) + 1;
    } 
    return result;
}, {});

console.log(JSON.stringify(ageGroups));
