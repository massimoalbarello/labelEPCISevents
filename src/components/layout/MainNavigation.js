import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavouriteContext from '../../store/favourites-context';
 
function MainNavigation() {

    const favouriteCtx = useContext(FavouriteContext); 
    return (
        <header className={classes.header}>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            My Favourites
                            <br />
                            <span>
                                {favouriteCtx.totalFavourites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;