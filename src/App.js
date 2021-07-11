import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

import ProtectedRoute from "./helpers/ProtectedRoute";
import IsUserLoggedIn from "./helpers/IsUserLoggedIn";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Post = lazy(() => import("./pages/Post"));
const NotFound = lazy(() => import("./pages/NotFound"));
const UploadPost = lazy(() => import("./pages/UploadPost"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider basename="/instagram_clone" value={{ user }}>
      <Router>
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            {/* login */}
            <IsUserLoggedIn
              user={user}
              path={ROUTES.LOGIN}
              loggedInPath={ROUTES.DASHBOARD}
            >
              <Login />
            </IsUserLoggedIn>
            {/* sign-up */}
            <IsUserLoggedIn
              user={user}
              path={ROUTES.SIGN_UP}
              loggedInPath={ROUTES.DASHBOARD}
            >
              <Signup />
            </IsUserLoggedIn>
            {/* post */}
            <ProtectedRoute user={user} path={ROUTES.UPLOAD_POST} exact>
              <UploadPost />
            </ProtectedRoute>
            {/* dashboard */}
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            {/* profile */}
            <Route path={ROUTES.PROFILE} component={Profile} />
            {/* post */}
            <Route path={ROUTES.POST} component={Post} />
            {/* not-found */}
            <Route user={user} component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
