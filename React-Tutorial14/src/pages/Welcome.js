import { Route } from "react-router-dom";

const Welcome = () => {
  // path='/products/...' can't be executed because we are not in '/products' page... but path='/welcome/...' can be executed
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
