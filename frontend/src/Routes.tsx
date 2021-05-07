import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from 'Pages/Home'
import Dashboard from 'Pages/DashBoards'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                <Home/>
                </Route>
                <Route path="/dashboard" exact>
                <Dashboard/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes