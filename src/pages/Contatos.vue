<template>
  <div>

    <!-- CONTEÚDO -->
    <div class="container">
      <section class="intro">
        <p>
          Entre em contato conosco para saber como ajudar ou tirar suas dúvidas. Estamos aqui para aquecer ainda mais este inverno! <span class="highlight-purple">coletar e distribuir agasalhos</span>, cobertores e roupas de inverno para pessoas em situação de vulnerabilidade.
        </p>
      </section>

      <section class="cards">
        <div class="card">
          <img src="../assets/image/email.png" alt="CONTATOS" class="card-icon" />
          <h2>CONTATOS</h2>
          <p>contato@aqueceai.com.br</p>
        </div>

        <div class="card">
          <img src="../assets/image/telefone.png" alt="TELEFONE" class="card-icon" />
          <h2>TELEFONE</h2>
          <p>(51) 1234-5678</p>
        </div>

        <div class="card">
          <img src="../assets/image/redesociais.png" alt="REDES SOCIAIS" class="card-icon" />
          <h2>REDES SOCIAIS</h2>
          <p>@aqueceai</p>
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

