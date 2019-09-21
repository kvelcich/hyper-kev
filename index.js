'use strict';


const white = '#f8f8f2'
const lightWhite = '#fafaf6'
const gray = '#9e9e9a'
const black = '#21211d'
const lightBlack = '#61615d'

const red = '#eb5160'
const lightRed = '#f0808b'
const green = '#34f6f2'
const lightGreen = '#90faf7'
const yellow = '#ffeb70'
const lightYellow = '#fff097'
const blue = '#48beff'
const lightBlue = '#79cfff'
const magenta = '#ec91d8'
const lightMagenta = '#f1afe2'
const cyan = '#b3c2f2'
const lightCyan = '#c7d2f5'

const foregroundColor = white;
const backgroundColor = '#121221'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: lightBlack,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    },
	css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}
			.tab_active:before {
				border-color: rgb(68, 71, 90);
			}
		`
  })
}