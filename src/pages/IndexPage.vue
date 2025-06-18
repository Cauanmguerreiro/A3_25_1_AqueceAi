<template>
  <q-page class="q-pa-md main-page falling-logos-page">
    <!-- Logos “flocos de neve” -->
    <div
      v-for="(flake, index) in flakes"
      :key="index"
      class="logo-flake"
      :style="{
        left: flake.left + '%',
        animationDelay: flake.delay + 's',
        animationDuration: flake.duration + 's',
      }"
    >
      <img src="~assets/image/image.png" alt="Logo Aquece Aí" />
    </div>

    <!-- Conteúdo central existente -->
    <div class="q-pa-md flex flex-center column items-center center-content">
      <img src="~assets/image/image.png" alt="Logo Aquece Aí" class="main-image" />

      <h1 class="text-h4 text-center q-mt-md">
        Sentindo frio? Se <span class="text-primary">AQUECE AÍ!</span>
      </h1>

      <p class="text-subtitle1 text-center q-mb-lg">Procure por abrigos de doação perto de você!</p>

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

      <div class="text-center q-mt-xl">
        <q-separator spaced="lg" />
        <img
          src="~assets/image/uniritter.png"
          alt="Hub Ânima Lab"
          style="max-width: 250px; opacity: 0.7"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Gera um conjunto de “flocos” (logos) com posições aleatórias
const flakes = ref(
  Array.from({ length: 25 }, () => ({
    left: Math.random() * 100, // posição horizontal
    delay: Math.random() * 5, // atraso da animação
    duration: 5 + Math.random() * 5, // duração da animação
  })),
)
</script>

<style scoped>
.falling-logos-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh; /* cobre a tela toda */
  background-color: #f2f7ff; /* ou a cor de fundo que preferir */
}

/* Cada logo que cai */
.logo-flake {
  position: absolute;
  top: -100px;
  width: 40px;
  opacity: 0.8;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.logo-flake img {
  width: 100%;
}

/* Animação de queda */
@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}

/* Mantém o conteúdo centralizado no topo das logos que caem */
.center-content {
  position: relative;
  z-index: 1; /* garante que fique acima dos flocos */
}

.main-image {
  width: 200px;
  margin-bottom: 20px;
}
</style>
