<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <header class="top-bar">
          <div class="brand">
            <img src="../assets/image/image.png" alt="Logo" class="logo-img" />
          </div>
        </header>

        <q-space />

        <q-btn
          flat
          dense
          round
          icon="account_circle"
          aria-label="Conta"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item
          v-for="item in navigationLinks"
          :key="item.title"
          clickable
          v-ripple
          :to="item.to"
          exact
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item-label header>Nossos GitHub's</q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <q-list>
        <q-item-label header>Menu Usuário</q-item-label>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="person" /></q-item-section>
          <q-item-section>Meu Perfil</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="settings" /></q-item-section>
          <q-item-section>Configurações</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="$primary">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-caption">
            © {{ new Date().getFullYear() }} Aquece Aí. Todos os direitos reservados.
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

// Lista para links de navegação interna
const navigationLinks = [
  { title: 'Página Inicial', icon: 'home', to: '/' },
  { title: 'Sobre', icon: 'info', to: '/sobre' },
  { title: 'Contatos', icon: 'contacts', to: '/contatos' },
  { title: 'Localizações', icon: 'location_on', to: '/endereco' },
]

// Lista para links externos (GitHub)
const linksList = [
  // Lembre-se de preencher com os dados corretos
  {
    title: 'Github do Cauan Guerreiro',
    caption: 'github.com/Cauanmguerreiro',
    icon: 'code',
    link: 'https://github.com/Cauanmguerreiro',
  },
  {
    title: 'Github do César Bugmaer',
    caption: 'github.com/Bugmaer',
    icon: 'code',
    link: 'https://github.com/Bugmaer',
  },
  {
    title: 'Github do Guilherme Serrano',
    caption: 'github.com/guiserranodev1',
    icon: 'code',
    link: 'https://github.com/guiserranodev1',
  },
  {
    title: 'Github do Pedro Paz',
    caption: 'github.com/pedropazs',
    icon: 'code',
    link: 'https://github.com/pedropazs',
  },
]

// Variáveis reativas para controlar o estado dos menus
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

// Funções para alterar o estado (abrir/fechar os menus)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
