const LZString = require('lz-string'),
	fs = require('fs'),
	btoa = require('btoa');

const i = btoa('Cheater :(\n\n');
const v = btoa('1.1.11');

function encode(game) {
	//console.debug('encoding imported game. len', null != game ? game.length : 0);
	game = i+LZString.compressToBase64(game);
	let out = v + '|' + game;
	//console.debug('encoded length: ' + out.length);
	return out;
}

let data = fs.readFileSync('/dev/stdin').toString();
let game = encode(JSON.stringify(JSON.parse(data)));
console.log(game);

