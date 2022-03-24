<template>
  <ion-app class="coinBtc">
    <!--          start header-->
    <ion-header class="bg-purple-1 ion-no-border">
      <ion-row class="mt-90">
        <!--            start title-->
        <ion-col class="ion-no-padding" size="12">
          <div class="custom-box m-auto">
            <ion-icon src="../../assets/icon/bitcoin-(btc).svg" size="large"></ion-icon>
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
<!--        start subtitle-->
        <ion-col size="12" class="mt-20">
          <div class="ml-35">
            <ion-text class="weight-bold">5412.124512</ion-text>
          </div>
          <div class="pl-20 mt-10">
            <ion-text class="weight-bold">~ $  2512.6</ion-text>
            <ion-text color="success" class="pl-20">+12%</ion-text>
          </div>
        </ion-col>
<!--        end subtitle-->
        <!--            start button-->
        <ion-col size="12">
          <ion-row class="mt-30">
            <ion-col size="6" class="center">
              <ion-button class="background-light rounded-15 weight-bold remove-shadow w-120 h-44">Send</ion-button>
            </ion-col>
            <ion-col size="6" class="center">
              <ion-button class="background-light rounded-15 weight-bold remove-shadow w-120 h-44">Receive</ion-button>
            </ion-col>
          </ion-row>
        </ion-col>
        <!--            end button-->
      </ion-row>
    </ion-header>
    <!--          end header-->
<!--    start content-->
    <ion-content class="bg-purple-1">
      <ion-row class="mt-25 background-light rounded-x-55 h-100">
        <ion-col size="12" class="mt-40">
          <b-tabs class="px-35">
            <b-tab title="ALL">
              <all-component></all-component>
            </b-tab>
            <b-tab title="Receive">

            </b-tab>
            <b-tab title="Send">

            </b-tab>
          </b-tabs>

        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
  </ion-app>
</template>
<script>
import {IonCol,IonRow,IonApp,IonContent,IonHeader,IonText} from '@ionic/vue'
import allComponent from "@/components/coinbtc/allComponent";
export default {
  components:{IonCol,IonRow,IonApp,IonContent,IonHeader,IonText,allComponent}
}
</script>
<style>
.coinBtc .nav{
  position: unset !important;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}
.coinBtc .nav-link.active{
  border: none;
  border-bottom: 1px solid  #FEC42D !important;
  color:  #FEC42D !important;
  padding-bottom: 20px !important;
}
.coinBtc ion-item{
  --ion-border-color: #F4F5F7 !important;
}
.coinBtc .nav-link{
  color: #000000 !important;
}
.coinBtc .nav-link.active{
  border: none;
  border-bottom: 1px solid  #FEC42D !important;
  color:  #FEC42D !important;
  padding-bottom: 20px !important;
}
</style>