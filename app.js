// JavaScript source code

// const fetch = require('node-fetch');

async function hent() {

    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);

    let commits = await response.json();

    console.log(commits[0].commit.author.name);

}

hent();

