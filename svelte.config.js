// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // 필요시 fallback: '200.html' 같은 SPA fallback도 지정 가능
    }),
    }
  },
  preprocess: vitePreprocess()
};

export default config;