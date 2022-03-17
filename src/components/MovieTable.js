
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};


function MovieTable({ movies }) {
    let num = getRandomInt(21);
    var link = "https://www.imdb.com/title/"
    let imdb = movies[num].imdbLink
    let final = link + imdb
    return (
        <table id="movies">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Language</th>
                    <th>IMDB Link</th>
                </tr>
            </thead>
            <tbody>
                <td>{movies[num].title}</td>
                <td>{movies[num].language}</td>
                <td><a href={final}>Link</a></td>
            </tbody>
        </table>
    );
}


export default MovieTable;
