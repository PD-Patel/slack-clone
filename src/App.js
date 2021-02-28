import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import db, { auth } from "./firebase";
import { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
function App() {
  const [theme] = useStateValue();
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };

  useEffect(() => {
    const getChannels = () => {
      db.collection("rooms").onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => {
            return { id: doc.id, name: doc.data().name };
          })
        );
      });
    };
    getChannels();
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />

              <Switch>
                <Route path="/room/:channelId" exact>
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  <div
                    className="select__channel"
                    style={{
                      backgroundColor:
                        theme.theme === "dark"
                          ? "rgb(26, 29, 33)"
                          : theme.theme === "crystal"
                          ? "white"
                          : "white",

                      color: theme.theme === "dark" ? "white" : "black",
                    }}
                  >
                    <p id="title__to__select">Select or Create Channel</p>
                  </div>
                </Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
