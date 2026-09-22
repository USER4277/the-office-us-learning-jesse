# The Office (US) English Learning · Jesse

通过《The Office (US)》真实对白学习自然美式英语的静态网站，面向 Gitee Pages 部署。

## 内容

- `index.html`：课程首页
- `episodes/s09e01.html`：S09E01「New Guys」精讲
- `assets/css/styles.css`：全站视觉样式
- `assets/js/app.js`：朗读、复制、深色模式和学习进度
- `assets/images/`：本地化图片资源
- `assets/vendor/`：Bootstrap 5.3.8 与 Font Awesome 7.0.1

## 本地预览

```bash
python3 -m http.server 8080
```

浏览器访问 `http://localhost:8080/`。

## Gitee Pages

仓库是纯静态网站，发布目录为仓库根目录，入口为 `index.html`。在 Gitee 仓库的服务菜单中启用 Gitee Pages，选择 `main` 分支和根目录。若当前账户未开放 Pages 服务，也可将同一目录部署到任意静态托管平台。

## 后续笔记维护

新增笔记直接在对应的 `episodes/sxxexx.html` 页面中编辑：保留“原台词 → 自然中文 → 核心表达 → 语境/发音 → 练习”的结构。不要再修改旧的 iCloud Markdown 文件。

## 图片与组件来源

- Hero photo: [Unsplash](https://unsplash.com/photos/modern-office-interior-with-desk-and-plants-iAlqsjlHQDo)，按 Unsplash License 使用并已本地化。
- [Bootstrap](https://getbootstrap.com/) 5.3.8，MIT License。
- [Font Awesome Free](https://fontawesome.com/) 7.0.1，图标字体依其开源许可使用。

本项目仅用于语言学习，与 NBC、Peacock 及《The Office》官方无关。
