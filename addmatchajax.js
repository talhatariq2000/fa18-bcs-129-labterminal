$(function(){
    $("#addmatch").click(addmatch);
});



function addmatch() {
    var a = $("#teama").val();
    var b = $("#teamb").val();
    var city = $("#city").val();
    var date = $("#date").val();

    $.ajax({
        url:"http://localhost:3001/api/match/",
        method:"POST",
        data: { a, b, date, city },
        success:function(response){
            console.log(response);
        }
    });
}

