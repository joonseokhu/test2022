import path from 'path';
import fs from 'fs';
import Stream from 'stream';
import { mapPromise, wait } from './utils';

const createGugudanStream = async (stream: Stream) => {
  const text = await fs.promises.readFile(path.join(__dirname, '../static/gugudan.txt'), 'utf8');
  const rows = text.split('\n');

  await mapPromise(rows, async (row) => {
    await wait(1000);
    stream.emit('data', {
      timestamp: new Date(),
      message: row,
    });
  });

  stream.emit('end');
  stream.emit('close');
};

export default () => {
  const stream = new Stream.Readable({
    objectMode: true,
    read: () => {},
  });

  createGugudanStream(stream);
  return stream;
};
