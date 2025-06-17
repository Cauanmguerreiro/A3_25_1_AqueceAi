<template>
  <div class="local-container">


    <div class="content">

      <div class="mapa-container">
        <img src="../assets/image/homemfrio.jpg" alt="Mapa de localização" class="mapa-img" />
      </div>

      <div class="upper">
        <p>Pressione o <span class="highlight-purple"> icone </span> abaixo </p>
      </div>



      <div class="local-info">
        <a href="https://www.google.com/maps?q=Av.+Manoel+Elias,+2001+-+Passo+das+Pedras,+Porto+Alegre+-+RS,+91240-261"
        target="_blank" rel="noopener">
        <img src="../assets/image/loc.png" alt="Ícone de localização" class="local-icon" />
        </a>
        <p><strong>Endereço:</strong>  Av. Manoel Elias, 2001 - Passo das Pedras, Porto Alegre - RS, 91240-261</p>
        <p class="p2"><strong>Atuação:</strong> Entregas, arrecadação e suporte aos mais vulneráveis.</p>
      </div>


    </div>

  </div>
  <div class="text-center q-mt-xl">
      <q-separator spaced="lg" />
      <img
        src="@assets/image/uniritter.png"
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

<script>
export default {
  name: 'LocalAtuacao'
};
</script>
