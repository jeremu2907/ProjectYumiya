import React, {Component} from 'react';
import './Menu.css';
import $ from 'jquery';

export default class Menu extends Component{
    constructor(){
        super();

        let shortcutJSON = JSON.parse(window.localStorage.getItem("shortcuts"));

        this.state = {
            shortcuts: shortcutJSON
        }
    }

    render(){
        return(
            <div id="menuContainer">
                <div className="logo" id="menuLogo">.yumiya</div>
                <div style={{
                        position: "absolute",
                        backgroundColor: "rgb(62, 163, 235)",
                        height: "10%",
                        width: "2px",
                        left: "calc(100% - 6px)",
                        top: "45%",
                        borderRadius: "1px"
                    }}>
                </div>

                {this.state.shortcuts.map(pair =>
                    <div className="menuItem" key={pair[0]} onClick={() => {window.open(pair[1])}}>{pair[0]}</div>
                )}
                <div id="addShortcut" className="menuItem" onClick={this.addShortCut} style={{fontSize: "50px", padding: "5px 10px 5px 5px"}}>+</div>
                <div id="shortcutField" className="no-hover" style={{height: "auto", display:"none"}}>
                    <div style={{display:"flex", alignItems:"center",marginBottom: "5px"}}>Label
                        <input id="shortcutName" type="text"/>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>URL
                        <input id="shortcutURL" type="text"/>
                    </div>
                    <button className="shortCutEdit" id="shortCutAdd" onClick={this.add}>Add</button>
                    <button id="shortCutCancel" className="shortCutEdit" onClick={this.cancel}>Cancel</button>
                </div>
                
                <div className="menuItem" style={{marginTop: 'auto'}} onClick={this.resetApp}>Reset App</div>
                <label htmlFor="file-upload" className="menuItem custom-file-upload">Change Background</label>
                <input className="menuItem" id="file-upload" type="file" accept="image/jpeg, image/png, image/jpg" encType="multipart/form-data"/>
                <div className="menuItem" onClick={this.handleSignoutClick}>Log Out</div>
            </div>
        )
    }

    componentDidMount(){
        //Saving background when user uploads
        const image_input = document.querySelector("#file-upload");
        image_input.addEventListener("change", function() {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const uploaded_image = reader.result;
                try {
                    document.body.style.backgroundImage = `url(${uploaded_image})`;
                    const bg = document.querySelector("body").computedStyleMap();
                    window.localStorage.setItem('currBG',bg.get('background-image').toString());
                } catch {
                    alert("Please try another background")
                }
            });
            reader.readAsDataURL(this.files[0]);
        });
    }

    resetApp = () => {
        if(window.confirm("This will erase your notes, background, and any other items on this app. (It doesn't tamper with your Google Calendar Events)")){
            window.localStorage.clear();
            window.location.reload();
        }
    }

    handleSignoutClick() {
        /*global gapi*/
        /*global google*/
        if(window.confirm("This will erase your notes, background, and any other items on this app")){
            window.localStorage.clear();
            window.location.reload();
            const token = gapi.client.getToken();
            if (token !== null) {
                google.accounts.oauth2.revoke(token.access_token);
                gapi.client.setToken('');
                document.getElementById('authorize_button').style.visibility = 'visible';
                document.getElementById('login-container').style.visibility = 'visible';
                document.getElementById("root").style.visibility = "hidden";
            }
        }
    }

    addShortCut() {
        document.getElementById("addShortcut").style.display = "none";
        document.getElementById("shortcutField").style.display = "block";
    }

    cancel(){
        document.getElementById("addShortcut").style.display = "block";
        document.getElementById("shortcutField").style.display = "none";
    }

    add = () => {
        let r = this.state.shortcuts;
        r.push([$("#shortcutName").val(),$("#shortcutURL").val()])

        this.setState({shortcuts: r},() => {
            window.localStorage.setItem("shortcuts", JSON.stringify(this.state.shortcuts));
            this.cancel();
        });
    }
}