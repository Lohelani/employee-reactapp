import "../Table/Table.js"

function TableData (event) {
    return ( 
        <ul className="list-group-search-results">
            {event.results.map(results => (
                <li key={results} className="list-group-item">
                </li>
            ))}
        </ul>
    )
}

export default TableData;