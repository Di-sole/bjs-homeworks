// Задача 1

class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.defaultDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        if (0 >= this.durability - damage) {
            this.durability = 0;
        } else {
            this.durability -= damage;
        }

        return this.durability;
    }

    getDamage() {
        if  (this.durability === 0) {
            return 0;
        } else if (this.durability < this.defaultDurability * 0.3) {
            return this.attack / 2;
        } else {
            return this.attack;
        }
    }

    isBroken() {
        if (this.durability > 0 || this.durability == Infinity) {
            return false;
        } else {
            return true;
        }
    }
}

// Задача 2

// подклассы для обычного оружия

class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}

class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}

// подклассы для усиленного оружия

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.defaultDurability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}


// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!this.marks.hasOwnProperty([subject])) {
            this.marks[subject] = [];
        }

        if (isNaN(grade) || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        } else {
            this.marks[subject].push(grade);
        }
            
            return this.marks[subject].length;
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty([subject]) || this.marks[subject].length == 0) {
            return 0;
        } 
        
        let sum = 0;

        for (let i = 0; i < this.marks[subject].length; i++) {
            sum += this.marks[subject][i];
        }

        return sum / this.marks[subject].length;
    }

    getTotalAverage() {
        if (Object.keys(this.marks).length == 0) {
            return 0;
        } 
        
        let sum = 0;

        for (let subject in this.marks) {
            sum += this.getAverageBySubject(subject);
        }

        return sum / Object.keys(this.marks).length;
    }
}

const log = new StudentLog('Олег Никифоров');