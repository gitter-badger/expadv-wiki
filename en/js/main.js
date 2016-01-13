// Required: smartTables.js

var Page = document.querySelector(".page-inner");

smartTables.register("class", {
	"TableTitle": "Class Information",
	"init": "Initialized in component",
	"serial": "Can serialize value?",
	"short": "Short name",
	"lua-default": "Default value (as seen in Lua)"
});
smartTables.registerDelegate("class", function(table) {
	var header = Page.querySelector("h1");
	header.innerHTML = "<i class=\"fa fa-tag\"></i> Class: "+ header.innerHTML;
});

smartTables.retrieve(Page);