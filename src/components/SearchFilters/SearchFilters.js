import React from "react";
import {getSearchFilter} from "../../redux/selectors";
import { connect } from "react-redux";
import {setSearch} from "../../redux/actions";
import "./SearchFilters.css";

const SearchFilters = ({ searchFilter, setSearch }) => {
    return (
        <div className="search-filters">
            <input
                type="text"
                placeholder="Поиск"
                value={searchFilter}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    );
};

const mapStateToProps = state => {
  const searchFilter = getSearchFilter(state);
  return { searchFilter };
};

export default connect(
    mapStateToProps, { setSearch }
)(SearchFilters);