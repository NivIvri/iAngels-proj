import React, { Component } from 'react'

export class CompaniePreviewResult extends Component {


    render() {
        const { companie, addNewCompanie } = this.props
        return (
            <div className='result-preview'>
                <span>
                    {companie.name.length < 25 ? companie.name : companie.name.slice(0, 50) + '...'}
                </span>
               
                    <button onClick={() => { addNewCompanie(companie.ticker) }}>add</button>
            </div>

        )
    }
}
