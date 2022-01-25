import { readFile, writeFile } from 'fs/promises';

console.log('');

let template = await readFile(
  new URL('template.html', import.meta.url),
  'utf-8'
);
let dataaa = {
  title: 'this is my heading inside node js',
  text: 'this is anything  else than earlier',
};

const doit = async (ad) => {
  for (const [key, value] of Object.entries(ad)) {
    return (template = await template.replace(`{${key}}`, value));
  }
};
await writeFile(new URL('hu.html', import.meta.url), doit(dataaa));
process.exit(1);

console.log('');
