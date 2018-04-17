import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'
class Contact extends Component {
    render() {
        return (
            <div className='content'>
                <h1>
                    Contact Me</h1>
                <div className='contact-body'>
                    <Grid className='contact-grid'>
                        <Cell col={6}>
                            <h2>
                                Jessica Creiglow
                            </h2>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{
                                height: '250px'
                            }}/>
                            <p
                                style={{
                                width: '75%',
                                margin: 'auto',
                                paddingTop: '1em'
                            }}>
                                Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely
                                cuuuuuute boof blep. Shooberino vvv long bois long woofer lotsa pats, doggo blep
                                shoob. Ruff long doggo tungg porgo adorable doggo, blop clouds heckin. dat tungg
                                tho.
                            </p>
                        </Cell>
                        <Cell col={6}>
                            <h2>
                                Contact Me
                            </h2>
                            <hr />
                            <div >
                            <List className='contact-list'>
                                <ListItem className='contact-list'>
                                        <ListItemContent style={{ fontSize: '25px', fontFamily: 'Tajawal' }}>
                                            <i className="far fa-envelope"></i>      
                                            jgcreiglow@gmail.com
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                        <ListItemContent  style={{ fontSize: '25px', fontFamily: 'Tajawal' }}>
                                            <i className="fa fa-phone-square"></i>    
                                            202.810.5325
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                        <ListItemContent style={{ fontSize: '25px', fontFamily: 'Tajawal' }}>
                                            <i className="fa fa-phone-square"></i>    
                                            Bob Odenkirk
                                        </ListItemContent>
                                </ListItem>
                                </List>
                            </div>    
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;