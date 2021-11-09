import React, { Component } from 'react'
import { CompanieList } from '../cmps/companie-list'
import { MainLayout } from '../cmps/layout/MainLayout'
import { SearchCompanie } from '../cmps/SearchCompanie.jsx'
import { dataService } from '../services/dataService'
import { DbService } from '../services/db-service'

export class HomePage extends Component {
    state = {
        companiesData: null
    }
    componentDidMount() {
        this.loadCompaniesData()
    }

    addNewCompanie = async (companieTicker) => {
        await DbService.post('companie', companieTicker)
        this.loadCompaniesData()
    }

    loadCompaniesData = async () => {
        const companiesTicker = await DbService.query('companie')
        const unresolvedResults = companiesTicker.map(async (companie) => {
            return await dataService.getCompanieData(companie)
        })
        let dataCompaniesResults = await Promise.all(unresolvedResults)
        this.setState({ companiesData: dataCompaniesResults })
    }




    render() {
        const { companiesData } = this.state
        if (!companiesData) return <div>loading....</div>
        return (
            <MainLayout>
                <SearchCompanie addNewCompanie={this.addNewCompanie} />
                    <table>
                        <thead>
                            <th>id</th>
                            <th>name</th>
                            <th>ticker</th>
                            <th>locale</th>
                            <th>type</th>
                        </thead>
                        <tbody>
                            <CompanieList companies={companiesData} />
                        </tbody>
                    </table>
            </MainLayout>
        )
    }
}



