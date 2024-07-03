// Creating movie constructor and default rating to PG
class Movie{
  constructor(title, studio, rating = "PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(arr){
    var res = [];
    for(var i = 0; i < arr.length; i++){
      var movieRating = arr[i].rating;
      if(movieRating == "PG"){
        res.push(arr[i]);
      }
    }
    return res;
  }
}

// c) Sample array of movie instances
var films = [new Movie("Master","7Screen","PG"),new Movie("Bigil","AGS","U"),new Movie("Sarkar","Sun pictures","PG")];
var dummy = new Movie("_","_");
var ans = dummy.getPG(films);
for(var i = 0; i < ans.length; i++){
  console.log(ans[i]);
}
/* Movie {title: 'Sarkar', studio: 'Sun pictures', rating: 'PG'}
   Movie {title: 'Master', studio: '7Screen', rating: 'PG'}
*/


// d) Creating a movie instance
var film1 = new Movie("Casino Royale", "EON Productions", "PG13");



