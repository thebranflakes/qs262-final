import React from 'react';

function MovieRow({ movies }) {
    return (
        <tr>
            <td>{movies.title}</td>
            <td>{movies.language}</td>
            <td>{movies.imdbLink}</td>
        </tr>

    );
}

export default MovieRow;