import React from "react";
import {addRowActionCreator} from "../redux/table-reducer";
import SearchComponent from "./SearchComponent";

const Header = (props) => {
    let addRow = () => {
        props.dispatch(addRowActionCreator())
    }

    return (
        <header className="App-header">
            <SearchComponent searchValue={props.tableArea.searchValue} dispatch={props.dispatch}/>
            <div>
                <button onClick={addRow}>add row</button>
            </div>
        </header>
    )
}

export default Header;