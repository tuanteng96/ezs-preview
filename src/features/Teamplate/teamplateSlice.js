import { createSlice } from "@reduxjs/toolkit";

export const teamplate = createSlice({
    name: "teamplate",
    initialState: {
        isDesktop: true,
        openSidebar: false,
        header: {
            open: false
        }
    },
    reducers: {
        updateIsDesktop: (state, action) => {
            return {...state, isDesktop: action.payload }
        },
        toggleHeader: (state, action) => {
            return {...state, openSidebar: true, header: {...state.header, open: !state.header.open } }
        },
    },
});

export const { updateIsDesktop, toggleHeader } = teamplate.actions;