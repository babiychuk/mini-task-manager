import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false
        };

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.rendDefault = this.rendDefault.bind(this);
        this.rendEdit = this.rendEdit.bind(this);

    }

    edit(){
        this.setState({edit: true})
    }

    save(){
        this.props.updateBlock(this.refs.textar.value, this.props.index);
        this.setState({edit: false})
    }

    remove(){
        this.props.deleteBlock (this.props.index);
    }

    rendDefault(){
        return(
                <div className="box">
                    <div>{this.props.children}</div>
                    <button onClick={this.edit} className="btn light">Редактировать</button>
                    <button onClick={this.remove} className="btn red">Удалить</button>
                </div>
        );
    }

    rendEdit(){
        return(
                <div className="box">
                    <textarea ref="textar" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="btn green">Сохранить</button>
                </div>
        );
    }

    render(){
        if(this.state.edit){
           return this.rendEdit ();
        } else {
            return this.rendDefault();
        }

    }
}

export default App;
