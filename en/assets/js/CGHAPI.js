/*
Compact GitHub API
Author: VINTproYKT
*/

var CGHAPI = {
	contributors: {},
	fetchContributors: function(path, cb) {
		var self = this;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://api.github.com/repos/"+ this.repo +"/commits?path="+ path, true);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if (xmlhttp.status == 200) {
					self.contributors[path] = {};
					var comm = JSON.parse(xmlhttp.responseText);
					for (var i = 0; i < comm.length; i++) {
						var author = comm[i].author;
						self.contributors[path][author.login] = author;
					}
					cb(self.contributors[path]);
				}
			}
		};
		xmlhttp.send(null);
	}
};