const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce( (last, next) => {
        const oldestAge = getAge(last.yearOfBirth, last.yearOfDeath);
        const currentAge = getAge(next.yearOfBirth, next.yearOfDeath);

        return oldestAge > currentAge ? last : next;
    });
}

/*  My futile attempt
    const findTheOldest = function(array) {
    let currentYear = (new Date()).getFullYear();

    let age = array.map((item) => ({
    name: item.name,
    age : item.yearOfDeath - item.yearOfBirth
    }));

    return age;

    return age
    .filter((a) => a.age)
      .reduce((total, a) => {
        return Math.max(total, a.age);
      }, age[0]);

}
      */

// Do not edit below this line
module.exports = findTheOldest;
