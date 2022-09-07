import React, {Component} from 'react';
import ItemTitle from '../ItemTitle.jsx'
import ToDoItems from './ToDoItems.jsx'

class ToDoList extends Component{
    constructor(){
        super();
        this.state = {
            pages: 3,
            currentPage: 1,
            navigateStatus: []
        }
        this.state.navigateStatus = Array(this.state.pages)
        this.state.navigateStatus.fill("rgba(255, 255, 255, 0.05)");
        this.state.navigateStatus[this.state.currentPage - 1] = "#870c20da"

        // this.moveleft = this.moveleft.bind(this);
        // this.moveright = this.moveright.bind(this);
        // this.eventModifyAdd = this.eventModifyAdd.bind(this);
        // this.eventModifySub = this.moveleft.bind(this);
    }
    styles = {
        height: "48vh",
        width: "48vw",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
    }

    title = {
        position:"relative",
        top: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flexStart",
        width:"100%"
    }

    pageSelector = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden"
    }

    pageCircle = {
        position: "relative",
        height: "20px",
        width: "20px",
        borderRadius: "10px",
        marginLeft: "10px",
    }

    render(){
        return(
            <div style={this.styles}>
                {/* Title and add, subtract page */}
                <div style={this.title}>
                    <ItemTitle styleChoice={0} color="#03d3fc" text={"My Notes today"}/>
                    <img src={require("../ButtonSet/subButton.png")} alt="sub button"  
                            style={{marginLeft:"auto", marginRight:"10px",scale: "0.5"}}
                            onClick={this.eventModifySub}/>
                    <img src={require("../ButtonSet/addButton.png")} alt="add button" 
                            style={{scale: "0.5"}} 
                            onClick={this.eventModifyAdd}/>
                </div>

                {/* Note display screen */}
                <ToDoItems pages={this.state.pages} currentPage={this.state.currentPage}/>

                {/* Note navigation */}
                <div style={this.pageSelector}>
                    {/* Note navigation */}
                    <div style = {{display: "flex", flexDirection: "row", alignItems: "flexStart"}}>
                        {this.state.navigateStatus.map(navigateStatus => <div key={Math.random()} style={{...this.pageCircle, backgroundColor: navigateStatus}}></div>)}
                    </div>

                    {/* Left right navigation */}
                    <img src={require("./leftButton.png")} alt="move to left button"  
                                style={{ width:"23px", height:"23px",marginRight:"10px"}}
                                onClick={this.moveleft}/>
                    <img src={require("./rightButton.png")} alt="move to right button" 
                                style={{width:"23px", height:"23px"}} 
                                onClick={this.moveright}/> 
                </div>
            </div>
        );
    }

    // setState(state){
    //     window.localStorage.setItem('pages', JSON.stringify(state));
    //     super.setState(state)
    // }

    // Function to add page
    // eventModifyAdd = () => {
    //     this.setState({pages: this.state.pages + 1}, this.moveright)
    // }

    // Function to remove current page
    // eventModifySub = () => {
    //     this.setState({pages: this.state.pages - 1});
    // }

    //Function to move page left
    moveleft = () => {
        if(this.state.currentPage > 1){
            this.setState({currentPage: this.state.currentPage - 1}, this.navBar)
        }
    }

    //Function to move page right
    moveright = () => {
        if(this.state.currentPage < this.state.pages){
            this.setState({currentPage: this.state.currentPage + 1}, this.navBar)
        }
    }

    // Function to update nav bar
    navBar = () => {
        const temp = Array(this.state.pages)
        temp.fill("rgba(255, 255, 255, 0.05)")
        temp[this.state.currentPage - 1] = "#870c20da"
        this.setState({navigateStatus: temp})
    }
}

export default ToDoList;