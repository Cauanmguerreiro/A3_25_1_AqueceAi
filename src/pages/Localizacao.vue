<template>
  <div class="local-container">

    <!-- CONTEÚDO -->
    <div class="content">
      <!-- ESPAÇO PARA IMAGEM (MAPA OU OUTRO) -->
      <div class="mapa-container">
        <img src="../assets/image/homemfrio.jpg" alt="Mapa de localização" class="mapa-img" />
      </div>

      <!-- INFORMAÇÕES -->
      <div class="local-info">
        <img src="../assets/image/loc.png" alt="Ícone de localização" class="local-icon" />
        <p><strong>Endereço:</strong> Rua Orfanotrófio, 555 - Alto Teresópolis, Porto Alegre - RS</p>
        <p class="p2"><strong>Atuação:</strong> Entregas, arrecadação e suporte aos mais vulneráveis.</p>
      </div>

      <!-- ESPAÇO DO HUB ÂNIMA LAB -->
      <footer class="footer">
        <img src="../assets/image/uniritter.png" alt="Hub Ânima Lab" class="footer-img" />
      </footer>
    </div>

    <!-- BOTÃO VOLTAR -->
    <router-link to="/" class="back-home">← Voltar à Página Inicial</router-link>
  </div>
</template>

<script>
export default {
  name: 'LocalAtuacao'
};
</script>
