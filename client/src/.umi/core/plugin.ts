import { Plugin } from 'C:/Users/ZHCZ/Desktop/code/lucky-bookmarks/client/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('C:/Users/ZHCZ/Desktop/code/lucky-bookmarks/client/src/.umi/plugin-dva/runtime.tsx'),
  path: 'C:/Users/ZHCZ/Desktop/code/lucky-bookmarks/client/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
