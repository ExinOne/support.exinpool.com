import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c5f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '0ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '691'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3a2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '938'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '17b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '194'),
    exact: true
  },
  {
    path: '/showcase',
    component: ComponentCreator('/showcase', '1cf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd55'),
    routes: [
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '00f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/nodes',
        component: ComponentCreator('/docs/nodes', '5c0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/akash',
        component: ComponentCreator('/docs/Nodes/akash', 'f4e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/avalanche',
        component: ComponentCreator('/docs/Nodes/avalanche', '472'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/axie',
        component: ComponentCreator('/docs/Nodes/axie', 'db5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/cosmos',
        component: ComponentCreator('/docs/Nodes/cosmos', 'fde'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/dash',
        component: ComponentCreator('/docs/Nodes/dash', '375'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/ethereum',
        component: ComponentCreator('/docs/Nodes/ethereum', '38c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/filecoin',
        component: ComponentCreator('/docs/Nodes/filecoin', '853'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/horizen',
        component: ComponentCreator('/docs/Nodes/horizen', '1a5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/matic',
        component: ComponentCreator('/docs/Nodes/matic', 'd71'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/mixin',
        component: ComponentCreator('/docs/Nodes/mixin', 'db4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/near',
        component: ComponentCreator('/docs/Nodes/near', '733'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/nem',
        component: ComponentCreator('/docs/Nodes/nem', 'a44'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/polkadot',
        component: ComponentCreator('/docs/Nodes/polkadot', 'b64'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/solana',
        component: ComponentCreator('/docs/Nodes/solana', '3fa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Nodes/tron',
        component: ComponentCreator('/docs/Nodes/tron', '130'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/Verify',
        component: ComponentCreator('/docs/Verify', '5b4'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ef1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
