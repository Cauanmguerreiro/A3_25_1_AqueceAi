<template>
  <div class="local-container">

    <!-- CONTEÚDO -->
    <div class="content">
      <!-- ESPAÇO PARA IMAGEM (MAPA OU OUTRO) -->
      <div class="mapa-container">
        <img src="../assets/image/homemfrio.jpg" alt="Mapa de localização" class="mapa-img" />
      </div>

      <div class="upper">
        <p>Pressione o <span class="highlight-purple"> icone </span> abaixo </p>
      </div>


      <!-- LOCALIZAÇÃO COM ÍCONE CLICÁVEL -->
      <div class="local-info">
        <a href="https://www.google.com/maps?q=Av.+Manoel+Elias,+2001+-+Passo+das+Pedras,+Porto+Alegre+-+RS,+91240-261" 
        target="_blank" rel="noopener">
        <img src="../assets/image/loc.png" alt="Ícone de localização" class="local-icon" />
        </a>
        <p><strong>Endereço:</strong>  Av. Manoel Elias, 2001 - Passo das Pedras, Porto Alegre - RS, 91240-261</p>
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
