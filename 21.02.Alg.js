// Описание занятия: Задача: вызов лифта
// В доме два лифта
// реализовать алгоритм отправки наиближайшего на вызывающий этаж.

// алгоритм будет применяться в домах разной этажности.

// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А
//---------------------------------------------------------------------
// 1.Определить вызываемый этаж.
// 2.Для каждого лифта определить расстояние между его текущим этажом и вызываемым этажом.
// 3.Выбрать лифт, который находится ближе всего к вызываемому этажу.
// 4.Отправить выбранный лифт на вызываемый этаж.

const floors = 19;
const lifts = ["A", "B"];
const liftPositions = {
  A: 0,
  B: 8,
};

function getClosestLift(calledFloor) {
  let closestLift = lifts[0];
  let closestDistance = Math.abs(liftPositions[closestLift] - calledFloor);

  for (let i = 1; i < lifts.length; i++) {
    const lift = lifts[i];
    const distance = Math.abs(liftPositions[lift] - calledFloor);
    if (distance < closestDistance) {
      closestLift = lift;
      closestDistance = distance;
    }
  }

  return closestLift;
}

// Пример использования
const calledFloor = 8;
// const calledFloor = 1;
const closestLift = getClosestLift(calledFloor);
console.log(`Отправляем лифт ${closestLift} на ${calledFloor} этаж`); //Отправляем лифт B на 8 этаж
// console.log(`Отправляем лифт ${closestLift} на ${calledFloor} этаж`); Отправляем лифт A на 1 этаж
