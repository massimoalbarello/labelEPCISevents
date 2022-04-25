import { useContext } from 'react';

import Card from '../ui/Card';
import FavouriteContext from '../../store/favourites-context';

function MeetupItem(props) {

    const favouriteCtx = useContext(FavouriteContext);
    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

    function toggleFavouriteStatusHandler(){
        if (itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id);
        }
        else {
            favouriteCtx.addFavourite({
                id: props.id,
                name: props.name,
                description: props.description,
                location: props.location,
                date: props.date,
                time: props.time,
                image: props.image 
            });
        }
    }

    return (
        <div key={props.id}>
            <Card>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.location}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <img src={props.image} alt={props.image} />
                <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'Add to favourites'}</button>
            </Card>
        </div>
    )
}

export default MeetupItem;