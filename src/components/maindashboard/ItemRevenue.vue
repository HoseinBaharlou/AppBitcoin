<template>
  <ion-row class="px-25">
    <ion-col size="12" class="ion-no-padding">
      <ion-list class="ion-no-padding">
        <ion-item class="ion-no-padding background-light" lines="none">
          <ion-card class="custom-avatar-list custom-card-list" style="background: #248A57;">
            <ion-card-header class="ion-no-padding">
              <ion-card-title class="ion-text-center">
                <ion-icon src="../../assets/icon/dollar-circle.svg"/>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
          <section class="text-item-list">
            <div>
              <ion-text class="dark">
                Sorat Sorati
              </ion-text>
            </div>
            <div>
              <ion-text color="medium">
                Monthly charge
              </ion-text>
            </div>
          </section>
          <ion-text class="custom-subtitle-item" slot="end">
            + $ 1,22.00
          </ion-text>
        </ion-item>

        <ion-item class="ion-no-padding background-light" lines="none">
          <ion-card class="custom-avatar-list custom-card-list" style="background: #248A57;">
            <ion-card-header class="ion-no-padding">
              <ion-card-title class="ion-text-center">
                <ion-icon src="../../assets/icon/dollar-circle.svg"/>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
          <section class="text-item-list">
            <div>
              <ion-text class="dark">
                Sorat Sorati
              </ion-text>
            </div>
            <div>
              <ion-text color="medium">
                Monthly charge
              </ion-text>
            </div>
          </section>
          <ion-text class="custom-subtitle-item" slot="end">
            + $ 1,22.00
          </ion-text>
        </ion-item>

        <ion-item class="ion-no-padding background-light" lines="none">
          <ion-card class="custom-avatar-list custom-card-list" style="background: #5956F4;">
            <ion-card-header class="ion-no-padding">
              <ion-card-title class="ion-text-center">
                <ion-icon src="../../assets/icon/Group.svg"/>
              </ion-card-title>
            </ion-card-header>
          </ion-card>
          <section class="text-item-list">
            <div>
              <ion-text class="dark">
                Sorat Sorati
              </ion-text>
            </div>
            <div>
              <ion-text color="medium">
                Buy a card
              </ion-text>
            </div>
          </section>
          <ion-text class="custom-subtitle-item" slot="end">
            + $ 10,22.00
          </ion-text>
        </ion-item>
      </ion-list>
    </ion-col>
    <ion-col size="11" class="custom-button-dashboard m-auto">
      <ion-button expand="block" class="remove-shadow custom-button ion-text-capitalize background-gray text-color-button">See All</ion-button>
    </ion-col>
  </ion-row>
</template>
<script>
import {IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonItem,IonList,IonIcon} from '@ionic/vue'
export default {
  components:{IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonItem,IonList,IonIcon}
}
</script>
<style scoped>
  ion-icon{
    stroke: #FFFFFF;
  }
</style>