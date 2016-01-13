// Required: smartTables.js

document.addEventListener("DOMContentLoaded", function() {
	var filePath = gitbook.state.filepath;
	var classFinder;
	var classInfo;

	classFinder = /^classes\/(.+)\/README\.md$/.exec(filePath);

	var Page = document.querySelector(".page-inner");

	if (classFinder) {
		var header = Page.querySelector("h1");
		header.innerHTML = "<i class=\"fa fa-tag\"></i> Class: "+ header.innerHTML;
		smartTables.register("info", {
			"TableTitle": "Class Information",
			"init": "Initialized in component",
			"serial": "Can serialize value?",
			"short": "Short name",
			"lua-default": "Default value (as seen in Lua)"
		});
	}

	smartTables.retrieve(Page);
});