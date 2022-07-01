export type initStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: ActionTypes): initStateType => {
    switch (action.type) {
        case 'LOADING': {
            return { ...state, isLoading: action.isLoading }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => (
    {
        type: 'LOADING',
        isLoading
    } as const
)
type ActionTypes = ReturnType<typeof loadingAC>