import React from 'react';
import createReactClass from 'create-react-class';

import preload from './AttendeesPaid.json';



const Search = createReactClass({
    render() {
        return (
            <div><pre>
                <code>
                    {JSON.stringify(preload,null,4)}
                </code>
            </pre></div>
        );
    }
});

export default Search;
