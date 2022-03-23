<template>
  <ion-row class="trade bg-purple-1 mb-70 trade">
<!--    start title-->
    <ion-col class="mt-90 background-light rounded-x-55 px-35">
      <div class="mt-25 mb-25">
        <ion-text>
          <h3 class="dark">trade</h3>
        </ion-text>
      </div>
      <hr class="custom-line">
<!--      end title-->
<!--      start tabs-->
      <b-tabs class="mt-50">
        <b-tab title="SWAP">
<!--          start content-->
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
<!--        end content-->
        </b-tab>
        <b-tab title="EXCHANGE">

        </b-tab>
      </b-tabs>
    </ion-col>
<!--    end tabs-->
  </ion-row>
</template>
<script>
import {IonRow,IonCol,IonText,IonItem,IonInput,IonIcon,IonLabel} from '@ionic/vue'
export default {
  components:{IonRow,IonCol,IonText,IonItem,IonInput,IonIcon,IonLabel}
}
</script>
<style>
.trade .nav{
position: unset !important;
padding-bottom: 0 !important;
padding-top: 0 !important;
}
.trade .nav-link{
  color: #000000 !important;
}
.trade .nav-link.active{
border: none;
border-bottom: 1px solid  #FEC42D !important;
color:  #FEC42D !important;
padding-bottom: 20px !important;
}
.trade ion-item{
--ion-border-color: #F4F5F7 !important;
}
.trade .custom-link{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
}
</style>