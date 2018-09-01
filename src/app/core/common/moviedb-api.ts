const path = 'https://api.themoviedb.org/3'
export const MDB = {
    actors_path: path + '/person',
    movie_path: path + '/movie',
    movies_genre: path + '/discover/movie',
    genres: path + '/genre/movie/list',

    actor: (actorId: number): string => {
        return path + `/person/${actorId}`
    },

    movie: (movieId: number): string => {
        return path + `/movie/${movieId}`
    },
    movieCredits: (movieId: number): string => {
        return path + `/movie/${movieId}/credits`
    },
    together: (actor1: number, actor2: number): string => {
        return `/discover/movie?with_people=${actor1},${actor2}&sort_by=vote_average.desc`
    }

}