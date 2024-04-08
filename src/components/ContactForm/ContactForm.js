import { Component } from "react";

export default class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const {name, number} = this.state
        this.props.getContactInfo({
            name,
            number,
        })
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            name: "",
            number: "",
        })
    }

    render() {
        const {name, number} = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" value={name} onChange={this.handleInputChange} required />
                <input type="tel" name="number" value={number} onChange={this.handleInputChange} required />

                <button type="submit">add contact</button>
            </form>
        )
    }
}