import { Route, Router, Switch } from 'wouter-preact'
import { ToastContainer } from 'react-toastify'
import EmailScreen from 'components/screens/EmailScreen'
import MainBlock from 'components/screens/MainScreen'
import Root from 'components/Root'
import TokenScreen from 'components/screens/TokenScreen'
import WaitlistScreen from 'components/screens/WaitlistScreen'
import useHashLocation from 'hooks/useHashLocation'

export default function () {
  return (
    <Router hook={useHashLocation}>
      <Root>
        <Switch>
          <Route
            component={({ params }) => <EmailScreen {...params} />}
            path="/email/:domain/:token"
          />
          <Route
            component={({ params }) => <TokenScreen {...params} />}
            path="/token/:token"
          />
          <Route
            component={({ params }) => <WaitlistScreen {...params} />}
            path="/waitlist/:verificationType/:attestationType/:anonCode/:context"
          />
          <Route
            component={({ params }) => <WaitlistScreen {...params} />}
            path="/waitlistPassed/:id/:inviteCode?"
          />
          <Route component={MainBlock} />
        </Switch>
      </Root>
      <ToastContainer limit={3} position="bottom-right" theme="light" />
    </Router>
  )
}
