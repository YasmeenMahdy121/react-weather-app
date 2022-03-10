import { Component} from 'react';
import Header from './components/Header';
import Content from './components/Content'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <Header />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;