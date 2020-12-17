import * as comlink from 'comlink';
import myWorker from './myWorker';

const exports = {
  myWorker
};
export type MyWorker = typeof exports;

comlink.expose(exports);