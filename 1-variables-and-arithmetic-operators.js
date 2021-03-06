// 1. ПЕРЕМЕННЫЕ, АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ

// 1) Вывести периметр квадрата
let task1 = (a) => {
    return 4 * a;
}
// 2) Вывести площадь квадрата
let task2 = (a) => {
    return a**2;
}
// 3) Вывести площадь и периметр прямоугольника
let task3 = (a,b) => {
    return `${a*b}, ${2*(a+b)}`;
}
// 4) Вывести объём и площадь поверхности куба
let task4 = (a) => { 
    //  return [a**3, 6*a**2];
    retun `${a**3}, ${6*a**2}`;
}
// 5) Вывести среднее арифметическое двух чисел
let task5 = (a,b) => {
    return ((a+b)/2)
}
// 6) Вывести среднее геометрическое двух чисел
let task6 = (a,b) => {
    return (Math.sqrt(a*b))
}
// 7) Найти гипотенузу и периметр прямоугольного треугольника
let task7 = (a,b,c) => { 
    c = Math.sqrt(a**2+b**2);
    return [c, a+b+c]; //  Можно тут вывести не массивом?
}
// 8) Выведите расстояние между точками на числовой оси
let task8 = (a,b) => {
    return (Math.abs(b-a));
}
// 9) Поменять значения переменных местами 
let task9 = (a,b) => {
    let swap = a;
    a = b;
    b = swap;
    return [a,b];
}
// 10) Было a,b,c, а должно стать b,c,a
let task10 = (a,b,c) => {
    // let swap = a;
    // a = b;
    // b = c;
    // c = swap;
    // return [a,b,c];
    return [a,b,c] = [b,c,a];
}
/* 11) Вывести a^2, b^4, a^8, используя не более трёх операций умножения 
(оператор возведения в степень и дополнительные переменные не использовать) */
let task11 = (a) => {
    return[a*=a, a*=a, a*=a]
}
/* 12) В прошлый раз Таня купила w1 кг конфет за p1 рублей. 
В этот раз она хочет купить w2 кг конфет. 
Выведите цену 1 кг конфет и сколько денег она потратит в этот раз, если цена конфет не изменилась. */
let task12 = (w1, p1, w2) => {
    return `${p1/w1}, ${p1/w1*w2}`;
}
/* 13) У Васи было r рублей. Он решил купить мороженого на все свои деньги. 
 Одно мороженое стоит 10 рублей. Сколько денег останется у Васи?*/
let task13 = (r) => {
    return r % 10;
}
/* 14) Известно, что с полуночи прошло m минут. 
Сколько минут (от 0 до 59) сейчас показывает минутная стрелка? */
let task14 = (m) => {
    if (m > 60) {
        m %= 60;
    } 
    return m;
}
/* 15) Известно, что d дней назад был понедельник. 
Сколько дней прошло с последнего понедельника? */
let task15 = (d) => {
    if (d>=7) {
        d %= 7;
    }
    return d;
}
// 16) Известно, что d дней назад был вторник. Сколько дней прошло с последнего понедельника?
let task16 = (d) => {
    return d % 7 + 1;
}
/* 17) Известно, что d дней назад было воскресенье. 
Выведите, какой сейчас день недели. (1..6 - пн..сб, 0 - вс). */
let task17 = (d) => {
    return d % 7;
}
/* 18) Известно, что d дней назад был понедельник. 
Выведите, какой сейчас день недели. (1..7 - пн..вс). */
let task18 = (d) => {
    return d % 7 + 1;
}
/* 19) Дано двузначное число a. 
Выведите вначале левую цифру (десятки), а затем правую (единицы). */
let task19 = (a) => {
    return[Math.floor(a / 10), a % 10]
}
/* 20) Дано двузначное число a. 
Выведите сумму и произведение его цифр. */
let task20 = (a) => {
    return[Math.floor(a / 10) + a % 10,
         Math.floor(a / 10) * (a % 10)];
}
// 21) Дано число a. Выведите 1, если оно нечётное, либо 0, если чётное.
let task21 = (a) => {
    return a % 2
}
// 22) Дано число a. Выведите 1, если оно чётное, либо 2, если нечётное.
let task22 = (a) => {
    return a % 2 + 1
} 
// 23) Дано число a. Выведите 0, если оно нечётное, либо 1, если чётное.
let task23 = (a) => {
    return Math.abs(a % 2 - 1)
} 
// 24) Дано число a. Выведите 1, если оно нечётное, либо 2, если чётное.
let task24 = (a) => {
    return Math.abs(a % 2 - 2)
} 

/* 25) Представим, что есть некая бесконечная повторяющаяся последовательность из чисел 0, 1 и 2: [0, 1, 2, 0, 1, 2, 0, 1, 2, ...]. 
Какое число будет в ней на месте с номером n? (если пронумеровать последовательность, начиная с единицы) */
let task25 = (n) => {
    // if (n % 3 === 0) {
    //     return 2            
    // }
    // if ((n + 1) % 3  === 0) {
    //     return 1             
    // }
    // return 0
    let arr = [0,1,2]
    return arr[n % 3 - 1]
}
console.log(task25(1))
