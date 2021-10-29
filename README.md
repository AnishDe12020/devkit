# DevKit
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