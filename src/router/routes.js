const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'sobre', component: () => import('pages/SobrePage.vue') },
      { path: 'contatos', component: () => import('pages/Contatos.vue') }, 
      { path: 'endereco', component: () => import('pages/Localizacao.vue') } ,
      { path: 'login', component: () => import('pages/LoginPage.vue') }  ,
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
]

export default routes
