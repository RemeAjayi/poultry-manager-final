

var channel_id = 406259;
var api_key = "78C0LYWLYUWVC1O9"; 

$(document).ready(function(){

setInterval(showTemp(channel_id,api_key), 10000); 
        
// turn on or off dispenser
$("#dispenser-on").click(function()
{

$.get("https://api.thingspeak.com/update?api_key=MB231RXK2FFDEOH8&field2=1", function(data, status){}); // end of dispenser function
showSpinner();
});

$("#dispenser-off").click(function()
{
$.get("https://api.thingspeak.com/update?api_key=MB231RXK2FFDEOH8&field2=0", function(data, status){}); // end of dispenser function
showSpinner();
});


}); // end of main function

function showSpinner()
{
  $("#spinner").show();
  setTimeout(function() { $("#spinner").hide(); }, 15000);
} //to account for thingspeak delay, spinner is SUPPOSED to spin longer than it takes for dispenser to come on

function showTemp(channel_id, api_key){
	$.ajax({
        	method: "GET",
            url: "http://api.thingspeak.com/channels/"+channel_id+"/feed/last.json?api_key="+api_key,
            dataType: "json",
            success: function(result){
            $("#temp-real-time").html(result.field1);//use field2 to test and be changing it
           }});
}