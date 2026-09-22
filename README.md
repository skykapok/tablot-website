# 拼图桌产品网站

拼图桌（Collage Desk）是一个 iPhone 与 iPad 拼图应用。用户可以一次选好一组照片，在同一个可缩放桌面上完成多张拼图，并调整裁切、比例、间距和边框。

本仓库是拼图桌的产品网站，同时提供 App Store 所需的技术支持页与隐私政策页。网站使用原生 HTML、CSS 和 JavaScript，不需要安装依赖或执行构建。

## 目录

| 路径 | 内容 |
| --- | --- |
| `index.html` | 产品首页 |
| `support/index.html` | 开发者联系方式 |
| `privacy/index.html` | 隐私政策 |
| `styles.css` | 全站样式和响应式布局 |
| `site.js` | 中英文切换 |
| `assets/` | 应用图标、实机截图与下载二维码（PNG / WebP） |
| `vercel.json` | Vercel 路由与响应头配置 |

## 本地开发

页面支持直接打开 `index.html`。日常开发建议使用本地 HTTP 服务，以获得和线上部署一致的路径与跳转行为：

```bash
python3 -m http.server 4173
```

浏览器访问 `http://localhost:4173`。修改源码后刷新页面即可，不需要编译。

## 内容约定

- 中文和英文内容分别使用 `data-copy="zh"` 与 `data-copy="en"`。
- 每个页面通过根元素的 `data-page` 属性声明页面类型，供 `site.js` 设置标题。
- 全站共用 `styles.css`、`site.js` 和 `assets/`，子页面使用相对路径引用。
- 隐私政策应与 App 的实际数据处理方式保持一致；应用权限或联网行为变化时同步更新。
- 技术支持邮箱为 `skykapok@gmail.com`。

## 部署

Vercel 项目使用以下设置：

- Framework Preset：Other
- Build Command：留空
- Output Directory：留空

仓库根目录直接作为部署目录，静态文件由 Vercel 发布。自定义域名绑定在 Vercel 项目的 Domains 设置中。
