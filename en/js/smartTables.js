var smartTables = {
	templates: {},
	callbacks: {},
	register: function(tplName, tplTitle, tplMrg, cb) {
		this.templates[tplName] = this.templates[tplName] || {};
		this.templates[tplName]["TableTitle"] = tplTitle;
		for (var nameMrg in tplMrg) { this.templates[tplName][nameMrg] = tplMrg[nameMrg]; }
		if (cb) this.callbacks[tplName] = cb;
	},
	readAndReplace: function(tBody, tpl) {
		var vars = {};
		var rows = tBody.rows
		for (var i = 0; i < rows.length; i++) {
			var r = rows[i].cells;
			var name = r[0].innerText.trim();
			var val = r[1].innerText.trim();
			var valLower = val.toLowerCase();

			if (valLower == "no") {
				vars[name] = false;
				r[1].innerHTML = "<i class=\"fa fa-times\"></i>";
			}
			else if (valLower == "yes") {
				vars[name] = true;
				r[1].innerHTML = "<i class=\"fa fa-check\"></i>";
			}
			else if (!isNaN(val)) {
				vars[name] = +val;
				r[1].innerText = vars[name].toString();
			}
			else vars[name] = val;

			var tplVar = tpl[name];
			if (typeof tplVar == "string") r[0].innerText = tplVar;
			else if (typeof tplVar == "array") {
				r[0].innerText = tplVar[0];
				tplVar[1](r[0], r[1]);
			}
		}
		return vars;
	},
	retrieve: function(parent) {
	    if (!this.templates) return;
		var data = {};
		var tables = parent.querySelectorAll("table");
		for (var i = 0; i < tables.length; i++) {
			var table = tables[i];
			if (table.tHead && !table.tHead.rows[0].cells[1] ) {
				var name = table.tHead.rows[0].cells[0].innerText;
				var tpl = this.templates[name];
				if (tpl) {
					table.tHead.rows[0].cells[0].innerText = tpl.TableTitle || name
					data[name] = this.readAndReplace(table.querySelector("tbody"), tpl);
				}
				if (this.callbacks[name]) this.callbacks[name](table);
			}
		}
		return data;
	}
};