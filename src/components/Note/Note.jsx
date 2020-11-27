
import React from "react";

import './Note.css';


class Note extends React.Component {
    render() {
        return (<div className="note" style={{backgroundColor: this.props.color}} onClick={this.props.onClickNodeInfo} data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
            {this.props.text}
        </div>)
    }
}

export default Note;