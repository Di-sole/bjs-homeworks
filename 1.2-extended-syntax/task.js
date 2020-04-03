function getResult(a, b, c) {
    'use strict';

    let x = [];     
    let d = (b ** 2) - (4 * a * c);

    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d == 0) {
        x[0] = -b / (2 * a);
    }

    return x;
}

function getAverageMark(marks) {
    let sum = 0;
    let averageMark;

    if (marks.length == 0) {
        averageMark = 0;
    } else if (marks.length > 5 ) {
        console.log('Оценок больше пяти');
        marks.splice(5);
        
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }

        averageMark = sum / marks.length;
    } else {
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }

        averageMark = sum / marks.length;
    }
    
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let result;
    let today = new Date();
    let year = today.getFullYear() - dateOfBirthday.getFullYear();

    result = (year >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    return result;
}