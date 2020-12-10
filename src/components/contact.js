import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render () {
        return(
            
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Boitumelo Rantao</h2>
                        <img 
                            src="https://i.pinimg.com/originals/66/cc/d4/66ccd490902fa2162d6d84b90090b9a6.jpg"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '5en'}}>Appreciate the journey</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px',fontFamily: 'Noto Sans JP'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    076 045 5837
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px',fontFamily: 'Noto Sans JP'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    tumz12345@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;