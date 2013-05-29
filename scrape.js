function send(title, artistname, station) {
	$.ajax({
		type: "GET",
		dataType: 'jsonp',
		url: 'http://buffalohackers.com/addSong/?title=' + title + '&artist=' + artistname + '&station=' + station,
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
	station = $('.stationChangeSelector .textWithArrow div').text();
	if (title != checkTitle) {
		title = checkTitle;
		artistSummary = $('.artistSummary').text();
		send(title, artistSummary, station);
		console.log(title + " " + artistSummary + ' ' + station);
	} else {
		console.log("Still playing the same song!");
	}

}, 2 * 1000);



