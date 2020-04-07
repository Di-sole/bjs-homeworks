function getAnimalSound(animal) {
    let animalSound;

    if (animal == undefined) {
        return null;
    } else {
        animalSound = animal.sound;
    }
    
    return animalSound;
}

function getAverageMark(marks) {
    let average;

    if (marks.length == 0) {
        return 0;
    } else {
        let sum = 0;

        for (let i = 0; i < marks.length; i++) {
            sum += Number(marks[i]);
        }

        average = sum / marks.length;
    }

    let roundedAverage = Math.round(average);
    
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let userBirthday = Date.parse(birthday);
    let diff = now - userBirthday;
    let age = diff / 31536000000;

    return (age >= 18) ? true : false;
}