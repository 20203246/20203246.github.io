import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 部署到 https://<username>.github.io/<repo>/ 时，
// 资源路径必须是仓库名前缀；本地 dev 与预览仍使用 '/'.
// 构建时会通过命令行 --base=/<repo>/ 覆盖，无需在此写死。
export default defineConfig({
  plugins: [vue()],
})
