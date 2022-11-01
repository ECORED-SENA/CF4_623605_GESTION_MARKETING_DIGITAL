<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#FFF")
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/intro/img1.svg' style="width: 170px").m-auto
      .col-md
        p.mb-0 A través de este componente se le brindará al aprendiz las herramientas necesarias para abordar la planeación y diseño de planes de comunicación digital, lo invitamos a ver el siguiente video:
    .row
      .col-12.bg-c1.p-3.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
