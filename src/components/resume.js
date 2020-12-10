import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Tab, Tabs} from 'react-mdl';


class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab:0 };
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Grid className="resume-grid">
                    <Cell col={6}>
                    <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '256px', background: 'url(http://www.rugby15.co.za/wp-content/uploads/2012/06/King-edward-vii-school-KES-logo-208x300.jpg) center / cover'}} > . </CardTitle>
                            <CardText>
                            High School - King Edward VII School<br/>
                            (Class of 2016)
                            </CardText>
                            <CardActions border>
                            <Button colored>
                                <a href="http://www.kes.co.za/latestnews/" rel="noopener noreffer" target="_blank">
                                KING EDWARD VII SCHOOL
                                </a>
                            </Button>
                            </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                        <Card shadow={5} style={{minWidth: '450',  margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '256px', background: 'url(https://vandermerwe99.github.io/cv/images/nwu-logo.jpg) center / cover'}} > . </CardTitle>
                                <CardText>
                                University NWU Business school Fundamental Management (2017)<br/>
                                Bsc IT (2018-)
                                </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="http://nwu.ac.za" rel="noopener noreffer" target="_blank">
                                    'North West University'
                                    </a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        }else if (this.state.activeTab === 1){
            return(
                <Grid className="skills-grid">
                    <Cell col={12}>
                    <Card shadow={0} style={{width: '512px', height: '400px', background: '#3E4EB8'}}>
                        <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
                        <h4 style={{marginTop: '0'}}>
                          <ul>
                            <li>5 years computer programming experience (Java; C#; Python; HTML/CSS; JS; React)</li>
                            <li>Technical drawing</li>
                            <li>Data structures and algorithms</li>
                            <li>Project Management</li>
                            <li>SQL</li>
                            <li>Published Sportswriter</li>
                            <li>Competed in high-level sports; appreciate the value of hard work</li>
                            <li>Social media marketing</li>
                            <li>Attention to detail</li>
                          </ul> 
                        </h4>
                        </CardTitle>
                        <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                        <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                            <div className="mdl-layout-spacer"></div>
                        </CardActions>
                    </Card>
                    </Cell>
                </Grid>
                )
            }
        }
    
    render () {
        return(
            <div className="resume-body">
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab width='50%'>Education</Tab>
                        <Tab width='50%'>Skills</Tab>
                    </Tabs>
                    <section className="project-grid">
                        <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                    </section>
                </div>    
            </div>
        )
    }
}

export default Resume;