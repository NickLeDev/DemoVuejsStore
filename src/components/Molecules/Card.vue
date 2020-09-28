<script>
export default {
  name: 'Card',
  data() {
    return {
      count: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in rutrum risus. In ut mattis turpis. Cras porttitor quis magna sit amet pretium. In maximus at justo sit amet commodo. Morbi vitae lacinia sem, id suscipit justo.',
    };
  },
}
</script>

<style lang="scss">
  .card {
    --size: 300px;
    --radius: 50px;

    align-items: center;
    background: linear-gradient(var(--angle),var(--firstGradientColor),var(--secondGradientColor));
    border-radius: var(--radius);
    box-shadow: var(--positionX) var(--positionY) var(--blur) var(--darkColor),var(--positionXOpposite) var(--positionYOpposite) var(--blur) var(--lightColor);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    width: var(--size);
    height: var(--size);
    transition: background 0.2s;
  }

  .card__count {
    font-size: 4rem;
    font-weight: bold;
  }
</style>

<template>
  <div class="card">
    <div class="card__count">
      {{ count }}
    </div>
    <div class="card__text">
      {{ text }}
    </div>
  </div>
</template>
