<template>
  <q-page class="q-pa-md main-page">
    <div class="q-pa-md flex flex-center column items-center">
      <img src="~assets/image/LogoAqueceAi.png" alt="Logo Aquece Aí" class="main-image" />

      <h1 class="text-h4 text-center q-mt-md">
        Sentindo frio? Se <span class="text-primary">Aquece Aí!</span>
      </h1>

      <p class="text-subtitle1 text-center q-mb-lg">Procure por abrigos de doação perto de você.</p>

      <div class="row q-gutter-md">
        <q-btn 
          to="/endereco" 
          label="Buscar abrigos" 
          no-caps 
          color="primary" 
          icon="search" 
          size="lg" 
        />
        <q-btn 
          to="/sobre" 
          label="Sobre nós" 
          no-caps 
          color="primary" 
          icon="info" 
          size="lg" 
          outline 
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
// Nenhum script necessário por enquanto
</script>

<style scoped>
.main-image {
  max-width: 300px;
  width: 100%;
  height: auto;
  /* O alias ~assets é a forma mais segura para referenciar imagens */
  /* src: url('~assets/image/LogoAqueceAi.png'); */
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
}

/* NOTA: A sua regra .main-page não está sendo usada, 
  mas deixei caso queira adicionar estilos no futuro.
*/
.main-page {
  /* Exemplo: Mudar a cor de fundo da página */
  /* background-color: #f5f5f5; */
}
</style>