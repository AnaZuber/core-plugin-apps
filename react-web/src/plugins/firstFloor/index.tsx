import { Plugin } from "../../core/context";
import { Blinds } from "./living-room/Blinds";
import { TvPlugin } from "./living-room/TvPlugin";
import { Locks } from "./Locks";
import { Plugs } from "./Plugs";
import { Temperature } from "./living-room/Temperature";
import { VacuumPlugin } from "./living-room/VacuumPlugin";
import { DryerMachine } from "./bathroom/DryerMachine";
import { WashingMachine } from "./bathroom/WashingMachine";

export function getPluginDefinition(): Plugin {
  return {
    id: '3',
    menuItems: [
      {
        label: "First floor",
        path: "/first-floor",
        menuItems: [
          {
            label: "Living room",
            path: "/first-floor/living-room",
            icon: "livingRoom",
            menuItems: [
              {
                label: "Plugs",
                path: "/first-floor/living-room/plugs",
                icon: "power"
              },
              {
                label: "Locks",
                path: "/first-floor/living-room/locks",
                icon: "lock"
              },
              {
                label: "Blinds",
                path: "/first-floor/living-room/blinds",
                icon: "blinds"
              },
              {
                label: "Temperature",
                path: "/first-floor/living-room/temperature",
                icon: "thermostat"
              },
              {
                label: "Tv",
                path: "/first-floor/living-room/tv",
                icon: "tv"
              },
              {
                label: "Vacuum",
                path: "/first-floor/living-room/vacuum",
                icon: "vacuumIcon"
              },
            ],
          },
          {
            label: "Bathroom",
            path: "/first-floor/bathroom",
            icon: "bathroom",
            menuItems: [
              {
                label: "Washing Machine",
                path: "/first-floor/bathroom/washingMachine",
                icon: "washingMachine"
              },
              {
                label: "Dryer Machine",
                path: "/first-floor/bathroom/dryerMachine",
                icon: "dryerMachine"
              },
            ],
          }
        ],
      },
    ],
    pages: [
      {
        component: <TvPlugin />,
        path: "/first-floor/living-room/tv"
      },
      {
        component: <Plugs />,
        path: "/first-floor/living-room/plugs"
      },
      {
        component: <Locks />,
        path: "/first-floor/living-room/locks"
      },
      {
        component: <Blinds />,
        path: "/first-floor/living-room/blinds"
      },
      {
        component: <Temperature />,
        path: "/first-floor/living-room/temperature"
      },
      {
        component: <VacuumPlugin />,
        path: "/first-floor/living-room/vacuum"
      },
      {
        component: <DryerMachine />,
        path: "/first-floor/bathroom/dryerMachine",
      },
      {
        component: <WashingMachine />,
        path: "/first-floor/bathroom/washingMachine",
      },
    ]
  }
}