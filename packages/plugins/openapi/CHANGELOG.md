# Changelog

## [2.0.0-alpha.3](https://github.com/jiashengguo/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-05-06)


### Features

* a better "zod" plugin ([#521](https://github.com/jiashengguo/zenstack/issues/521)) ([2280f83](https://github.com/jiashengguo/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* always use superjson to serialize/deserialize in the api layer ([#585](https://github.com/jiashengguo/zenstack/issues/585)) ([46fec66](https://github.com/jiashengguo/zenstack/commit/46fec666c3af971010c69e467f08f55830655441))
* implement openapi security inferrence and override ([#341](https://github.com/jiashengguo/zenstack/issues/341)) ([2860f00](https://github.com/jiashengguo/zenstack/commit/2860f002e57d7772c0b7b9e9feabce7bae73c18c))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/jiashengguo/zenstack/issues/790)) ([42d654f](https://github.com/jiashengguo/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* include raw zod errors in response ([#691](https://github.com/jiashengguo/zenstack/issues/691)) ([b5da998](https://github.com/jiashengguo/zenstack/commit/b5da998b7fa11c19b85cebd0956803d854332b4d))
* make parameters of transactions configurable ([#988](https://github.com/jiashengguo/zenstack/issues/988)) ([d0745b1](https://github.com/jiashengguo/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* restful style openapi spec generation ([#410](https://github.com/jiashengguo/zenstack/issues/410)) ([4ebaa1f](https://github.com/jiashengguo/zenstack/commit/4ebaa1fa4aa8e762a11fb24700f5cb4e1bfbe688))
* support Prisma v5 ([#587](https://github.com/jiashengguo/zenstack/issues/587)) ([b0d9154](https://github.com/jiashengguo/zenstack/commit/b0d9154270a89c6c93c7a8f1aada85c413d16d6f))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/jiashengguo/zenstack/issues/677)) ([df67f30](https://github.com/jiashengguo/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/jiashengguo/zenstack/issues/619)) ([3e09a3a](https://github.com/jiashengguo/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* bug fixes for openapi plugin ([#432](https://github.com/jiashengguo/zenstack/issues/432)) ([e76ee35](https://github.com/jiashengguo/zenstack/commit/e76ee35bdb9fb1ae3d4d99e94ccfc40a3b59f373))
* bugs related to model name casing ([#645](https://github.com/jiashengguo/zenstack/issues/645)) ([32d5b26](https://github.com/jiashengguo/zenstack/commit/32d5b262cacdd03209a56027e4c2cbda1bc408c0))
* build, lint and etc. ([#833](https://github.com/jiashengguo/zenstack/issues/833)) ([cccbc3c](https://github.com/jiashengguo/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* canonicalize plugin's output folder detection; don't generate aux field unnecessarily ([#423](https://github.com/jiashengguo/zenstack/issues/423)) ([9eaf235](https://github.com/jiashengguo/zenstack/commit/9eaf2353e479a7c967af42a0cd6ed6b9afeded4a))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/jiashengguo/zenstack/issues/701)) ([2d41a9f](https://github.com/jiashengguo/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* change openapi plugin's default flavor to "rpc" ([#439](https://github.com/jiashengguo/zenstack/issues/439)) ([ec65e53](https://github.com/jiashengguo/zenstack/commit/ec65e53f202e3e02ea98a9c88682c106dcbafc76))
* clean up zod generation ([#883](https://github.com/jiashengguo/zenstack/issues/883)) ([909281f](https://github.com/jiashengguo/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/jiashengguo/zenstack/issues/883)) ([9d4a8ed](https://github.com/jiashengguo/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* disable eslint in generated hooks, refactor package inter-dependencies ([9e84126](https://github.com/jiashengguo/zenstack/commit/9e8412645e06f0bf63f85c8bb61ad00384fdef99))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/jiashengguo/zenstack/issues/851)) ([ea564c9](https://github.com/jiashengguo/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* hooks generation emits Provider export for backward compatibility ([#594](https://github.com/jiashengguo/zenstack/issues/594)) ([ca3ebda](https://github.com/jiashengguo/zenstack/commit/ca3ebdae4e213d3901bb5834fd9ebf1217da94a7))
* improve consistency of generated guard code ([#616](https://github.com/jiashengguo/zenstack/issues/616)) ([1b7b5bd](https://github.com/jiashengguo/zenstack/commit/1b7b5bda3f5106d31b7f5e70be27158fb8217600))
* incorrect relation owner analysis ([#610](https://github.com/jiashengguo/zenstack/issues/610)) ([c89012b](https://github.com/jiashengguo/zenstack/commit/c89012bcb8d32588cc7f5a1df19088292e571cec))
* incorrect reverse query built for to-many relation ([#815](https://github.com/jiashengguo/zenstack/issues/815)) ([2c345e1](https://github.com/jiashengguo/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* issue [#627](https://github.com/jiashengguo/zenstack/issues/627) ([#628](https://github.com/jiashengguo/zenstack/issues/628)) ([2ef93cb](https://github.com/jiashengguo/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/jiashengguo/zenstack/issues/962)) ([2b2bfcf](https://github.com/jiashengguo/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with client typing generation in trpc plugin ([#673](https://github.com/jiashengguo/zenstack/issues/673)) ([576c4f7](https://github.com/jiashengguo/zenstack/commit/576c4f7a4858dfa2dcb9c1a7f75af8d1ca48a8ce))
* issue with connecting multiple relations ([#450](https://github.com/jiashengguo/zenstack/issues/450)) ([dd6be95](https://github.com/jiashengguo/zenstack/commit/dd6be9509c46fd4dfff500a53070259410b6a61f))
* make core plugins compile generated ts files by default ([#373](https://github.com/jiashengguo/zenstack/issues/373)) ([4bf1304](https://github.com/jiashengguo/zenstack/commit/4bf1304c6518cc027b1a1f2d33fea70979d9d94b))
* make sure Buffer is imported ([#596](https://github.com/jiashengguo/zenstack/issues/596)) ([76a0bac](https://github.com/jiashengguo/zenstack/commit/76a0bac9c63707baf34a072e398b63156c1e0640))
* make sure zod schemas have type annotations ([#574](https://github.com/jiashengguo/zenstack/issues/574)) ([51985b1](https://github.com/jiashengguo/zenstack/commit/51985b1279dca8e82a7275330a7b6597f37d15a4))
* open-api issues ([#446](https://github.com/jiashengguo/zenstack/issues/446)) ([2855647](https://github.com/jiashengguo/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* openapi - do not generate "id" field in create input if the field has default value ([#758](https://github.com/jiashengguo/zenstack/issues/758)) ([787a244](https://github.com/jiashengguo/zenstack/commit/787a24453c3a32250260ebc138c26a829074ae8f))
* openapi plugin - make sure components are generated even model is marked ignored ([#422](https://github.com/jiashengguo/zenstack/issues/422)) ([a5848ea](https://github.com/jiashengguo/zenstack/commit/a5848ea5ef85e4715d8618a67c427c8f2e081b3f))
* **openapi:** `CreateManyArgs` does not take array as input ([#1246](https://github.com/jiashengguo/zenstack/issues/1246)) ([8137481](https://github.com/jiashengguo/zenstack/commit/813748160e35913f5b26b79b81886ab9ddb02070))
* post-update rules incorrectly reject update ([#826](https://github.com/jiashengguo/zenstack/issues/826)) ([d921a7c](https://github.com/jiashengguo/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/jiashengguo/zenstack/issues/826)) ([e85831e](https://github.com/jiashengguo/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* properly handle nullable fields in openapi generator ([#906](https://github.com/jiashengguo/zenstack/issues/906)) ([0e422ad](https://github.com/jiashengguo/zenstack/commit/0e422adf1a7f274b850eeba09ef1781b13ce9f1b))
* short-circuit post-read check when policy rules don't depend on model fields ([#376](https://github.com/jiashengguo/zenstack/issues/376)) ([a54eba4](https://github.com/jiashengguo/zenstack/commit/a54eba45f64382ed070e5aeabe0c8dc263bebc0d))
* support object literal in plugin fields processing ([#351](https://github.com/jiashengguo/zenstack/issues/351)) ([8284988](https://github.com/jiashengguo/zenstack/commit/8284988cf12c3c4f3983c36c3658201db5509b2c))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/jiashengguo/zenstack/issues/995)) ([541cd97](https://github.com/jiashengguo/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* undefined field access when selecting with _count ([#403](https://github.com/jiashengguo/zenstack/issues/403)) ([d90d7c8](https://github.com/jiashengguo/zenstack/commit/d90d7c83e95d33c85e9c3b4b650e014ee76136c3))
* Update start line of JsDoc comments in zmodel to start with two … ([#428](https://github.com/jiashengguo/zenstack/issues/428)) ([a3473ea](https://github.com/jiashengguo/zenstack/commit/a3473eaec2d32d06c2a51442fbd0d81a435e1197))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/jiashengguo/zenstack/issues/625)) ([f6b68da](https://github.com/jiashengguo/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* wrong return type of generated `count` hook ([#347](https://github.com/jiashengguo/zenstack/issues/347)) ([2035319](https://github.com/jiashengguo/zenstack/commit/2035319a030369dc0c847eaac248f2d9acdc7c7b))
* wrong type generated for `groupBy` hook ([#344](https://github.com/jiashengguo/zenstack/issues/344)) ([83fd21e](https://github.com/jiashengguo/zenstack/commit/83fd21e5b2c55ca182386be61151386f0400bdd0))
* zod and openapi generation error when "fullTextSearch" is enabled ([#658](https://github.com/jiashengguo/zenstack/issues/658)) ([0cb7cd1](https://github.com/jiashengguo/zenstack/commit/0cb7cd1ae5e8c5d4a72d0891c9624291aafcbcd8))
* zod plugin issue with lower-case model names ([#396](https://github.com/jiashengguo/zenstack/issues/396)) ([d6fba93](https://github.com/jiashengguo/zenstack/commit/d6fba93e2f0149c14f67d4cd0b4e9cdb6eee73a5))


### Performance Improvements

* improve runtime performance by removing expensive verbose logging ([#371](https://github.com/jiashengguo/zenstack/issues/371)) ([0d7a2bf](https://github.com/jiashengguo/zenstack/commit/0d7a2bf417c6ea5cc5c6c3568593a0fbe7d7903e))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
