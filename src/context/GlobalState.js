import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
//initial State

const initialState = {
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [],
}

//create Context

export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {

const [state, dispatch] = useReducer(AppReducer, initialState);

useEffect(() =>{
     localStorage.setItem('favourites', JSON.stringify(state.favourites))
}, [state])

//actions
const addPhotoToFavourites = pic =>{
    dispatch({type:"ADD_PHOTO_TO_FAVOURITES", payload: pic});
};

const removePhotoFromFavourites = (id) => {
    dispatch({ type: "REMOVE_PHOTO_FROM_FAVOURITES", payload: id });
  };

return (
    <GlobalContext.Provider 
    value={{
        favourites: state.favourites,
    addPhotoToFavourites,
    removePhotoFromFavourites}}>
        {props.children}
    </GlobalContext.Provider>
)
};

