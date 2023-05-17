import { Redirect, Route, Router, Switch } from 'wouter-preact'
import EmailScreen from 'components/EmailScreen'
import MainBlock from 'components/MainScreen'
import Root from 'components/Root'

export default function () {
  return (
    <Router>
      <Root>
        <Switch>
          <Route component={MainBlock} path="/" />
          <Route
            component={({ params }) => <EmailScreen {...params} />}
            path="/email/:domain/:token"
          />
          <Route path="">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Root>
    </Router>
  )
}
