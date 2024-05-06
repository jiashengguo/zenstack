# Changelog

## [2.0.0-alpha.3](https://github.com/jiashengguo/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2024-05-06)


### Features

* a better "zod" plugin ([#521](https://github.com/jiashengguo/zenstack/issues/521)) ([2280f83](https://github.com/jiashengguo/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* Add multi-schema file support ([#368](https://github.com/jiashengguo/zenstack/issues/368)) ([4e57b96](https://github.com/jiashengguo/zenstack/commit/4e57b9640e6c9d0cca25a3c12a981ea6c9dbfda6))
* JetBrains plugin for ZModel ([#904](https://github.com/jiashengguo/zenstack/issues/904)) ([c79be9e](https://github.com/jiashengguo/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/jiashengguo/zenstack/issues/988)) ([d0745b1](https://github.com/jiashengguo/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* support "Unsupported" field type ([#366](https://github.com/jiashengguo/zenstack/issues/366)) ([e232271](https://github.com/jiashengguo/zenstack/commit/e23227151d963b5a7d65ee31a4bddaf10d8db759))
* support abstract model ([#308](https://github.com/jiashengguo/zenstack/issues/308)) ([2fa3aee](https://github.com/jiashengguo/zenstack/commit/2fa3aeefffd7b8425836107d4e0e69cfe0187921))
* support Prisma view ([#579](https://github.com/jiashengguo/zenstack/issues/579)) ([af151b7](https://github.com/jiashengguo/zenstack/commit/af151b7b311ee96b626376b8a17103b18c261f65))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/jiashengguo/zenstack/issues/677)) ([df67f30](https://github.com/jiashengguo/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/jiashengguo/zenstack/issues/619)) ([3e09a3a](https://github.com/jiashengguo/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* add missing attribute parameters and loosen keyword restrictions ([#394](https://github.com/jiashengguo/zenstack/issues/394)) ([ef7acd7](https://github.com/jiashengguo/zenstack/commit/ef7acd7c069225775e83411a4dfd8c31b2bf0c00))
* allow "view" and "import" as identifier ([#750](https://github.com/jiashengguo/zenstack/issues/750)) ([2e15dfb](https://github.com/jiashengguo/zenstack/commit/2e15dfb747fa871a5b25661e3e320a1a5f3cc92a))
* allow models without field declarations ([#749](https://github.com/jiashengguo/zenstack/issues/749)) ([43322e1](https://github.com/jiashengguo/zenstack/commit/43322e111adfc7d888aa8dc04445a5b0f8c2dbcc))
* automatically enable "@core/zod" plugin when there're validation rules ([#535](https://github.com/jiashengguo/zenstack/issues/535)) ([0519421](https://github.com/jiashengguo/zenstack/commit/05194219f28e49ee11d1a1bd9a78146e9b76eada))
* build, lint and etc. ([#833](https://github.com/jiashengguo/zenstack/issues/833)) ([cccbc3c](https://github.com/jiashengguo/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/jiashengguo/zenstack/issues/701)) ([2d41a9f](https://github.com/jiashengguo/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* change openapi plugin's default flavor to "rpc" ([#439](https://github.com/jiashengguo/zenstack/issues/439)) ([ec65e53](https://github.com/jiashengguo/zenstack/commit/ec65e53f202e3e02ea98a9c88682c106dcbafc76))
* clean up zod generation ([#883](https://github.com/jiashengguo/zenstack/issues/883)) ([909281f](https://github.com/jiashengguo/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/jiashengguo/zenstack/issues/883)) ([9d4a8ed](https://github.com/jiashengguo/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* disable eslint in generated hooks, refactor package inter-dependencies ([9e84126](https://github.com/jiashengguo/zenstack/commit/9e8412645e06f0bf63f85c8bb61ad00384fdef99))
* enable auto completion inside attribute ([#949](https://github.com/jiashengguo/zenstack/issues/949)) ([20d5bfc](https://github.com/jiashengguo/zenstack/commit/20d5bfc506a42b520eb1cf390149b7afc7c38701))
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
* number literal precision issue ([#659](https://github.com/jiashengguo/zenstack/issues/659)) ([6275701](https://github.com/jiashengguo/zenstack/commit/627570166f858488aa7fb6a6291fccfadb0d9f9f))
* open-api issues ([#446](https://github.com/jiashengguo/zenstack/issues/446)) ([2855647](https://github.com/jiashengguo/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* post-update rules incorrectly reject update ([#826](https://github.com/jiashengguo/zenstack/issues/826)) ([d921a7c](https://github.com/jiashengguo/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/jiashengguo/zenstack/issues/826)) ([e85831e](https://github.com/jiashengguo/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* short-circuit post-read check when policy rules don't depend on model fields ([#376](https://github.com/jiashengguo/zenstack/issues/376)) ([a54eba4](https://github.com/jiashengguo/zenstack/commit/a54eba45f64382ed070e5aeabe0c8dc263bebc0d))
* support for string escaping in ZModel ([#668](https://github.com/jiashengguo/zenstack/issues/668)) ([f034839](https://github.com/jiashengguo/zenstack/commit/f034839867fa438da866bd87548b4a18246dee21))
* support object literal in plugin fields processing ([#351](https://github.com/jiashengguo/zenstack/issues/351)) ([8284988](https://github.com/jiashengguo/zenstack/commit/8284988cf12c3c4f3983c36c3658201db5509b2c))
* support postgres extensions ([#718](https://github.com/jiashengguo/zenstack/issues/718)) ([cdc98e0](https://github.com/jiashengguo/zenstack/commit/cdc98e08224a23ea3f6e5d620c11c90a34ed6435))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/jiashengguo/zenstack/issues/752)) ([22b1bf9](https://github.com/jiashengguo/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* supports for complex usage of "@[@index](https://github.com/index)" in zmodel ([#995](https://github.com/jiashengguo/zenstack/issues/995)) ([541cd97](https://github.com/jiashengguo/zenstack/commit/541cd973081cbbf2d9e2e571ee8f971bc859150c))
* undefined field access when selecting with _count ([#403](https://github.com/jiashengguo/zenstack/issues/403)) ([d90d7c8](https://github.com/jiashengguo/zenstack/commit/d90d7c83e95d33c85e9c3b4b650e014ee76136c3))
* Validation errors when using true or false as prefix of id ([#530](https://github.com/jiashengguo/zenstack/issues/530)) ([551b33d](https://github.com/jiashengguo/zenstack/commit/551b33d8bec622e445b5635ae4a147774c91c0fe))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/jiashengguo/zenstack/issues/625)) ([f6b68da](https://github.com/jiashengguo/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* wrong return type of generated `count` hook ([#347](https://github.com/jiashengguo/zenstack/issues/347)) ([2035319](https://github.com/jiashengguo/zenstack/commit/2035319a030369dc0c847eaac248f2d9acdc7c7b))
* wrong type generated for `groupBy` hook ([#344](https://github.com/jiashengguo/zenstack/issues/344)) ([83fd21e](https://github.com/jiashengguo/zenstack/commit/83fd21e5b2c55ca182386be61151386f0400bdd0))


### Performance Improvements

* improve runtime performance by removing expensive verbose logging ([#371](https://github.com/jiashengguo/zenstack/issues/371)) ([0d7a2bf](https://github.com/jiashengguo/zenstack/commit/0d7a2bf417c6ea5cc5c6c3568593a0fbe7d7903e))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
