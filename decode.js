const LZString = require('lz-string'),
	fs = require('fs'),
	btoa = require('btoa');

const i = btoa('Cheater :(\n\n');

function splitVersionHeader(game) {
	return game.split('|');
}

function decode(game) {
	game = game.replace(/\s+/g, '');
	//console.debug('decoding imported game. len', null != game ? game.length : 0);
	let g = splitVersionHeader(game);
	game = g[1];
	game = game.substring(i.length);
	game = LZString.decompressFromBase64(game);
	//console.debug('decompressed game: ', game.length);
	return JSON.parse(game);
}

let data = fs.readFileSync('/dev/stdin').toString();
let game = decode(data);
console.log(JSON.stringify(game, 0, 1));
