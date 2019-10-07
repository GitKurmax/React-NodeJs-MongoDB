import React, { Component } from 'react';
import "./List.scss";
import { Icon, Label, Table } from 'semantic-ui-react';
import ModalWindow from '../modal/ModalWindow'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showModal: false,
            id: null
        };

        this.showModal = this.showModal.bind(this);
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

    showModal(id) {
        this.setState(state => {
            return {
                showModal: state.showModal ? false : true,
                id: id
            }
        });
        console.log(id)
    }

    deleteUser() {
      console.log('id: ' + this.state.id)
      // fetch("http://localhost:3100/api/getAll", {  
      //   method: 'post',  
      //   headers: {  
      //     "Content-type": 'application/json'  
      //   },  
      //   body: {
      //     id: this.state.id
      //   }  
      // })
      // .catch(err => console.log(err))
      // .then(() => console.log('deleted'))
    }

    render() {
        const list = this.state.data.map(user => 
            <Table.Row key={user.id + user.position}>
                <Table.Cell className="cell-position">{user.position}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.age}</Table.Cell>
                <Table.Cell className="cell-edit">
                    <Icon link name='edit' click="" />
                    <Icon link name='trash alternate' onClick={() => this.showModal()}/>
                </Table.Cell>
            </Table.Row>
        )

        return (
            <React.Fragment>
                {this.state.showModal && 
                  <ModalWindow 
                    open={this.state.showModal}
                    closeModal={this.showModal}
                    deleteUser={this.deleteUser}
                />}
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
            </React.Fragment>
        )
    }
}
