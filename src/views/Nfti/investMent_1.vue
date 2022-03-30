<template>
  <ion-page>
<!--    start content-->
    <ion-content class="bg-purple-1">
      <ion-row class="mt-90 background-light rounded-x-55 h-100">
        <ion-col size="12">
<!--        start icon-->
          <div class="center">
            <ion-img src="../../assets/icon/card-pos.svg"></ion-img>
          </div>
<!--        end icon-->
<!--        start input-->
          <section class="px-35 mt-85">
            <div>
              <ion-label class="purple-1">NFTI TOKEN</ion-label>
              <ion-item class="bg-gray-1 rounded-15 mt-10 h-44" lines="none">
                <ion-icon src="../../assets/icon/card-coin.svg"></ion-icon>
                <ion-input class="px-25 dark" placeholder="0xe16ffa230xe16ffa235d18105d1810"></ion-input>
              </ion-item>
            </div>

            <div class="mt-20">
              <ion-label class="purple-1">Price</ion-label>
              <ion-item class="bg-gray-1 rounded-15 mt-10 h-44" lines="none">
                <ion-icon src="../../assets/icon/money-send.svg"></ion-icon>
                <ion-input class="px-25 dark" placeholder="20.00"></ion-input>
              </ion-item>
            </div>

            <div class="mt-20">
              <ion-label class="purple-1">Wage</ion-label>
              <ion-item class="bg-gray-1 rounded-15 mt-10 h-44" lines="none">
                <ion-icon src="../../assets/icon/money-send.svg"></ion-icon>
                <ion-input class="px-25 dark" placeholder="20.00"></ion-input>
              </ion-item>
            </div>
          </section>
        </ion-col>
<!--        end input-->
      </ion-row>
    </ion-content>
<!--    end content-->
<!--    start footer-->
    <ion-footer class="px-35">
      <ion-button class="background-yellow rounded-15 mb-25 remove-shadow h-44" expand="block">Buy</ion-button>
    </ion-footer>
<!--end footer-->
  </ion-page>
</template>
<script>
import {IonPage,IonCol,IonContent,IonRow,IonIcon,IonFooter,IonLabel,IonInput,IonButton} from '@ionic/vue'
export default {
  components:{IonPage,IonCol,IonContent,IonRow,IonIcon,IonFooter,IonLabel,IonInput,IonButton}
}
</script>