<template>
  <main class="alp-home">
    <h1 class="alp-home__title">
      Analysons le projet du <span class="alp-home__title__red">Front National</span>
    </h1>
    <p class="alp-home__intro">
      Le projet du FN et de la FI n'ont rien en commun ! Ni en matière d'écologie, ni de démocratie, ni de justice sociale !
      <br>
      Le programme du FN est en tout point opposé à nos aspirations, ne nous laissons pas emfumer !
    </p>
    <p class="alp-home__choose">
      Sélectionnez un thème et comparez le programme du 
      <span class="alp-home__intro__red">Front National</span> à celui de la <span class="alp-home__intro__red">France Insoumise</span>
    </p>

    <img class="alp-home__icon" src="./assets/arrow.down.png" alt="arrow down" height="24" width="24">

    <div class="alp-home__themes">
      <alp-big-theme image="democratique">Urgence démocratique</alp-big-theme>
      <alp-big-theme image="sociale">Urgence sociale</alp-big-theme>
      <alp-big-theme image="ecologique">Urgence écologique</alp-big-theme>
    </div>
  </main>
</template>

<script>
import Button from './Button.vue'
import BigTheme from './Home-BigTheme.vue'

export default {
  components: {
    'alp-button': Button,
    'alp-big-theme': BigTheme
  }
}
</script>

<style>
.alp-home__title {
  color: #23b9d0;
  font-size: 36px;
  font-weight: 600;
  margin: 30px 0;
  text-align: center;
}

.alp-home__title__red {
  color: #c9462c;
}

.alp-home__intro {
  color: #222222;
  font-size: 18px;
  margin: 0 auto;
  max-width: 700px;
  padding: 30px 0;
}

.alp-home__choose {
  color: #23b9d0;
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  text-transform: uppercase;
}

.alp-home__intro__red {
  color: #c9462c;
  font-weight: 600;
}

.alp-home__icon {
  display: block;
  margin: 20px auto;
}

.alp-home__themes {
  display: flex;
  margin: 80px;
  min-height: 520px;
}
</style>
