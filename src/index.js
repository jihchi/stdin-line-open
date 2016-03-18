import defaults from 'lodash.defaults';
import opn from 'opn';
import split from 'split';

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
