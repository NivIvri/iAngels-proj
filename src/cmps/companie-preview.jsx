import React, { Component } from 'react'

export class CompaniePreview extends Component {
    componentDidMount() {
        console.log(this.props.companie);
    }
    render() {
        const { companie,idx } = this.props
        if (!companie) return <div></div>
        return (
            <>
            <td>{idx}</td>   
             <td>{companie.name}</td>
                <td>{companie.ticker}</td>
                <td>{companie.locale}</td>
                <td>{companie.type}</td>
            </>
        )
    }
}

