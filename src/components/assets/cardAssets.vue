<template>
  <ion-row class="px-50 mt-30">
    <ion-col size="4" class="mb-40">
      <div class="custom-card-assets bg-purple-1 round m-auto">
        <ion-icon src="../../assets/icon/Group.svg" class="fSize-20 icon-color"></ion-icon>
      </div>
    </ion-col>
    <ion-col size="4" class="mb-40">
      <div class="custom-card-assets bg-purple-1 round m-auto">
        <ion-icon src="../../assets/icon/dollar-circle.svg" class="fSize-20 icon-color"></ion-icon>
      </div>
    </ion-col>
    <ion-col size="4" class="mb-40">
      <div class="custom-card-assets bg-purple-1 round m-auto">
        <ion-icon src="../../assets/icon/maximize-circle.svg" class="fSize-20 icon-color"></ion-icon>
      </div>
    </ion-col>
    <ion-col size="4" class="mb-40">
      <div class="custom-card-assets bg-purple-1 round m-auto">
        <ion-icon src="../../assets/icon/card-receive.svg" class="fSize-20 icon-color"></ion-icon>
      </div>
    </ion-col>
    <ion-col size="4" class="mb-40">
      <div class="custom-card-assets bg-purple-1 round m-auto">
        <ion-icon src="../../assets/icon/card.svg" class="fSize-20 icon-color"></ion-icon>
      </div>
    </ion-col>
    <ion-col size="4" class="mb-40">
      <div class="custom-card-assets bg-purple-1 round m-auto">
        <ion-icon src="../../assets/icon/card-send.svg" class="fSize-20 icon-color"></ion-icon>
      </div>
    </ion-col>
  </ion-row>
</template>
<script>
import {IonRow,IonCol,IonIcon} from '@ionic/vue'
export default {
  components:{IonRow,IonCol,IonIcon}
}
</script>
<style scoped>
.custom-card-assets{
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>