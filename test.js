import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
  return postcss([ plugin(opts) ]).process(input)
    .then( result => {
      t.same(result.css, output);
      t.same(result.warnings().length, 0);
    });
}

test('Do something', t => {
  return run(t, 'div { фон: кызгылт-сары; калкавыч: уң; тышкыара: 30px 20px; өске-эчке-ара: 40px; блокның-дәрәҗәсе: 1 }', 'div { background: orange; float: right; margin: 30px 20px; padding-top: 40px; z-index: 1 }', { });
});
