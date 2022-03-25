<template>
  <ion-page>
    <ion-content class="background-light">
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
              <swap-component/>
              <!--        end content-->
            </b-tab>
            <b-tab title="EXCHANGE">

            </b-tab>
          </b-tabs>
        </ion-col>
        <!--    end tabs-->
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import {IonRow,IonCol,IonText,IonContent,IonPage} from '@ionic/vue'
//swap component
import swapComponent from '../../components/trade/swapComponent'
import SwapComponent from "@/components/trade/swapComponent";
export default {
  components:{SwapComponent,IonContent,IonRow,IonCol,IonText,swapComponent,IonPage}
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