const data = require('./data');
const resolvers = {
    Query: {
        firstPerson(root,args) {
            return data.people[0];
        },
        person(root,args) {
            const {id} = args;
            
            for (let i = 0; i < data.people.length ; i++) { 
                if (data.people[i].id == id)
                    return data.people[i];
            }
        },
        movie(root,args) {
            const {id} = args;
            
            for (let i = 0; i < data.movies.length ; i++) { 
                if (data.movies[i].id == id)
                    return data.movies[i];
            }
        }
    },
    Movie: {
        stars(movie) {
            const starIds = movie.stars;
            let stars = [];

            for (let i = 0; i < starIds.length; i++) {
                let starId = starIds[i];

                for (let j = 0; j < data.people.length; j++) {
                    if (data.people[j].id == starId) {
                        stars.push(data.people[j]);
                        break;
                    }
                }
            }

            return stars;
        }
    }, 
    Person: {
        filmography(person) {
            const filmIds = person.filmography;
            let films = [];
            for (let i=0; i < filmIds.length; i++) {
                let filmId = filmIds[i];

                for (let j=0; j < data.movies.length; j++) {
                    if (data.movies[j].id == filmId) {
                        films.push(data.movies[j]);
                        break;
                    }
                }
            }

            return films;
        }
    }
};
module.exports = resolvers;