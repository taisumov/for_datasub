/**
 @constructor
 @abstract
 */

//Абстрактный класс Aclass
class Aclass {
    constructor(n) {
        //Невозможность создания экземпляра данного класса
        if(this.constructor === Aclass) {
            throw new Error("Невозможно создать экземпляр абстрактного класса!");
        }
        this.Numbers = [];
        this.fill(n);
    }

    //Функция инициализации экземпляра класса путем создания массива случайных значений
    fill = function(n) {
        this.Numbers = Array.from({length: n}, () => Math.floor(Math.random() * 10));
    }

    //Функция, возвращающая массив факториалов из чисел первоначального массива
    factorial = function() {
        let fact = function(n) {
            return (n === 0 || n === 1) ? 1 : n * fact(n - 1);
        }
        return this.Numbers.map((num) => fact(num));
    }
}

//Абстрактный метод сортировки
Aclass.prototype.sort = function() { }

//Класс Class1, наследующий Aclass
class Class1 extends Aclass {
    // constructor(n) {
    //     super(n);
    // }

    //Определение метода sort() для класса Class1 (сортировка вставками)
    sort() {
        let n = this.Numbers.length;
        for (let i = 0; i < n; i++)
        {
            let tmp = this.Numbers[i]
            let j = i-1;
            while (j >= 0 && this.Numbers[j] > tmp) {
                this.Numbers[j+1] = this.Numbers[j];
                j--;
            }
            this.Numbers[j+1] = v;
        }
        return this.factorial();
    }
}

//Класс Class1, наследующий Aclass
class Class2 extends Aclass {
    // constructor(n) {
    //     super(n);
    // }

    //Определение метода sort() для класса Class1 (сортировка пузырьком)
    sort() {
        let n = this.Numbers.length;
        for (let i = 0; i < n-1; i++) {
            for (let j = 0; j < n-1-i; j++) {
                if (this.Numbers[j+1] < this.Numbers[j]) {
                    let tmp = this.Numbers[j+1];
                    this.Numbers[j+1] = this.Numbers[j];
                    this.Numbers[j] = tmp;
                }
            }
        }
        return this.factorial();
    }
}

//Пример работы
let a = new Aclass(4);    // Uncaught Error: Невозможно создать экземпляр абстрактного класса!
let b = new Class1(4);    // [4, 1, 6, 8]
console.log(b.sort());    // [1, 24, 720, 40320]
console.log(b)            // [1, 4, 6, 8]
