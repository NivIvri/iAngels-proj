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

    addNewCompanie = async (companie) => {
        debugger
        let newCompanie = await dataService.getCompanieData(companie.ticker)
        if(!newCompanie) return
        newCompanie = {
            name: newCompanie.name,
            symbol: newCompanie.symbol,
            country: newCompanie.country,
            logo: newCompanie.logo,
        }
        await DbService.post('companie', newCompanie)
        this.loadCompaniesData()
    }

    loadCompaniesData = async () => {
        const dataCompaniesResults = await DbService.query('companie')
        //const unresolvedResults = companiesTicker.map(async (companie) => {
        //    return await dataService.getCompanieData(companie)
        //})
        //let dataCompaniesResults = await Promise.all(unresolvedResults)
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
                        <tr key='1'>

                            <th>logo</th>
                            <th>name</th>
                            <th>ticker</th>
                            <th>country</th>
                            <th>employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CompanieList companies={companiesData} />
                    </tbody>
                </table>
            </MainLayout>
        )
    }
}



