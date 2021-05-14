

const fn = (state, action) => {
    switch(action.type){
        case "ADD_PHOTO_TO_FAVOURITES":
            return{
                ...state,
                favourites: [action.payload, ...state.favourites],
            };

            case "REMOVE_PHOTO_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (pic) => pic.id !== action.payload
        ),
      };

        default:
            return state;
    }
};

export default fn;