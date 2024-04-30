import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-CN/__docusaurus/debug',
    component: ComponentCreator('/zh-CN/__docusaurus/debug', '2c8'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/config',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/config', '6ac'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/content',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/content', 'cd3'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/globalData',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/globalData', 'fc7'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/metadata',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/metadata', '80d'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/registry',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/registry', '191'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/routes',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/routes', '15c'),
    exact: true
  },
  {
    path: '/zh-CN/markdown-page',
    component: ComponentCreator('/zh-CN/markdown-page', '96c'),
    exact: true
  },
  {
    path: '/zh-CN/showcase',
    component: ComponentCreator('/zh-CN/showcase', 'fc6'),
    exact: true
  },
  {
    path: '/zh-CN/docs',
    component: ComponentCreator('/zh-CN/docs', '115'),
    routes: [
      {
        path: '/zh-CN/docs/introduction',
        component: ComponentCreator('/zh-CN/docs/introduction', 'a30'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/nodes',
        component: ComponentCreator('/zh-CN/docs/nodes', '820'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/akash',
        component: ComponentCreator('/zh-CN/docs/Nodes/akash', '822'),
        exact: true
      },
      {
        path: '/zh-CN/docs/Nodes/avalanche',
        component: ComponentCreator('/zh-CN/docs/Nodes/avalanche', 'c2f'),
        exact: true
      },
      {
        path: '/zh-CN/docs/Nodes/axie',
        component: ComponentCreator('/zh-CN/docs/Nodes/axie', 'e25'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/cosmos',
        component: ComponentCreator('/zh-CN/docs/Nodes/cosmos', '34a'),
        exact: true
      },
      {
        path: '/zh-CN/docs/Nodes/ethereum',
        component: ComponentCreator('/zh-CN/docs/Nodes/ethereum', '5a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/horizen',
        component: ComponentCreator('/zh-CN/docs/Nodes/horizen', '219'),
        exact: true
      },
      {
        path: '/zh-CN/docs/Nodes/matic',
        component: ComponentCreator('/zh-CN/docs/Nodes/matic', 'c3d'),
        exact: true
      },
      {
        path: '/zh-CN/docs/Nodes/mixin',
        component: ComponentCreator('/zh-CN/docs/Nodes/mixin', '1a5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/near',
        component: ComponentCreator('/zh-CN/docs/Nodes/near', '03b'),
        exact: true
      },
      {
        path: '/zh-CN/docs/Nodes/polkadot',
        component: ComponentCreator('/zh-CN/docs/Nodes/polkadot', '997'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/solana',
        component: ComponentCreator('/zh-CN/docs/Nodes/solana', '3cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/tron',
        component: ComponentCreator('/zh-CN/docs/Nodes/tron', '3cc'),
        exact: true
      },
      {
        path: '/zh-CN/docs/ReservesPlan',
        component: ComponentCreator('/zh-CN/docs/ReservesPlan', 'f37'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/rewards',
        component: ComponentCreator('/zh-CN/docs/rewards', '86d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Verify',
        component: ComponentCreator('/zh-CN/docs/Verify', '080'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/zh-CN/',
    component: ComponentCreator('/zh-CN/', '663'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
