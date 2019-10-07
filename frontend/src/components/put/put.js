import React, { Component } from 'react';
import "./Put.scss";
import { Button, Form } from 'semantic-ui-react'

export default class Put extends Component {
    render() {
        return (
            <div className="put-container">
                <h3>Add user form</h3>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Age</label>
                        <input placeholder='Age' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
