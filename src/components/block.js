import React from 'react';
import App from '../App';

class Block extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.addBlock = this.addBlock.bind(this);
        this.deleteBlock = this.deleteBlock.bind(this);
        this.updateBlock = this.updateBlock.bind(this);
        this.mapTasks = this.mapTasks.bind(this);
    }

    addBlock (text){
        let arr = this.state.tasks;
        arr.push (text);
        this.setState({tasks: arr});
    }

    deleteBlock (i){
        let arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({tasks: arr});
    }

    updateBlock (text, i){
        let arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks: arr});
    }


    mapTasks (item, i) {
        return (
            <App key={i} index={i} updateBlock={this.updateBlock} deleteBlock={this.deleteBlock}>
                {item}
            </App>
        );
    }

    render() {
        return (
            <div className="field">
                <button onClick={this.addBlock.bind(null, 'Новая задача')} className="btn new">Новая задача</button>
                {this.state.tasks.map(this.mapTasks)}
            </div>
        );
    }
}

export default Block;
