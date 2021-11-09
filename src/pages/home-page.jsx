import React, { Component } from 'react'
import { CompanieList } from '../cmps/companie-list'
import { MainLayout } from '../cmps/layout/MainLayout'
import { SearchCompanie } from '../cmps/search-companie'
import { dataService } from '../services/dataService'
import { DbService } from '../services/db-service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export class HomePage extends Component {
    state = {
        companiesData: null
    }
    componentDidMount() {
        this.loadCompaniesData()
    }

    addNewCompanie = async (companie) => {
        let newCompanie = await dataService.getCompanieData(companie.ticker)
        if (!newCompanie) return
        newCompanie = {
            name: newCompanie.name,
            symbol: newCompanie.symbol,
            country: newCompanie.country,
            logo: newCompanie.logo,
            employees: newCompanie.employees,
        }
        await DbService.post('companie', newCompanie)
        showSuccessMsg('The company was added')
        this.loadCompaniesData()
    }
    onRemoveCompanie = async (companieId) => {
        await DbService.remove('companie', companieId)
        const companiesData = this.state.companiesData.filter(companie => {
            return companie._id !== companieId
        })
        this.setState({ companiesData }, () => {
            showErrorMsg("The company was removed")
        })
    }

    loadCompaniesData = async () => {
        const dataCompaniesResults = await DbService.query('companie')
        this.setState({ companiesData: dataCompaniesResults })
    }


    render() {
        const { companiesData } = this.state
        if (!companiesData) return <div>loading....</div>
        return (
            <MainLayout>
                <section className='home'>
                    <h1 className='title'>traded companies in Nasdaq</h1>
                    <SearchCompanie addNewCompanie={this.addNewCompanie} />
                    <table>
                        <thead>
                            <tr key='1'>
                                <th><h1>logo</h1></th>
                                <th><h1>name</h1></th>
                                <th><h1>ticker</h1></th>
                                <th><h1>employees</h1>
                                </th>
                                <th><h1>country</h1></th>
                                <th><h1></h1></th>

                            </tr>
                        </thead>
                        <tbody>
                            <CompanieList onRemoveCompanie={this.onRemoveCompanie} companies={companiesData} />
                        </tbody>
                    </table>
                </section>
            </MainLayout>
        )
    }
}



