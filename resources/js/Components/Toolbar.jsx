import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Toolbar({ onQueryChange, query, onCreate }) {
    return (
        <div className="pb-6 flex gap-3 flex-wrap">
            <div className="bg-gray flex items-center px-3 rounded-lg shadow-md focus-within:ring-primary-400 focus-within:ring-2">
                <FontAwesomeIcon
                    className="text-base text-lightblue"
                    icon={faSearch}
                />
                {/* TODO: implement debouncing for queries */}
                <input
                    onChange={(event) => onQueryChange(event.target.value)}
                    value={query}
                    id="search"
                    placeholder="Filter civilizations"
                    type="text"
                    className="bg-transparent text-tan border-none ring-none focus:border-none outline-none focus-within:ring-transparent "
                />
            </div>
            <button
                onClick={onCreate}
                className="bg-green text-tan focus:outline-none focus:ring-primary-400 focus:ring-2 px-2 py-1 flex gap-2 items-center rounded-lg group/button font-bold uppercase hover:bg-green-400"
            >
                <FontAwesomeIcon
                    className="text-base group-hover/button:scale-[1.1]"
                    icon={faPlus}
                />
                Create
            </button>
        </div>
    );
}

export default Toolbar;
