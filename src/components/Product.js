import { useState } from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    card: {
        width: "325px", 
        margin: "1.5rem auto"
    },
    buttonPrimary: {
        cursor: 'pointer',
        color: theme.palette.primary.main,
        
    },
    buttonSecondary: {
        cursor: 'pointer',
        color: theme.palette.secondary.main,
    },
    count: {
      margin: '0 0.5rem',
      width : '10%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '0.5rem',
    }
}));

export function Product({ product, handleProduct }) {
    const classes = useStyles();
    const { id, nombre, descripcion, precio, foto } = product;
    const [count, setCount] = useState(0);

    const handleCount = (handler) => {
        handler ? setCount(count + 1) : count !== 0 && setCount(count - 1) 
    }

    return (
        <Card className={classes.card}>
            <CardHeader title={nombre} />
            <CardMedia
                className={classes.media}
                title={nombre}
                image={foto}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {descripcion}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className={classes.row} >
                    <h3>$ {precio}</h3>
                    <div className={classes.buttonContainer}>
                        <IconButton 
                            aria-label="delete"
                            className={classes.buttonSecondary} 
                            onClick={() => { handleCount(false); handleProduct(id, false)} }
                        >
                            <RemoveCircleIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            aria-label="add"
                            className={classes.buttonPrimary}  
                            onClick={() => { handleCount(true); handleProduct(id, true)}}>
                            <AddCircleIcon fontSize="large" />                        
                        </IconButton>
                    </div>
                    <h1 className={classes.count}>{count}</h1>
                </div>
            </CardActions>   
        </Card>
    )
}
