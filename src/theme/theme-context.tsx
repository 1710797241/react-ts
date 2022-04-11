import * as React from 'react';
const themes = {
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
};
type IRgbState = {
    r: number;
    g: number;
    b: number;
};
type IRgbAction = {
    type: 'set';
    paylod: IRgbState;
};
export type IRgbContext = IRgbState & {
    dispatch?: React.Dispatch<IRgbAction>;
};
const initState: IRgbState = {
    r: 0,
    g: 0,
    b: 0,
};
const initContext: IRgbContext = {
    ...initState,
};
const rgbReducer = (state: IRgbState, action: IRgbAction) => {
    switch (action.type) {
        case 'set':
            console.log('action', action);
            return {
                ...state,
                r: action.paylod.r,
                g: action.paylod.g,
                b: action.paylod.b,
            };
        default:
            return state;
    }
};
export const ThemeContext = React.createContext<IRgbContext>(initState as IRgbContext);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [rgb, dispatch] = React.useReducer(rgbReducer, initState);

    return <ThemeContext.Provider value={{ ...rgb, dispatch }}>{children}</ThemeContext.Provider>;
};
export const ThemeConsumer = ThemeContext.Consumer;
