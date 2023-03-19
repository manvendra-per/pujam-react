import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan, signoutRequest } from "./api";
import { home, banner } from './../Constants/urls';

const slice = createSlice({
    name: 'details',
    initialState: {
        lists: [],
        bannerLists: [],
    },
    reducers: {
        // actions handler
        detailsReceive: (detail, action) => {
            detail.lists = [action.payload];
        },
        bannerReceive: (detail, action) => {
            detail.bannerLists = action.payload
        }
    }
})

const { detailsReceive, bannerReceive } = slice.actions;
export default slice.reducer;

// Action Creators
export const receiveDetails = () => (dispatch) => {

    dispatch(
        apiCallBegan({
            url: home,
            method: 'get',
            onSuccess: detailsReceive.type,
        })
    );
}

export const receiveBanner = () => dispatch => {
    dispatch(
        apiCallBegan({
            url: banner,
            method: 'get',
            onSuccess: bannerReceive.type
        })
    )
}


// selector
export const getWorship = createSelector(
    state => state.entities.details,
    details => details?.lists[0]?.data.worship
)

export const getFeatured = createSelector(
    state => state.entities.details,
    details => details?.lists[0]?.data.featured
)

export const getBannerDetails = createSelector(
    state => state.entities.details,
    details => details.bannerLists?.data 
)
