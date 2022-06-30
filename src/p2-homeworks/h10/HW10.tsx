import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import spinner from '../../assets/spinner.svg'
import { useDispatch, useSelector } from 'react-redux';
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';

function HW10() {

    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <div className='wrapper'>
                <h3 className='subtitle'>
                    homeworks 10
                </h3>
                <div>
                    {isLoading
                        ? (
                            <div><img src={spinner} alt="" /></div>
                        ) : (
                            <div>
                                <SuperButton onClick={setLoading}>set loading...</SuperButton>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HW10
