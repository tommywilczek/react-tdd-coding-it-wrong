import React, { Component } from 'react'
import { Button, TextInput } from 'react-materialize'

export default class NewRestaurantForm extends Component {
    state = {
        inputText: ''
    }

    handleTextChange = (event) => {
        this.setState({ inputText: event.target.value });
    }

    handleSave = () => {
        const { inputText } = this.state;
        const { onSave } = this.props;

        onSave(inputText);
    }


    render() {
        const { inputText } = this.state;
        return (
            <div>
                <TextInput
                    label="Restaurant Name"
                    value={inputText}
                    onChange={this.handleTextChange}
                    data-test="newRestaurantName"
                />
                <Button
                    data-test="saveRestaurantButton"
                    onClick={this.handleSave}
                >
                    Save
                </Button>
            </div>
        )
    }
}
