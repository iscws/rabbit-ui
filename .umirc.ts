import { defineConfig } from 'dumi';

let base = '/rabbit-ui';
let publicPath = '/rabbit-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Rabbit UI',
  mode: 'site',
  outputPath: 'dist',
  exportStatic: {},
  dynamicImport: {},
  base,
  publicPath,
});