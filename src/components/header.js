import React from "react";

export default class Header extends React.Component {
    handleChange(e) {
        console.log(e.target.value);
        this.props.changeTitle(e.target.value)
    }

    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </header>
        );
    }
}
