var net = require("net");
var port = 2001;

var answers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
];

var server = net.createServer(function(connection){
    console.log("Hey we're connected");
    connection.on("data", function(clientData){

    	connection.write(answers[Math.floor(Math.random()* answers.length)])
    })
});


server.listen(port, function(){
	console.log("connected!");
});