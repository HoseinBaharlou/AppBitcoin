<template>
  <ion-page>
<!--    start content-->
    <ion-content class="bg-purple-1">
      <ion-row class="background-light mt-90 px-35 h-100 rounded-x-55">
        <ion-col class="mt-150" size="12">
          <!--          start title-->
          <section class="ion-text-center">
            <ion-text><h2><span class="yellow">NFTI</span><span class="purple-1"> Buy, make a profit !!!</span></h2></ion-text>
          </section>
          <!--          end title-->
          <!--          start subtitle-->
          <section class="mt-20 ion-text-center">
            <ion-text color="medium">
              Please enter the desired token otherwise the
              token will be selected randomly for you
            </ion-text>
          </section>
          <!--          end subtitle-->
          <!--          start input-->
          <div class="mt-55">
            <ion-item class="background-light">
              <ion-label class="purple-1">NFTI TOKEN</ion-label>
              <ion-button slot="end" fill="clear" size="large">
                <ion-icon src="../../assets/icon/scanner.svg" size="large"></ion-icon>
              </ion-button>
            </ion-item>
            <ion-item class="bg-gray-1 rounded-15" lines="none">
              <ion-icon src="../../assets/icon/card-coin.svg"></ion-icon>
              <ion-input placeholder="NFTI TOKEN" class="dark px-25"></ion-input>
            </ion-item>
          </div>
          <!--          end input-->
        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
<!--    start footer-->
    <ion-footer class="px-35">
      <ion-button class="h-44 background-yellow mb-25 remove-shadow rounded-15" expand="block">random</ion-button>
    </ion-footer>
<!--    end footer-->
  </ion-page>
</template>
<script>
import {IonText,IonPage,IonContent,IonInput,IonItem,IonRow,IonCol,IonButton,IonIcon,IonLabel,IonFooter} from '@ionic/vue'
export default {
  components:{IonText,IonPage,IonContent,IonInput,IonItem,IonRow,IonCol,IonButton,IonIcon,IonLabel,IonFooter}
}
</script>