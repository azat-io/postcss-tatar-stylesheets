var _             = require('lodash');
var postcss       = require('postcss');

var mapProperties = {
  'animation': 'анимация',
  'animation-delay': 'анимацияне-тоткарлау',
  'background': 'фон',
  'background-color': 'төп-төс',
  'background-image': 'төп-рәсем',
  'background-position': 'фонның-урыны',
  'background-repeat': 'фонның-кабатлануы',
  'border': 'чик',
  'border-bottom': 'аскы-чик',
  'border-bottom-color': 'аскы-чикнең-төсе',
  'border-bottom-style': 'аскы-чикнең-стиле',
  'border-bottom-width': 'аскы-чикнең-иңе',
  'border-color': 'чикнең-төсе',
  'border-left': 'сул-чик',
  'border-left-color': 'сул-чикнең-төсе',
  'border-left-style': 'сул-чикнең-стиле',
  'border-left-width': 'сул-чикнең-иңе',
  'border-right': 'уң-чик',
  'border-right-color': 'уң-чикнең-төсе',
  'border-right-style': 'уң-чикнең-стиле',
  'border-right-width': 'уң-чикнең-иңе',
  'border-style': 'чикнең-стиле',
  'border-top': 'өске-чик',
  'border-top-color': 'өске-чикнең-төсе',
  'border-top-style': 'өске-чикнең-стиле',
  'border-top-width': 'өске-чикнең-иңе',
  'border-width': 'иңнең-чиге',
  'bottom': 'ас',
  'clear': 'чистартырга',
  'clip': 'кыскартырга',
  'color': 'төс',
  'cursor': 'курсор',
  'display': 'чагылыш',
  'filter': 'фильтр',
  'float': 'калкавыч',
  'font': 'минемшрифт',
  'font-family': 'шрифтның-төре',
  'font-size': 'шрифт-зурлыгы',
  'font-style': 'шрифт-стиле',
  'font-weight': 'шрифтның-калынлыгы',
  'height': 'буй',
  'left': 'сул',
  'letter-spacing': 'xәрефләр-арасы',
  'line-height': 'юлның-буе',
  'margin': 'тышкыара',
  'margin-bottom': 'аскы-тышкы-ара',
  'margin-left': 'сул-тышкы-ара',
  'margin-right': 'уң-тышкы-ара',
  'margin-top': 'өске-тышкы-ара',
  'overflow': 'кисергә',
  'padding': 'эчкеара',
  'padding-bottom': 'аскы-эчке-ара',
  'padding-left': 'сул-эчке-ара',
  'padding-right': 'уң-эчке-ара',
  'padding-top': 'өске-эчке-ара',
  'position': 'урыны',
  'right': 'уң',
  'text-align': 'текстны-тигезләү',
  'text-decoration': 'текстны-бизәү',
  'text-indent': 'кызыл-юл',
  'text-shadow': 'текстның-шәүләсе',
  'text-transform': 'текстны-үзгәртү',
  'top': 'өс',
  'visibility': 'күрү-мөмкинлеге',
  'width': 'иң',
  'word-spacing': 'интервал',
  'z-index': 'блокның-дәрәҗәсе'
};

var mapValues = {
  'block': 'блок',
  'bold': 'калын',
  'bolder': 'бик-калын',
  'both': 'икеседә',
  'bottom': 'ас',
  'center': 'урта',
  'fixed': 'урында-калдыру',
  'flex': 'флекс',
  'inline': 'бер-юлда',
  'italic': 'курсив',
  'justify': 'иң-буенча',
  'left': 'сул',
  'lighter': 'юка',
  'line-through': 'сызылган',
  'list-item': 'исемлек-элементы',
  'lowercase': 'юл-хәреф',
  'middle': 'үзәктә',
  'no-repeat': 'кабатламаска',
  'none': 'юк',
  'normal': 'стандарт',
  'repeat': 'кабатлау',
  'repeat-x': 'кабатлау-х',
  'repeat-y': 'кабатлау-у',
  'right': 'уң',
  'solid': 'тоташ',
  'top': 'өс',
  'transparent': 'үтә-күренмә',
  'underline': 'ассызыклау',
  'uppercase': 'баш-хәреф',
  // Colors
  'black': 'кара',
  'blue': 'зәңгәр',
  'brown': 'коңгырт',
  'gold': 'алтын',
  'gray': 'соры',
  'green': 'яшел',
  'orange': 'кызгылт-сары',
  'pink': 'ал',
  'red': 'кызыл',
  'skyblue': 'күк-төсе',
  'white': 'ак',
  'yellow': 'сары'
};

module.exports = postcss.plugin('postcss-tatar-stylesheets', function (opts) {
  opts = opts || {};

  return function (css) {
    css.walkDecls(function transformDecl(decl) {
      // Properties
      _.forEach(mapProperties, function (value, key) {
        decl.prop = decl.prop.replace(value, key);
      });
      // Values
      _.forEach(mapValues, function (value, key) {
        decl.value = decl.value.replace(value, key);
      });
      // Important
      if (decl.value.indexOf('!мөһим') >= 0) {
        decl.value = decl.value.replace(/\s*!мөһим\s*/, '');
        decl.important = true;
      }
    });
  };
});

// Export Properties and Values for testing
module.exports.mapProperties = mapProperties;
module.exports.mapValues = mapValues;
