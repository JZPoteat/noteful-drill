import React from 'react';
import FileContext from './FileContext';

class AddNote extends React.Component {
  state = {name: ''};

  setName = name => {
    this.setState({name: name})
  }

  static contextType = FileContext;

  render() {
    return (
      <form>
        <h2>Add a note</h2>
        <label htmlFor="note-name">Note Name</label>
        <input type="text" id="note-name" name="note-name" value={this.state.name.value} onChange={e => this.setName(e.target.value)}></input>
        <label htmlFor="folder-name">Folder Name</label>
        <select>
          <option>Folder</option>
        </select>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddNote;
