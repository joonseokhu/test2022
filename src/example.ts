import path from 'path';
import fs from 'fs';
import { Transform } from 'stream';

import getLuck from './luck.async';
import createGugudanStream from './gugudan.stream';

getLuck('허준석', 32, (err, luck) => {
  if (err) return console.log('err', err);
  return console.log('success', luck);
});

const gugudanStream = createGugudanStream();

const toJSONStream = new Transform({
  transform(data, encoding, callback) {
    console.log('data', data);
    callback(null, `${JSON.stringify(data)}\n`);
  },
  objectMode: true,
});

const writeFileStream = fs.createWriteStream(
  path.join(__dirname, '../static/result.txt'),
  'utf8',
);

gugudanStream
  .pipe(toJSONStream)
  .pipe(writeFileStream);
