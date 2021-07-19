import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    buttonPrimary: {
        cursor: 'pointer',
        color: theme.palette.primary.main,
        margin: '0 5px',
        height: '1.5rem',
    },
    buttonSecondary: {
        cursor: 'pointer',
        color: theme.palette.secondary.main,
        margin: '0 5px'
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
        width: '25%'
    }
}));

export function Product({product}) {
    const classes = useStyles();

    return (
        <Card style={{width: "33%", margin: "0 auto"}}>
            <CardHeader title={product.nombre} />
            <CardMedia
                className={classes.media}
                title={product.nombre}
                image={product.foto}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {product.descripcion}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className={classes.row} >
                    <p>$ {product.precio}</p>
                    <div className={classes.buttonContainer}>
                        <RemoveCircleIcon onClick={() => {alert('sacar producato')}} className={classes.buttonSecondary}/>
                        <AddCircleIcon onClick={() => {alert('agregar producato')}} className={classes.buttonPrimary}/>
                    </div>
                </div>
            </CardActions>   
        </Card>
    )
}
