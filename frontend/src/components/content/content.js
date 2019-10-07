import React, { Component } from 'react';
import List from '../list/List';
import Put from '../put/Put';
import './Content.scss';

export default class Content extends Component {
    render() {
        return (
            <div className="content-container">
                <List/>
                <Put/>
            </div>
        )
    }
}
