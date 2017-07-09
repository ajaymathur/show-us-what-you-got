import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';

import PageOne from './pageOne/pageOne';
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PageOne/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));