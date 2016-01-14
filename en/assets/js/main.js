// Required: smartTables.js
// Required: CGHAPI.js

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
			"author": ["Author/maintainers", function(i, oldName, nC, vC) {
				var r = nC.parentNode.parentNode.insertRow(i + 1);
				r.insertCell(0).innerText = "contrib";
				r.insertCell(1).innerHTML = "<i class=\"fa fa-lemon-o fa-spin\"></i>";
			}],
			"contrib": "Contributors",
			"classes": "Classes initialized",
			"desc": "Short description"
		}, function(table) {
			PageHeader.innerHTML = "<i class=\"fa fa-cube\"></i> Component: "+ Title;
			CGHAPI.fetchContributors("lua/expadv/components/"+ Title +".lua", function(contrib) {
				var r = table.querySelector("[data-name='contrib']");
				var v = r.cells[1];
				v.innerHTML = "";
				for (var c in contrib) {
					v.innerHTML += "<a href=\""+ contrib[c].html_url +"\" target=\"_blank\" title=\""+ c +"\"><img src=\""+ contrib[c].avatar_url +"\"></a>";
				}
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