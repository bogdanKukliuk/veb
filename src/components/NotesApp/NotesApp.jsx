import React from "react";
import NoteEditor from "../NoteEditor/NoteEditor.jsx";
import NotesGrid from "../NotesGrid/NotesGrid.jsx";

class NotesApp extends React.Component {

    constructor() {
        super();
        this.state = {  notes: JSON.parse(sessionStorage.getItem('mydata')),
                        node: JSON.parse(sessionStorage.getItem('node'))};
        this.handleNoteAdd = this.handleNoteAdd.bind(this);

        this.handlePinNote = this.handlePinNote.bind(this);
        this.handleArchiveNote = this.handleArchiveNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.handleClickNote = this.handleClickNote.bind(this);

    }

    handleNoteAdd(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        sessionStorage.setItem('mydata', JSON.stringify(newNotes));
        this.setState({notes: newNotes});
    }

    handlePinNote(note){
        let noteId = note.id;
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

    handleArchiveNote(note){
        let noteId = note.id;
        let newNotes = this.state.notes.map((item) => {
            if (item.id === noteId) {
              const updatedItem = {
                ...item,
                archive: !item.archive,
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
    handleDeleteNote(note){
        let noteId = note.id;
        let newNotes = this.state.notes.map((item) => {
            if (item.id === noteId) {
              const updatedItem = {
                ...item,
                delete: !item.delete,
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

    // DONT WORK
    handleClickNote(note){
      let newNotes = this.state.notes.text;
      this.setState({
        node: newNotes
      })
      console.log(newNotes);
    }


    render() {
        console.log(JSON.parse(sessionStorage.getItem('mydata')));
        return (<div className="notes-app">
            <NoteEditor onNoteAdd={this.handleNoteAdd} />
            <NotesGrid notes={this.state.notes} onNotePin={this.handlePinNote} onNoteArchive={this.handleArchiveNote} onNoteDelete={this.handleDeleteNote} onClickNode={this.handleClickNote}/>
        
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{this.handleClickNote}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">l</label>
                        <input type="text" class="form-control" id="recipient-name"/>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
        </div>)
    }
}

export default NotesApp;