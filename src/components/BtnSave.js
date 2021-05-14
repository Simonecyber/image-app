import React, { useContext} from 'react';

import '../components/Btn.css';

//Context
import{GlobalContext} from '../context/GlobalState';

const BtnSave = ({pic}) => {
    
const {addPhotoToFavourites, favourites,} = useContext(GlobalContext);

let storedPhoto = favourites.find((o) => o.id === pic.id)

const favouritesDisable = storedPhoto ? true : false;

    return (
        <button className="btn-save" 
              disabled={favouritesDisable}
              onClick={() => addPhotoToFavourites(pic)}>{favouritesDisable ? 'Saved' : 'Save'}</button>
    )
}

export default BtnSave
