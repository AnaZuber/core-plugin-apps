import { Plugin } from "../../core/context";
import { Blinds } from "./bedroom/Blinds";
import { Temperature } from "./bedroom/Temperature";

export function getPluginDefinition(): Plugin {
  return {
    id: '3',
    menuItems: [
      {
        label: "Second floor",
        path: "/second-floor",
        menuItems: [
          {
            label: "Bedroom",
            path: "/second-floor/bedroom",
            icon: "bedRoom",
            menuItems: [
              {
                label: "Blinds",
                path: "/second-floor/bedroom/blinds",
                icon: "blinds"
              },
              {
                label: "Temperature",
                path: "/second-floor/bedroom/temperature",
                icon: "thermostat"
              },
            ]
          },
          {
            label: "Bathroom",
            path: "/second-floor/bathroom",
            icon: "bathroom",
          }
        ],
      },

    ],
    pages: [
      {
        component: <Blinds />,
        path: "/second-floor/bedroom/blinds"
      },
      {
        component: <Temperature />,
        path: "/second-floor/bedroom/temperature"
      },
    ]
  }
}