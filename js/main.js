$(document).ready(function() { 
    if(document.URL.split('?').length > 1)  { 
        var params = getAllParams();
        displayParams(params);
    }
});

function getAllParams() { 
    var params = [];
    var url = document.URL.split('?')[1].split("=");
    var searchParams = new URLSearchParams(window.location.search);
   
    // get name all params
    for(i=0; i < url.length; i++) { 
        if(i == 0)
        params.push(url[0]);
        else { 
            if(url[i].split("&").length > 1) { 
                params.push(url[i].split("&")[1]);
            }
        }
    }

    // set params { name : value }
    var getAllParams = [];
    for(i=0; i < params.length; i++) { 
        getAllParams.push({
            name: params[i],
            value: searchParams.get(params[i])
        })
    }

    return getAllParams;
}

function displayParams(params) { 
    // display params in div
    $("#result").append("<h3>Params</h3>");
    $.each(params, function(idx, obj ) {
        var html = `<p>${obj.name} : ${obj.value}</p>`;
        $("#result").append(html);
    });
}