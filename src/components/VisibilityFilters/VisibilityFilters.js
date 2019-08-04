import React from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { VISIBILITY_FILTERS } from "../../constants";
import {getVisibilityFilter} from "../../redux/selectors";
import {setFilter} from "../../redux/actions";

import "./VisibilityFilters.css";

const VisibilityFilters = () => {

    const activeFilter = useSelector(getVisibilityFilter);
    const dispatch = useDispatch();

    const filterList = Object.keys(VISIBILITY_FILTERS).map(item => {
        const filter = VISIBILITY_FILTERS[item];

        const handleClick = () => dispatch(setFilter(filter));

        return (
            <span
                key={filter}
                className={cx(
                    "filter",
                    filter === activeFilter && "filter-active"
                )}
                onClick={handleClick}
            >
                {filter}
            </span>
        );
    });

    return (
        <div className="visibility-filters">
            {filterList}
        </div>
    );
};

export default VisibilityFilters;
