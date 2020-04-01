import React from "react";
import {filterTableActionCreator, updateSearchValueActionCreator} from "../redux/table-reducer";
import { Button } from "@blueprintjs/core";


const SearchComponent = (props) => {
    let onSearchChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateSearchValueActionCreator(text))
    }

    let filterTable = () => {
        props.dispatch(filterTableActionCreator())
    }

    return (
        <div className="searchInput">
            <input className="pt-input" placeholder="Search..." onChange={onSearchChange} value={props.searchValue}/>
            <Button intent="success" text='Search' onClick={filterTable} />
        </div>
    )
}

export default SearchComponent;