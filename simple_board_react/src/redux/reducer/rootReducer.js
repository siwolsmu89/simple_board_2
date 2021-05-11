import spinning from "./spinnerReducer";

const initialState = {
    spinning: false
};

export default function reducer(state=initialState, action) {
    return {
        spinning: spinning(state, action)
    };
}