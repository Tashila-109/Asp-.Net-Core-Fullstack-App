import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    this.setState({
      values: [{id: 1, name: 'Value 101'}]
    })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
          <ul>
            {this.state.values.map((value: any) => (
              <li>{value.name}</li>
            ))}
          </ul>
      </div>
    );
  }
}

export default App;
