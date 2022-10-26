<template>
  <div
    class="modal"
    v-if="$store.state.modal.isOpen"
    @click="$store.commit('setIsOpen', false)"
  >
    <div class="modal__content" @click.stop>
      <p class="modal__title">
        <span>Модальное окно</span>
        <button class="modal__btn" @click="$store.commit('setIsOpen', false)">
          <IconClose class="modal__icon" name="close" />
        </button>
      </p>
      <p>Индекс: {{ $store.state.modal.index }}</p>
    </div>
  </div>
</template>

<script>
import IconClose from "@/components/Icons/IconClose";
export default {
  components: { IconClose },
  name: "Modal",
};
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 20px;

  &__title {
    font-size: var(--fz-l);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__icon {
    width: 18px;
    height: 18px;
    object-fit: cover;
    fill: var(--color-primary);
  }

  &__content {
    margin: auto;
    background-color: gray;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
    min-height: 200px;
    padding: 20px;
  }
}
</style>
