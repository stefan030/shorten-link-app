import React from 'react'
import Header from './../../client/components/header';
import LinkCreate from './../../client/components/link_create';
import { Links } from './../../imports/collections/links';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <LinkCreate />
            </div>
        )
    }
}