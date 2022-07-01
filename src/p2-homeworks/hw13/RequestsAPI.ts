import { AnyAction, Dispatch } from "redux";
//Init state
const initState: initStateType = {
    isChecked: false,
    errorText: '',
    info: ''
}
//API
const requestsApi = (success: boolean) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success })
    };
    return fetch('https://neko-cafe-back.herokuapp.com/auth/test', requestOptions)
}
//REDUCER
export const H13_Reducer = (state: initStateType = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case 'HW13/SET-RESPONSE-VALUES': return { ...state, errorText: action.data.errorText, info: action.data.info }
        case 'HW13/CHANGE-CHECKBOX-VALUE': return { ...state, isChecked: action.value }
        default: return state
    }
}
//AC
const setResponseMessagesAC = (data: initStateType) => (
    {
        type: 'HW13/SET-RESPONSE-VALUES',
        data
    } as const
)
export const changeCheckAC = (value: boolean) => (
    {
        type: 'HW13/CHANGE-CHECKBOX-VALUE',
        value
    } as const
)
//TC 
export const getResponseTC = (value: boolean) => (dispatch: Dispatch<ActionType>) => {
    requestsApi(value)
        .then(res => res.json())
        .then(data => {
            dispatch(setResponseMessagesAC(data))
        })
        .catch(error => {
            dispatch(setResponseMessagesAC(error.json()))
        })
}
//TYPES
type ActionType = ReturnType<typeof setResponseMessagesAC> | ReturnType<typeof changeCheckAC>
type initStateType = { errorText: string, info: string, isChecked: boolean }

