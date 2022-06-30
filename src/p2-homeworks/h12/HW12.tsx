import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC, ThemeStateType } from "./bll/themeReducer";
import s from "./HW12.module.css";

function HW12() {
    const theme = useSelector<AppStoreType, ThemeStateType>(state => state.theme); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        switch (theme) {
            case 'dark': {
                dispatch(changeThemeAC(theme))
                return
            }
            case 'red': {
                dispatch(changeThemeAC(theme))
                return
            }
            default: dispatch(changeThemeAC('light'))
        }

    }

    return (
        <div className={`wrapper ${s[theme]} ${theme === 'dark' ? 'dark' : ''}`}>
            <span className={`subtitle ${s[theme + '-text']}`}>
                homeworks 12
            </span><br /><br /><br />
            <SuperRadio options={['dark', 'red', 'light']} value={theme} onChangeOption={onChangeCallback} />
        </div>
    );
}

export default HW12;
