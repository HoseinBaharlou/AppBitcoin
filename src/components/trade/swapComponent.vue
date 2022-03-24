<template>
  <!--          start input-->
  <div class="mt-25">
    <ion-label position="stacked" class="dark">You Pay</ion-label>
    <ion-item class="h-44 rounded-15 bg-purple-1 mt-1">
      <ion-input value="0" class="dark"></ion-input>
      <a href="" class="custom-link"><span>BNB</span><ion-icon src="../assets/icon/Vector.svg"></ion-icon></a>
    </ion-item>
  </div>
  <!--          end input-->
  <div class="mt-1">
    <ion-text class="dark">Balance: 0 BNB</ion-text>
  </div>
  <div class="ion-text-end">
    <ion-icon src="../../assets/icon/arrange-square-2.svg" size="large"></ion-icon>
  </div>
  <!--          start input-->
  <div>
    <ion-label position="stacked" class="dark">You Get</ion-label>
    <ion-item class="h-44 rounded-15 bg-purple-1 mt-1">
      <ion-input value="0" class="dark"></ion-input>
      <a href="" class="custom-link">
        <div>
          <section class="fSize-12">ADA</section>
          <section class="fSize-8">TRC20</section>
        </div>
        <ion-icon src="../assets/icon/Vector.svg"></ion-icon>
      </a>
    </ion-item>
  </div>
  <!--          end input-->
  <div class="mt-1">
    <ion-text class="dark">Balance: 0 ADA</ion-text>
  </div>
  <!--          start button-->
  <ion-button class="custom-button background-yellow mt-65 remove-shadow" expand="block">SWAP</ion-button>
  <!--          end button-->

</template>
<script>
import {IonItem,IonInput,IonIcon,IonLabel,IonButton} from '@ionic/vue'
export default {
  components:{IonItem,IonInput,IonIcon,IonLabel,IonButton}
}
</script>