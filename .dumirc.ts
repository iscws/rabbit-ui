import { defineConfig } from 'dumi';

const repo = 'rabbit-ui';

export default defineConfig({
  themeConfig: {
    name: 'Rabbit UI',
    logo: 'https://pic.imgdb.cn/item/63ee36dff144a01007cd9ce7.png',
  },
  favicons: ['https://pic.imgdb.cn/item/63ee36dff144a01007cd9ce7.png'],
  outputPath: 'doc-site', // 输出文件夹
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : undefined,
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  icons: {},
});
