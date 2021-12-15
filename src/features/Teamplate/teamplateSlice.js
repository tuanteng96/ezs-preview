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
        choose: {
            index: null,
            position: null
        },
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
            open: false,
            list: dataFooter,
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
                footer: {
                    ...state.footer,
                    open: false
                },
                box: {
                    ...state.box,
                    open: false
                },
                choose: {
                    index: null,
                    position: null
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
                },
                choose: {
                    index: null,
                    position: null
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
        openFooter: (state, action) => {
            return {
                ...state,
                openSidebar: true,
                header: {
                    ...state.header,
                    open: false
                },
                footer: {
                    ...state.footer,
                    open: true
                },
                box: {
                    ...state.box,
                    open: false
                },
                choose: {
                    index: null,
                    position: null
                }
            }
        },
        hideFooter: (state, action) => {
            return {
                ...state,
                openSidebar: false,
                footer: {
                    ...state.footer,
                    open: false,
                },
                choose: {
                    index: null,
                    position: null
                }
            }
        },
        changeFooter: (state, action) => {
            return {
                ...state,
                footer: {
                    ...state.footer,
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
                },
                choose: {
                    index: null,
                    position: null
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
                },
                choose: {
                    index: null,
                    position: null
                }
            }
        },
        changeBox: (state, action) => {
            const { item, choose } = action.payload;
            const cloneState = JSON.parse(JSON.stringify(state));
            if (choose.index && choose.index !== 0) {
                if (choose.position === "bottom") {
                    cloneState.layout.splice(choose.index, 0, item);
                } else {
                    cloneState.layout.splice(choose.index - 1, 0, item);
                }
            } else {
                cloneState.layout.splice(0, 0, item);
            }
            return cloneState;
        },
        deleteBox: (state, action) => {
            return {
                ...state,
                layout: state.layout.filter((item, index) => index !== action.payload)
            };
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
            } else {
                if (index === state.layout.length - 1) newLayout = state.layout;
                else {
                    newLayout = arrayMove(cloneState.layout, index, index + 1);
                }
            }
            return {
                ...state,
                layout: newLayout
            };
        },
        addPosition: (state, action) => {
            const { index, positon } = action.payload;
            return {
                ...state,
                openSidebar: true,
                choose: {
                    index: index,
                    position: positon
                },
                box: {
                    ...state.box,
                    open: true
                },
                header: {
                    ...state.header,
                    open: false
                },
                footer: {
                    ...state.footer,
                    open: false
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
    openFooter,
    hideFooter,
    changeFooter,
    openBox,
    hideBox,
    changeBox,
    deleteBox,
    setColor,
    onPosition,
    addPosition
} = teamplate.actions;