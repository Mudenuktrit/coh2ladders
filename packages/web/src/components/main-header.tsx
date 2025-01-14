import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Menu, Space } from "antd";
import routes from "../routes";
import { useHistory, useRouteMatch } from "react-router";
import { PlayerSearchInput } from "./header-search";

const pageTitleSwitch = (path: string) => {
  const baseTitle = "COH2";

  let setTitle = "COH2 Statistics";

  switch (path) {
    case routes.commanderBase():
      setTitle = `${baseTitle} Commanders`;
      break;
    case routes.statsBase():
      setTitle = `${baseTitle} Statistics and Charts`;
      break;
    case routes.bulletinsBase():
      setTitle = `${baseTitle} Bulletins`;
      break;
  }

  document.title = setTitle;
};

export const MainHeader: React.FC = () => {
  const { push } = useHistory();

  const commandersMatch = useRouteMatch({
    path: routes.commanderBase(),
  });

  const statsMatch = useRouteMatch({
    path: routes.statsBase(),
  });

  const aboutMatch = useRouteMatch({
    path: routes.aboutBase(),
  });

  const bulletinsMatch = useRouteMatch({
    path: routes.bulletinsBase(),
  });

  let pathMatch = commandersMatch || statsMatch || aboutMatch || bulletinsMatch;
  const currentPath = pathMatch?.path || "";
  pageTitleSwitch(currentPath);

  const onMenuClick = (item: Record<string, any>) => {
    push(item.key);
  };

  const onTitleClick = () => {
    push("");
  };

  return (
    <Header style={{ height: "auto" }}>
      <PlayerSearchInput />
      <Space direction={"horizontal"} size={"large"}>
        <div
          onClick={onTitleClick}
          style={{
            color: "whitesmoke",
            fontSize: "x-large",
            fontFamily: "sans-serif",
            cursor: "pointer",
          }}
        >
          CoH 2 Logs & Stats
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentPath]}
          defaultSelectedKeys={[currentPath]}
        >
          <Menu.Item key={routes.statsBase()} onClick={onMenuClick}>
            Stats
          </Menu.Item>
          <Menu.Item disabled={true} key="8" onClick={onMenuClick}>
            Players
          </Menu.Item>
          <Menu.Item disabled={true} key="9" onClick={onMenuClick}>
            Matches
          </Menu.Item>
          <Menu.Item disabled={true} key="11" onClick={onMenuClick}>
            Leaderboards
          </Menu.Item>
          <Menu.Item key={routes.commanderBase()} onClick={onMenuClick}>
            Commanders
          </Menu.Item>
          <Menu.Item key={routes.bulletinsBase()} onClick={onMenuClick}>
            Intel Bulletins
          </Menu.Item>
          <Menu.Item key={routes.aboutBase()} onClick={onMenuClick}>
            About
          </Menu.Item>
        </Menu>
      </Space>
    </Header>
  );
};
