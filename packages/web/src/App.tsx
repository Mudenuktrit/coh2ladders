import React from "react";
import { Layout } from "antd";
import "./App.css";
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect, Route, Switch } from "react-router-dom";
import { CommanderDetails } from "./pages/commanders/commanders";
import { CommandersList } from "./pages/commanders/commandersList";
import { RacePicker } from "./pages/commanders/racePicker";
import { BulletinList } from "./pages/commanders/bulletinList";
import Stats from "./pages/stats";
import { MainFooter } from "./components/main-footer";
import routes from "./routes";
import { MainHeader } from "./components/main-header";
import About from "./pages/about";
import { LastMatchesTable } from "./pages/matches/lastMatchesTable";
import LastMatchesTableRelic from "./pages/matches/lastMatchesTableRelic";
import CustomSearch from "./pages/search";
import { BetaVersion } from "./components/beta-version";

const { Content } = Layout;

const App: React.FC = () => {
  useFirestoreConnect([
    {
      collection: "stats",
      doc: "global",
      storeAs: "globalStats",
    },
  ]);

  return (
    <div className="App">
      <Layout className="layout">
        <MainHeader />
        <Content>
          <Switch>
            <Route path={"/"} exact={true}>
              <Redirect to="/stats" />
            </Route>
            <Route path={routes.fullStatsDetails()}>
              <Stats />
            </Route>
            <Route path={"/stats"}>
              <Stats />
            </Route>
            <Route path={routes.commanderByID()}>
              <CommanderDetails />
            </Route>
            <Route path={routes.commanderList()}>
              <CommandersList />
            </Route>
            <Route path={routes.commanderBase()}>
              <RacePicker />
            </Route>
            <Route path={routes.aboutBase()}>
              <About />
            </Route>
            <Route path={routes.bulletinsBase()}>
              <BulletinList />
            </Route>
            <Route path={routes.searchWithParam()}>
              <CustomSearch />
            </Route>
            <Route path={routes.searchBase()}>
              <CustomSearch />
            </Route>
            <Route path={"/test"}>
              <LastMatchesTable />
            </Route>
            <Route path={"/testrelic"}>
              <LastMatchesTableRelic />
            </Route>
          </Switch>
        </Content>
        <MainFooter />
      </Layout>
      <BetaVersion />
    </div>
  );
};

export default App;
