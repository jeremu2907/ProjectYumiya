import React, {Component} from 'react';
import ItemTitle from '../ItemTitle.jsx'
import ToDoItems from './ToDoItems.jsx'
import './TextArea.css'
import '../ButtonSet/button.css'

class ToDoList extends Component{
    constructor(){
        super();
        this.state = JSON.parse(window.localStorage.getItem('ToDoList')) || {
            pages: 1,
            currentPage: 1,
            navigateStatus: []
        }
        this.state.navigateStatus = Array(this.state.pages)
        this.state.navigateStatus.fill("rgba(255, 255, 255, 0.05)");
        this.state.navigateStatus[this.state.currentPage - 1] = "#870c20da"

        this.moveleft = this.moveleft.bind(this);
        this.moveright = this.moveright.bind(this);
        this.eventModifyAdd = this.eventModifyAdd.bind(this);
        this.eventModifySub = this.eventModifySub.bind(this);
    }
    styles = {
        height: "47vh",
        // width: "calc(48vw - 10px)",,
        width: "calc(95% - 10px)",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        borderRadius: "10px"
    }

    title = {
        position:"relative",
        // top: "30px",
        // left: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        width:"calc(100%)"
    }

    pageSelector = {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden"
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
            <div id="NoteContainer" style={this.styles} className="NoteContainer">
                {/* Title and add, subtract page */}
                <div style={this.title}>
                    <ItemTitle styleChoice={0} color="#03d3fc" text={"My Notes today"}/>
                    <div>
                        <img src={require("../ButtonSet/subButton.png")} alt="sub button"  
                                style={{marginRight:"10px"}}
                                className='AddSubButton'
                                onClick={this.eventModifySub}/>
                        <img src={require("../ButtonSet/addButton.png")} alt="add button" 
                                className='AddSubButton'
                                onClick={this.eventModifyAdd}/>
                    </div>
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

    setStorage(){
        window.localStorage.setItem('ToDoList', JSON.stringify(this.state));
        // super.setState(this.state)
    }

    // Function to add page another page to the back
    eventModifyAdd = () => {
        if(this.state.pages <= 15)
            this.setState({pages: this.state.pages + 1}, () => {    
                this.setState({currentPage: this.state.pages}, this.navBar)
            })
        else{
            window.alert("Number of note pages is at limit!")
        }
    }

    // Function to remove current page
    eventModifySub = () => {
        if(this.state.pages > 1){
            this.setState({pages: this.state.pages - 1}, () => {
                if(this.state.currentPage > 1)  
                    this.setState({currentPage: this.state.currentPage - 1}, this.navBar)
                else
                    this.setState({currentPage: 1}, this.navBar)
            })
        }
    }

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

    // Function to update nav bar to highlight currentPage
    navBar = () => {
        const temp = Array(this.state.pages)
        temp.fill("rgba(255, 255, 255, 0.05)")
        temp[this.state.currentPage - 1] = "#870c20da"
        this.setState({navigateStatus: temp})
        this.setStorage()
    }
}

export default ToDoList;