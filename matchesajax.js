$(function(){
    loadmatches();
});


function loadmatches() {
    $.ajax({
        url:"http://localhost:3001/api/match/",
        method:"GET",
        success:function(response){
            console.log(response);
            var matches = $("#matches");
            matches.empty();
            for(var i=0;i<response.length;i++)
            {
                    var match = response[i];
                    matches.append(`
                        <div id="${match._id}" class="matchcontainer">
                            <div class="match">
                                <h1>Match =  ${match.a} vs ${match.b} </h1>
                                <h3>Date  =  ${match.date}</h3>
                                <h5>Venue = ${match.city}</h5>
                            </div>
                            <h1>_______________________</h1>
                        </div>
                    `);
            }
        }
    });
}