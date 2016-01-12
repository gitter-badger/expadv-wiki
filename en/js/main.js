function smartTable(tBody, nameRepl) {
	var data = {};
	var rows = tBody.rows;
	for (var i = 0; i < rows.length; i++) {
		var r = rows[i].cells;
		var name = r[0].innerText.trim();
		var val = r[1].innerText.trim();
		var valLower = val.toLowerCase();
		if (valLower == "no") data[name] = false;
		else if (valLower == "yes") data[name] = true;
		else if (!isNaN(val)) data[name] = +val;
		else data[name] = val;
		r[0].innerText = nameRepl[name] || name;
	}
	return data;
}

document.addEventListener("DOMContentLoaded", function() {
	var filePath = gitbook.state.filepath;
	var classFinder;
	var classInfo;
	var classInfoRepl = {
		"init": "Initialized in component",
		"serial": "Can serialize value?",
		"short": "Short name",
		"lua-default": "Default value (as seen in Lua)"
	};

	classFinder = /^classes\/(.+)\/README\.md$/.exec(filePath);

	if (classFinder) {
		var header = document.querySelector(".page-inner h1");
		header.innerHTML = "Class: "+ header.innerHTML;
		
		var tables = document.querySelectorAll(".page-inner table");
		for (var i = 0; i < tables.length; i++) {
			var table = tables[i];
			if (table.tHead) {
				var name = table.tHead.rows[0].cells[0].innerHTML;
				if (name == "info") {
					classInfo = smartTable(table.querySelector("tbody"), classInfoRepl);
					console.log(classInfo);
				}
			}
		}
	}
});