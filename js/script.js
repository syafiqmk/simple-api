const apiKey = "b411689"

function getMovie(search) {
    $.ajax({
        "url": "http://www.omdbapi.com/",
        "method": "GET",
        "data": {
            "apikey": apiKey,
            "s": search
        },
        "success": function(results) {
            $("#search").html("Results for : " + search);
            $.each(results.Search, function(i, val) {
                
                $("#movie-row").append(`
                    <div class="col-md-4 mb-3">
                        <div class="card">
                        <img src="`+ val.Poster +`" class="img-fluid">
                            <div class="card-body">
                                <h5>`+ val.Title +`</h5>
                                <p>`+ val.Year +`</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                `);
            })
        }

    })
}

$("document").ready(function() {
    $("#search-button").on("click", function(){
        $("#search").html('');
        $("#movie-row").html('');
        let search = $("#search-input").val();
        getMovie(search);
        // console.log(search);
    });

    $("#search-input").on("keyup", function(e) {
        if(e.which === 13) {
            e.preventDefault();
            $("#search").html('');
            $("#movie-row").html('');
            let search = $("#search-input").val();
            getMovie(search);
        }
    });
})