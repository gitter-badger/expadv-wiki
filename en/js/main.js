// Required: smartTables.js
// Required: compact_GitHub_API.js

CGHAPI.repo = "Rusketh/ExpAdv2";
var PageInner;
var PageHeader;

(function() {
    var state = document.readyState;
    if (state == "interactive" || state == "complete") {
        PageInner = document.querySelector(".page-inner");
		PageHeader = PageInner.querySelector("h1");
		var Title = PageHeader.innerText.trim();

		smartTables.register("component", "Component Overview", {
			"author": "Author/maintainer",
			"classes": "Classes initialized",
			"desc": "Short description"
		}, function(table) {
			PageHeader.innerHTML = "<i class=\"fa fa-cube\"></i> Component: "+ Title;
			CGHAPI.fetchContributors("lua/expadv/components/"+ Title +".lua", function(c) {
				console.log(c);
			});
		});

		smartTables.register("class", "Class Information", {
			"init": "Initialized in component",
			"serial": "Can serialize value?",
			"short": "Short name",
			"lua-default": "Default value (as seen in Lua)"
		}, function(table) {
			PageHeader.innerHTML = "<i class=\"fa fa-tag\"></i> Class: "+ Title;
		});

		smartTables.retrieve(PageInner);
    }
    else setTimeout(arguments.callee, 10);
})();