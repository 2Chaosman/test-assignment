import React from "react";
import TableElement from "./TableElement";
import store from '../redux/store'


const TableArea = () => {
    let state = store.getState().tableArea;

    let tableElement = state.tableRow.map(el => <TableElement content={el.content}/>)

    return (
        <div>
            <table>
                {tableElement}
            </table>
        </div>
    )
}

export default TableArea;