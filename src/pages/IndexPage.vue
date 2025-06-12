<template>
  <q-page class="q-pa-md main-page">
    <div class="q-pa-md flex flex-center column items-center">
      <!-- Imagem estilizada com sombra da forma da logo -->
      <img src="../assets/image/LogoAqueceAi.png" alt="Logo Aquece Aí" class="main-image" />

      <h1 class="text-h4 text-center q-mt-md">
        Sentindo frio? se <span class="text-primary">Aquece Aí!</span>
      </h1>

      <p class="text-subtitle1 text-center q-mb-lg">Procure por abrigos de doação perto de você.</p>

      <q-btn to="/sobre" label="Sobre o Projeto" color="accent" icon="info" />
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
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
}

.main-image {
  max-width: 300px;
  width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
}
</style>
