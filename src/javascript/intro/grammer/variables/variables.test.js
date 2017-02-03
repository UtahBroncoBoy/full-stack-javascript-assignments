import Test from 'ava';
import * as Assignment from './';

Test('greeting is proper', t => {
  t.is(Assignment.greeting, 'hello');
});

Test('message is proper', t => {
  t.is(Assignment.message, 'world');
});

Test('saying is proper', t => {
  t.is(Assignment.saying, 'Booyah');
});

Test('myConst is proper', t => {
  t.is(Assignment.myConst, 'This is my const');
});