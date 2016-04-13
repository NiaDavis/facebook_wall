$(document).ready(function()
{
	$('#message').focus();

	$("button").click(function(){
		var postMessage = $("#message").val();
		$("#wall").prepend("<div><img src='http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg' width='100'/>"+postMessage+"</div>");
	});

	
	// YOUR CODE GOES HERE
});
