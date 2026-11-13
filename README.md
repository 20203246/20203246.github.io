# Vue 3 Hello World on GitHub Pages

一个最小的 Vue 3 + Vite demo，通过 GitHub Actions 自动部署到 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev
```

打开终端里显示的地址（默认 http://localhost:5173）。

构建与预览生产版本：

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

本仓库按 **用户主页仓库** 配置，仓库名为 `<USERNAME>.github.io`，部署后访问：

```
https://<USERNAME>.github.io/
```

### 1. 关联远程仓库并推送

```bash
git remote add origin git@github.com:<USERNAME>/<USERNAME>.github.io.git
git push -u origin main
```

（当前已配置 `main` 分支；若远程已有内容，请先处理。）

### 2. 开启 Pages（只需一次）

仓库页面 → **Settings → Pages** → **Build and deployment → Source** 选择 **GitHub Actions**。

### 3. 等待自动部署

推送到 `main` 分支会触发 [`.github/workflows/main.yml`](.github/workflows/main.yml)：安装依赖 → 构建 → 上传 `dist` → 部署。
也可以在 **Actions** 标签页手动运行「Deploy Vue to GitHub Pages」。

## 关于 `base`（重要）

- **用户主页仓库**（`<USERNAME>.github.io`，本仓库的情况）：部署在根路径 `/`，用默认的 `npm run build` 即可。
- **普通项目仓库**（例如名为 `githubweb`，访问 `https://<USERNAME>.github.io/githubweb/`）：部署在 `/<仓库名>/` 子路径下，
  Vite 默认按根路径 `/` 生成资源引用会导致 JS/CSS 404、页面白屏，必须把 workflow 的构建命令改成：

  ```yaml
  run: npm run build -- --base=/${{ github.event.repository.name }}/
  ```

  本地 `npm run dev` 不受影响。

## 目录结构

```
├── .github/workflows/main.yml  # Pages 自动部署
├── .gitignore
├── index.html
├── package.json
├── package-lock.json          # CI 使用 npm ci，必须提交
├── vite.config.js
└── src/
    ├── main.js
    ├── App.vue               # Hello World + 点击计数器
    └── style.css
```
