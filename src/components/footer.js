import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Footer extends Component{
    render() {
        return (
            <div style={{ width: '100 %', margin: 'auto' }} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1> 
                                Full Stack Web Developer
                            </h1>        
                            <hr />
                            <p> 
                                HTML/CSS | Bootstrap | JavaScript | Node.js | MySQL | Express | React | MongoDB | Materialize | JQuery
                            </p>
                            <p> 
                               <i className="far fa-envelope"></i>  jgcreiglow@gmail.com  | <i className="fa fa-phone-square"></i> 202-810-5325
                            </p>
                            <div className="social-links">
                                <a href="www.google.com" target="_blank">
                                    <i className="fab fa-linkedin" ></i>
                                </a>
                      
                                <a href="www.google.com" target="_blank">
                                    <i className="fab fa-github-square"></i>
                                </a>
                          
                                <a href="www.google.com" target="_blank">
                                    <i className="fab fa-free-code-camp"></i>
                                </a>
                          
                                <a href="www.google.com" target="_blank">
                                    <i className="fab fa-codepen"></i>
                                </a>     
                                </div> 
                        </div>    
                    </Cell>    
                </Grid>        
          
            </div>    
        )
    }
}

export default Footer;