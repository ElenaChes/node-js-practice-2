# Node.js practice #2 - CLI Tool

This repo contains my code from following the Udemy course [Advanced NodeJS: Level up your NodeJS skill In 2025](https://www.udemy.com/course/leveling-up-your-skill-as-a-nodejs-developer).</br>
It is based on **Section 5**: Building a rapid code generator/assistance CLI tool.<br>
The tool can can clone a boilerplate project from GitHub and quickly scaffold controllers, routers, services, and models from templates.

> [!NOTE]
> For the complete course source code, see the instructor’s repo: [Leveling-Up-NodeJS](https://github.com/kal-kidan/Leveling-Up-NodeJS).

<details>
  <summary><h3>Content</h3></summary>

- [Usage](#usage)
  - [Clone boilerplate](#clone-boilerplate)
  - [Add singular file template](#add-singular-file-template)
  - [Add a new module](#add-a-new-module)
- [Bonus](#bonus)

</details>
<hr>

# Usage

## Clone boilerplate

```
node index.js generate-mvc
```

This command:

1. Prompts for a project name (used as the directory name).
2. Clones the repository from `repoUrl` in `config/config.js`.
3. Installs the project's dependencies.
4. Creates an `.env` file with the values from `projectConfig` in `config/config.js`.

## Add singular file template

```
node index.js generate <schematic - controller/router/service>
```

This command:

1. Prompts for the project's directory. (e.g. `project1`)
2. Loads the schematic's template from `utils/content.js`.
3. Creates the file in the appropriate folder.

## Add a new module

```
node index.js create <schematic - module/model/validator>
```

This command:

1. Prompts for the schematic's name. (e.g. `user`)
2. Prompts for the project's directory. (e.g. `project1`)
3. Prompts for the schematic's fields. (e.g. `id,name,age,role`)
4. Prompts for the fields' types. (example `objectid,string,number,string`)
5. Loads the schematics templates from `utils/content.js`.
6. Creates the model, validation, controller, route and service files in the appropriate folders.

# Bonus

Other examples shown in this section are kept in `examples.js`.
