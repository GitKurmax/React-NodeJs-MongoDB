import React, { Component } from 'react';
import Header from '../header/Header';
import List from '../list/List';

export default class Content extends Component {
    render() {
        return (
            <div>
                <Header/>
                <List/>
            </div>
        )
    }
}
