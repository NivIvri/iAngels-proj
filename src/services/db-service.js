'use strict';

import { utilService } from './util.service';

export const DbService = {
    query,
    get,
    remove,
    post,
    put,
    insert
};

const ID_FIELD = '_id';
function query(collectionName) {
    var collection = utilService.loadFromStorage(collectionName);
    if (!collection || !collection.length) {
        collection = [{
            name: "Apple Inc.",
            symbol: "AAPL",
            country: "usa",
            employees: "123000",
            logo: "https://s3.polygon.io/logos/aapl/logo.png",
            _id: "101a"
        },
        {
            name: "Analog Devices Inc",
            symbol: "ADI",
            country: "usa",
            employees: "15300",
            logo: "https://s3.polygon.io/logos/adi/logo.png",
            _id: "102a"
        },
        {
            name: "Automatic Data Processing Inc.",
            symbol: "ADP",
            country: "usa",
            employees: "57000",
            logo: "https://s3.polygon.io/logos/adp/logo.png",
            _id: "103a"

        },

        {
            name: "Amyris Inc.",
            symbol: "AMRS",
            country: "usa",
            employees: "414",
            logo: "https://s3.polygon.io/logos/amrs/logo.png",
            _id: "104a"
        }, {
            country: "usa",
            logo: "https://s3.polygon.io/logos/cmct/logo.png",
            name: "CIM Commercial Trust Corporation",
            symbol: "CMCT",
            _id: "QV23p5",

        }, {
            country: "usa",
            employees: '820',
            logo: "https://s3.polygon.io/logos/kequ/logo.png",
            name: "Kewaunee Scientific Corporation",
            symbol: "KEQU",
            _id: "Z5AYPI",
        },
        {
            country: "usa",
            employees: '1176',
            logo: "https://s3.polygon.io/logos/cwt/logo.png",
                name: "California Water Service Group",
            symbol: "CWT",
            _id: "guSDQG",
        },
        {
            country: "usa",
            employees: '37205',
            logo: "https://s3.polygon.io/logos/casy/logo.png",
            name: "Caseys General Stores Inc.",
            symbol: "CASY",
            _id: "5EVRDV",

        },
        {
            country: "usa",
            employees: '945',
            logo: "https://s3.polygon.io/logos/cpk/logo.png",
            name: "Chesapeake Utilities Corporation",
            symbol: "CPK",
            _id: "T8Md9c",
        }
        ]
        //collection = ['ARBE','P', 'AAPL', 'ADI', 'ADP', 'FB', 'TSLA', 'AEP', 'AMGN', 'TWTR', 'GOOGL',]
        utilService.storeToStorage(collectionName, collection);
    }
    return Promise.resolve(collection);
}



async function get(collectionName, id) {
    var collection = await query(collectionName);
    return collection.find(curr => curr[ID_FIELD] === id);
}

async function remove(collectionName, id) {
    var collection = await query(collectionName);
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id);
    if (idx === -1) throw new Error('something went wrong');
    collection.splice(idx, 1);

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    var collection = await query(collectionName);
    item[ID_FIELD] = utilService.makeId()
    collection.push(item);
    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function put(collectionName, item) {
    var collection = await query(collectionName);
    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD]);
    if (idx === -1) throw new Error('something went wrong');
    collection[idx] = item;

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve(item);
}

async function insert(collectionName, items) {
    var collection = await query(collectionName);
    items.forEach(curr => curr[ID_FIELD] = utilService.makeId());
    collection.push(...items);

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve();
}
