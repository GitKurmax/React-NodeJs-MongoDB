import React, { Component } from 'react';
import "./List.scss";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [1]};

    }

    componentDidMount() {
        fetch("http://localhost:3000/api/getAll")
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
            <div key={user.id}>
                <span>{user.position}</span>
                <span>{user.name}</span>
                <span>{user.age}</span>
            </div>
            )

        return (
            <div className="list-container">
                <table class="ui celled table">
                <thead class="">
                    <tr class="">
                    <th class="">No</th>
                    <th class="">Name</th>
                    <th class="">Age</th>
                    </tr>
                </thead>
                <tbody class="">
                    <tr class="">
                    <td class=""><div class="ui ribbon label">First</div></td>
                    <td class="">Cell</td>
                    <td class="">Cell</td>
                    </tr>
                    <tr class="">
                    <td class="">Cell</td>
                    <td class="">Cell</td>
                    <td class="">Cell</td>
                    </tr>
                    <tr class="">
                    <td class="">Cell</td>
                    <td class="">Cell</td>
                    <td class="">Cell</td>
                    </tr>
                </tbody>
                <tfoot class="">
                    <tr class="">
                    <th colspan="3" class="">
                        <div class="ui pagination right floated menu">
                        <a class="icon item"><i aria-hidden="true" class="chevron left icon"></i></a>
                        <a class="item">1</a>
                        <a class="item">2</a>
                        <a class="item">3</a>
                        <a class="item">4</a>
                        <a class="icon item"><i aria-hidden="true" class="chevron right icon"></i></a>
                        </div>
                    </th>
                    </tr>
                </tfoot>
                </table>
            </div>
        )
    }
}
