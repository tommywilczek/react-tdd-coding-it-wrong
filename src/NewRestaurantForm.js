import React, { Component } from 'react'
import { Button, TextInput, Row } from 'react-materialize'

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
            <Row>
                <div>
                    <TextInput
                        s={12} m={8} l={10}
                        label="Restaurant Name"
                        value={inputText}
                        onChange={this.handleTextChange}
                        data-test="newRestaurantName"
                    />
                    <Button
                        s={12} m={4} l={2}
                        className="modal-close"
                        data-test="saveRestaurantButton"
                        onClick={this.handleSave}
                    >
                        Save
                    </Button>
                </div>
            </Row>
        )
    }
}
