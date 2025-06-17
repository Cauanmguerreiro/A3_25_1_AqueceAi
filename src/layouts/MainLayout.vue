<template>
  <!-- HEADER fixo + drawer esquerdo que empurra o conteúdo -->
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER ---------------------------------------------------->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <header class="top-bar">
          <div class="brand">
            <!-- use "~assets" para resolver via Webpack -->
            <img src="src/assets/image/LogoAqueceAi.png" alt="Logo" class="logo-img" />
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

    <!-- DRAWER ESQUERDO ------------------------------------------->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="!leftDrawerOpen && $q.screen.gt.sm"
    >
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
          <q-item-section avatar><q-icon :name="item.icon" /></q-item-section>
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item-label header>Nossos GitHub's</q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <!-- DRAWER DIREITO -------------------------------------------->
    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <q-list>
        <q-item-label header>Menu Usuário</q-item-label>
        <q-item clickable v-ripple to="/login">
          <q-item-section avatar><q-icon name="person" /></q-item-section>
          <q-item-section>Login</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- CONTEÚDO --------------------------------------------------->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- IMAGENS E LINK VOLTAR ------------------------------------->
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'

/* -------------------- LINKS -------------------- */
const navigationLinks = [
  { title: 'Página Inicial', icon: 'home', to: '/' },
  { title: 'Sobre', icon: 'info', to: '/sobre' },
  { title: 'Contatos', icon: 'contacts', to: '/contatos' },
  { title: 'Localizações', icon: 'location_on', to: '/endereco' },
]

const linksList = [
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

/* -------------------- ESTADO -------------------- */
const $q = useQuasar()
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

/* Abre o drawer esquerdo por padrão em telas maiores que “sm” */
onMounted(() => {
  if ($q.screen.gt.sm) leftDrawerOpen.value = true
})

/* Toggles ---------------------------------------------------------*/
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)
const toggleRightDrawer = () => (rightDrawerOpen.value = !rightDrawerOpen.value)
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
}
.brand .logo-img {
  height: 40px;
}
</style>
