/*
Compact GitHub API
Author: VINTproYKT
*/

var CGHAPI = {
	contributors: {},
	fetchContributors: function(path) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://api.github.com/repos/"+ this.repo +"/commits?path="+ path, true);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if (xmlhttp.status == 200) {
					this.contributors[path] = [];
					var comm = JSON.parse(xmlhttp.responseText);
					for (var i = 0; i < comm.length; i++) {
						var author = comm[i].author;
						if (this.contributors[path].indexOf(author) == -1) this.contributors[path].push(author);
					}
					this.contributors[path].sort(function(a, b) {
						if (b.login > a.login) return 1;
						else return -1;
					});
				}
			}
		};
		xmlhttp.send(null);
	}
};