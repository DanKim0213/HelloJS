const express = require('express');

const app = express();

app.listen(8080, () => {
  console.log('LISTENING ON PORT 8080');
});

console.log('Hello World!');
console.log('good to seeya');

// Route basics
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

app.post('/cats', (req, res) => {
  res.send('POST REQUEST TO /cats !!!! THIS IS DIFFERENT THAN A GET REQUEST!');
});

app.get('/cats', (req, res) => {
  res.send('MEOW!!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

// Route Parameters
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

// Query Strings
// e.g. https://developer.mozilla.org/en-US/search?q=promise
// e.g. localhost:8080/search/?q=bamb!!&color=red
app.get('/search', (req, res) => {
  const { q } = req.query; // we assume that the propery in the query string is "q".
  if (!q) {
    res.send('NOTHING FOUND IF NOTHING SEARCHED!');
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

app.get('*', (req, res) => {
  res.send(`I don't know that patch`);
});
