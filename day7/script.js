class movie{
    constructor (title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies){
        return movies.filter(movie => movie.rating === "PG");
    }

}
let movie0 = new movie("Casino Royale", "Eon Productions","PG-13");
let movie1 = new movie("The Matrix", "Warner Bros", "PG");
let movie2 = new movie("The Dark Knight", "Warner Bros", "PG-13");
let movie3 = new movie("Doctor Strange ", "Marvel", "PG-13");
let movie4 = new movie("Deadpool", "Marvel", "R");
let movie5 = new movie("The Incredibles", "Disney", "PG");


console.log(movie0.getPG([movie0,movie1, movie2, movie3, movie4, movie5]));