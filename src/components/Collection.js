import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Collection(props) {

    let navigate = useNavigate();

    function handleClick() {
        // console.log(props.id);
        navigate('/dashboard', { state: { id: props.id } });
    }

    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClick}>{props.label}</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Collection;