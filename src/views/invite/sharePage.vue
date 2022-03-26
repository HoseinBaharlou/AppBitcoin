<template>
  <ion-page>
    <ion-content class="bg-purple-1">
      <ion-row class="background-light mt-60 rounded-x-55 px-35 h-100">
        <ion-col size="12">
<!--qrcode start-->
          <div class="center">
            <ion-img src="../../assets/icon/qrcode_8777312_ 1.svg" class="mt-30"></ion-img>
          </div>
<!--end qrcode-->
<!--          start invite code-->
          <section class="center ion-align-items-center">
            <ion-text color="medium" class="pr-10">Invite code:</ion-text><ion-text class="purple-1 fSize-24">22451</ion-text>
          </section>
<!--          end invite code-->
<!--          start title-->
          <section class="ion-text-center mt-35">
            <ion-text class="dark">
              <h2>
                Invite your Contacts
              </h2>
              <h2 class="purple-1">
                or Friends Earn Rewards
              </h2>
            </ion-text>
          </section>
<!--          end title-->
<!--          start input-->
          <div class="mt-65">
            <ion-item class="bg-purple-1 rounded-15 h-48" lines="none">
              <ion-input value="Https://www.gogle.con/share?code/.." color="medium"></ion-input>
              <ion-button class="background-yellow rounded-15 h-100 remove-shadow" slot="end">copy</ion-button>
            </ion-item>
          </div>
<!--          end input-->
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import {IonPage,IonContent,IonRow,IonCol,IonImg,IonInput,IonButton,IonText,IonItem} from '@ionic/vue'
export default {
  components:{IonPage,IonContent,IonRow,IonCol,IonImg,IonInput,IonButton,IonText,IonItem}
}
</script>
<style scoped>
  ion-item ion-button{
    margin-right: -14px;
  }
</style>