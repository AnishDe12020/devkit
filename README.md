# DevKit
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
DevKit is a simple progressive-web-application with tools a developer needs when coding. The project is completely free and open-source and does not need one to sign-up or provide it with any data, in fact we don't have a backend!!! 

> Note: This project is in a very early stage of development with only a few tools as of now but the core developer, that is me and contributors are making it better day-by-day

# Contributing
First let us go through the project structure - 
```
/components
    /Tools
        /<ToolCategory>
            /<Tool>
/data
    /categories.ts
    /tools
        /<Tool>
/pages
    /[...slug].tsx // This is the page where all the tools live. The tool details are obtained from the slug and the respective component for that tool is dynamically imported and shown on the right-side of the sidebar
```

The `data` folder components metadata about all the tools and tool categories.
The `components` folder contains some universal components for the apps and tool-specific components. There is one master component per tool which is mounted to the page when the tool is requested for.

When adding a new tool, firstly put in the metadata of the tool in the `data/tools/<category>` directory by creating a typescript file (javascript is allowed but will be converted into typescript sooner or later by a maintainer or contributor and is usually not recommended) there. Then the `categories.ts` file needs to be filled up (refer to the other categories to understand. This will be soon documented in deep.). Now, a master component needs to be made. `components/Tools/<category>/<tool>` is the syntax. Note that the category must match the directory name field in the categories file and the tool must correspond to the `componentFileName` field.

Before opening a pull request, please manually test your code.

Happy contributing!!!
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://gouravkhunger.xyz"><img src="https://avatars.githubusercontent.com/u/46792249?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gourav Khunger</b></sub></a><br /><a href="#content-gouravkhunger" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.avneesh.tech/"><img src="https://avatars.githubusercontent.com/u/76690419?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Avneesh Agarwal</b></sub></a><br /><a href="https://github.com/AnishDe12020/devkit/commits?author=avneesh0612" title="Code">💻</a> <a href="https://github.com/AnishDe12020/devkit/commits?author=avneesh0612" title="Documentation">📖</a></td>
    <td align="center"><a href="https://krishguptadev.tech"><img src="https://avatars.githubusercontent.com/u/91655303?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Krish Gupta</b></sub></a><br /><a href="#infra-krishguptadev" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/diganta413"><img src="https://avatars.githubusercontent.com/u/69595396?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Diganta Ghosh</b></sub></a><br /><a href="#tool-diganta413" title="Tools">🔧</a></td>
    <td align="center"><a href="http://twitter.com/kr_anurag_"><img src="https://avatars.githubusercontent.com/u/77309809?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anurag</b></sub></a><br /><a href="#projectManagement-kr-anurag" title="Project Management">📆</a></td>
    <td align="center"><a href="https://stackoverflow.com/story/panquesito7"><img src="https://avatars.githubusercontent.com/u/51391473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Leal</b></sub></a><br /><a href="https://github.com/AnishDe12020/devkit/commits?author=Panquesito7" title="Documentation">📖</a></td>
    <td align="center"><a href="http://tdoc.info/en/blog/"><img src="https://avatars.githubusercontent.com/u/177213?v=4?s=100" width="100px;" alt=""/><br /><sub><b>shirou</b></sub></a><br /><a href="https://github.com/AnishDe12020/devkit/commits?author=shirou" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!