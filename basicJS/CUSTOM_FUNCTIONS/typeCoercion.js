console.log(typeof String(42)); // Приводит к строке.
Number("42"); // Приводит к числу.
Boolean(42); // Приводит к логическому значению.

// К строке:
String(123); // "123"
String(-12.3); // "-12.3"
String(null); // "null"
String(undefined); // "undefined"
String(true); // "true"
String(false); // "false"
String(function () {}); // "function () {}"
String({}); // "[object Object]"
String({ key: 42 }); // "[object Object]"
String([]); // ""
String([1, 2]); // "1,2"

// К числу:
Number("123"); // 123
Number("123.4"); // 123.4
Number("123,4"); // NaN
Number(""); // 0
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(function () {}); // NaN
Number({}); // NaN
Number([]); // 0
Number([1]); // 1
Number([1, 2]); // NaN

// Логические
Boolean(""); // false
Boolean("string"); // true
Boolean("false"); // true
Boolean(0); // false
Boolean(42); // true
Boolean(-42); // true
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(function () {}); // true
Boolean({}); // true
Boolean({ key: 42 }); // true
Boolean([]); // true
Boolean([1, 2]); // true

// Неявноее

5 + "3" === "53";
5 - "3" === 2;
console.log(5 + "-3" === "5-3");
5 - +3 === 2;
5 + -3 === 2;

// Дело в том, как JavaScript пробует эти два типа «сопоставить» друг с другом, чтобы с ними работать.

// Вначале посмотрим на примитивы.

// Интерпретатор приведёт примитивные значения к логическим, если мы используем && или ||.
// К строке, если мы используем +, когда один из операндов — строка.
// К числу, если:
// мы используем операторы сравнения <, <=, >, >=;
// используем арифметические операции -, + (за исключением пункта 2), /, *.
// используем унарный плюс: +'2' === 2;
// используем оператор нестрогого сравнения ==.
// Но примитивами дело не заканчивается, JavaScript также неявно приводит и не примитивные значения.

// Интерпретатор приводит их к логическому, если мы используем && или ||. (Объекты — всегда true).

// С числом и строкой всё немного интереснее. Чтобы определить, к строке приводить значение или к числу, JavaScript смотрит, какой из двух методов (valueOf и toString) в текущем объекте объявлен.

// Если перед нами не объект Date, то метод valueOf вызывается, обычно, первым (если не сильно углубляться в детали спецификации).
// Если возвращённое после этого значение — это примитив, то возвращается оно.
// Если нет, то вызывается другой метод (если valueOf не вернул примитив, то вызывается toString и наоборот).
// Если после этого вернулся примитив, возвращается он.
// Если даже после этого не вернулся примитив, то будет ошибка Uncaught TypeError: Cannot convert object to primitive value.

const obj1 = {};
console.log(obj1.valueOf()); // {}
console.log(obj1.toString());
console.log(1 + obj1);

// 2. Объект с указанным .valueOf()
const obj2 = {};
obj2.valueOf = () => "obj2";
obj2.valueOf(); // "obj2";
obj2.toString(); // "[object Object]"
