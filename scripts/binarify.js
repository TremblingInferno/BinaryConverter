findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /(?:\d{4,}|\d{1,3}(?:,\d{3})*)(?:\.\d+)?/g, 
	wrap: 'span',
	wrapClass: 'binary',
});
findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /(?:\d{4,}|\d{1,3}(?:,\d{3})*)(?:\.\d+)?/g,
	replace: switchToBinary,
});


function switchToBinary(portion, match) {
	if (parseFloat(match) == 0 || isNaN(parseFloat(match))){
		console.log(match);
		return seperate_groups(match[0]);
	}
	let bf = get_fraction(match, 8);

	let i = parseInt(match, 10);
	
	let b = i.toString(2);
	b = seperate_groups(b);

	let val = b + bf;
	return val;
}

