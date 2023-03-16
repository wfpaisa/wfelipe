<template>
  <div>
    <h3>PORTFOLIO</h3>

    <p>These are some projects I have worked on.</p>

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
  dialog?: string;
  video?: string;
}

const items: IPortfolioItem[] = [
  {
    name: 'Comodisimos - POS',
    tags: ['Vue', 'Javascript', 'Docker', 'Design', 'HTML', 'CSS', 'InfluxDB'],
    dialog:
      '<img src="imgs/projects/comodisimos/comodisimos-pos.webp" width="1920" height="9032"/>',
    video: 'https://youtu.be/HPCiw_y72M4',
  },
  {
    name: 'Comodisimos - Web',
    tags: ['Javascript', 'React', 'Design', 'Vtex', 'HTML', 'CSS'],
    dialog:
      '<img src="imgs/projects/comodisimos/comodisimos.webp" width="3072" height="16153"/>',
    video: 'https://youtu.be/tjfFMJEdKUs',
  },
  {
    name: 'Ecomodisimos - landing',
    tags: ['Javascript', 'Vtex', 'HTML', 'CSS'],
    dialog:
      '<img src="imgs/projects/comodisimos/ecomodisimos.webp" width="5120" height="9072"/>',
    video: 'https://youtu.be/T8f0HNz8K1I',
  },
  {
    name: 'Todo en Artes',
    tags: ['Docker', 'Javascript', 'Design', 'Prestashop', 'PHP', 'CSS'],
    dialog:
      '<img src="imgs/projects/todo-en-artes/todoenartes.webp" width="1916" height="8169"/>',
  },
  {
    name: 'Codigital',
    tags: ['Javascript', 'Prestashop', 'Drupal', 'CSS', 'HTML', 'Angular'],
    dialog:
      '<img src="imgs/projects/codigital/codigital.webp" width="5120" height="11462"/>',
    video: 'https://youtu.be/zJn9D0gBM9o',
  },
  {
    name: 'Monte',
    tags: ['Javascript', 'Prestashop', 'CSS', 'HTML', 'PHP'],
    dialog:
      '<img src="imgs/projects/monte/monte.webp" width="1878" height="12857"/>',
  },
  {
    name: 'Hogar universal',
    tags: ['Javascript', 'Drupal', 'CSS', 'HTML', 'PHP'],
    dialog:
      '<img src="imgs/projects/universal/universal.webp" width="1400" height="9732"/>',
  },
  {
    name: 'Ostinata',
    tags: ['Javascript', 'CSS', 'HTML', 'PHP'],
    dialog:
      '<img src="imgs/projects/ostinatta/ostinatta.webp" width="1400" height="10686"/>',
  },
  {
    name: 'El Bellanita',
    tags: ['Javascript', 'Drupal', 'CSS', 'HTML', 'PHP'],
    dialog:
      '<img src="imgs/projects/el-bellanita/el-bellanita.webp" width="2000" height="4683"/>',
  },
  {
    name: 'Natalia Lafourcade',
    tags: ['CSS', 'HTML', 'PHP'],
    dialog:
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
