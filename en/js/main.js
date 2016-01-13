// Required: smartTables.js

var PageInner;

(function() {
    var state = document.readyState;
    if (state == "interactive" || state == "complete") {
        PageInner = document.querySelector(".page-inner");

		smartTables.register("component", "Component Overview", {
			"author": [
				"Author/maintainer",
				function(n, v) {
					
				}
			],
			"contrib": "Contributors",
			"classes": "Classes initialized",
			"desc": "Short description"
		}, function(table) {
			var header = PageInner.querySelector("h1");
			header.innerHTML = "<i class=\"fa fa-cube\"></i> Component: "+ header.innerHTML;
		});

		smartTables.register("class", "Class Information", {
			"init": "Initialized in component",
			"serial": "Can serialize value?",
			"short": "Short name",
			"lua-default": "Default value (as seen in Lua)"
		}, function(table) {
			var header = PageInner.querySelector("h1");
			header.innerHTML = "<i class=\"fa fa-tag\"></i> Class: "+ header.innerHTML;
		});

		smartTables.retrieve(PageInner);
    }
    else setTimeout(arguments.callee, 10);
})();