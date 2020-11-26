import React from "react";
import './ArchiveNotesGrid.css';
import Note from "../Note/Note.jsx";
import Masonry from "masonry-layout";

class ArchiveNotesGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {notes: this.props.notes};
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

    handleClickNote(){
        this.props.onClickNode();
    }

    render() {
        return (<div>            
            <div className="notes-grid" ref="grid">
                {
                    this.state.notes.map((note) => {
                        if(note.archive)
                        return <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            text={note.text}
                            onClickNodeInfo={this.props.onClickNode.bind(null, note)}
                        />
                    })
                }
            </div>
        </div>)
    }
}

export default ArchiveNotesGrid;