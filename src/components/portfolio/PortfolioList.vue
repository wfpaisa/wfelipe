<template>
  <div>
    <h3>PORTFOLIO</h3>

    <p>
      Some of the developments I have carried out over the course of these 14
      years.
    </p>

    <ul>
      <PortforlioPreview v-for="(item, key) in items" :item="item" :key="key" />
    </ul>
  </div>
</template>

<script lang="ts" setup name="components-works-postfolio-list">
import PortforlioPreview from './PortfolioPrevew.vue';

export interface IPortfolioItem {
  name: string;
  tags: string[];
  dialogContent: string;
}

const items: IPortfolioItem[] = [
  {
    name: 'Comodisimos - POS',
    tags: ['Vue', 'Javascript', 'Docker', 'Design', 'HTML', 'CSS', 'InfluxDB'],
    dialogContent:
      '<img src="imgs/projects/comodisimos/comodisimos-pos.webp" width="1920" height="9032"/>',
  },
  {
    name: 'Comodisimos - Web',
    tags: ['Javascript', 'React', 'Design', 'Vtex', 'HTML', 'CSS'],
    dialogContent:
      '<img src="imgs/projects/comodisimos/ecomodisimos.png" width="5120" height="9072"/>',
  },
  {
    name: 'Todo en Artes',
    tags: ['Docker', 'Javascript', 'Design', 'Prestashop', 'PHP', 'CSS'],
    dialogContent: '',
  },
  {
    name: 'Codigital',
    tags: ['Javascript', 'Prestashop', 'Drupal', 'CSS', 'HTML', 'Angular'],
    dialogContent: '',
  },
  {
    name: 'Monte',
    tags: ['Javascript', 'Prestashop', 'CSS', 'HTML', 'PHP'],
    dialogContent:
      '<img src="imgs/projects/natalia/natalia-lafourcade.png" width="1280" height="5296"/>',
  },
  {
    name: 'Hogar universal',
    tags: ['Javascript', 'Drupal', 'CSS', 'HTML', 'PHP'],
    dialogContent:
      '<img src="imgs/projects/natalia/natalia-lafourcade.png" width="1280" height="5296"/>',
  },
  {
    name: 'El Bellanita',
    tags: ['Javascript', 'Drupal', 'CSS', 'HTML', 'PHP'],
    dialogContent:
      '<img src="imgs/projects/natalia/natalia-lafourcade.png" width="1280" height="5296"/>',
  },
  {
    name: 'Codigital',
    tags: ['Javascript', 'CSS', 'HTML', 'PHP'],
    dialogContent:
      '<img src="imgs/projects/natalia/natalia-lafourcade.png" width="1280" height="5296"/>',
  },

  {
    name: 'Ostinata',
    tags: ['Javascript', 'CSS', 'HTML', 'PHP'],
    dialogContent:
      '<img src="imgs/projects/natalia/natalia-lafourcade.png" width="1280" height="5296"/>',
  },
  // Done
  {
    name: 'Natalia Lafourcade',
    tags: ['CSS', 'HTML', 'PHP'],
    dialogContent:
      '<img src="imgs/projects/natalia/natalia-lafourcade.png" width="1280" height="5296"/>',
  },
];
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 0 4rem 0;
  padding: 0px;

  @media (min-width: $breakpoint-xs-max) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: $breakpoint-sm-max) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
