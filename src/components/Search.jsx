
const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <div>
                <img src="/search.svg" alt="search icon" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
            </div>
        </div>
    )
}

export default Search
