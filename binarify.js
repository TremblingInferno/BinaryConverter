
console.log(binaryFraction("0.091"));

function switchToBinary(portion, match) {
	let f = "."+(match+"").split(".")[1];

	let bf = binaryFraction(f);

	let i = parseInt(match, 10);
	
	let b = i.toString(2);
	return b + bf;
}

function binaryFraction(f){
	const ERR = f/10;
	if (!f){
		return "";
	}
	let arr = [];
	let seen = [];
	let i = 0;
	while (true){ 
		if (i>28){
			arr[i] = "...";
			break;
		}
		if (!f){
			break;
		}
		f *= 2;
		let apprx_id = approx_in(f, seen, ERR);
		if (apprx_id != -1) {
			let new_arr = [...arr.slice(0, apprx_id), "r", ...arr.slice(apprx_id)];
			arr = new_arr;
			break;
		}
		if (!f){
			break;
		} else if (f >= 1){
			arr[i] = 1;
			f = "."+(f+"").split(".")[1];
		} else {
			arr[i] = 0;
		}
		seen[i] = f;
		i++;
	}
	if (arr.length != 0){
		return "." + arr.join("");
	}
	return arr.join("");
}

function approx_in(f, seen, ERR){
	console.log(seen);
	for(let i = 0; i < seen.length; i++){
		if (Math.abs(f - seen[i]) < ERR) {
			return i;
		}
	}
	return -1;
}


findAndReplaceDOMText(document.body, {
	preset: 'prose',
	find: /(?:\d{4,}|\d{1,3}(?:,\d{3})*)(?:\.\d+)?/g,
	replace: switchToBinary,
});
