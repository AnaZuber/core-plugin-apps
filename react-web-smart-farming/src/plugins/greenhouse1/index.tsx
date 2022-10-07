import { Plugin } from "../../core/context";
import { Dashboard } from "./Dashboard";
import { Locks } from "./Locks";
import { Temperature } from "./Temperature";
import { Ventilation } from "./Ventilation";
import { Watering } from "./Watering";

export function getPluginDefinition(): Plugin {
  return {
    id: '1',
    menuItems: [
      {
        label: "Greenhouse1",
        path: "/greemhouse-1",
        icon: "greenhouse",
        menuItems: [
          {
            label: "Dashboard",
            path: "/greenhouse-1/dashboard",
          },
          {
            label: "Salad",
            path: "/greenhouse-1/salad",
            icon: 'salad',
            menuItems: [
              {
                label: "Temperature",
                path: "/greenhouse-1/salad/temperature",
                icon: 'thermostat'
              }
            ],
          },
          {
            label: "Locks",
            path: "/greenhouse-1/locks",
            icon: 'lock',
          },
          {
            label: "Ventilation",
            path: "/greenhouse-1/ventilation",
            icon: 'ventilation',
          },
          {
            label: "Watering",
            path: "/greenhouse-1/watering",
            icon: 'watering',
          },
        ],
      },

    ],
    pages: [
      {
        component: <Dashboard />,
        path: "/greenhouse-1/dashboard"
      },
      {
        component: <Temperature />,
        path: "/greenhouse-1/salad/temperature"
      },
      {
        component: <Locks />,
        path: "/greenhouse-1/locks"
      },
      {
        component: <Ventilation />,
        path: "/greenhouse-1/ventilation"
      },
      {
        component: <Watering />,
        path: "/greenhouse-1/watering"
      },
    ]
  }
}