const fs = require('fs');

/*
 * Manipulating a stream asynchronously
 */

fs.readFile('../../replaces.json', 'utf8', (err, data) => {
  if (err) throw err;

  const replaces = JSON.parse(data);
  fs.readFile('../../text.txt', 'utf8', (err, data) => {
    if (err) throw err;

    Object.keys(replaces).forEach(prop => {
      data = data.replace(RegExp(prop, 'ig'), replaces[prop]);
    });

    console.log(data);
    fs.writeFile('output.txt', data, (err) => {
      if (err) throw err;
      console.log('El archivo se guardó exitosamente!');
    });
  });
});

console.log('\x1b[33m%s\x1b[0m', 'Probablemente me muestre antes que lo anterior.');