import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 1. ഫയൽ സൈസ് വാർണിംഗ് ലിമിറ്റ് അല്പം വർദ്ധിപ്പിക്കുന്നു
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 2. വലിയ ലൈബ്രറികളെ (Vendor files) വെവ്വേറെ ഫയലുകളാക്കുന്നു
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Radix UI കമ്പോണന്റുകളെ ഒരു ഗ്രൂപ്പിലാക്കുന്നു
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            // Framer Motion പ്രത്യേകമായി മാറ്റുന്നു
            if (id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            // ബാക്കിയുള്ളവ പൊതുവായ vendor ഫയലിലേക്ക്
            return 'vendor';
          }
        },
      },
    },
  },
}));