function compare(a, b) {
	if (a < b) return -1;
	if (b > a) return 1;
	return 0;
}

function by_name(a, b) {
	item1 = a.firstChild.nextSibling.textContent;
	item2 = b.firstChild.nextSibling.textContent;
	return compare(item1, item2);
}

function by_model(a, b) {
	item1 = a.children[1].children[0].children[0].children[1].textContent
	item2 = b.children[1].children[0].children[0].children[1].textContent
	return compare(item1, item2);
}

function by_owner(a, b) {
	item1 = a.children[1].children[0].children[0].children[0].textContent
	item2 = b.children[1].children[0].children[0].children[0].textContent
	return compare(item1, item2);
}

function by_status(a, b) {
	function convert(i) {
		if (i.includes('finished.svg')) return 1;
		if (i.includes('running.svg')) return 2;
		if (i.includes('stopped.svg')) return 3;
		if (i.includes('converting.svg')) return 4;
	}
	item1 = a.children[0].children[0].src
	item2 = b.children[0].children[0].src
	return compare(convert(item1), convert(item2))
}

function sort_models(by_what) {
	by_what = by_what.value
	var parent = document.getElementById('all_models');
	var toSort = parent.children;
	toSort = Array.prototype.slice.call(toSort, 0);
	
	if (by_what == 'name') { toSort.sort(by_name); }
	if (by_what == 'model') { toSort.sort(by_model); }
	if (by_what == 'owner') { toSort.sort(by_owner); }
	if (by_what == 'status') { toSort.sort(by_status); }


	parent.innerHTML = "";
	for(var i = 0, l = toSort.length; i < l; i++) {
		parent.appendChild(toSort[i]);
	}
}