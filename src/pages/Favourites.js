import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import BtnDelete from '../components/BtnDelete';
import empty from '../file/empty.png';


//Material UI components

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar } from '@material-ui/core';

const Favourites = () => {
const {favourites} = useContext(GlobalContext);

    return (
        <>
          

          {favourites.length > 0 ? (<GridList cellHeight={375} cols={3}>
        {favourites.map((pic) => (

          <GridListTile 
          style={{flexGrow:'1'}} 
          key={pic.id} 
          cols={parseInt((pic.width/1250/2).toFixed(0))}
          >
           
            <img
              alt={pic.alt_description}
              src={pic.urls.regular}
            ></img>

            
            <GridListTileBar
            actionIcon={
                <BtnDelete pic={pic} key={pic.id} type="favourites" />
            }
            />
            
          </GridListTile>



        ))}{" "}
      </GridList>):(
        <div className="container_no-photo">
          <h2 className="no-photo">No Photo in your list</h2>
          <img className="image-empty" src={empty} alt="empty"></img>
          </div>
      )}
        </>
    )
}

export default Favourites
