// 1) Проверьте, равны ли два массива или нет
// Учитывая два массива, arr1 и arr2 одинаковой длины N , задача состоит в том, чтобы определить, равны ли данные массивы или нет.

// Два массива называются равными, если:
// оба они содержат один и тот же набор элементов,
// расположение (или перестановки) элементов может/не может быть одинаковым.
// Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.

// Ввод: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
// Вывод: Да

// Временная сложность - O(n)

function checkArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqMap1 = new Map();
  let freqMap2 = new Map();

  for (let num of arr1) {
    freqMap1.set(num, (freqMap1.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    freqMap2.set(num, (freqMap2.get(num) || 0) + 1);
  }

  for (let [key, value] of freqMap1) {
    if (value !== freqMap2.get(key)) {
      return false;
    }
  }

  return true;
}

const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];
if (checkArraysEqual(arr1, arr2)) {
  console.log("Да");
} else {
  console.log("Нет");
}
///////////////////////////////////////////////////////////
// 2) Сгруппируйте слова с одинаковым набором символов

// Дан список слов со строчными буквами. Реализуйте функцию поиска всех слов с одинаковым уникальным набором символов.

// Input: String words[] = {"student", "students", "dog", "god", "cat", "act", "flow", "wolf"};
// Output :
// student, students,
// cat, act,
// dog, god,
// flow, wolf,

// Идея состоит в том, чтобы использовать хеширование. Генерируем ключ для всех слов. Ключ содержит все уникальные символы (размер ключа не более 26 для строчных букв). Мы храним индексы слов как значения для ключа. После того, как мы заполнили все ключи и значения в хеш-таблице, мы можем распечатать результат, пройдя по таблице.

function groupWords(words) {
  const hash = {};

  for (let i = 0; i < words.length; i++) {
    const key = getUniqueChars(words[i]);

    if (key in hash) {
      hash[key].push(words[i]);
    } else {
      hash[key] = [words[i]];
    }
  }

  const result = [];

  for (let key in hash) {
    result.push(hash[key]);
  }

  return result;
}

function getUniqueChars(word) {
  const chars = [];

  for (let i = 0; i < word.length; i++) {
    if (!chars.includes(word[i])) {
      chars.push(word[i]);
    }
  }

  return chars.sort().join("");
}

const words = [
  "student",
  "students",
  "dog",
  "god",
  "cat",
  "act",
  "flow",
  "wolf",
];
const result = groupWords(words);
console.log(result);

// [ [ 'student', 'students' ], [ 'cat', 'act' ], [ 'dog', 'god' ], [ 'flow', 'wolf' ] ]
