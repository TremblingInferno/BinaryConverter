function switchToBinary(portion, match) {
	let i = parseInt(match, 10);
	let b = i.toString(2);

	return b;
}


findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /\d+/g,
	replace: switchToBinary,
});
