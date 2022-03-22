<template>
  <ion-app>
    <!--          start header-->
    <ion-header class="bg-purple-1 ion-no-border">
      <ion-row class="mt-55">
        <!--            start title-->
        <ion-col class="ion-no-padding" size="12">
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
        <!--            end title-->
        <!--            start button-->
        <ion-col size="12">
          <ion-row class="mt-45">
            <ion-col size="6" class="center">
              <ion-button class="bg-light rounded-15 weight-bold remove-shadow w-120 h-44">COPY</ion-button>
            </ion-col>
            <ion-col size="6" class="center">
              <ion-button class="bg-light rounded-15 weight-bold remove-shadow w-120 h-44">Share</ion-button>
            </ion-col>
          </ion-row>
        </ion-col>
        <!--            end button-->
      </ion-row>
    </ion-header>
    <!--          end header-->

<!--    start content-->
    <ion-content class="bg-purple-1">
      <ion-row class="mt-55 bg-light rounded-x-55 h-100">
<!--          start qrcode-->
        <ion-col size="12" class="mt-55">
          <ion-thumbnail class="qrcode m-auto">
            <ion-img src="../assets/icon/qrcode_8777312_ 1.svg" />
          </ion-thumbnail>
        </ion-col>
<!--          end qrcode-->
      </ion-row>
    </ion-content>
<!--    end content-->

<!--    start footer-->
    <ion-footer class="bg-light ion-no-border px-35">
      <!--          start token-->
      <ion-col size="12" class="mt-55">
        <ion-item class="bg-light ion-no-border ion-no-padding dark h-44 bg-purple-1 rounded-15  mb-70" lines="none">
          <ion-input class="ion-no-border ion-text-center" placeholder="0xe16ffa230xe16ffa235d18105d1810"></ion-input>
        </ion-item>
      </ion-col>
      <!--          end token-->
    </ion-footer>
<!--    end footer-->
  </ion-app>
</template>
<script>
  import {IonApp,IonIcon,IonRow,IonCol,IonContent,IonButton} from '@ionic/vue'
  export default {
    components:{IonApp,IonIcon,IonRow,IonCol,IonContent,IonButton}
  }
</script>

<style scoped>
.qrcode{
  --size: 230px !important;
}
</style>
