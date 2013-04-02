function send(title, artistname) {
	console.log("in here");
	$.ajax({
		type: "GET",
		url: 'http://0.0.0.0:5555/' + title + '?artist=' + artistname,
		success: function(data) {
			console.log(data);
		}
	});	

}

$(".thumbUpButton").click(function(){
	console.log("THUMBS UP!!");
});

$(".thumbDownButton").click(function() {
	console.log("THUMBS DOWN BRO");
	alert("Yea fuck that song!");
});

var title = $('.songTitle').text();
var artist = $('.artistSummary').text();

console.log(title + " " + artist);

setInterval(function() {
	checkTitle = $('.songTitle').text();
	if (title != checkTitle) {
		title = checkTitle;
		artistSummary = $('.artistSummary').text();
		send(title, artistSummary);
		console.log(title + " " + artistSummary);
	} else {
		console.log("Still playing the same song!");
	}

}, 30 * 1000);



