import { Plugin } from "../../core/context";
import { Dashboard } from "./Dashboard";

export function getPluginDefinition(): Plugin {
  return {
    id: '2',
    menuItems: [
      {
        label: "Dashboard",
        path: "/dashboard"
      },
    ],
    pages: [

      {
        component: <Dashboard />,
        path: "/dashboard"
      }
    ]
  }
}