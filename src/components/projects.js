import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
    /* React Projects*/
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                            Clicky Game
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>    
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                            NightOut
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>   
                </div>
            )
   /* JavaSctript & JQuery Projects*/
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                           Trivia Game
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>    
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                            MaGIFicent
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>   
                </div>
            )
    /* Node.js Projects*/
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                        bamazon
                    </CardTitle>
                    <CardText>
                    Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name='share' />
                    </CardMenu> 
                </Card>    
                <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                        liri
                    </CardTitle>
                    <CardText>
                    Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name='share' />
                    </CardMenu> 
                </Card>   
                </div>
            )
    /*  MySQL Projects*/
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                            Job Tracker
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>    
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                           BurgerLogger
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>   
                </div>
            )
            /* MongoDB Projects*/
        } else if (this.state.activeTab === 4) {
            return (
                <div className="projects-grid ">
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                            NYTimes Scraper
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>    
                    <Card shadow = {5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '170px', background: 'url(http://www.positivehomeopathy.com/wp-content/uploads/2016/09/Dummy-Profile-Picture-1.jpg) center / cover' }}>
                            NightOut
                        </CardTitle>
                        <CardText>
                        Doggo ipsum smol h*ck snoot long water shoob shoober, clouds doge. extremely cuuuuuute boof blep. 
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>   
                </div>
            )
        }       
    }
     
    render() {
        return (
            <div className="category-tabs   content">
              <h1> Projects </h1>    
                <Tabs className="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tabs" > React </Tab>
                    <Tab className="tabs" > Javascript & Jquery </Tab>
                    <Tab className="tabs" > Node.js </Tab>
                    <Tab className="tabs" > MySQL </Tab>
                    <Tab className="tabs" > MongoDB </Tab>
                </Tabs>    
              
           
                    <Grid className="projects-grid"> 
                        <Cell col={12}>  
                            <div className="content">    
                                {this.toggleCategories()} 
                            </div>
                        </Cell>
                    </Grid>        
    
            </div>    
        )
    }
}

export default Projects;