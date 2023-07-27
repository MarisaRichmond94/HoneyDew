import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";

const App: FC = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <div>Loading...</div>

  return (
    <div id='page'>

    </div>
  )
};

export default App;
