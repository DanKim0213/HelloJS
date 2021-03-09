const axios = require('axios');
const { readFilePromise, writeFilePromise } = require('./utils');

const getDogPic = async () => {
  try {
    const species = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${species}`);

    const res1 = axios.get(
      `https://dog.ceo/api/breed/${species}/images/random`
    );
    const res2 = axios.get(
      `https://dog.ceo/api/breed/${species}/images/random`
    );
    const res3 = axios.get(
      `https://dog.ceo/api/breed/${species}/images/random`
    );

    // waiting for multiple promises simultaneously!!
    const all = await Promise.all([res1, res2, res3]);
    const imgs = all.map(el => el.data.message);
    console.log(imgs);

    await writeFilePromise(`${__dirname}/dog-img.txt`, imgs.join('\n'));
    console.log('2: Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};

getDogPic();
