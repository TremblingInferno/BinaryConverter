function switchToBinary(portion, match) {
	let i = parseInt(match, 10);
	let b = i.toString(2);
	if (match[-1] == ','){
		b.push(',');
	}

	return b;
}


findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /(?:\d{4,}|\d{1,3}(?:,\d{3})*)(?:\.\d+)?/gm,
	replace: switchToBinary,
});
