function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';

    if (isNaN(percent)) {
        alert(`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
    } else if (isNaN(contribution)) {
        alert(`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
    } else if (isNaN(amount)) {
        alert(`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
    } else if (isNaN(date)) {
        alert(`Параметр "Срок ипотеки" содержит неправильное значение ${date}`);
    }

    let mortgage = amount - contribution;
    let amountOfMonths = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
    let monthlyPercent = percent / 12 / 100;
    let monthlyPayment = mortgage * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** amountOfMonths) - 1));
    let totalAmount = monthlyPayment * amountOfMonths;
    let result = Number(totalAmount.toFixed(2));
    
    console.log(result);

    return result;
}

function getGreeting(name) {
    if (name == null || name == '' || name == undefined) {
        name = 'Аноним';
    }
    
    return `Привет, мир! Меня зовут ${name}`;
}