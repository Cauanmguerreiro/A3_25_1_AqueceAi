<!-- src/pages/LoginPage.vue -->
<template>
  <q-page class="flex flex-center column">
    <div id="google-button"></div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router' // ⬅️ Importa o roteador

const $q = useQuasar()
const router = useRouter() // ⬅️ Usa o roteador

const handleCredentialResponse = (response) => {
  const jwt = response.credential
  const userData = parseJwt(jwt)

  console.log('Usuário:', userData)

  // Armazena no localStorage
  localStorage.setItem('user', JSON.stringify(userData))

  $q.notify({
    type: 'positive',
    message: `Bem-vindo(a), ${userData.name}`
  })

  // ✅ Redireciona para a rota protegida
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
  if (window.google && window.google.accounts) {
    window.google.accounts.id.initialize({
      client_id: '203846300483-oa41nkahrpl7ni656ttje13drh6h9cbf.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    })

    window.google.accounts.id.renderButton(
      document.getElementById('google-button'),
      {
        theme: 'outline',
        size: 'large'
      }
    )
  } else {
    console.error('Google SDK não carregado!')
  }
})
</script>
