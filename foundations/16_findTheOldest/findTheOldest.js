const findTheOldest = function(array) {
    let arr2 = array.sort((p1, p2) => {

        const currentYear = new Date().getFullYear();
        let p1Age, p2Age

        if (p1.yearOfDeath === undefined) {
            p1.yearOfDeath = currentYear;
        }
        if (p2.yearOfDeath === undefined) {
            p2.yearOfDeath = currentYear;
        }

        p1Age = p1.yearOfDeath - p1.yearOfBirth
        p2Age = p2.yearOfDeath - p2.yearOfBirth

        return (p2Age - p1Age)
    })

    return arr2[0]

};

// Do not edit below this line
module.exports = findTheOldest;
