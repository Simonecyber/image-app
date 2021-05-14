import React , {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../components/Btn.css';

const BtnDelete = ({ pic}) => {
    const {removePhotoFromFavourites} = useContext(GlobalContext);

    return (

        <button className="btn-delete" 
              onClick={() => removePhotoFromFavourites(pic.id)}>
                  <FontAwesomeIcon className="fatrashalt" icon={faTrashAlt} />
                  </button>
    )
}

export default BtnDelete
