import React, { Component } from 'react'
import { dataService } from '../services/dataService';
import { SearchResult } from './search-result';
var _ = require('lodash');
export class SearchCompanie extends Component {
    state = {
        keySearch: null,
        isOnSearch: false,
        companiesData: null,

    }
    delayedHandleChange = _.debounce(async () => {
        if (!this.state.keySearch) return
        let result = await dataService.getCompanieDateSearch(this.state.keySearch.toUpperCase())
        if (!result) {
            result = []
        }
        this.setState({ companiesData: result }, () => {
            this.setState({ isOnSearch: true });
        })
    }, 700);


    handleChange = async ({ target }) => {
        this.setState({ keySearch: target.value }, () => {
            if (this.state.keySearch === '' || this.state.keySearch === ' ') {
                this.setState({ isOnSearch: false })
                return
            }
            this.delayedHandleChange(this.state.keySearch)
        })

    }
    render() {
        const {isOnSearch,companiesData}= this.state
        return (
            <section className='search-container'>
                <input type='text'  placeholder='Search companie' onChange={this.handleChange} />
                {
                    isOnSearch &&
                    <SearchResult addNewCompanie={this.props.addNewCompanie} companiesData={companiesData}  />
                }
            </section>
        )
    }
}
