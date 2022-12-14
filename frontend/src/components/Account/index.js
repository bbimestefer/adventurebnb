// import { useEffect } from "react"
import { NavLink, Route, Switch } from "react-router-dom"
import EditUserSpot from "./EditUserSpot"
import Profile from "./Profile"
import SpotsOfUser from './SpotsOfUser'
import UserReviews from "./UserReviews"

export default function Account () {

    // useEffect(() => {
    //     // dispatch the get current reviews or users with if statement
    // })


    return (
        <div style={{'display':'flex', "justifyContent":"space-around", "width":"50%" }}>
            <div>
                <nav style={{'display':'flex', 'flexDirection':'column', "gap":"25px", "marginTop":"10px" }}>
                    <NavLink style={{"borderBottom":"lightGray 1px solid"}} to={'/account'}>Profile</NavLink>
                    <NavLink style={{"borderBottom":"lightGray 1px solid"}} to={'/account/spots'}>Spots</NavLink>
                    <NavLink style={{"borderBottom":"lightGray 1px solid"}} to={'/account/reviews'}>Reviews</NavLink>
                </nav>
            </div>
            <div>

            <Switch>
                <Route exact path='/account'>
                    <Profile />
                </Route>
                <Route exact path='/account/spots'>
                    <SpotsOfUser />
                </Route>

                <Route path='/account/reviews'>
                    <UserReviews />
                </Route>

                <Route path='/account/spots/edit/:id'>
                    <EditUserSpot />
                </Route>
            </Switch>
            </div>


        </div>
    )
}
