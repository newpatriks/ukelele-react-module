import React from 'react'
import ReactDOM from 'react-dom'
import CHORDS from './components/ukelele-chords.js'
import Ukelele from './components/ukelele.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChord: 'A'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        this.setState({
            currentChord: target.options[target.selectedIndex].value
        });
    }
    render() {
        let ukeleleList = [];
        let keys = Object.keys(CHORDS);
        for (let key in CHORDS) {
            if (CHORDS.hasOwnProperty(key)) {
                ukeleleList.push(<Ukelele key={key} chord={key} width="400" height="200"/>);
            }
        }

        return(
            <div>
                {ukeleleList.map(ukelele => (ukelele))}
            </div>
        );
    }
};

export default App
