import React from "react";
import Schedule from "./views/pages/mainPage/Schedule";
import Daytimedev from "./views/pages/mainPage/Daytimedev";
import Album from "./views/pages/album/album";
import Chat from "./views/pages/chatting/chat";
import Stat from "./views/pages/mainPage/Daytimedev";
const SidebarClendar = React.lazy(() =>
  import("./views/pages/navCalendar/SidebarCalendar")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/Album", exact: true, name: "Album", component: Album },
  { path: "/Chat", exact: true, name: "Chat", component: Chat },
  { path: "/main", exact: true, name: "Main", component: Schedule },
  { path: "/dev", exact: true, name: "DEV", component: Daytimedev },
  { path: "/dev", exact: true, name: "DEV", component: Daytimedev },
  
];
export default routes;
