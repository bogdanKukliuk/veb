
import React from "react";

import './Note.css';


class Note extends React.Component {
    render() {
        return (<div className="note" style={{backgroundColor: this.props.color}} onClick={this.props.onClickNodeInfo} data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
            {/* <button class="btn dropdown-toggle" style={{backgroundColor: this.props.color}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu">
                <p >Change</p>
                <p onClick={this.props.onPin}>Pin</p>
                <p onClick={this.props.onArchive}>Archive</p>
                <p onClick={this.props.onDelete}>Delete</p>
            </div> */}


            {this.props.text}
        </div>)
    }
}

export default Note;