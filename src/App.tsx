import { Route, Router, Switch } from 'wouter-preact'
import { ToastContainer } from 'react-toastify'
import EmailScreen from 'components/screens/EmailScreen'
import MainBlock from 'components/screens/MainScreen'
import PostViewScreen from 'components/screens/PostViewScreen'
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
            component={({ params }) => <PostViewScreen {...params} />}
            path="/post/:feedId/:postId"
          />
          <Route
            component={({ params }) => <TokenScreen {...params} />}
            path="/token/:token"
          />
          <Route
            component={({ params }) => <WaitlistScreen {...params} />}
            path="/waitlist/:attestationType/:verificationType/:context?"
          />
          <Route component={MainBlock} />
        </Switch>
      </Root>
      <ToastContainer limit={3} position="bottom-right" theme="light" />
    </Router>
  )
}
