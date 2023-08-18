import { Redirect, Route, Router, Switch } from 'wouter-preact'
import { ToastContainer } from 'react-toastify'
import EmailScreen from 'components/screens/EmailScreen'
import MainBlock from 'components/screens/MainScreen'
import Root from 'components/Root'
import TokenScreen from 'components/screens/TokenScreen'
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
          <Route
            component={({ params }) => <TokenScreen {...params} />}
            path="/token/:token"
          />
          <Route path="">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Root>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  )
}
