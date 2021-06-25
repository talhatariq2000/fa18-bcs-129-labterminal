$(function(){
    loadteams();
});


function loadteams() {
    $.ajax({
        url:"http://localhost:3001/api/teams/",
        method:"GET",
        success:function(response){
            console.log(response);
            var teams = $("#teams");
            teams.empty();
            for(var i=0;i<response.length;i++)
            {
                    var team = response[i];
                    teams.append(`
                        <button id="${team._id}">${team.name}</button>
                    `);
            }
        }
    });
}

