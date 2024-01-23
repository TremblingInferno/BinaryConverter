function switchToBinary(portion, match) {
	let i = parseFloat(match, 10);
	let b = i.toString(2);
	return b;
}


findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /(?:\d{4,}|\d{1,3}(?:,\d{3})*)(?:\.\d+)?/g,
	replace: switchToBinary,
});
