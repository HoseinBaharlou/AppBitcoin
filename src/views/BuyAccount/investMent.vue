<template>
  <ion-page>
    <ion-content class="bg-purple-1">
      <ion-row class="background-light mt-90 rounded-x-55 h-100">
        <ion-col size="12" class="px-35">
<!--          start icon-->
          <section class="mt-30 center">
            <ion-img src="../../assets/icon/Illustration.svg"/>
          </section>
<!--          end icon-->
<!--          start title and subtitle-->
          <section class="mt-65 ion-text-center">
            <ion-text class="dark"><h2>Activate your account!!!</h2></ion-text>
          </section>
          <section class="mt-30 ion-text-center">
            <ion-text color="medium">Take advantage of less cash by activating your
              account and earn a significant monthly
              income for yourself even without trading</ion-text>
          </section>
<!--          end title and subtitle-->
        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
<!--    start footer-->
    <ion-footer class="px-35">
      <ion-button expand="block" class="mb-25 remove-shadow background-yellow rounded-15 h-44">start</ion-button>
    </ion-footer>
<!--    end footer-->
  </ion-page>
</template>
<script>
import {IonPage,IonText,IonImg,IonCol,IonContent,IonRow,IonButton} from '@ionic/vue'
export default {
  components:{IonPage,IonText,IonImg,IonCol,IonContent,IonRow,IonButton}
}
</script>