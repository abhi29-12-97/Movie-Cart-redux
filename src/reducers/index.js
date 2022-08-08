import {combineReducers} from 'redux'

import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE} from '../actions';
const initialState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialState,action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray=state.favourites.filter(movie=>movie.Title!==action.movie.Title);
            return{
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites:action.data
            }
        default:
            return state
    }
    return state;
}
const searchInitialState={
    result:{}
}
export function search(state=searchInitialState,action){
    return state;
}
// const initialRootState={
//     movies:initialState,
//     search:searchInitialState
// };

// export function rootReducer(state=initialRootState,action){
//       return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//       }
// }

export default combineReducers({
    movies:movies,
    search:search
})