function send(data) {
    $.ajax('http://localhost/phpjson/pandora.php', {
        type: 'POST',
        data: data,
        contentType: 'text/json',
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
		var song = {
			song: title,
			artist: artistSummary,
		};

		var songString = JSON.stringify(song);
		send(songString);

		console.log(songString);
		console.log("A new song started: " + title);
	} else {
		console.log("Still playing the same song!");
	}

}, 30 * 1000);



