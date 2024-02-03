function get_fraction(f, ERR) {
	if(f == undefined){
		return "";
	}
	// get only left side of decimal point
	let fr = (f+"").split(".")[1];
	if (fr == undefined){
		return "";
	}
	let num = parseInt(fr);
	if (isNaN(num)){
		return "";
	}
	let den = Math.pow(10, fr.length);

	let left_pos = 0;
	let right_pos = 0;
	arr = [];
	seen = {};
	let diff = num.toString(2).split("");

	let i = 0;
	//go through numerator until diff is 0, or diff is in seen
	while (diff != 0) {
		if (i > ERR){
			return "." + arr.join("") + "...";
		}
		i++;

		set_r_place(seen, diff, left_pos, ERR)

		// add enough zeros to do subtraction
		while (parseInt(diff.join(""), 2) < den){
			diff.push("0");
			right_pos++;
		}

		diff = (parseInt(diff.join(""), 2) - den).toString(2).split("");


		// move left_pos to right_pos, while filling in the array
		while (left_pos < right_pos - 1){
			arr[left_pos] = 0;
			left_pos++;
		}
		arr[left_pos] = 1;
		left_pos++;

		let r_place = get_r_place(seen, diff, ERR);
		if (r_place != -1){
			arr = [...arr.slice(0, r_place), "r", ...arr.slice(r_place)]
			break;
		}
	}
	return "." + arr.join("");
}

function get_r_place(map, val, err){
	let new_val = round_off_err(val, err);
	let i = 0;
	while (new_val.slice(-1) == "0"){
		i++;
		new_val.pop();
	}
	new_val = new_val.join("");
	if (!(new_val in map)){
		return -1;
	}
	return i + map[new_val];
}

function set_r_place(map, val, i, err){
	let new_val = round_off_err(val, err);
	let j = 0;
	while (new_val.slice(-1) == "0"){
		j++;
		new_val.pop();
	}
	new_val = new_val.join("");
	map[new_val] = i - j;
}

function round_off_err(val, err){
	new_val = val.slice();
	for (let i = err; i < new_val.length; i++){
		new_val[i] = "0";
	}
	return new_val;
}

