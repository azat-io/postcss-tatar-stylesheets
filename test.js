var test = require('tape');
var postcss = require('postcss');
var plugin = require('./');
var name = require('./package.json').name;

var tests = [{
    message: 'Should transform css',
    fixture: 'div { фон: кызгылт-сары; калкавыч: уң; тышкыара: 30px 20px; өске-эчке-ара: 40px; блокның-дәрәҗәсе: 1 }',
    expected: 'div { background: orange; float: right; margin: 30px 20px; padding-top: 40px; z-index: 1 }',
    options: {foo: true}
}];

function process (css, options) {
    return postcss(plugin(options)).process(css).css;
}

test(name, function (t) {
    t.plan(tests.length);

    tests.forEach(function (test) {
        var options = test.options || {};
        t.equal(process(test.fixture, options), test.expected, test.message);
    });
});

test('should use the postcss plugin api', function (t) {
    t.plan(2);
    t.ok(plugin().postcssVersion, 'should be able to access version');
    t.equal(plugin().postcssPlugin, name, 'should be able to access name');
});
