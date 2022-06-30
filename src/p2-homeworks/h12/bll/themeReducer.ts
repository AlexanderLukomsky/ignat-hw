const initState: ThemeStateType = 'light'

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': return action.theme
        default: return state
    }
}

export const changeThemeAC = (theme: ThemeStateType) => (
    {
        type: 'CHANGE-THEME',
        theme
    } as const
)

type ActionType = ReturnType<typeof changeThemeAC>
export type ThemeStateType = 'dark' | 'red' | 'light'