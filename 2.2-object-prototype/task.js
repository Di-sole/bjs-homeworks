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
            sum += parseInt(marks[i]);
        }

        average = sum / marks.length;
    }

    const roundedAverage = Math.round(average);
    
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = Date.now();
    const userBirthday = Date.parse(birthday);
    const diff = now - userBirthday;
    const age = diff / 31536000000;

    return age >= 18;
}