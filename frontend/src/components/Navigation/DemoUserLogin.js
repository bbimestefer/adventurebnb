import React from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from "../../store/session";

function DemoUserLogin() {
    const credential = 'commonUser'
    const password = 'password'
    const dispatch = useDispatch()
    const demoLogin = () => {
        dispatch(sessionActions.login({ credential, password }))
    }
    return (
        <div>
        <button onClick={demoLogin}>Demo User</button>
        </div>
    )
}

export default DemoUserLogin
