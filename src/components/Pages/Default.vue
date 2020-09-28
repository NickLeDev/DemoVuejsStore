<script>
  export default {
    name: 'DefaultPage',
    data() {
      return {
        //
      };
    },
  };
</script>

<style lang="scss">
  .page {
    min-height: 100vh;
    width: 100%;
  }

  .page__layout {
    .home & {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }

  .page__main {
    .home & {
      flex: 70%;
      padding: 20px;
    }
  }

  .page__aside{
    .home & {
      flex: 30%;
      padding: 20px;
    }
  }
</style>

<template>
  <div class="page">
    <div class="page__layout">
      <main class="page__main">
        <slot name="main"></slot>
      </main>
      <aside class="page__aside">
        <slot name="aside"></slot>
      </aside>
    </div>
  </div>
</template>