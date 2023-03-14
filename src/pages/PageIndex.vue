<template>
  <q-page>
    <section class="intro">
      <div class="container">
        <div class="intro-info">
          <h1>
            <span class="name animated fadeInLeft2 delay-1s"
              >Hi, my name is</span
            >
            <br />
            <span class="animated fadeInLeft delay-3s">
              <b>Felipe Uribe</b>. I bring ideas to life on the web through
              coding and design.
            </span>
          </h1>
          <h2 class="animated fadeInLeft delay-5s">
            I'm a developer who enjoys creating digital experiences in both
            design and development. Currently, I'm working on building products
            that are accessible and human-centered. I believe in the power of
            technology to improve people's lives and I strive to make it more
            inclusive and user-friendly.
          </h2>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="anchor" id="about"></div>

        <div class="flex-center">
          <div>
            <h1><span class="number">01</span>. About me</h1>

            <p>
              Since I was very young, I have always been a curious person and I
              have loved understanding how things work. Later, when I discovered
              the world of computers and familiarized myself with the philosophy
              of "I am because we all are" (Ubuntu), my interest in open-source
              software became a true passion. I love the idea of being able to
              modify and adapt technology to my needs and preferences, and that
              drives me to continue learning and exploring in this field.
            </p>

            <p>
              Here are a few *technologies I have been working with recently.
            </p>
            <ul>
              <li>CSS/Sass</li>
              <li>Javascript/NodeJs</li>
              <li>Vue/React/Angular</li>
              <li>Strapi</li>
              <li>HTML</li>
              <li>Linux/Docker</li>
              <li>Inkscape/Figma/SVG</li>
              <li>UX/UI</li>
              <li>PostgreSQL/InfluxDB</li>
            </ul>
          </div>

          <div>
            <div class="me">
              <img src="/imgs/me.webp" alt="Felipe Uribe" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="work">
      <div class="container">
        <div class="anchor" id="work"></div>

        <div class="flex-center">
          <h1><span class="number">02</span>. Work</h1>
          <p>
            <span>05.</span>Currently, in my free time, I experiment with new
            technologies, decorate interfaces and iconography for Linux
            operating systems, and contribute to open-source. Professionally, I
            contribute to the development of web application interfaces for
            PuntosColombia.
          </p>
          <p>
            <span>04.</span>Previously, I created the design for the web,
            implemented servers in containers, and created the design and
            front-end development for the sales and commercial management system
            for Comodisimos.
          </p>
          <p>
            <span>03.</span>Before that, I created the design, strategy,
            development, server implementation, and production launch for the
            website for Todo en Artes.
          </p>
          <p>
            <span>02.</span>Before all of this, I worked at two digital
            marketing agencies: the first, "WebCreativa," where I honed my web
            development skills, discovered my passion for user interfaces, and
            learned a lot about design and user experience. At the second agency
            I worked at, "CoDigital," I was able to apply much of my knowledge
            by developing products in more detail and focusing on experiences.
          </p>
          <p>
            <span>01.</span>However, during these 14 years, when work allowed
            me, I have worked as a freelancer, discovering and applying all my
            motivation in the projects I have been involved in.
          </p>
        </div>

        <hr style="margin: 4rem 0" />

        <PortfolioList />
      </div>
    </section>

    <section class="projects">
      <div class="container">
        <div class="anchor" id="projects"></div>

        <h1><span class="number">03</span>. Projects</h1>

        <div class="projects-list">
          <ProjectsList />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ProjectsList from 'src/components/projects/ProjectsList.vue';
import PortfolioList from 'components/portfolio/PortfolioList.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  name: 'PageIndex',
  components: {
    ProjectsList: ProjectsList,
    PortfolioList: PortfolioList,
  },
  setup() {
    /**
     * Used for github pages to redirect internal
     * pages to the 400 and from there redirect to home,
     * so you can use full paths instead of hashes
     */
    const router = useRouter();
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      router.push(redirect);
      sessionStorage.removeItem('redirect');
      return;
    }

    onMounted(() => {
      /**
       * Scroll effects
       */
      gsap.registerPlugin(ScrollTrigger);

      const boxes = gsap.utils.toArray<HTMLElement>('h1');
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { opacity: 0.1, x: -100, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            scrollTrigger: {
              trigger: box,
              start: 'top 90%',
              end: '+=400',
              scrub: true,
              // markers: true, // For developer
              id: 'project',
            },
          }
        );
      });

      const boxes2 = gsap.utils.toArray<HTMLElement>('p');
      boxes2.forEach((box) => {
        gsap.fromTo(
          box,
          { opacity: 0.1, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: box,
              start: 'top 90%',
              end: '+=200',
              scrub: true,
              // markers: true, // For developer
              id: 'project',
            },
          }
        );
      });
    });

    return {};
  },
});
</script>

<style scoped lang="scss">
.anchor {
  width: 1px;
  height: 1px;
  position: absolute;
  top: -4rem;
}
section {
  // min-height: calc(100vh - 50px - 1rem);
  position: relative;
  padding: 3rem 0rem;

  @media (min-width: $breakpoint-md-max) {
    padding: 5rem 3rem;
  }

  h1 {
    font-size: var(--font-size-lg);
  }
}
.number {
  color: hsl(var(--color-acent-base), 74%);
  font-weight: 300;
  font-size: var(--font-size-lg);
}
.container {
  min-height: calc(100vh - 50px - 11rem);
}

.about,
.intro {
  display: flex;

  span {
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    border-top: 1px solid hsla(var(--color-acent-base), 70%, 0%);
    border-bottom: 1px solid hsla(var(--color-acent-base), 70%, 0%);
    width: calc(100% - 2rem);
    height: 0.5rem;
    background-image: url('/imgs/bg1.svg');
    background-attachment: fixed;
    bottom: -2rem;
    margin-bottom: 1rem;
  }
}

.intro {
  background-image: url('/imgs/bg.svg');
  background-attachment: fixed;
  background-repeat: space;

  .container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
    // margin-top: 2rem;
    // background-color: red;

    @media (min-width: $breakpoint-xs-max) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .intro-info {
    // backdrop-filter: blur(4px);
    background-color: var(--color-bg);

    h1 {
      margin: 0px;
      line-height: var(--font-lineheight-md);
      font-size: var(--font-size-xxxl);
    }

    b {
      color: hsl(var(--color-acent-base), 98%);
    }

    .name {
      color: hsl(var(--color-acent-base), 74%);
      letter-spacing: 0;
      font-weight: normal;
      display: inline-block;
      font-size: var(--font-size-base);
      font-family: var(--font-family-body);
    }

    h2 {
      font-size: var(--font-size-md);
    }
  }
}

.about {
  display: flex;
  align-items: center;
  // color: hsl(var(--color-bg-base), 26%);
  // background-color: hsl(var(--color-acent-base), 96%);

  .flex-center {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-direction: column;

    @media (min-width: $breakpoint-xs-max) {
      flex-direction: row;
    }
  }

  .me {
    background-color: hsl(var(--color-acent-base), 70%);
    display: inline-block;
    opacity: 0.4;
    border-radius: 0.5rem;
    position: relative;
    transition: var(--transition);

    &:hover {
      transform: scale(1.1, 1.1) translate(0.5rem, -0.5rem);
      opacity: 1;
    }

    img {
      width: 16rem;
      filter: grayscale(100%);
      display: block;
      mix-blend-mode: multiply;
      background-color: var(--color-bg);
      border-radius: 0.5rem;

      &:hover {
        mix-blend-mode: normal;
        filter: grayscale(0%);
      }
    }
  }

  ul {
    font-size: var(--font-size-sm);
    color: hsl(var(--color-acent-base), 74%);

    @media (min-width: $breakpoint-sm-max) {
      column-count: 2;
    }
  }
}

.work {
  display: flex;
  align-items: center;

  p {
    span {
      color: hsl(var(--color-acent-base), 74%);
      // margin-left: -2.5rem;
      margin-right: 0.5rem;
      position: relative;

      &::after {
        border: 1px solid hsla(var(--color-acent-base), 74%, 20%);
        content: '';
        height: 120%;
        width: 120%;
        position: absolute;
        top: -0.5rem;
        left: -1rem;
      }
    }
  }
}

.projects {
  margin-bottom: 0rem;
  padding-top: 6rem;
  padding-bottom: 15rem;
  position: relative;
  z-index: 1;

  &::after {
    padding-top: 0rem;
    content: 'Projects';
    font-size: 18rem;
    position: absolute;
    text-align: center;
    z-index: -1;
    top: 0px;
    width: 80%;
    height: 100%;
    overflow: hidden;
    left: 10%;
    line-break: anywhere;
    color: hsl(var(--color-bg-base), 17%);
    font-family: var(--font-family-title);
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0px;
    width: 100%;
    height: 90%;
    left: 0px;
    line-break: anywhere;
    background-color: hsl(var(--color-bg-base), 16%);
    transform: skew(0, 3deg);
  }

  h1 {
    position: relative;
    margin-bottom: 6rem;
  }

  .projects-list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 1px;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
