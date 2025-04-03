import { useState } from "react";

const SearchBox = () => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text"  value={inputValue} onChange={handleChange}/>
            <p>{inputValue}</p>
        </div>
    );
};

export default SearchBox;