import {
    createSlice
} from "@reduxjs/toolkit";

const { dataHeader, dataBody, dataColor } = window.teamplate;

export const teamplate = createSlice({
    name: "teamplate",
    initialState: {
        isDesktop: true,
        openSidebar: false,
        color: {
            current: "#efa697",
            list: dataColor
        },
        header: {
            open: false,
            list: dataHeader,
            current: dataHeader[1]
        },
        box: {
            open: false,
            list: dataBody
        },
        layout: [
            ...dataBody
        ]
    },
    reducers: {
        updateIsDesktop: (state, action) => {
            return {
                ...state,
                isDesktop: action.payload
            }
        },
        openHeader: (state, action) => {
            return {
                ...state,
                openSidebar: true,
                header: {
                    ...state.header,
                    open: true
                },
                box: {
                    ...state.box,
                    open: false
                }
            }
        },
        hideHeader: (state, action) => {
            return {
                ...state,
                openSidebar: false,
                header: {
                    ...state.header,
                    open: false,
                }
            }
        },
        changeHeader: (state, action) => {
            return {
                ...state,
                header: {
                    ...state.header,
                    current: action.payload
                }
            }
        },
        openBox: (state, action) => {
            return {
                ...state,
                openSidebar: true,
                box: {
                    ...state.box,
                    open: true
                },
                header: {
                    ...state.header,
                    open: false
                }
            }
        },
        hideBox: (state, action) => {
            return {
                ...state,
                openSidebar: false,
                box: {
                    ...state.box,
                    open: false
                }
            }
        },
        setColor: (state, action) => {
            return {
                ...state,
                color: {
                    ...state.color,
                    current: action.payload
                }
            }
        }
    },
});

export const {
    updateIsDesktop,
    openHeader,
    hideHeader,
    changeHeader,
    openBox,
    hideBox,
    setColor
} = teamplate.actions;