import React from "react";
import './NotesGrid.css';
import Note from "../Note/Note.jsx";
import Masonry from "masonry-layout";

class NotesGrid extends React.Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {notes: this.props.notes};
        this.handlePinNote = this.handlePinNote.bind(this);
        this.handleArchiveNote = this.handleArchiveNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.handleClickNote = this.handleClickNote.bind(this);
        
    }
    
    componentDidMount() {
        var grid = this.refs.grid;        
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
          });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.notes !== prevProps.notes) {
            this.setState({notes: this.props.notes},() =>{
                this.msnry.reloadItems();
                this.msnry.layout();
            });
        }
        if(this.state.notes !== prevState.notes){
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    filter(e){
        if(e.target.value[0] === "#"){
            let filteredList = this.props.notes.filter((note) => {
                return note.tags.toLowerCase().search(e.target.value.toLowerCase()) !== -1});
                this.setState({notes: filteredList});
        }
        else{
            let filteredList = this.props.notes.filter((note) => {
                return note.text.toLowerCase().search(e.target.value.toLowerCase()) !== -1});
                this.setState({notes: filteredList});
        }
    }

    handlePinNote(){
        this.props.onNotePin();
    }

    handleArchiveNote(){
        this.props.onNoteArchive();
    }
    
    handleDeleteNote(){
        this.props.onNoteDelete();
    }

    handleClickNote(){
        this.props.onClickNode();
    }
    render() {
        return (<div><input placeholder="search" className="noteSearch" onInput={this.filter}/>
        <div className="notes-grid" ref="grid">
            {
                this.state.notes.map((note) => {
                    if(note.delete || note.archive)
                    return null;
                    return <Note
                        key={note.id}
                        id={note.id}
                        color={note.color}
                        text={note.text}
                        onPin={this.props.onNotePin.bind(null, note)}
                        onArchive={this.props.onNoteArchive.bind(null, note)}
                        onDelete={this.props.onNoteDelete.bind(null, note)}
                        onClickNodeInfo={this.props.onClickNode.bind(null, note)}
                    />
                })
            }
        </div></div>)
    }
}

export default NotesGrid;