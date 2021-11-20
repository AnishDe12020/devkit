# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0](https://github.com/AnishDe12020/devkit/compare/v0.2.0...v0.3.0) (2021-11-20)


### Features

* **homepage:** added links to all tools ([44954a4](https://github.com/AnishDe12020/devkit/commits/44954a4320edeb465352494cdb65d018555ceb43))
* **image-resizer:** added export as png ([3619dec](https://github.com/AnishDe12020/devkit/commits/3619dec82654207c3fa85c144d1d9c8c2e2f231d))
* **image-resizer:** added validation for width and height when resizing ([67177fe](https://github.com/AnishDe12020/devkit/commits/67177fefd6dca806fed6c7aec8b2ee0252f95551))
* **mp4-gif:** added a download gif button to download the gif file ([be4442d](https://github.com/AnishDe12020/devkit/commits/be4442dc1a75c0ddc0ed1ef9c258b04193c70596))
* **mp4-gif:** added an info alert showing the use of ffmpeg ([abc2ece](https://github.com/AnishDe12020/devkit/commits/abc2ecec976b9ea65c11355d4805c3c031bf1396))
* **mp4-gif:** added progress bar and conversion logs ([b7bee22](https://github.com/AnishDe12020/devkit/commits/b7bee2231a7c0f8826d9a4a535a95f2c9ed4a4dc))
* **mp4-gif:** disabled convert to gif button if video not there or ffmpeg not ready ([23badd0](https://github.com/AnishDe12020/devkit/commits/23badd0abfce1ffe0b20275c6735a0f0237e85f6))
* **search:** added a basic search for tools using fuse.js ([3fc1cfa](https://github.com/AnishDe12020/devkit/commits/3fc1cfa9cc28733d2b043a039b8abba27dbfa5ae))
* **tool:** new mp4 to gif converter ([4ef00a6](https://github.com/AnishDe12020/devkit/commits/4ef00a6cfa175638d9655c8f842ebe70d1da2d32))
* **tool:** new tool - images resizer ([2b9e73f](https://github.com/AnishDe12020/devkit/commits/2b9e73f58b8d5ac0875c7c59ff9a2dbcfc3149b8))


### Bug Fixes

* **color-mode:** the previous color mode is used as the default color mode and if not present system is used instead of always defaulting to dark ([c1ee7bb](https://github.com/AnishDe12020/devkit/commits/c1ee7bbd1e63ebead1672f2c725115abfcaaaed4))
* **homepage:** removed description title tag from tool and passed in otherprops to button ([b894d71](https://github.com/AnishDe12020/devkit/commits/b894d7165fe4d8d8ceb00ef2168c41f2fc0425aa))
* **image-resizer:** fixed images overflowing on mobile ([2bcb6a5](https://github.com/AnishDe12020/devkit/commits/2bcb6a50ce5110b650acf6af65e3af850bfbbff4))
* **image-resizer:** imported export as png dynamically ([4b1a3ab](https://github.com/AnishDe12020/devkit/commits/4b1a3abf5d3623bedbfa61e636fb328e8d450e8c))
* **image-resizer:** resize opration and export as png operation is disabled in certain cases ([09642c1](https://github.com/AnishDe12020/devkit/commits/09642c13ddb72687e9cc95c6f9195f6fee2d0303))
* **image-resizer:** switched to a better image dimension algorithm ([faa5cdc](https://github.com/AnishDe12020/devkit/commits/faa5cdc9cbe770a6a908db9f6b143a7a4a441560))
* **mp4-gif:** downgraded ffmpeg due to an error in dev environment ([f3fca0a](https://github.com/AnishDe12020/devkit/commits/f3fca0a43d8d97a126524476152eaf1461f69eed))
* **mp4-gif:** fixed the button not being disabled ([a0e3833](https://github.com/AnishDe12020/devkit/commits/a0e3833e71cf5b8c4517903088aaa486571bf566))
* package.json & yarn.lock to reduce vulnerabilities ([4992385](https://github.com/AnishDe12020/devkit/commits/4992385e5dc83cf9a84fed83a286e47ab3f9012f))
* **sidebar:** fixed color mode toggle getting ref upon open instead of close button ([ede33f3](https://github.com/AnishDe12020/devkit/commits/ede33f3416959e99198bf202839116eb72f19825))
* **sidebar:** fixed sidebar drawer not closing when navigating to a different page ([de202b9](https://github.com/AnishDe12020/devkit/commits/de202b944e5a6a29f61e4930f2064eca5948be13))
* **typo:** fixed typo in alert in mp4-gif ([a526505](https://github.com/AnishDe12020/devkit/commits/a526505896e2622c5d393824467e88320e4e5a6f))
* upgrade @ffmpeg/core from 0.8.5 to 0.10.0 ([96ccc6d](https://github.com/AnishDe12020/devkit/commits/96ccc6db31b14f313e56bd4404b84975934d9dd1))
* upgrade @ffmpeg/ffmpeg from 0.9.8 to 0.10.1 ([c8d07f1](https://github.com/AnishDe12020/devkit/commits/c8d07f1f5d74f183d11c2af94c740a86b10f894e))

## [0.2.0](https://github.com/AnishDe12020/devkit/compare/v0.1.1...v0.2.0) (2021-11-13)


### Features

* **sidebar:** added a close button to the sidebar in mobile view and it now spans across the screen ([230c391](https://github.com/AnishDe12020/devkit/commits/230c391edce6eec58504381b680e6754d9e66595))
* **sidebar:** took a more responsive and better approach by using a sidebar layout ([ba9746d](https://github.com/AnishDe12020/devkit/commits/ba9746dfa74dc49a764a4b66e3fade75ade184d5))
* **sidebar:** tool names show up on the header instead of inside the tool ([a3cda33](https://github.com/AnishDe12020/devkit/commits/a3cda33a9e4391f3b041d5a5f41318ed27e6eed7))

### [0.1.1](https://github.com/AnishDe12020/devkit/compare/v0.1.0...v0.1.1) (2021-11-12)


### Features

* **pwa:** added more meta tags for better compatiblity ([e8f5595](https://github.com/AnishDe12020/devkit/commits/e8f5595927fea9222d9e74a35c2fe5455fa2aa43))


### Bug Fixes

* **nextjs:** disabled esmModules to get rid of the occassional out of memory heap error ([3ae2b95](https://github.com/AnishDe12020/devkit/commits/3ae2b952e625f78bdcc149a4d71fc36149a7dcfc))

## 0.1.0 (2021-11-12)

This is the first release using standard-version. Previous logs are not available.

### Bug Fixes

- **ci:** added yarn ci script ([1521ac9](https://github.com/AnishDe12020/devkit/commits/1521ac987ca0378754333976b0a45d4ab37061ba))
- **ci:** ignored prettier checks for README and formatted commitlint config properly ([e5b97ca](https://github.com/AnishDe12020/devkit/commits/e5b97ca0e25c8401e189ba4aa15871f1045dc140))
- **ci:** switched to yarn for installing ci dependencies ([f23d801](https://github.com/AnishDe12020/devkit/commits/f23d8012fdc9f5f5fb4a455acc3caab6b55b299f))
- drawer wouldn't span across the whole screen in gradient generator route ([7bb3f37](https://github.com/AnishDe12020/devkit/commits/7bb3f3703c58a89055746f3b811919adaa1606ea))
