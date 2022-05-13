const ImageEditor = require('tui-image-editor');
const FileSaver = require('file-saver'); //to download edited image to local. Use after npm install file-saver
const blackTheme = require('./js/theme/black-theme.js');
const locale_ru_RU = {
  // override default English locale to your custom
  Crop: 'Обзрезать',
  'Delete-all': 'Удалить всё',
  // etc...
};
const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
  includeUI: {
    loadImage: {
      path: 'img/sampleImage.jpg',
      name: 'SampleImage',
    },
    locale: locale_ru_RU,
    theme: blackTheme, // or whiteTheme
    initMenu: 'filter',
    menuBarPosition: 'bottom',
  },
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70,
  },
  theme: {
    'menu.normalIcon.color': '#8a8a8a',
    'menu.activeIcon.color': '#555555',
    'menu.disabledIcon.color': '#434343',
    'menu.hoverIcon.color': '#e9e9e9',
    'submenu.normalIcon.color': '#8a8a8a',
    'submenu.activeIcon.color': '#e9e9e9',
 },
});

module.exports=router;