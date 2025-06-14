const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'sobre', component: () => import('pages/SobrePage.vue') },
      { path: 'contatos', component: () => import('pages/Contatos.vue') }, 
      { path: 'endereco', component: () => import('pages/Localizacao.vue') }  
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
