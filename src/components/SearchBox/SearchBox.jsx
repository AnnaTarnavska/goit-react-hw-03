import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({filter, setFilter}) => {
    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            <label className={s.searchBox}>
                <span className={s.inputName}>Find contacts by name</span>
                <input className={s.searchInput} name="searchField" type="text" value={filter} onChange={handleChange} />
            </label>
        </div>
    );
};

export default SearchBox;