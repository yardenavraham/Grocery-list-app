import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Item from '../item/Item';
import { Grid, Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import useStyles from "./styles";


function GroceriesComp() {

    const storeData = useSelector(state => state);
    const dispatch = useDispatch();

    const apiRoot = "http://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    const classes = useStyles();

    const [item, setItem] = useState({ id: 0, name: '', img: '' });

    const addItem = () => {

        axios.get(`${apiRoot}/search/photos?query=${item.name}&client_id=${accessKey}`)
            .then(res => {
                setItem({ ...item, img: res.data.results[0].urls.regular })
                dispatch({ type: "ADD", payload: { ...item, ["img"]: res.data.results[0].urls.regular } })
            });
    }

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            addItem()
        }
    }

    return (
        <div>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Typography className={classes.Title} component="div" variant="h4">
                    Grocery list
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    <TextField onChange={e => setItem({ ...item, id: storeData.items.length, name: e.target.value })} onKeyPress={handleKeyPress}
                        id="outlined" label="Add item">
                    </TextField>

                    <Button onClick={addItem} variant="contained">ADD</Button>
                </Box>
                <ul>
                    {
                        storeData.items?.map((x, index) => {
                            return <Item key={index} id={x.id} name={x.name} img={x.img}></Item>
                        })
                    }
                </ul>
            </Grid>
        </div>
    );
}

export default GroceriesComp;

