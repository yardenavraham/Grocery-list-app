import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Button, Card, CardMedia, CardContent, CardActions, Typography, Stack , Box} from '@mui/material';

function ItemComponent(props) {

    const dispatch = useDispatch();

    return (
            <Card sx={{ display: 'flex', margin: "0.5rem", padding: "0.5rem", border: 1, borderColor: "gray"}}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, height: 120}}
                    image={props.img}
                    alt="unsplash img"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {props.name}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Button onClick={() => dispatch({ type: "DELETE", payload: props.id })} variant="contained">Delete</Button>
                    </Box>
                </Box>

            </Card>
    );
}

export default ItemComponent;
