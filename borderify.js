
function switchToBinary(match) {
	console.log(match);
	let i = parseInt(match, 10);
	let b = i.toString(2);

	return b;
}

function replaceInText(element) {
	for (let node of element.childNodes) {
		switch (node.nodeType) {
			case Node.ELEMENT_NODE:
				replaceInText(node);
				break;
			case Node.TEXT_NODE:
				node.textContent = node.textContent.replace(/\d+/g, switchToBinary);
				break;
			case Node.DOCUMENT_NODE:
				replaceInText(node);
		}
	}
}

replaceInText(document.body);

