import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from './../../imports/collections/links';

class LinkList extends Component {
    render() {
        return(
            <div>test</div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links');

    return { links: Links.find({}).fetch() };
}, LinkList);