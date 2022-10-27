import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


const Wrap = styled('div')({
    borderBottom: "1px solid black",
});

export const Card = () => {
    return (
        <Wrap>
            <Grid container>
                <Grid xs={4} item>
                    <img src="" alt="" />
                </Grid>
                <Grid item xs direction="column">
                    <p>title</p>
                    <p>date</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis totam cumque veritatis minima tempore eum tempora reprehenderit possimus et. Sunt odit beatae numquam corporis veritatis, provident cupiditate sapiente voluptate!</p>
                </Grid>
            </Grid>
        </Wrap>
    );
};