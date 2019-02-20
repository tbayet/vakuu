<template>
  <div id="game-container" v-if="downloaded" />
  <div class="placeholder" v-else>
    Downloading ...
  </div>
</template>

<script>
import Phaser from 'phaser'

export default {
  name: "Game",
  data: () => ({
    downloaded: false
  }),

  mounted () {
    import('@/game/game').then(game => {
      this.downloaded = true
      this.$nextTick(() => game.launch())
    })
  },
}
</script>

<style scoped>
  .placeholder {
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
