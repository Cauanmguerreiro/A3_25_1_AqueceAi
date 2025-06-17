<template>
  <q-page class="q-pa-md main-page">
    <div class="q-pa-md flex flex-center column items-center">
      <img src="@assets/image/uniritter.png" alt="Logo Aquece Aí" class="main-image" />

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
    </div>
  </q-page>
