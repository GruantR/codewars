// git reset --hard origin/main
//https://www.codewars.com/kata/652e9d603a9be5122adbfdbf/train/javascript

// 📌 DESCRIPTION:

// The Map.groupBy static method just groups the elements by keys.

// But we need to go deeper :-) JavaScript's big brother Java has similar method.

// It implement a cascaded "group by" operation on input elements of type T, grouping elements according to a classification function, and then performing a reduction operation on the values associated with a given key using the specified downstream callback and initial value.

// Your task is to implement the groupBy function.

// const employees = [
//   { name: "James", income: 1000, profession: "developer", age: 23, },
//   { name: "Robert", income: 1100, profession: "qa", age: 34, },
//   { name: "John", income: 1200, profession: "designer", age: 32, },
//   { name: "Mary", income: 1300, profession: "designer", age: 22, },
//   { name: "Patricia", income: 1400, profession: "qa", age: 23, },
//   { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
//   { name: "Max", income: 1600, profession: "developer", age: 27, },
// ];


// const profession2totalIncome = groupBy(
//   employees,
//   employee => employee.profession, // group by profession
//   (acc, employee) => acc + employee.income, // sum up incomes
//   () => 0, // provide an initial value for map's value
// );

// // Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }


// const profession2names = groupBy(
//   employees,
//   employee => employee.profession,
//   (acc, employee) => [...acc, employee.name],
//   () => [],
// );

// // Map {
// //   'developer' => [ 'James', 'Jennifer', 'Max' ],
// //   'qa' => [ 'Robert', 'Patricia' ],
// //   'designer' => [ 'John', 'Mary' ],
// // }

// 💡 SOLUTION :


function groupBy(array, classifier, downstream, accumulatorSupplier) {
    let map = new Map();
    
    for (let obj of array) {
        let key = classifier(obj);
        
        // Инициализация аккумулятора, если ключ ещё не существует
        let accumulator = map.has(key) ? map.get(key) : accumulatorSupplier();
        
        // Обновляем аккумулятор
        accumulator = downstream(accumulator, obj);
        
        // Сохраняем обновлённый аккумулятор в карте
        map.set(key, accumulator);
    }

    return map;
}

const employees = [
    { name: "James", income: 1000, profession: "developer", age: 23, },
    { name: "Robert", income: 1100, profession: "qa", age: 34, },
    { name: "John", income: 1200, profession: "designer", age: 32, },
    { name: "Mary", income: 1300, profession: "designer", age: 22, },
    { name: "Patricia", income: 1400, profession: "qa", age: 23, },
    { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
    { name: "Max", income: 1600, profession: "developer", age: 27, },
  ];

  const profession2totalIncome = groupBy(
    employees,
    employee => employee.profession, // group by profession
    (acc, employee) => acc + employee.income, // sum up incomes
    () => 0, // provide an initial value for map's value
  );

const actualResult = groupBy(
    employees,
    employee => employee.profession,
    (acc, employee) => [...acc, employee.name],
    () => [],
  );



  console.log(profession2totalIncome);
  

