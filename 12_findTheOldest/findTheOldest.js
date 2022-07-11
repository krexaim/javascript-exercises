const findTheOldest = function(people) {
    let ages = people.map(function(person) {
        if (person.yearOfDeath == null) {
            return new Date().getFullYear() - person.yearOfBirth
        }
        else {
            return person.yearOfDeath - person.yearOfBirth
        }});

    let oldest = ages.indexOf(Math.max(...ages));

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
