import MovieTable from '../components/MovieTable';

function MoviePage({ movies }) {
    return (
        <>
        <article className="App-article">
            <h2>Random film or short film for you to enjoy!</h2>
            <MovieTable movies={movies} />       
        </article>
        </>
    );
}

export default MoviePage;