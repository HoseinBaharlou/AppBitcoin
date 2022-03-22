<template>
  <ion-app class="bg-purple-1">
<!--    start content-->
    <ion-content class="bg-purple-1">
<!--      start header-->
      <ion-row class="mt-45">
        <ion-col class="ion-no-padding">
          <div class="custom-box m-auto">
            <ion-icon src="../assets/icon/bitcoin-(btc).svg" size="large"></ion-icon>
          </div>
          <div class="ion-text-center mt-15">
            <ion-text class="ion-no-padding dark">
              <h2 class="ion-no-padding ion-no-margin">BTC</h2>
            </ion-text>
          </div>
          <div class="ion-text-center">
            <ion-text color="medium">
              Bitcoin
            </ion-text>
          </div>
        </ion-col>
      </ion-row>
<!--      end header-->
      <ion-row class="bg-light rounded-x-55 h-100 mt-15 ion-no-padding">
        <ion-col size="12">
          <ion-row>
            <!--        title-->
            <ion-col size="6">
              <ion-text>
                <h6 class="pt-15 pl-30 dark weight-bold">To</h6>
              </ion-text>
            </ion-col>
            <ion-col size="6" class="ion-text-end">
              <ion-button fill="clear" size="large" class="bg-light">
                <ion-icon src="../assets/icon/scanning.svg" size="large"></ion-icon>
              </ion-button>
            </ion-col>
            <!--        input-->
            <ion-col size="12" class="px-35">
              <ion-item class="bg-light ion-no-border ion-no-padding dark px-10 h-44 bg-purple-1 rounded-15 " lines="none">
                <ion-input class="ion-no-border "></ion-input>
              </ion-item>
            </ion-col>
<!--            title-->
            <ion-col size="12">
              <ion-text>
                <h6 class="dark mt-15 pl-30 pt-15 weight-bold">Amonunt</h6>
              </ion-text>
            </ion-col>
<!--            inputs-->
            <ion-col size="12">
              <div class="px-35">
                <ion-item class="bg-light ion-no-border ion-no-padding dark px-10 h-44 bg-purple-1 rounded-15 " lines="none">
                  <ion-input class="ion-no-border " value="00.0"></ion-input>
                  <ion-icon src="../assets/icon/MAX.svg" class="ion-align-self-end" slot="end"></ion-icon>
                </ion-item>

                <ion-item class="bg-light ion-no-border ion-no-padding dark px-10 h-44 mt-15 bg-purple-1 rounded-15 " lines="none">
                  <ion-input class="ion-no-border " value="00.0"></ion-input>
                  <ion-icon src="../assets/icon/USDT.svg" class="ion-align-self-end" slot="end"></ion-icon>
                </ion-item>
              </div>
              <div class="mt-15">
                <ion-text class="pl-30">
                  <span class="dark">Available balance : <span class="yellow">8564.2135</span> btc</span>
                </ion-text>
              </div>
            </ion-col>
<!--            title-->
            <ion-col size="12" class="mt-45">
              <ion-text>
                <h6 class="weight-bold dark pl-30">MEMO</h6>
              </ion-text>
            </ion-col>
<!--            input-->
            <ion-col size="12" class="ion-no-padding px-35">
              <ion-item class="bg-light ion-no-border ion-no-padding dark px-10 h-44 bg-purple-1 rounded-15" lines="none">
                <ion-input class="ion-no-border " placeholder="Optional"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
<!--    start footer-->
    <ion-footer class="pl-30 pr-30 ion-no-border bg-light">
      <ion-toolbar class="bg-light">
        <ion-button class="background-yellow custom-button mb-25 remove-shadow" expand="block">NEXT</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-app>
</template>
<script>
import {IonApp,IonCol,IonRow,IonContent,IonText,IonInput,IonFooter,IonToolbar,IonItem} from '@ionic/vue'
export default {
  components:{IonApp,IonCol,IonRow,IonContent,IonText,IonInput,IonFooter,IonToolbar,IonItem}
}
</script>
