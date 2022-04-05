export type UserType = { _id: number, name: string, age: number }
export type SortActionType = {
    type: 'sort',
    payload: 'up' | 'down'
}
export type CheckActionType = {
    type: 'check',
    payload: number
}
type ActionType = SortActionType | CheckActionType
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up': return [...state.sort((a, b) => a.name.localeCompare(b.name))]
                case 'down': return [...state.sort((a, b) => b.name.localeCompare(a.name))]
            }
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}