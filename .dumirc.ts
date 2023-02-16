import { defineConfig } from 'dumi';

const repo = 'rabbit-ui';

export default defineConfig({
  themeConfig: {
    name: 'Rabbit UI',
    logo: 'https://github.com/iscws/Demo/blob/main/logo.png?raw=true',
  },
  favicons: ['https://github.com/iscws/Demo/blob/main/logo.png?raw=true'],
  outputPath: 'doc-site', // 输出文件夹
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  icons: {},
});
