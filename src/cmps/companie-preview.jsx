import React, { Component } from 'react'
export class CompaniePreview extends Component {
    componentDidMount() {
        console.log(this.props.companie.name);
        console.log(this.props.companie.symbol);
        console.log(this.props.companie.country);
        console.log(this.props.companie.employees);
    }

    
    render() {
        const { companie, idx } = this.props
        if (!companie) return <div></div>
        return (
            <>
        
                <td><img src={companie.logo} /></td>
                <td>{companie.name}</td>
                <td>{companie.symbol}</td>
                <td>{companie.country}</td>
                <td>{companie.employees}</td>
            </>
        )
    }
}

