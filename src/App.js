import React from 'react';
import { Route } from 'react-router-dom';
import { FileContextProvider } from './FileContext';

import Header from './Header';
import FoldersSidebar from './FoldersSidebar';
import NoteSidebar from './NoteSidebar';
import NotesList from './NotesList';
import NoteDetails from './NoteDetails'

import AddFolder from './AddFolder';
import AddNote from './AddNote';

class App extends React.Component {

  
  render() {
    return (
      <>
        <Header></Header>
        <FileContextProvider>
          <div className="body">
            <div className="sidebar">
              <Route path='/' exact component={FoldersSidebar} />
              <Route path='/add/folder' exact component={FoldersSidebar} />
              <Route path='/add/note' exact component={FoldersSidebar} />
              <Route path='/folder/:folderName' exact component={FoldersSidebar} />
              <Route path='/folder/:folderName/:noteName' render={(routeProps) => <NoteSidebar routeProps={routeProps} />} />
            </div>
            <main>
              <Route path='/' exact component={NotesList} />
              <Route path='/add/folder' exact component={AddFolder} />
              <Route path='/add/note' exact component={AddNote} />
              <Route path='/folder/:folderName' exact render={(routeProps) => <NotesList routeProps={routeProps} />} />
              <Route path='/folder/:folderName/:noteName' render={(routeProps) => <NoteDetails routeProps={routeProps} />} />
            </main>
          </div>
        </FileContextProvider>
      </>
    );
  }
}

export default App;
