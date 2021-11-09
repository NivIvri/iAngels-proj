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
        collection = ['ARBE', 'AAPL', 'ADI', 'ADP', 'FB', 'TSLA', 'AEP', 'AMGN', 'TWTR', 'GOOGL',]
        utilService.storeToStorage(collectionName, collection);
    }
    return Promise.resolve(collection);
}

async function get(collectionName, id) {
    var collection = await query(collectionName);
    return collection.find(curr => curr[ID_FIELD] === id);
}

async function remove(collectionName, id) {
    //debugger; // eslint-disable-line no-debugger
    var collection = await query(collectionName);
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id);
    if (idx === -1) throw new Error('something went wrong');
    collection.splice(idx, 1);

    utilService.storeToStorage(collectionName, collection);
    return Promise.resolve();
}

async function post(collectionName, item) {
    var collection = await query(collectionName);
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
