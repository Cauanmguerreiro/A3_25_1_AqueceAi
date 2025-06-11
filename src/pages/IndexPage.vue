<template>
  <q-layout view="HhH lpR FfF">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <img 
            src="../assets/image/image.png"
            style="height: 40px; width: auto; vertical-align: middle;">
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/sobre" label="Sobre" />
        <q-route-tab to="/contatos" label="Contatos" />
        <q-route-tab to="/endereco" label="Localizações" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-scroll-area class="fit">
        <q-list>

          <q-item class="q-py-md">
            <q-item-section avatar>
              <q-avatar color="teal" text-color="white">
                C
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Cauan</q-item-label>
              <q-item-label caption>cauan@exemplo.com</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              Meu Perfil
            </q-item-section>
          </q-item>
          
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="notifications" />
            </q-item-section>
            <q-item-section>
              Notificações
            </q-item-section>
             <q-item-section side>
              <q-badge color="red" label="2" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              Configurações
            </q-item-section>
          </q-item>
          
          <q-separator spaced />

          <q-item-label header>Configurações do App</q-item-label>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-icon name="dark_mode" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Modo Escuro</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="blue" v-model="darkMode" />
            </q-item-section>
          </q-item>
          
          <q-separator spaced />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
              Sair
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

// Variável para controlar se o painel está aberto ou fechado
const rightDrawerOpen = ref(false)

// Variável para controlar o estado do Modo Escuro
const darkMode = ref(false)

// Acessa as funcionalidades do Quasar, como o Dark Mode
const $q = useQuasar()

// Função para abrir/fechar o painel lateral
function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

// Observa mudanças na variável darkMode e aplica o modo escuro do Quasar
watch(darkMode, (newValue) => {
  $q.dark.set(newValue)
})
</script>