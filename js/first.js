"use strict";

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (value of values) {
    totalSalary += value;
  }
  return totalSalary;
}
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
