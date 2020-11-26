
import React from "react";

import './NoteEditor.css';
import NoteColors from "../NoteColor/NoteColor.jsx";


class NoteEditor extends React.Component {
    constructor() {
        super();
        this.state = {text: '', color: "yellow", tags: "", delete: false, pin: false, archive: false};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this._hadleColorChange = this.hadleColorChange.bind(this);
        this.hadleTagsChange = this.hadleTagsChange.bind(this);
    }
    handleTextChange(event) {
        this.setState({text: event.target.value})
    }
    hadleColorChange(e, color) {
        this.setState({
            color: color
        })
    }
    hadleTagsChange(e) {
        this.setState({
            tags: e.target.value
        })
    }

    handleNoteAdd() {
        var newNote = {
            id: Date.now(),
            text: this.state.text,
            color: this.state.color,
            tags: this.state.tags,
            delete: this.state.delete,
            pin: this.state.pin,
            archive: this.state.archive
        }
        this.props.onNoteAdd(newNote);
        this.setState({text: ''});
    }

    render() {
        return (<div className="note-editor">
            <textarea placeholder="Enter text..." rows={5} className="textarea"
            onChange={this.handleTextChange}
            ></textarea>
            <input placeholder="#tags" className="tags" onInput={this.hadleTagsChange}/>
            <div className="controls">
                    <NoteColors onColorChanged={this._hadleColorChange}/>
                    <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        </div>)
    }
}

export default NoteEditor;