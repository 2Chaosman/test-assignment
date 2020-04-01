import React from "react";
import SearchComponent from "./SearchComponent";
import {connect} from "react-redux";
import {addRowActionCreator, filterTableActionCreator, updateSearchValueActionCreator} from "../../redux/table-reducer";

let mapStateToProps = (state) => {
    return {
        searchValue: state.searchValue,
        tableRow: state.tableArea.tableRow
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (text) => {
            let action = updateSearchValueActionCreator(text);
            dispatch(action)
        },
        filterTable: () => {dispatch(filterTableActionCreator())},
        addRow: () => {dispatch(addRowActionCreator())}
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(SearchComponent)

export default Header;