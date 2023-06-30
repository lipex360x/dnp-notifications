import { PlopGeneratorConfig } from 'plop'

export default <PlopGeneratorConfig>{
  description: 'Create Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
    },
  ],
  actions: () => {
    return [
      {
        type: 'add',
        path: '../src/components/{{name}}/{{name}}.tsx',
        templateFile: 'components/templates/component.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/styles.module.scss',
        template: '.component {}',
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/index.ts',
        template: "export * from './{{name}}'\n",
      },
    ]
  },
}
