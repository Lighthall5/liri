const omdbKey = "3dd0ae5c";
const movieName = process.argv[2];
const commandParam = process.argv[3];
function movieThis(movieName){

	console.log(movieName);

	request("http://www.omdbapi.com/?i=tt3896198&apikey=3dd0ae5c" + omdbKey + "&?t" + movieName, function(error, response, body) {

		switch(command){
			case 'movie-this':
		if(commandParam === undefined){
			commandParam = console.log("undefined movie please try again <3!");
		}    
	}
  	if (!error && response.statusCode === 200) {

	    const movieID =  JSON.parse(body).results[0].id;

	    const queryURL = "https://api.themoviedb.org/3/movie/" + movieName+ "?api_key=" + omdbKey + "&append_to_response=credits,releases";

	    request(queryURL, function(error, response, body) {
	    	const movieObj = JSON.parse(body);

	    	console.log("--------Title-----------");
	    	console.log(movieID.title);

	    	console.log("--------Year -----------");
	    	console.log(movieID.y);

			   
	   		console.log("--------Plot----------------");
	   		console.log(movieID.plot);
	    	
	    });


  	}else{
  		console.log(error);
  	}
	
	});
}
// i know this isnt very much but this is what im getting tuturing for next sorry TA
// got really confused and tried to block the package.json file and that took a couple hours to realize that wasnt 
// what yall wanted and the rest was documentation and trying to make the function.
// i will get better im deterined to be top of the class!!