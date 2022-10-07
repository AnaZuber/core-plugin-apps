import { Plugin } from "../../core/context";
import { Blinds } from "./Blinds";
import { Locks } from "./Locks";
import { Plugs } from "./Plugs";

export function getPluginDefinition(): Plugin {
  return {
    id: '4',
    menuItems: [
      {
        label: "Garage",
        path: "/garage",
        menuItems: [
          {
            label: "Plugs",
            path: "/garage/plugs",
            icon: "power"
          },
          {
            label: "Locks",
            path: "/garage/locks",
            icon: "lock"
          },
          {
            label: "Blinds",
            path: "/garage/blinds",
            icon: "blinds"
          },
        ]
      },
    ],
    pages: [
      {
        component: <Plugs />,
        path: "/garage/plugs"
      },
      {
        component: <Locks />,
        path: "/garage/locks"
      },
      {
        component: <Blinds />,
        path: "/garage/blinds"
      },
    ]
  }
}