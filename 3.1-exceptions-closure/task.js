// задача 1

function parseCount(value) {
    if (isNaN(parseInt(value))) {
        throw new Error('Невалидное значение');
    }
    
    return parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    }
}


// задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p-this.c));

        return parseFloat(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return 'Ошибка! Неправильный треугольник';
            },
            getArea() {
                return 'Ошибка! Неправильный треугольник';
            }
        }
    }
}