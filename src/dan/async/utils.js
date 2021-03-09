/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-promise-reject-errors */
const fs = require('fs');

// 1. Building Promises
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file...');
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('I could not find that file...');
      resolve(data);
    });
  });
};

module.exports = { readFilePromise, writeFilePromise };
