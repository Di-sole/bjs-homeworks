// задание 1

function getSolutions(a, b, c) {
    let d = (b ** 2) - (4 * a * c);
    let solutions = {
        D: d,
        roots: []
    };

    if (d == 0) {
        solutions.roots[0] = -b / (2 * a);
    } else if (d > 0) {
        solutions.roots[0] = (-b + Math.sqrt(d)) / (2 * a);
        solutions.roots[1] = (-b - Math.sqrt(d)) / (2 * a);
    }

    return solutions;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}х + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}

// задание 2

function getAverageScore(data) {
    let result = {};
    
    for (let prop in data) {
        result[prop] = getAverageMark(data[prop]);
    }

    let average = [];

    for (let prop in result) {
        average.push(result[prop]);
    }

    result.average = getAverageMark(average);
    
    return result;    
}

function getAverageMark(marks) {
    let averageMark;

    if (marks.length == 0) {
        return 0;
    } else {
        let sum = 0;

        for (let i = 0; i < marks.length; i++) {
            sum += marks[i]
        }

        averageMark = sum / marks.length;
    }

    return averageMark;
}

// задание 3

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}

function getDecodedValue(secret) {
        return secret === 0 ? 'Родриго' : 'Эмильо';
    }