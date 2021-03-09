const axios = require('axios');
const { readFilePromise, writeFilePromise } = require('./utils');

const getDogPic = async () => {
  try {
    const species = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${species}`);

    const res = await axios.get(
      `https://dog.ceo/api/breed/${species}/images/random`
    );
    console.log(res.data.message);

    await writeFilePromise(`${__dirname}/dog-img.txt`, res.data.message);
    console.log('2: Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};

// we call async function from another async function to set order

// Don't Block the Event Loop: async-await required
// console.log('1: Will get Dog pictures');
// getDogPic();
// console.log('3: Done getting Dog pictures');

(async () => {
  console.log('1: Will get Dog pictures');
  await getDogPic();
  console.log('3: Done getting Dog pictures');
})();
