const ADD_ROW = 'ADD-ROW';
const UPDATE_SEARCH_VALUE = 'UPDATE-SEARCH-VALUE';
const SEARCH_TABLE = 'SEARCH-TABLE';

let initialState = {
    tableRow: [],
    searchValue: ''
};

window.state = initialState;

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROW:
            let date = new Date()
            date = date.toUTCString()
            let newRow = {
                content: date
            };
            state.tableRow.push(newRow);
            return state;
        case UPDATE_SEARCH_VALUE:
            state.searchValue = action.newSearchValue;
            return state;
        case SEARCH_TABLE:
            state.tableRow = state.tableRow.filter(row => row.content.includes(state.searchValue))
            return state;
        default:
            return state;
    }
}


export const addRowActionCreator = () => ({type: ADD_ROW});
export const updateSearchValueActionCreator = (text) => ({type: UPDATE_SEARCH_VALUE, newSearchValue: text})
export const filterTableActionCreator = () => ({type: SEARCH_TABLE})

export default tableReducer;