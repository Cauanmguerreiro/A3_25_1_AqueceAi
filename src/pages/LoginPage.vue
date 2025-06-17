<template>
  <q-page class="flex flex-center column  window-height q-pa-md">
    <img src="~assets/image/image.png" alt="Logo Aquece Aí" class="main-image q-mb-xl" />

    <div class="column items-center">
      <q-card square bordered class="q-pa-lg shadow-1" style="width: 360px;">
        <q-card-section>
          <q-form @submit.prevent="handleLogin" class="q-gutter-md">
            <q-input 
              square filled clearable 
              v-model="email" 
              type="email" 
              label="Email" 
              :rules="[val => !!val || 'Email é obrigatório', val => /.+@.+\..+/.test(val) || 'Email inválido']"
            />
            <q-input 
              square filled clearable 
              v-model="password" 
              type="password" 
              label="Password" 
              :rules="[val => !!val || 'Senha é obrigatória']"
            />
            <q-btn 
              unelevated 
              color="primary" 
              size="lg" 
              class="full-width" 
              label="Login" 
              :disable="!email || !password" 
              type="submit"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-pa-sm justify-center">
          <div id="google-button"></div>
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <p class="text-primary">Not registered? Create an Account</p>
        </q-card-section>
      </q-card>
    </div> 
  </q-page>
  <div class="text-center q-mt-xl">
      <q-separator spaced="lg" />
      <img
        src="~assets/image/uniritter.png"
        alt="Hub Ânima Lab"
        style="max-width: 250px; opacity: 0.7"
      />
    </div>

    <div class="text-center q-mt-xl">
      <q-btn
        to="/"
        icon="arrow_back"
        label="Voltar à Página Inicial"
        flat
        style="padding-bottom: 2%"
      />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const $q = useQuasar()
const router = useRouter()

const handleLogin = () => {
  // Exemplo básico, você pode substituir pela chamada real da API
  if (email.value && password.value) {
    $q.notify({
      type: 'positive',
      message: `Login realizado com sucesso para ${email.value}`
    })
    router.push('/IndexPage')
  } else {
    $q.notify({
      type: 'negative',
      message: 'Preencha todos os campos'
    })
  }
}

const handleCredentialResponse = (response) => {
  const jwt = response.credential
  const userData = parseJwt(jwt)

  console.log('Usuário Google:', userData)

  localStorage.setItem('user', JSON.stringify(userData))

  $q.notify({
    type: 'positive',
    message: `Bem-vindo(a), ${userData.name}`
  })

  router.push('/IndexPage')
}

function parseJwt(token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )
  return JSON.parse(jsonPayload)
}

onMounted(() => {
  const tryRenderButton = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: '203846300483-oa41nkahrpl7ni656ttje13drh6h9cbf.apps.googleusercontent.com',
        callback: handleCredentialResponse,
      })

      window.google.accounts.id.renderButton(
        document.getElementById('google-button'),
        {
          theme: 'filled_blue',
          size: 'large',
          text: 'continue_with',
          shape: 'pill',
          width: 250
        }
      )
    } else {
      setTimeout(tryRenderButton, 100)
    }
  }

  tryRenderButton()
})

</script>

<style>
.main-image {
  max-width: 180px;
  margin-bottom: 2rem;
}
</style>
