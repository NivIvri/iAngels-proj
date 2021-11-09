import React, { Component } from 'react'
import { CompaniesList } from './companies-list-results'

export class SearchResult extends Component {
    state = {
        companiesData: null,
    }
    componentDidMount() {
        const { companiesData } = this.props
        this.setState({ companiesData })

    }
    componentDidUpdate(prevProps) {
        if (this.props.companiesData !== prevProps.companiesData) {
            const { companiesData } = this.props
            this.setState({ companiesData })
        }
    }

    render() {
        const { companiesData } = this.state
        if (!companiesData || !companiesData.length) return <div>No results found</div>
        return (
            <section className='search-result-container'>
                {companiesData.length &&
                    <CompaniesList addNewCompanie={this.props.addNewCompanie} companies={companiesData.slice(0, 5)} />
                }
            </section>
        )
    }

}
