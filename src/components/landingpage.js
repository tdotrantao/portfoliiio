import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto', background: 'white'}}>
                <Grid>
                    <Cell col={12}>
                    <img 
                        src="https://lp-cms-production.imgix.net/2019-06/58966962.jpg"
                        alt="avatar"
                        className="back-img"
                    />

                    <div className="banner-text">
                            <h1> Boitumelo Rantao </h1>
                        <hr/>
                    <div className="banner-text">
                            <h3>Web Developer</h3>
                    </div>
                        <p>Contact number: +27 76 045 5837  | Email: tumz12345@gmail.com </p>
                    <hr/>
                        
                        <p>HTML/CSS | JavaScript | C# | Java | Python | React </p>
                        <div className="social-links">
                        {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/boitumelo-rantao-8526451ba/" rel="noopener noreffer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        {/* WordPress*/}
                        <a href="http://theafricanmirror.africa" rel="noopener noreffer" target="_blank">
                            <i className="fa fa-wordpress" aria-hidden="true" />
                        </a>
                        {/* Github*/}
                        <a href="https://github.com/tdotrantao" rel="noopener noreffer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        </div>
                    </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}

export default Landing;