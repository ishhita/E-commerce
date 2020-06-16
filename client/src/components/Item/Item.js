import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";
const useStyles = makeStyles({
    root: {
        width: "35%",
        marginTop: "10%"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
function SimpleCard() {
    const classes = useStyles();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ y: -60, opacity: 1 }} transition={{ duration: 1 }}>
            <Card className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        {/* {this.props.name} */}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
          <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </motion.div>

    );
}

export default SimpleCard;