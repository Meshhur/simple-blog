import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import moment from 'moment/moment';
import "./Card.css";

const Wrap = styled('div')({
    borderBottom: "1px solid black",
});

export const Card = ({...props}) => {
    return (
        <Wrap>
            <Grid container>
                <Grid className='img' xs={4} item>
                    <img className='card-img' src={props.image} alt="error" />
                </Grid>
                <Grid item xs direction="column">
                    <h3>{props.title}</h3>
                    <p>Post №{props.id}</p>
                    <p>{moment(props.date).format('DD.MM.YYYY | dddd | hh:mm:ss')}</p>
                    <p>{props.text}</p>
                </Grid>
            </Grid>
        </Wrap>
    );
};