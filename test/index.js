import test from 'tape';
import createStdinLineOpen from '../src';

test('createStdinLineOpen', (t) => {
  const stdinLineOpen = createStdinLineOpen();

  t.plan(2);
  t.equal('function', typeof createStdinLineOpen, 'should be a function');
  t.equal('function', typeof stdinLineOpen, 'return a function');
});
