// generators/components/index.ts
var components_default = {
  description: "Create Component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name"
    }
  ],
  actions: () => {
    return [
      {
        type: "add",
        path: "../src/components/{{name}}/{{name}}.tsx",
        templateFile: "components/templates/component.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{name}}/styles.module.scss",
        template: ".component {}"
      },
      {
        type: "add",
        path: "../src/components/{{name}}/index.ts",
        template: "export * from './{{name}}'\n"
      }
    ];
  }
};

// generators/plopfile.ts
function plopfile_default(plop) {
  plop.setGenerator("component", components_default);
}
export {
  plopfile_default as default
};
