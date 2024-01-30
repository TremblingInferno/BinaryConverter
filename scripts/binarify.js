findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /(?:\d{4,}|\d{1,3}(?:,\d{3})*)(?:\.\d+)?/g,
	replace: switchToBinary,
});

function switchToBinary(portion, match) {
	let bf = get_fraction(match, 8);

	let i = parseInt(match, 10);
	
	let b = i.toString(2);
	return b + bf;
}


