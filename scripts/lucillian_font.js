const GROUPNUM = 4;

//idk how this works, but it detects if you have lucillian binary.ttf installed.
var Detector = function() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
};

let d = new Detector();
const usingLucillian = d.detect('Lucillian Binary')

function seperate_groups(bnum){
	if (!usingLucillian)
		return bnum;

	const GroupSep = "";
	const GroupIns = "\_";

	let b_split = bnum.split("");

	let n = [];
	let j = b_split.length;
	for (i = b_split.length - GROUPNUM; i > 0; i-=GROUPNUM){
		n.push(b_split.slice(i, j).join(GroupIns));
		j = i;
	}
	n.push(b_split.slice(0,j).join(GroupIns));

	let b_joined = n.reverse().join(GroupSep);

	return b_joined;
}

function post_radix_groups(bnum){
	if (!usingLucillian)
		return bnum;
	let bnums = bnum.split(/([10]{0,4}|r|.)/g);
	const GroupSep = "";
	const GroupIns = "\_";

	let n = [];
	for (group of bnums){
		n.push(group.split("").join(GroupIns));
	}

	let b_joined = n.join(GroupSep);
	return b_joined;

}







