

// {
//     type:'ADD_MOVIES';
//     movies:[m1,m2,m3]
// }
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE';
export function addMovies(data){
    
        return{
            type:'ADD_MOVIES',
            movies:data
          }      
}
export function addFavourite(data){
    return{
        type:'ADD_FAVOURITE',
        movie:data
      }      
}
export function removeFavourite(data){
    return{
        type:'REMOVE_FAVOURITE',
        movie:data
      }      
}
export function setShowFavourite(data){
    return{
        type:'SET_SHOW_FAVOURITE',
        data
    }      
}
