export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917359617386d4b9f3dd95',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-43p2mn5s',
                  apiId: '621689d3-71d8-4f32-9569-4218af711909'
                },
                {
                  buildHookId: '5f91735a5ce4e3e0435573be',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xfuxxunj',
                  apiId: '3a24dc23-a3d9-4454-a8d0-5079e04f0b7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TuHanhNguyen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xfuxxunj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
