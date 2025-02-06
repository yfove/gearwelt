import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DDT8yMgs.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/affiliate.astro.mjs');
const _page2 = () => import('./pages/api/views.astro.mjs');
const _page3 = () => import('./pages/gearcove.astro.mjs');
const _page4 = () => import('./pages/guides/post-1.astro.mjs');
const _page5 = () => import('./pages/guides/post-2.astro.mjs');
const _page6 = () => import('./pages/guides/post-3.astro.mjs');
const _page7 = () => import('./pages/guides/post-4.astro.mjs');
const _page8 = () => import('./pages/guides/post-5.astro.mjs');
const _page9 = () => import('./pages/guides/post-6.astro.mjs');
const _page10 = () => import('./pages/guides/post-7.astro.mjs');
const _page11 = () => import('./pages/guides/post-8.astro.mjs');
const _page12 = () => import('./pages/guides/_---page_.astro.mjs');
const _page13 = () => import('./pages/post/benefits-of-ebikes.astro.mjs');
const _page14 = () => import('./pages/post/california-ebike-laws.astro.mjs');
const _page15 = () => import('./pages/post/charging-urban-cities.astro.mjs');
const _page16 = () => import('./pages/post/ebike-rentals.astro.mjs');
const _page17 = () => import('./pages/post/exploring-the-world.astro.mjs');
const _page18 = () => import('./pages/post/featured-showcase.astro.mjs');
const _page19 = () => import('./pages/post/future-of-ebikes.astro.mjs');
const _page20 = () => import('./pages/post/harmonizing-urban-mobility.astro.mjs');
const _page21 = () => import('./pages/post/off-the-beaten-path.astro.mjs');
const _page22 = () => import('./pages/post/paris-olympics.astro.mjs');
const _page23 = () => import('./pages/post/rise-of-micromobility.astro.mjs');
const _page24 = () => import('./pages/post/superblock.astro.mjs');
const _page25 = () => import('./pages/post/trumps-2025-tariffs.astro.mjs');
const _page26 = () => import('./pages/post/welcome.astro.mjs');
const _page27 = () => import('./pages/post/_---page_.astro.mjs');
const _page28 = () => import('./pages/tags/_tag_.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/affiliate.astro", _page1],
    ["src/pages/api/views.ts", _page2],
    ["src/pages/gearcove.astro", _page3],
    ["src/pages/guides/post-1.mdx", _page4],
    ["src/pages/guides/post-2.mdx", _page5],
    ["src/pages/guides/post-3.mdx", _page6],
    ["src/pages/guides/post-4.mdx", _page7],
    ["src/pages/guides/post-5.mdx", _page8],
    ["src/pages/guides/post-6.mdx", _page9],
    ["src/pages/guides/post-7.mdx", _page10],
    ["src/pages/guides/post-8.mdx", _page11],
    ["src/pages/guides/[...page].astro", _page12],
    ["src/pages/post/benefits-of-ebikes.mdx", _page13],
    ["src/pages/post/california-ebike-laws.mdx", _page14],
    ["src/pages/post/charging-urban-cities.mdx", _page15],
    ["src/pages/post/ebike-rentals.mdx", _page16],
    ["src/pages/post/exploring-the-world.mdx", _page17],
    ["src/pages/post/featured-showcase.mdx", _page18],
    ["src/pages/post/future-of-ebikes.mdx", _page19],
    ["src/pages/post/harmonizing-urban-mobility.mdx", _page20],
    ["src/pages/post/off-the-beaten-path.mdx", _page21],
    ["src/pages/post/paris-olympics.mdx", _page22],
    ["src/pages/post/rise-of-micromobility.mdx", _page23],
    ["src/pages/post/superblock.mdx", _page24],
    ["src/pages/post/trumps-2025-tariffs.mdx", _page25],
    ["src/pages/post/welcome.mdx", _page26],
    ["src/pages/post/[...page].astro", _page27],
    ["src/pages/tags/[tag].astro", _page28],
    ["src/pages/index.astro", _page29]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "082b25b0-f7f5-42ba-b8b6-32f8d3ea56b5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
