function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';

    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else if (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    } else if (isNaN(date)) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    }

    const mortgage = amount - contribution;
    const amountOfMonths = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
    const monthlyPercent = percent / 12 / 100;
    const monthlyPayment = mortgage * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** amountOfMonths) - 1));
    const totalAmount = monthlyPayment * amountOfMonths;
    const result = Number(totalAmount.toFixed(2));
    
    console.log(result);

    return result;
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}