
<template>
  <q-page class="flex flex-center column">
    <img src="@assets/image/uniritter.png" alt="Logo Aquece Aí" class="main-image" />
    <div id="google-button"></div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()

const handleCredentialResponse = (response) => {
  const jwt = response.credential
  const userData = parseJwt(jwt)

  console.log('Usuário:', userData)

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
  if (window.google && window.google.accounts) {
    window.google.accounts.id.initialize({
      client_id: '203846300483-oa41nkahrpl7ni656ttje13drh6h9cbf.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    })

    window.google.accounts.id.renderButton(
    document.getElementById('google-button'),
    {
    theme: 'filled_blue',    // 'outline', 'filled_blue', 'filled_black'
    size: 'large',           // 'small', 'medium', 'large'
    text: 'continue_with',   // 'signin_with', 'continue_with', 'signup_with'
    shape: 'pill',           // 'rectangular', 'pill', 'circle', 'square'
    width: 250               // Largura em pixels
    }
)

  } else {
    console.error('Google SDK não carregado!')
  }
})
</script>
