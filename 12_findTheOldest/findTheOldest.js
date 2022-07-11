const findTheOldest = function(people) {
    let ages = people.map(person => person.yearOfDeath - person.yearOfBirth);
    let oldest = ages.indexOf(Math.max(...ages));

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
