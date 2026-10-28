import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In the Base44 sandbox the preview proxy forwards the request Host as
// `<port>-<sandbox id>.$BASE44_SANDBOX_HOST_DOMAIN`, which Vite's host check
// would reject. Only in preview mode do we extend the allowlist with that
// wildcard; every other environment keeps Vite's default behaviour.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1';
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts:
      previewMode && sandboxHostDomain ? [`.${sandboxHostDomain}`] : undefined,
  },
});
