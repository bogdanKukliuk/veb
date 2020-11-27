import React from "react";
import NoteEditor from "../NoteEditor/NoteEditor.jsx";
import NotesGrid from "../NotesGrid/NotesGrid.jsx";
import NoteColors from "../NoteColor/NoteColor.jsx";

class NotesApp extends React.Component {

    constructor() {
        super();
        this.state = {  notes: JSON.parse(sessionStorage.getItem('mydata')), 
          note: null,
          text: null,
          color: null,
          tags: null};
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handlePinNote = this.handlePinNote.bind(this);
        this.handleArchiveNote = this.handleArchiveNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSaveNote = this.handleSaveNote.bind(this);
        this.handleClickNote = this.handleClickNote.bind(this);
        this.hadleTagsChange = this.hadleTagsChange.bind(this);
        this._hadleColorChange = this._hadleColorChange.bind(this);
        
    }

    handleTextChange(event) {
      this.setState({text: event.target.value});
    }

    handleNoteAdd(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        sessionStorage.setItem('mydata', JSON.stringify(newNotes));
        this.setState({notes: newNotes});
    }

    handlePinNote(){
        let noteId = this.state.note.id;
        let newNotes = this.state.notes.map((item) => {
            if (item.id === noteId) {
              const updatedItem = {
                ...item,
                pin: !item.pin,
              };
       
              return updatedItem;
            }
       
            return item;
          });
        this.setState({
            notes: newNotes
        })
        sessionStorage.setItem('mydata', JSON.stringify(newNotes));
    }
    handleArchiveNote(){
        let noteId = this.state.note.id;
        let newNotes = this.state.notes.map((item) => {
            if (item.id === noteId) {
              const updatedItem = {
                ...item,
                archive: true,
                pin: false
              };
       
              return updatedItem;
            }
       
            return item;
          });
        this.setState({
            notes: newNotes
        })
        sessionStorage.setItem('mydata', JSON.stringify(newNotes));
    }
    handleDeleteNote(){
        let noteId = this.state.note.id;
        let newNotes = this.state.notes.map((item) => {
            if (item.id === noteId) {
              const updatedItem = {
                ...item,
                delete: true,
                pin: false
              };
       
              return updatedItem;
            }
            return item;
          });
        this.setState({
            notes: newNotes
        })
        sessionStorage.setItem('mydata', JSON.stringify(newNotes));
    }

    handleClickNote(newnote){
      this.setState({
          note: newnote,
          text: newnote.text,
          color: newnote.color,
          tags: newnote.tags
      })
    }

    handleSaveNote(){
      let noteId = this.state.note.id;
        let newNotes = this.state.notes.map((item) => {
            if (item.id === noteId) {
              const updatedItem = {
                ...item,
                text: this.state.text,
                color: this.state.color,
                tags: this.state.tags
              };
              return updatedItem;
            }
       
            return item;
          });
        this.setState({
            notes: newNotes
        })
        sessionStorage.setItem('mydata', JSON.stringify(newNotes));
    }

    hadleTagsChange(e){
        this.setState({
            tags: e.target.value
        })
    }

    _hadleColorChange(e, color) {
      this.setState({
          color: color
      })
  }

    render() {
        console.log(JSON.parse(sessionStorage.getItem('mydata')));
        return (<div className="notes-app">
            <NoteEditor onNoteAdd={this.handleNoteAdd} />
            <NotesGrid notes={this.state.notes} onClickNode={this.handleClickNote}/>
        
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div className="note-editor">
                        <textarea placeholder="Enter text..." rows={5} className="textarea"
                        onChange={this.handleTextChange} value={(this.state.text !== null) ? this.state.text : ""} ></textarea>
                        <input placeholder="#tags" className="tags" onInput={this.hadleTagsChange} value={(this.state.tags !== null) ? this.state.tags : ""} />
                        <div className="controls">
                          <NoteColors onColorChanged={this._hadleColorChange}/>
                        </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handlePinNote}>Pin</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handleArchiveNote}>Archive</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handleDeleteNote}>Delete</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handleSaveNote}>Save</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>)
    }
}

export default NotesApp;