<template>
  <div class="modal">
    {{ textMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ModalView extends Vue {
  @Prop(String) readonly textMessage: string;
}
</script>
