import {
    createSlice
} from "@reduxjs/toolkit";
import { arrayMove } from "../../_ezs/_helpers/HelpersArray";

const {
    dataHeader,
    dataBody,
    dataFooter,
    dataColor
} = window.teamplate;

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
        footer: {
            current: dataFooter[0]
        },
        box: {
            open: false,
            list: dataBody
        },
        layout: [
            dataBody[0],
            dataBody[2],
            dataBody[3],
            dataBody[5]
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
        },
        onPosition: (state, action) => {
            const {
                Type,
                index
            } = action.payload;
            let newLayout = [];
            const cloneState = JSON.parse(JSON.stringify(state));
            if (Type === "up") {
                if (index === 0) newLayout = state.layout;
                else {
                    newLayout = arrayMove(cloneState.layout, index, index - 1);
                }
            }
            else {
                if (index === state.layout.length - 1) newLayout = state.layout;
                else {
                    newLayout = arrayMove(cloneState.layout, index, index + 1);
                }
            }
            return {
                ...state, layout: newLayout
            };
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
    setColor,
    onPosition
} = teamplate.actions;