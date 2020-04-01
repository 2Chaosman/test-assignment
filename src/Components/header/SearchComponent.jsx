import React from "react";
import { Button } from "@blueprintjs/core";
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './SearchComponent.css'

const SearchComponent = (props) => {

    let onSearchChange = (event) => {
        let body = event.target.value;
        props.onSearchChange(body);
    }

    let filterTable = (event) => {
        let body = event.target.value;
        props.filterTable(body);
    }

    let addRow = () => {
        props.addRow();
    }

    return (
        <div className="searchInput">
            <span className="bp3-icon"></span>
            <input class="bp3-input" onChange={onSearchChange} value={props.searchValue}/>
            <button onClick={filterTable} class="bp3-button bp3-icon-arrow-right filterButton"></button>
            <Button icon='insert' onClick={addRow} className='addRowButton'/>
        </div>
    )
}

export default SearchComponent;
