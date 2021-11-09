import storageService from './storage.service'
import { utilService } from './util.service';
import axios from 'axios'
const KEY = 'data';
let companieCache = []
export const dataService = {
    getCompanieData,
    getCompanieDateSearch
}
async function getCompanieData(keySerch) {
    if (!keySerch) return []
    companieCache = storageService.loadFromStorage([keySerch])
    if (companieCache) {
        if (companieCache.length)
            companieCache = companieCache[0]
        console.log('No need to fetch, retrieving from Cache');
        return (companieCache)
    }
    try {
        const res = await axios.get(`https://api.polygon.io/v1/meta/symbols/${keySerch}/company?apiKey=pv_VVp9rQJ7d8X4aU0wI8Fw2W_GHWVOD`)
        res.data._id = utilService.makeId()
        await storageService.saveToStorage([keySerch], res.data)
        return res.data
    }
    catch (err) {
        console.log('Cannwot reach server:', err);
    }
}
async function getCompanieDateSearch(keySerch) {
    if (!keySerch) return []
    companieCache = storageService.loadFromStorage([keySerch+ 'SERCH'])
    if (companieCache) {
        console.log('No need to fetch, retrieving from Cache');
        return (companieCache)
    }
    try {
        const res = await axios.get(`https://api.polygon.io/v3/reference/tickers?search=${keySerch}&active=true&sort=ticker&order=asc&limit=5&apiKey=pv_VVp9rQJ7d8X4aU0wI8Fw2W_GHWVOD`)
        await storageService.saveToStorage([keySerch+ 'SERCH'], res.data.results)
        res.data.results.map(companie => {
            companie._id = utilService.makeId()
        })
        return res.data.results
    }
    catch (err) {
        console.log('Cannwot reach server:', err);
    }
}
