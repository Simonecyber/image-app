import React, {useState,} from 'react';
import '../App.css';
import BtnSave from '../components/BtnSave';
import image from '../file/image.png'



//Material UI components

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar } from '@material-ui/core';


//api call
import Unsplash, { toJson } from "unsplash-js";



const Addimg = () => {

  //State
    const [query, setQuery]= useState("");
    const [pics, setPics] = useState([]);
    //console.log(query);

    


    //SearchPhoto
    const unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
    });

    const searchPhotos = async (e) => {
      e.preventDefault();
  
      unsplash.search
        .photos(query, "", 30)
        .then(toJson)
        .then((json) => {
           
          setPics(json.results);
        });
  
    };

    return (

<>
      <form className="input-wrapper" onSubmit={searchPhotos}>
        
        <input
          type="text"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
{pics.length > 0 ? (
      <GridList cellHeight={375} cols={3}>
        {pics.map((pic) => (

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
              <BtnSave pic={pic} />
            }
            />
            
          </GridListTile>



        ))}{" "}
      </GridList>
      ) : (
        <div className="container_no-photo">
          <h2 className="no-photo">Find your next favorites images!</h2>
          <img className="image-empty" src={image} alt="empty"></img>
        </div>
      )}
    </>
          
    )
    
}

export default Addimg;
