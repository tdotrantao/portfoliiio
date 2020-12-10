import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class About extends Component {
    render () {
        return(
            <div className="resume-body">
            <Grid>
                <Cell col={4}>
                <div style={{width: '100%', margin: 'auto'}}>
                    
                </div>                
                </Cell>
                <Cell col={4}>
                    <div style={{width: '100%', margin: 'auto'}}>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{height: '220px', background: 'https://www.instagram.com/p/BOU-e7jgsJ-2dHemjTIIC0M2SyMoWXWqVg5Be40/'}} >.</CardTitle>
                                <CardText>
                                    Boitumelo is a creative, logical, confident, and versatile critical thinker. A software and web developer with a sharp-eye for designs, who is team-first and team-oriented. Not scared of a challenge whilst being aware of surroundings and prepared to learn and receive guidance throughout new ventures. Boitumelo is a mobile and licensed driver.
                                </CardText>
                                <CardActions border>
                                <Button colored>
                                    <div className="about-text">
                                        <h1></h1>
                                    </div>
                                </Button>
                                </CardActions>
                        </Card>
                    </div>
                </Cell>
                <Cell col={4}>
                    <div style={{width: '100%', margin: 'auto'}}>
        
                    </div>
                </Cell>
        </Grid>
        </div>
        )
    }
}

export default About;