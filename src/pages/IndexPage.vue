<template>
  <q-page>
    <section class="intro">
      <div class="intro-info">
        <h1>
          <span class="name">Hi, my name is</span><br />
          <b>Felipe Uribe</b>. I bring ideas to life on the web through coding
          and design.
        </h1>
        <h2>
          I'm a developer who enjoys creating digital experiences in both design
          and development. Currently, I'm working on building products that are
          accessible and human-centered. I believe in the power of technology to
          improve people's lives and I strive to make it more inclusive and
          user-friendly.
        </h2>
      </div>
    </section>

    <!-- <section class="codelog">
      <h1 class="title4">CodElog</h1>

      <article v-for="n in 4" :key="n" class="transition hover-scale1">
        <router-link to="/codelink/1">
          <div class="date">ABOUT 2 MONTHS AGO</div>
          <h2 class="title2">
            Accusamus; quidem neque Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </h2>

          <div class="tags">
            <span>Javascript</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </router-link>
      </article>
    </section> -->

    <section class="about">
      <div class="anchor" id="about"></div>

      <div>
        <h1><span class="number">01</span>. About me</h1>

        <p>
          Since I was very young, I have always been a curious person and I have
          loved understanding how things work. Later, when I discovered the
          world of computers and familiarized myself with the philosophy of "I
          am because we all are" (Ubuntu), my interest in open-source software
          became a true passion. I love the idea of being able to modify and
          adapt technology to my needs and preferences, and that drives me to
          continue learning and exploring in this field.
        </p>

        <p>Here are a few *technologies I've been working with recently:</p>
        <ul>
          <li>Javascript/Vue/React/Angular</li>
          <li>NodeJs/Strapi</li>
          <li>CSS/Sass</li>
          <li>HTML</li>
          <li>Linux/Docker</li>
          <li>Inkscape/Figma/SVG</li>
          <li>UX/UI</li>
          <li>PostgreSQL/InfluxDB</li>
        </ul>
      </div>

      <div>
        <div class="me">
          <img src="/imgs/me.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="work">
      <div class="anchor" id="work"></div>

      <h1><span class="number">02</span>. Work</h1>
      <p>
        Currently, in my free time, I experiment with new technologies, decorate
        interfaces and iconography for Linux operating systems, and contribute
        to open-source. Professionally, I contribute to the development of web
        application interfaces for PuntosColombia.
      </p>
      <p>
        Previously, I created the design for the web, implemented servers in
        containers, and created the design and front-end development for the
        sales and commercial management system for Comodisimos.
      </p>
      <p>
        Before that, I created the design, strategy, development, server
        implementation, and production launch for the website for Todo en Artes.
      </p>
      <p>
        Before all of this, I worked at two digital marketing agencies: the
        first, "WebCreativa," where I honed my web development skills,
        discovered my passion for user interfaces, and learned a lot about
        design and user experience. At the second agency I worked at,
        "CoDigital," I was able to apply much of my knowledge by developing
        products in more detail and focusing on experiences.
      </p>
      <p>
        However, during these 14 years, when work allowed me, I have worked as a
        freelancer, discovering and applying all my motivation in the projects I
        have been involved in.
      </p>
    </section>

    <section class="projects">
      <div class="anchor" id="projects"></div>

      <h1><span class="number">03</span>. Projects</h1>

      <div class="projects-list">
        <article class="transition hover-scale2" v-for="n in 4" :key="n">
          <router-link to="/projects/1">
            <img src="imgs/projects/plane-theme.png" alt="plane theme" />
            <h2 class="small-title2">Plane GTK theme</h2>
          </router-link>
        </article>
      </div>
    </section>

    <!-- <div class="codelog">CodELog</div> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  components: {},
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
  min-height: calc(100vh - 50px - 1rem);
  position: relative;

  h1 {
    font-size: var(--font-size-lg);
  }
}

.intro {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
  // margin-top: 2rem;

  @media (min-width: $breakpoint-xs-max) {
    flex-direction: row;
    gap: 2rem;
  }

  .intro-info {
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

.number {
  color: hsl(var(--color-acent-base), 74%);
  font-weight: 300;
  font-size: var(--font-size-lg);
}

.about {
  display: flex;
  gap: 2rem;
  align-items: center;

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
    @media (min-width: $breakpoint-xs-max) {
      column-count: 2;
    }
  }
}

.projects {
  margin-bottom: 2rem;
  .projects-list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 1px;
    gap: 1rem;
    flex-wrap: wrap;
  }

  article {
    background-color: hsl(var(--color-bg-base), 22%);
    border-radius: 0.5rem;
    border: 1px solid rgba(55, 62, 99, 0.1);
    width: calc(50% - 1rem);

    @media (min-width: $breakpoint-sm-max) {
      width: calc(25% - 1rem);
    }

    &:hover {
      background: hsl(var(--color-bg-base), 26%);
    }

    a {
      align-items: center;
      padding: 0.5rem;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    img {
      width: 5rem;
    }
  }
}

.codelog {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  article {
    background: hsl(var(--color-bg-base), 22%);
    border-radius: 0.5rem;
    border: 1px solid rgba(59, 59, 102, 0.1);
    width: 100%;

    &:hover {
      background: hsl(var(--color-bg-base), 26%);
    }

    a {
      padding: 2rem;
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .date {
      font-size: 60%;
      letter-spacing: 0.1rem;
      color: hsl(var(--color-acent-base), 74%);
    }

    h2 {
      margin: 1rem 0;
      font-weight: 400;
    }

    .tags {
      font-size: var(--font-size-sm);
      color: hsl(var(--color-acent-base), 74%);
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
  }
}
</style>
