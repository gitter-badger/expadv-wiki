/*
Compact GitHub API
Author: VINTproYKT
*/

var CGHAPI = {
	repo: "Rusketh/ExpAdv2",
	contributors: {},
	fetchContributors: function(path) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://api.github.com/repos/"+ this.repo +"/commits?path="+ path, true);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if(xmlhttp.status == 200) {
					var obj = JSON.parse(xmlhttp.responseText);
					console.log(obj);
				}
			}
		};
		xmlhttp.send(null);
	}
};