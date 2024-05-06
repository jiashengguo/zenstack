# Changelog

## [2.0.0-alpha.3](https://github.com/jiashengguo/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-05-06)


### Features

* a better "zod" plugin ([#521](https://github.com/jiashengguo/zenstack/issues/521)) ([2280f83](https://github.com/jiashengguo/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* add "loadPath" options to runtime API and server adapter options ([#696](https://github.com/jiashengguo/zenstack/issues/696)) ([fc50deb](https://github.com/jiashengguo/zenstack/commit/fc50deb6e70acc78dcb66b17e564a6fc84475970))
* fluent API support ([#666](https://github.com/jiashengguo/zenstack/issues/666)) ([4ae5a96](https://github.com/jiashengguo/zenstack/commit/4ae5a96ee2976dedbdb0b207f48c082c48b3f9ce))
* implementing access control for Prisma Pulse ([#643](https://github.com/jiashengguo/zenstack/issues/643)) ([d8c2e87](https://github.com/jiashengguo/zenstack/commit/d8c2e8717e5fd3facb177443c8ef1baec89a81d5))
* implementing sveltekit adapter and refactor server package ([#418](https://github.com/jiashengguo/zenstack/issues/418)) ([53716c9](https://github.com/jiashengguo/zenstack/commit/53716c99c35d32767354729f372f2f15f1a478b2))
* make parameters of transactions configurable ([#988](https://github.com/jiashengguo/zenstack/issues/988)) ([d0745b1](https://github.com/jiashengguo/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* options for logging queries sent to prisma ([#488](https://github.com/jiashengguo/zenstack/issues/488)) ([ccfb2b0](https://github.com/jiashengguo/zenstack/commit/ccfb2b088cf1ce14c78c1d1355db5cb4ebcdc957))
* RESTful style server API handler ([#405](https://github.com/jiashengguo/zenstack/issues/405)) ([f07ccdd](https://github.com/jiashengguo/zenstack/commit/f07ccdded01e232823e3955ab1ffc19b1c8f33a1))
* support Prisma v5 ([#587](https://github.com/jiashengguo/zenstack/issues/587)) ([b0d9154](https://github.com/jiashengguo/zenstack/commit/b0d9154270a89c6c93c7a8f1aada85c413d16d6f))
* tanstack-query v5 support ([#788](https://github.com/jiashengguo/zenstack/issues/788)) ([0d04d8e](https://github.com/jiashengguo/zenstack/commit/0d04d8e6dabd66ee06e98971cb4e1007c4ecd466))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/jiashengguo/zenstack/issues/677)) ([df67f30](https://github.com/jiashengguo/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/jiashengguo/zenstack/issues/619)) ([3e09a3a](https://github.com/jiashengguo/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* canonicalize plugin's output folder detection; don't generate aux field unnecessarily ([#423](https://github.com/jiashengguo/zenstack/issues/423)) ([9eaf235](https://github.com/jiashengguo/zenstack/commit/9eaf2353e479a7c967af42a0cd6ed6b9afeded4a))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/jiashengguo/zenstack/issues/701)) ([2d41a9f](https://github.com/jiashengguo/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* change openapi plugin's default flavor to "rpc" ([#439](https://github.com/jiashengguo/zenstack/issues/439)) ([ec65e53](https://github.com/jiashengguo/zenstack/commit/ec65e53f202e3e02ea98a9c88682c106dcbafc76))
* clean up zod generation ([#883](https://github.com/jiashengguo/zenstack/issues/883)) ([909281f](https://github.com/jiashengguo/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/jiashengguo/zenstack/issues/883)) ([9d4a8ed](https://github.com/jiashengguo/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* client-extension test failures ([#874](https://github.com/jiashengguo/zenstack/issues/874)) ([f2ab6a5](https://github.com/jiashengguo/zenstack/commit/f2ab6a521195c4981fd89a5d4094e4130c5b336c))
* decimal field zod validation ([#660](https://github.com/jiashengguo/zenstack/issues/660)) ([522df7a](https://github.com/jiashengguo/zenstack/commit/522df7ac0d42aee1dbc29b42e8acfa431771bb3b))
* disable eslint in generated hooks, refactor package inter-dependencies ([9e84126](https://github.com/jiashengguo/zenstack/commit/9e8412645e06f0bf63f85c8bb61ad00384fdef99))
* duplicated zod schema imported when there're multiple fields with an enum type ([#633](https://github.com/jiashengguo/zenstack/issues/633)) ([4b70853](https://github.com/jiashengguo/zenstack/commit/4b70853868c8f456ed1fd3dd836f0f2e36ed3e11))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/jiashengguo/zenstack/issues/851)) ([ea564c9](https://github.com/jiashengguo/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* hooks generation emits Provider export for backward compatibility ([#594](https://github.com/jiashengguo/zenstack/issues/594)) ([ca3ebda](https://github.com/jiashengguo/zenstack/commit/ca3ebdae4e213d3901bb5834fd9ebf1217da94a7))
* improve consistency of generated guard code ([#616](https://github.com/jiashengguo/zenstack/issues/616)) ([1b7b5bd](https://github.com/jiashengguo/zenstack/commit/1b7b5bda3f5106d31b7f5e70be27158fb8217600))
* incorrect relation owner analysis ([#610](https://github.com/jiashengguo/zenstack/issues/610)) ([c89012b](https://github.com/jiashengguo/zenstack/commit/c89012bcb8d32588cc7f5a1df19088292e571cec))
* incorrect reverse query built for to-many relation ([#815](https://github.com/jiashengguo/zenstack/issues/815)) ([2c345e1](https://github.com/jiashengguo/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* issue [#627](https://github.com/jiashengguo/zenstack/issues/627) ([#628](https://github.com/jiashengguo/zenstack/issues/628)) ([2ef93cb](https://github.com/jiashengguo/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/jiashengguo/zenstack/issues/962)) ([2b2bfcf](https://github.com/jiashengguo/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with connecting multiple relations ([#450](https://github.com/jiashengguo/zenstack/issues/450)) ([dd6be95](https://github.com/jiashengguo/zenstack/commit/dd6be9509c46fd4dfff500a53070259410b6a61f))
* make core plugins compile generated ts files by default ([#373](https://github.com/jiashengguo/zenstack/issues/373)) ([4bf1304](https://github.com/jiashengguo/zenstack/commit/4bf1304c6518cc027b1a1f2d33fea70979d9d94b))
* make sure Buffer is imported ([#596](https://github.com/jiashengguo/zenstack/issues/596)) ([76a0bac](https://github.com/jiashengguo/zenstack/commit/76a0bac9c63707baf34a072e398b63156c1e0640))
* make sure zod schemas have type annotations ([#574](https://github.com/jiashengguo/zenstack/issues/574)) ([51985b1](https://github.com/jiashengguo/zenstack/commit/51985b1279dca8e82a7275330a7b6597f37d15a4))
* nullify field instead of reject when an optional relation field is not readable ([#588](https://github.com/jiashengguo/zenstack/issues/588)) ([fc16008](https://github.com/jiashengguo/zenstack/commit/fc16008ba20aba18f39948f3ff13ec3bc79729e3))
* open-api issues ([#446](https://github.com/jiashengguo/zenstack/issues/446)) ([2855647](https://github.com/jiashengguo/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* post-update rules incorrectly reject update ([#826](https://github.com/jiashengguo/zenstack/issues/826)) ([d921a7c](https://github.com/jiashengguo/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/jiashengguo/zenstack/issues/826)) ([e85831e](https://github.com/jiashengguo/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* properly handle missing fields when evaluating `@[@validate](https://github.com/validate)` model-level rules ([#1097](https://github.com/jiashengguo/zenstack/issues/1097)) ([e8268d0](https://github.com/jiashengguo/zenstack/commit/e8268d03ae12f3ccbcf1bb1c531a2816b22f6da8))
* short-circuit post-read check when policy rules don't depend on model fields ([#376](https://github.com/jiashengguo/zenstack/issues/376)) ([a54eba4](https://github.com/jiashengguo/zenstack/commit/a54eba45f64382ed070e5aeabe0c8dc263bebc0d))
* support for string escaping in ZModel ([#668](https://github.com/jiashengguo/zenstack/issues/668)) ([f034839](https://github.com/jiashengguo/zenstack/commit/f034839867fa438da866bd87548b4a18246dee21))
* support object literal in plugin fields processing ([#351](https://github.com/jiashengguo/zenstack/issues/351)) ([8284988](https://github.com/jiashengguo/zenstack/commit/8284988cf12c3c4f3983c36c3658201db5509b2c))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/jiashengguo/zenstack/issues/752)) ([22b1bf9](https://github.com/jiashengguo/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/jiashengguo/zenstack/issues/995)) ([541cd97](https://github.com/jiashengguo/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* undefined field access when selecting with _count ([#403](https://github.com/jiashengguo/zenstack/issues/403)) ([d90d7c8](https://github.com/jiashengguo/zenstack/commit/d90d7c83e95d33c85e9c3b4b650e014ee76136c3))
* User model not found when using policy in the imported model ([#457](https://github.com/jiashengguo/zenstack/issues/457)) ([dd36959](https://github.com/jiashengguo/zenstack/commit/dd36959140eaccc56036575255a274633d5416ab))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/jiashengguo/zenstack/issues/625)) ([f6b68da](https://github.com/jiashengguo/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* wrong return type of generated `count` hook ([#347](https://github.com/jiashengguo/zenstack/issues/347)) ([2035319](https://github.com/jiashengguo/zenstack/commit/2035319a030369dc0c847eaac248f2d9acdc7c7b))
* wrong type generated for `groupBy` hook ([#344](https://github.com/jiashengguo/zenstack/issues/344)) ([83fd21e](https://github.com/jiashengguo/zenstack/commit/83fd21e5b2c55ca182386be61151386f0400bdd0))
* zod typing for `DateTime` field, improve overall code generation ([#363](https://github.com/jiashengguo/zenstack/issues/363)) ([e93ca5b](https://github.com/jiashengguo/zenstack/commit/e93ca5bf10c6afdfd723961d3c91c2cd512eb8c8))


### Performance Improvements

* improve runtime performance by removing expensive verbose logging ([#371](https://github.com/jiashengguo/zenstack/issues/371)) ([0d7a2bf](https://github.com/jiashengguo/zenstack/commit/0d7a2bf417c6ea5cc5c6c3568593a0fbe7d7903e))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
