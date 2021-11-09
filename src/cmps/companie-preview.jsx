import React, { Component } from 'react'
import businessman from '../assets/img/businessman.png'
import remove from '../assets/img/remove.png'

export class CompaniePreview extends Component {

    render() {
        const { companie, idx } = this.props
        if (!companie) return <div></div>
        return (
            <>
                <td><img src={companie.logo ? companie.logo : "no logo found"} /></td>
                <td>{companie.name}</td>
                <td>{companie.symbol}
                </td>
              
                <td>
                    <span className='employees'>
                        <span>
                        {companie.employees ? companie.employees : '-'}
                        </span>
                        <img src={businessman} />
                    </span>
                </td>
                <td>{companie.country}</td>
                <td onClick={() => { this.props.onRemoveCompanie(companie._id) }}>

                    <img className='remove-img' src={remove}/>
                </td>
            </>
        )
    }
}

