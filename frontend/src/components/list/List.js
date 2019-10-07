import React, { Component } from 'react';
import "./List.scss";
import { Icon, Label, Table } from 'semantic-ui-react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [1]};

    }

    componentDidMount() {
        fetch("http://localhost:3100/api/getAll")
            .catch(err => console.log(err))
            .then(response => response.json())
            .then(data => {
                const dataToRender = data.map((user, index) => {
                  return {
                    id: user._id,
                    name: user.name,
                    age: user.age,
                    position: ++index
                  } 
                });

                this.setState({
                    data: dataToRender
                })
                console.log(this.state.data)
            });
    }

    render() {
        const list = this.state.data.map(user => 
            <Table.Row key={user.id + user.position}>
                <Table.Cell className="cell-position">{user.position}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.age}</Table.Cell>
                <Table.Cell className="cell-edit">
                    <Icon link name='edit' />
                    <Icon link name='trash alternate' />
                </Table.Cell>
            </Table.Row>
        )

        return (
            <div className="list-container">
                <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Label ribbon>No</Label>
                        </Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {list}
                </Table.Body>
                </Table>
            </div>
        )
    }
}
