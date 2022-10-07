import { Plugin } from "../../core/context";

export function getPluginDefinition(): Plugin {
  return {
    id: '2',
    menuItems: [
      {
        label: "Greenhouse2",
        path: "/greemhouse-2",
        icon: "greenhouse",
        menuItems: [
          {
            label: "Flower",
            path: "/greenhouse/flower",
            icon: 'flower'
          }
        ],
      },

    ],
    pages: [
    ]
  }
}