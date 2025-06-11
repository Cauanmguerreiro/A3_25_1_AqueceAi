<template>
  <div>

    <!-- CONTEÚDO -->
    <div class="container">
      <section class="intro">
        <p>
          O Aquece Aí nasceu com um único objetivo: aquecermos juntos quem mais precisa neste inverno. Sabemos que o <span class="highlight-blue">frio castiga</span>, mas a <span class="highlight-purple">solidariedade aquece</span>.
        </p>
        <p>
          Somos um grupo de estudantes comprometidos em <span class="highlight-purple">coletar e distribuir agasalhos</span>, cobertores e roupas de inverno para pessoas em situação de vulnerabilidade.
        </p>
        <p>
          Acreditamos que cada gesto de carinho conta. Seu apoio pode mudar o dia — ou a vida — de alguém.
        </p>
      </section>

      <section class="cards">
        <div class="card">
          <img src="../assets/image/certo.png" alt="Missão" class="card-icon" />
          <h2>Missão</h2>
          <p>Promover o bem-estar através da solidariedade, garantindo que ninguém enfrente o frio desamparado.</p>
        </div>

        <div class="card">
          <img src="../assets/image/maos.png" alt="Como Ajudamos" class="card-icon" />
          <h2>Como ajudamos?</h2>
          <p>Organizamos pontos de coleta e realizamos entregas com voluntários.</p>
        </div>

        <div class="card">
          <img src="../assets/image/loc.png" alt="Onde Atuamos" class="card-icon" />
          <h2>Onde atuamos?</h2>
          <p>Inicialmente na FAPA. Com apoio, queremos expandir ainda mais!</p>
        </div>
      </section>

      <section class="cta">
        <img src="../assets/image/coracao.png" alt="Fazr Parte" class="card-icon" />
        <h3>Quer fazer parte?</h3>
        <p>Doe, compartilhe e seja um agente do bem.</p>
      </section>

      <footer class="footer">
        <img src="../assets/image/uniritter.png" alt="Hub Ânima Lab" class="footer-img" />
      </footer>
    </div>
  </div>

  <router-link to="/" class="back-home">← Voltar à Página Inicial</router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SobreAqueceAi'
});
</script>

