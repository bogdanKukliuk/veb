import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotesPage from "./components/NotesPage/NotesPage.jsx";
import DeletesPage from "./components/Delete/DeletesPage.jsx";
import ArchivePage from './components/Archive/ArchivePage';
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {
  const mydata = [
    {
        id: 1,
        text: "first",
        color: "red",
        tags: "#lorem",
        delete: false,
        pin: false,
        archive: false
    },
    {
        id: 2,
        text: "Second",
        color: "green",
        tags: "#lorem",
        delete: false,
        pin: false,
        archive: false
    },
    {
        id: 3,
        text: "Thris",
        color: "gray",
        tags: "#lorem",
        delete: false,
        pin: false,
        archive: false
    },
    {
        id: 4,
        text: "For",
        color: "yellow",
        tags: "#lorem",
        delete: false,
        pin: false,
        archive: false
    },
    {
        id: 5,
        text: "fife",
        color: "violet",
        tags: "#lorem",
        delete: false,
        pin: true,
        archive: false
    },
    {
        id: 6,
        text: "six",
        color: "orange",
        tags: "#lorem",
        delete: false,
        pin: false,
        archive: true
    },
    {
        id: 7,
        text: "seven",
        color: "blue",
        tags: "#lorem",
        delete: true,
        pin: false,
        archive: false
    },
  
  ];

  if(sessionStorage.getItem('mydata') === null){
    sessionStorage.setItem('mydata', JSON.stringify(mydata));
  }
  return (
    <Router>
      <Menu />
      <div className="appContainer">
        <Switch>
          <Route exact path="/" component={NotesPage} />
          <Route exact path="/archive" component={ArchivePage} />
          <Route exact path="/deletes" component={DeletesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
