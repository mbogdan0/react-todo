import React from "react";
import {getSearchFilter} from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import {setSearch} from "../../redux/actions";

import "./SearchFilters.css";

const SearchFilters = () => {

    const searchFilter = useSelector(getSearchFilter);
    const dispatch = useDispatch();

    const handleChangeFilter = (e) => dispatch(setSearch(e.target.value));

    return (
        <div className="search-filters">
            <input
                type="text"
                placeholder="Поиск"
                defaultValue={searchFilter}
                onChange={handleChangeFilter}
            />
        </div>
    );
};

export default SearchFilters;
