import React, {Component} from 'react'
import ReactSearchBox from 'react-search-box'

export default class Search extends Component
{
    data = [
        {
            key: 'john',
            value: 'John Doe',
        },
        {
            key: 'jane',
            value: 'Jane Doe',
        },
        {
            key: 'mary',
            value: 'Mary Phillips',
        },
        {
            key: 'robert',
            value: 'Robert',
        },
        {
            key: 'karius',
            value: 'Karius',
        },
    ];

    render()
    {
        return (
            <ReactSearchBox
                placeholder="Input the name of medicine"
                value="Doe"
                data={this.data}
                callback={record => console.log(record)}
            />
        )
    }
}