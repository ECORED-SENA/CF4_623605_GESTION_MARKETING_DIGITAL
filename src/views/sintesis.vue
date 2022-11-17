<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      figure.fig-p10
        img(src='@/assets/curso/temas/img2.svg', style="width: 40px")
      figure.fig-p11
        img(src='@/assets/curso/temas/img3.svg', style="width: 40px")
      .col-auto.d-none.d-lg-block
        figure.fig-p9
          img(src='@/assets/curso/temas/img1.svg', style="width: 105px").m-auto
      .col.px-5.py-4.bg-c13
        p.text-white.mb-0.ms-4 A continuación, se presenta un mapa conceptual, el cual se sintetiza los elementos que componen y son relevantes para la implementación del #[i marketing] de comunidades virtuales:
      figure.fig-p12
        img(src='@/assets/curso/temas/img4.svg', style="width: 40px")
      figure.fig-p13
        img(src='@/assets/curso/temas/img5.svg', style="width: 20px")
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
