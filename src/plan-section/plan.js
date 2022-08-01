import React from "react";

class PlanList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttons: 'plan-list',
            leveloneclass : 'hidden',
            leveltwoclass : 'hidden',
            levelthreeclass : 'hidden',
        }
    }

    RenderPlan(i){
        if(i === 1){
            this.setState({buttons: 'hidden'})
            this.setState({leveloneclass : 'show'})
            this.setState({leveltwoclass : 'hidden'})
            this.setState({levelthreeclass : 'hidden'})
        } else if (i === 2){
            this.setState({buttons: 'hidden'})
            this.setState({leveloneclass : 'hidden'})
            this.setState({leveltwoclass : 'show'})
            this.setState({levelthreeclass : 'hidden'})
        } else if (i === 3){
            this.setState({buttons: 'hidden'})
            this.setState({leveloneclass : 'hidden'})
            this.setState({leveltwoclass : 'hidden'})
            this.setState({levelthreeclass : 'show'})
        } else {
            this.setState({buttons: 'plan-list'})
            this.setState({leveloneclass : 'hidden'})
            this.setState({leveltwoclass : 'hidden'})
            this.setState({levelthreeclass : 'hidden'})
        }
    }

    render(){
        return(
            <div className="plan-container">
                <div>
                    <div className='plan-details-container'>
                        <div className={this.state.leveloneclass}>
                            <h1>Level One</h1>
                            <p>It is very important to work on the basics, I wish I had earlier!</p>
                            <p>For athletes at level 1 learning the basics I will go through drills to unlock balance, co-ordination and strength</p>
                            <p>The work that goes into the basics provide the foundation for the rest of an athletes tumble career, I do a lot of them with higher levels too!</p>
                            <button onClick={() => {this.RenderPlan()}}>Close</button>
                        </div>
                        <div className={this.state.leveltwoclass}>
                            <h1>Level Two</h1>
                            <p>It is very important to work on the basics, I wish I had earlier!</p>
                            <p>For athletes at level 1 learning the basics I will go through drills to unlock balance, co-ordination and strength</p>
                            <p>The work that goes into the basics provide the foundation for the rest of an athletes tumble career, I do a lot of them with higher levels too!</p>
                            <button onClick={() => {this.RenderPlan()}}>Close</button>
                        </div>
                        <div className={this.state.levelthreeclass}>
                            <h1>Level Three</h1>
                            <p>It is very important to work on the basics, I wish I had earlier!</p>
                            <p>For athletes at level 1 learning the basics I will go through drills to unlock balance, co-ordination and strength</p>
                            <p>The work that goes into the basics provide the foundation for the rest of an athletes tumble career, I do a lot of them with higher levels too!</p>
                            <button onClick={() => {this.RenderPlan()}}>Close</button>
                        </div>
                    </div>
                </div>          
                <ul className={this.state.buttons}>
                    <li onClick={() => this.RenderPlan(1)}>Level 1</li>
                    <li onClick={() => this.RenderPlan(2)}>Level 2</li>
                    <li onClick={() => this.RenderPlan(3)}>Level 3</li>
                </ul>
            </div>
      )
    }
}

export default PlanList
