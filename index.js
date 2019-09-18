'use strict';
const backgroundColor = '#121221';
const red = '#ff5c47';
const green = '#3aff7b';
const yellow = '#f5ff5d';
const blue = '#40c0ff';
const magenta = '#ff56b9';
const cyan = '#7ae7fd';
const white = '#f1f1f0';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor: '#eff0ea',
	borderColor: '#222430',
	cursorColor: '#97979b',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(151, 151, 155, 0.2)',
	colors: {
		black: '#000000',
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
		lightBlack: '#686767',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: white
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}
		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: rgba(255, 106, 193, 0.4);
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`
});