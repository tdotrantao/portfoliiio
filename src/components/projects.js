import React, { Component } from 'react'
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://theafricanmirror.africa/wp-content/uploads/2020/06/AfricanMirror_MastHead_350x120.png) center / cover'}} > . </CardTitle>
                    <CardText>
                        The African Mirror - News Content Manangement System (CMS)       
                    </CardText>
            <CardActions border>
                    <Button colored>
                        <a href="https://theafricanmirror.africa/" rel="noopener noreffer" target="_blank">
                            theafricanmirror.africa
                        </a>
                    </Button>
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
                </CardMenu>
            </Card>
            
            ) 
    }else if (this.state.activeTab === 1 ){
        return(
            <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://tabdesigns.co.za/wp-content/uploads/2020/09/blue-circle-human-body-dancer-mural-tamron-172059-pxhere.com_-768x634.jpg) center / cover'}} > . </CardTitle>
                    <CardText>
                        TAB Designs - Web development e-commerce site       
                    </CardText>
            <CardActions border>
                    <Button colored>
                        <a href="https://tabdesigns.co.za/" rel="noopener noreffer" target="_blank">
                            tabdesigns.co.za
                        </a>
                    </Button>
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
                </CardMenu>
            </Card>
        )
    }

    }
        
    render () {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab width='50%'>The African Mirror</Tab>
                <Tab width='50%'>TAB Designs</Tab>
            </Tabs>
            <section className="project-grid">
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </section>
        </div>)
    }
}

export default Project;