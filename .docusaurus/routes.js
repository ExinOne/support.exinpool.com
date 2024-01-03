import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-CN/__docusaurus/debug',
    component: ComponentCreator('/zh-CN/__docusaurus/debug', '81f'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/config',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/config', '418'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/content',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/content', '257'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/globalData',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/globalData', 'd58'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/metadata',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/metadata', '8f5'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/registry',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/registry', '222'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/routes',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/routes', '71c'),
    exact: true
  },
  {
    path: '/zh-CN/markdown-page',
    component: ComponentCreator('/zh-CN/markdown-page', 'bb3'),
    exact: true
  },
  {
    path: '/zh-CN/showcase',
    component: ComponentCreator('/zh-CN/showcase', '615'),
    exact: true
  },
  {
    path: '/zh-CN/docs',
    component: ComponentCreator('/zh-CN/docs', '270'),
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
        component: ComponentCreator('/zh-CN/docs/Nodes/akash', '516'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/avalanche',
        component: ComponentCreator('/zh-CN/docs/Nodes/avalanche', '496'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/axie',
        component: ComponentCreator('/zh-CN/docs/Nodes/axie', 'e25'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/cosmos',
        component: ComponentCreator('/zh-CN/docs/Nodes/cosmos', '84d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/dash',
        component: ComponentCreator('/zh-CN/docs/Nodes/dash', 'a27'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/ethereum',
        component: ComponentCreator('/zh-CN/docs/Nodes/ethereum', '5a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/filecoin',
        component: ComponentCreator('/zh-CN/docs/Nodes/filecoin', '489'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/horizen',
        component: ComponentCreator('/zh-CN/docs/Nodes/horizen', 'f97'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/matic',
        component: ComponentCreator('/zh-CN/docs/Nodes/matic', '8b4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/mixin',
        component: ComponentCreator('/zh-CN/docs/Nodes/mixin', '1a5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/near',
        component: ComponentCreator('/zh-CN/docs/Nodes/near', '39e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/zh-CN/docs/Nodes/nem',
        component: ComponentCreator('/zh-CN/docs/Nodes/nem', '589'),
        exact: true,
        sidebar: "docs"
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
        component: ComponentCreator('/zh-CN/docs/Nodes/tron', '71d'),
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
    component: ComponentCreator('/zh-CN/', '579'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
