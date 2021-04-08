import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HomeScreen, WatchedScreen, FavouriteScreen, SearchSecreen } from './screens'

export const App = () => {
  return (
    <>
       <Router>
                <Switch>
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/watched' exact component={WatchedScreen} />
                    <Route path='/favourite' exact component={FavouriteScreen} />
                    <Route path='/search' exact component={SearchSecreen}/>
                </Switch>
            </Router>
    </>
  )
}
