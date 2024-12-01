// git reset --hard origin/main
//https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/solutions/javascript

// 📌 DESCRIPTION:

// Description:
// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

// 💡 SOLUTION :


function evaporator(content, evap_per_day, threshold) { 
    let currentContent = content; // Текущий объем жидкости
    let days = 0; // Количество дней

    // Вычисляем пороговое значение
    const thresholdValue = content * (threshold / 100);

    while (currentContent > thresholdValue) {
        // Считаем сколько у нас evaporates каждый день
        currentContent -= currentContent * (evap_per_day / 100);
        days++; // Увеличиваем счетчик дней
    }
    
    return days;
}

// Пример использования
console.log(evaporator(100, 5, 7)); // Должен вернуть количество дней

  