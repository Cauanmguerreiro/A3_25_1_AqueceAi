<template>
  <q-page padding>

    <div class="text-center q-mb-xl">
      <p class="text-h6 text-grey-8">
        Entre em contato conosco para saber como ajudar ou tirar suas dúvidas.
      </p>
      <p class="text-subtitle1 text-grey-7">
        Estamos aqui para aquecer ainda mais este inverno,
        <span class="text-primary text-weight-medium">coletando e distribuindo agasalhos</span>,
        cobertores e roupas de inverno para pessoas em situação de vulnerabilidade.
      </p>
    </div>

    <div class="row q-col-gutter-md q-mb-xl">

      <div class="col-12 col-md-4">
        <q-card flat bordered class="full-height text-center">
          <q-card-section>
            <q-avatar size="80px" font-size="50px" color="primary" text-color="white" icon="email" />
            <div class="text-h6 q-mt-md">Contato</div>
            <p class="q-mt-sm text-grey-8">contato@aqueceai.com.br</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered class="full-height text-center">
          <q-card-section>
            <q-avatar size="80px" font-size="50px" color="primary" text-color="white" icon="phone" />
            <div class="text-h6 q-mt-md">Telefone</div>
            <p class="q-mt-sm text-grey-8">(51) 1234-5678</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered class="full-height text-center">
          <q-card-section>
            <q-avatar size="80px" font-size="50px" color="primary" text-color="white" icon="public" />
            <div class="text-h6 q-mt-md">Redes Sociais</div>
            <p class="q-mt-sm text-grey-8">@aqueceai</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="flex flex-center q-mb-xl">
       <q-card flat bordered class="text-center" style="max-width: 450px; width: 100%;">
          <q-card-section>
            <q-avatar size="80px" font-size="50px" color="accent" text-color="white" icon="favorite" />
            <div class="text-h6 q-mt-md">Quer fazer parte?</div>
            <p class="q-mt-sm text-grey-8">Doe, compartilhe e seja um agente do bem.</p>
          </q-card-section>
        </q-card>
    </div>

    <div class="text-center q-mt-xl">
      <q-separator spaced="lg" />
      <img
        src="src/assets/image/uniritter.png"
        alt="Hub Ânima Lab"
        style="max-width: 150px; opacity: 0.7;"
      />
    </div>

    <div class="text-center q-mt-xl">
      <q-btn
        to="/"
        icon="arrow_back"
        label="Voltar à Página Inicial"
        flat
        color="primary"
      />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

// Nome do componente atualizado para corresponder ao nome do arquivo (boa prática)
export default defineComponent({
  name: 'ContatosPage'
});
</script>