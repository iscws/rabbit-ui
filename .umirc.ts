import { defineConfig } from "dumi";

export default defineConfig({
  title: "Rabbit UI", // 站点名称
  mode: "site",
  base: "/rabbit-ui",
  publicPath: "/rabbit-ui/",
  outputPath: "doc-site", // 输出文件夹
  resolve: {
    docDirs: ["docs"],
    atomDirs: [{ type: "component", dir: "src" }],
  },
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
});
