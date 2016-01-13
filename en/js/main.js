// Required: smartTables.js
// Required: compact_GitHub_API.js

var PageInner;
var PageHeader;

(function() {
    var state = document.readyState;
    if (state == "interactive" || state == "complete") {
        PageInner = document.querySelector(".page-inner");
		PageHeader = PageInner.querySelector("h1");

		smartTables.register("component", "Component Overview", {
			"author": [
				"Author/maintainer",
				function(n, v) {
					alert(n.innerText +": "+ v.innerText);
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
			PageHeader.innerHTML = "<i class=\"fa fa-tag\"></i> Class: "+ PageHeader.innerHTML;
		});

		smartTables.retrieve(PageInner);
		
		CGHAPI.fetchContributors("lua/expadv/components/angle.lua")
    }
    else setTimeout(arguments.callee, 10);
})();