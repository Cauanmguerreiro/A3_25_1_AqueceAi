<template>
  <q-page padding>
    <div class="q-mx-auto" style="max-width: 900px;">

      <section class="intro q-mb-xl">
        <p class="text-h6 text-grey-8">
          O Aquece Aí nasceu com um único objetivo: aquecermos juntos quem mais precisa neste inverno. Sabemos que o <span class="highlight-blue">frio castiga</span>, mas a <span class="highlight-purple">solidariedade aquece</span>.
        </p>
        <p class="text-body1 text-grey-7">
          Somos um grupo de estudantes comprometidos em <span class="highlight-purple">coletar e distribuir agasalhos</span>, cobertores e roupas de inverno para pessoas em situação de vulnerabilidade.
        </p>
        <p class="text-body1 text-grey-7">
          Acreditamos que cada gesto de carinho conta. Seu apoio pode mudar o dia — ou a vida — de alguém.
        </p>
      </section>

      <section class="q-mb-xl">
        <div class="row q-col-gutter-md">

          <div class="col-12 col-md-4">
            <q-card flat bordered class="full-height text-center">
              <q-card-section>
                <q-avatar size="80px" font-size="50px" color="primary" text-color="white" icon="check_circle" />
                <div class="text-h6 q-mt-md">Missão</div>
                <p class="q-mt-sm text-grey-7">Promover o bem-estar através da solidariedade, garantindo que ninguém enfrente o frio desamparado.</p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="full-height text-center">
              <q-card-section>
                <q-avatar size="80px" font-size="50px" color="primary" text-color="white" icon="volunteer_activism" />
                <div class="text-h6 q-mt-md">Como ajudamos?</div>
                <p class="q-mt-sm text-grey-7">Organizamos pontos de coleta e realizamos entregas com voluntários.</p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="full-height text-center">
              <q-card-section>
                <q-avatar size="80px" font-size="50px" color="primary" text-color="white" icon="location_on" />
                <div class="text-h6 q-mt-md">Onde atuamos?</div>
                <p class="q-mt-sm text-grey-7">Inicialmente na FAPA. Com apoio, queremos expandir ainda mais!</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>

      <q-separator class="q-my-xl" />
      <section class="cta text-center q-mb-xl">
        <q-avatar size="80px" font-size="50px" color="secondary" text-color="white" icon="favorite" />
        <h3 class="text-h5 q-mt-md">Quer fazer parte?</h3>
        <p class="text-body1 text-grey-7">Doe, compartilhe e seja um agente do bem.</p>
        <q-btn to="/contatos" color="primary" label="Entre em Contato" size="lg" class="q-mt-md" />
      </section>

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


  </q-page>
</template>


