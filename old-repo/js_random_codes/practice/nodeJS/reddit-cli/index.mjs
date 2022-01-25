#! /usr/bin/env node
import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

const { argv } = yargs(process.argv);

const data = await fetch('http://www.reddit.com/.json');

const finalResult = await data.json();
const randomnum = Math.ceil(Math.random() * finalResult.data.children.length);
if (argv.print) {
  console.log('title : ' + finalResult.data.children[randomnum].data.title);
  console.log(
    'link : https://www.reddit.com' +
      finalResult.data.children[randomnum].data.permalink
  );
} else {
  open(
    'https://www.reddit.com' +
      finalResult.data.children[randomnum].data.permalink
  );
}
