import { takeLatest, call, put, all } from 'redux-saga/effects';

import {  firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import {
    fetchCollectionsFailure,
    fetchCollectionsSucess
} from './shop.actions.js';

import ShopActionTypes from './shop.types.js';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        console.log("collectionKey: ", collectionRef)
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSucess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
};

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}