/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
const axios = require('axios');
const { readFilePromise, writeFilePromise } = require('./utils.js');


// compare using then() vs async-await
// then()
readFilePromise(`${__dirname}/dog.txt`)
  .then(species => {
    console.log(`Breed: ${species}`);
    return axios.get(`https://dog.ceo/api/breed/${species}/images/random`);
  })
  .then(res => {
    console.log(res.data.message);
    return writeFilePromise(`${__dirname}/dog-img.txt`, res.data.message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch (err => {
    console.log(err);
  });

// async-await 
const getDogPic = async () => {
  try {
    const species = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${species}`);

    const res = await axios.get(
      `https://dog.ceo/api/breed/${species}/images/random`
    );
    console.log(res.data.message);

    await writeFilePromise(`${__dirname}/dog-img.txt`, res.data.message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};
// you have two options: call the func name or immediately invoke the func expression (IIFE) 
getDogPic();

