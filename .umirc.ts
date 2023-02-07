import { defineConfig } from 'dumi';

const repo = 'rabbit-ui';

export default defineConfig({
  title: 'Rabbit UI', // 站点名称
  mode: 'site',
  devSever: {
    port: 8080
  },
  outputPath: 'doc-site', // 输出文件夹
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
});