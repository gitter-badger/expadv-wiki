var CGHAPI = {
    fetchContributors: function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', '//example.org', true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    var obj = JSON.parse(xmlhttp.responseText);
                    var countryList = obj.countrylist;
                 }
            }
    };
    xmlhttp.send(null);
    }
}