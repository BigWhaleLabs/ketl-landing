import { Redirect, Route, Router, Switch } from 'wouter-preact'
import DownloadApp from 'components/screens/DownloadApp'
import EmailScreen from 'components/screens/EmailScreen'
import MainBlock from 'components/screens/MainScreen'
import Root from 'components/Root'
import useHashLocation from 'hooks/useHashLocation'

export default function () {
  return (
    <Router hook={useHashLocation}>
      <Root>
        <Switch>
          <Route component={MainBlock} path="/" />
          <Route
            component={({ params }) => <EmailScreen {...params} />}
            path="/email/:domain/:token"
          />
          <Route component={DownloadApp} path="/app" />
          <Route path="">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Root>
    </Router>
  )
}
