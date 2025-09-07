// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  kit: {
    adapter: adapter({}) // 정적 출력
  },
  preprocess: vitePreprocess()
};

export default config;