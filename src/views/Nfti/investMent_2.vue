<template>
  <ion-page>
<!--    start content-->
    <ion-content class="bg-purple-1">
      <ion-row class="background-light rounded-x-55 mt-90 h-100">
        <ion-col size="12">
<!--          start icon-->
          <div class="mt-10 center">
            <ion-img src="../../assets/icon/card-pos.svg" />
          </div>
<!--          end icon-->
            <section class="px-35">
              <!--          start title and subtitle-->
              <div class="mt-60 ion-text-center">
                <ion-text><h2><span class="yellow">NFTI</span><span class="purple-1"> Buy, make a profit !!!</span></h2></ion-text>
              </div>
              <div class="mt-60 ion-text-center">
                <ion-text color="medium">In this section, the amount you want will be deducted
                  from your wallet. If you do not have balance, first charge
                  your wallet.</ion-text>
              </div>
              <!--          end title and subtitle-->
              <!--          start input-->
              <div class="mt-45">
                <ion-label>Price</ion-label>
                <ion-item class="h-44 rounded-15 bg-purple-1 mt-10" lines="none">
                  <ion-icon src="../../assets/icon/money-send.svg"/>
                  <ion-input class="px-25 dark" placeholder="40.00"></ion-input>
                </ion-item>
              </div>
              <section class="mt-20">
                <ion-text class="dark">Balance: 255.00 USDT</ion-text>
              </section>
              <!--          end input-->
            </section>
        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
<!--    start footer-->
    <ion-footer class="px-35">
      <ion-button expand="block" class="rounded-15 h-44 background-yellow mb-25 remove-shadow">Buy</ion-button>
    </ion-footer>
<!--    end footer-->
  </ion-page>
</template>
<script>
import {IonPage,IonText,IonContent,IonRow,IonCol,IonFooter,IonImg,IonLabel,IonIcon,IonInput} from '@ionic/vue'
export default {
  components:{IonPage,IonText,IonContent,IonRow,IonCol,IonFooter,IonImg,IonLabel,IonIcon,IonInput}
}
</script>