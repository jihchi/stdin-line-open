import split from 'split';
import opn from 'opn';
import defaults from 'lodash.defaults';

export default function (opt) {
  const _opt = defaults(opt, {
    match: 'o',
    open: ''
  });

  return () =>
    process.stdin
      .pipe(split())
      .on('data', line => {
        if (line !== _opt.match || !_opt.open) {
          return;
        }
        opn(_opt.open);
      })
}
