$(document).ready(function () {

    /* Update all the parameters for the API test*/
    var params = {
        key: 'mzjLtladPkAFANEEharRcAvY1h4ev9vo',
        tagged: 'html',
        site: 'mapquest',
        order: 'desc',
        sort: 'creation',
        maxMatches: 10
    };

    // on clicking the Go button, search the map quest API
    $("#search-button").click(function () {
        // make ajax call
        var result = $.ajax({

                url: "http://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=4&origin=" + pos.lat + "," + pos.lng,
                type: "GET"
            })
            /* if the call is successful (status 200 OK) show results */
            .done(function (result) {
                console.log(pos);
                console.log(result.searchResults);
                // get the search list from html
                var searchList = $('#search-details');
                // remove all prev. elements from search list
                searchList.empty();
                // getting all search resuts
                var searchResults = result.searchResults;
                // for each result we get
                searchResults.forEach(function (place) {
                    console.log(place.name);
                    // create new html elements
                    var el = $("<li>");
                    // set the element text to be the result name
                    $(el).text(place.name);
                    // applied the result to the search list
                    searchList.append(el);

                });
            })



        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    });
    /*function geocode(place, callback) {
        var url = 'http://open.mapquestapi.com/search?format=json&q=' + encodeURIComponent(place);
        // requires jquery for ajax
        jQuery.getJSON(url, function(data) {
            if (data.length > 0) {
                callback(null, { lon: parseFloat(data[0].lon), lat: parseFloat(data[0].lat) })
            } else {
                callback(null, null)
            }
        });*/
});
