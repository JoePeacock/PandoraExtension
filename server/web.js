var Bot = require('ttapi');
var bot = new Bot('CuCgyDUUGrQISYgJwFsMamyt', '50ccee8eaaa5cd17cf5ff810', '51696973eb35c156992c3e25');

var theUsersList = { };
var randUser = [];
var title;

var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {

  var Data = url.parse(req.url, true).query;
  res.writeHead(200, {'Content-Type': 'html'});
  var station = Data.station;
  title = Data.title;
  bot.playlistCreate(station);
  bot.searchSong(title  + ' ' + Data.artist, function(data) {
    bot.playlistAdd(station, data.docs[0]._id);
  });
  var artist = Data.artist;
  console.log(title, artist, station);
  res.end('<p>' + title + '</p><p>' + artist + '</p><p>' + station + '</p>');


}).listen(5555, '0.0.0.0');

console.log('Server running at http://0.0.0.0:5555/');

bot.on('roomChanged', function (data) {
  // Reset the users list
  theUsersList = { };

  var users = data.users;
  for (var i=0; i<users.length; i++) {
    var user = users[i];
    randUser.push(user.name);
    theUsersList[user.userid] = user;
  }  
});

bot.on('registered', function (data) {
  console.log("Started TTAPI");
  bot.addDj();
  var user = data.user[0];
  theUsersList[user.userid] = user;
});

bot.on('deregistered', function (data) {
  var user = data.user[0];
  delete theUsersList[user.userid];
});

bot.on('speak', function (data) {
  if (data.text.match(/^\/ohyeah$/)) {
    randNum = Math.floor((Math.random()*randUser.length)+1);
  user = randUser[randNum];
  bot.getUserId(user, function(data) { 
    bot.bootUser(data.userid, "Testing Random Kick! I extremely apologize if you're kicked!");
  });
  }
});



