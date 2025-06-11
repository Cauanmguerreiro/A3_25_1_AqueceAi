<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <header class="top-bar">
          <div class="brand">
            <img src="src/assets/image/image.png" alt="Logo" class="logo-img" />
          </div>
        </header>

        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Nossos GitHub's
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Github do Cauan',
    caption: 'github.com/Cauanmguerreiro',
    icon: 'code',
    link: 'https://github.com/Cauanmguerreiro'
  },
  {
    title: 'Github do César',
    caption: 'github.com/Bugmaer',
    icon: 'code',
    link: 'https://github.com/Bugmaer'
  },
  {
    title: 'Github Guilherme',
    caption: 'github.com/Cauanmguerreiro',
    icon: 'code',
    link: 'https://github.com/Cauanmguerreiro'
  },
  {
    title: 'Github Pedro',
    caption: 'github.com/Cauanmguerreiro',
    icon: 'code',
    link: 'https://github.com/Cauanmguerreiro'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      linksList,
      leftDrawerOpen: false
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
})
</script>
