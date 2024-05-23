"use strict";

function createFileName(name, ext) {
  return `${name.trim()}.${ext}`;
}
console.log(createFileName("report ", "csv")); // report.csv
