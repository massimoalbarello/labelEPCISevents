import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import LabeledEventsContext from '../../store/labeledEvents-context';
 
function MainNavigation() {

    const labeledCtx = useContext(LabeledEventsContext); 
    return (
        <header className={classes.header}>
            <div>EPCIS events</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Events</Link>
                    </li>
                    <li>
                        <Link to='/labeledEvents'>
                            My labeled events
                            <br />
                            <span>
                                {labeledCtx.totalLabeledEvents}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/map'>Map</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;