<template>
  <ion-row>
    <ion-col>
      <ion-card class="custom-card background-light">
        <ion-card-header>
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/card-receive.svg" size="large"></ion-icon>
            </a>
          </ion-card-title>
          <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-col>
    <ion-col>
      <ion-card class="custom-card background-light">
        <ion-card-header>
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/card.svg" size="large"></ion-icon>
            </a>
          </ion-card-title>
          <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-col>
    <ion-col>
      <ion-card class="custom-card background-light">
        <ion-card-header>
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/card-send.svg" size="large"></ion-icon>
            </a>
          </ion-card-title>
          <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-col>
  </ion-row>
</template>
<script>
import {IonRow,IonCol,IonCard,IonCardTitle,IonCardHeader,IonIcon} from '@ionic/vue'
export default {
  components:{IonRow,IonCol,IonCard,IonCardTitle,IonCardHeader,IonIcon}
}
</script>