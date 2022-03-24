<template>
<!--  <ion-page class="dashboard">-->
<!--    <ion-content class="background-transparent custom-color">-->
<!--      <b-tabs pills card end class="main-tab" align="center">-->
<!--        <b-tab title="Tab 1" active>-->
<!--          <div class="ion-no-padding">-->
<!--            <market-page/>-->
<!--          </div>-->
<!--        </b-tab>-->
<!--        <b-tab title="Tab 2">-->
<!--          <div>-->
<!--            <trade-page/>-->
<!--          </div>-->
<!--        </b-tab>-->
<!--        <b-tab title="Tab 3">-->
<!--          <div>-->
<!--            <assets-page/>-->
<!--          </div>-->
<!--        </b-tab>-->
<!--        <b-tab title="Tab 4">-->
<!--          <div>-->
<!--            <profile-page/>-->
<!--          </div>-->
<!--        </b-tab>-->
<!--      </b-tabs>-->
<!--    </ion-content>-->
<!--  </ion-page>-->
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="background-light">
        <ion-tab-button href="/dashboard/main" tab="main">
          <ion-icon src="../../assets/icon/chart-2.svg"></ion-icon>
        </ion-tab-button>
        <ion-tab-button href="/dashboard/main" tab="main">
          <ion-icon src="../../assets/icon/chart-2.svg"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script>
import {IonPage,IonTabs,IonTabBar,IonTabButton,IonRouterOutlet} from "@ionic/vue";
export default {
  components:{IonPage,IonTabs,IonTabBar,IonTabButton,IonRouterOutlet}
}
</script>
<style>
/*.card-body{*/
/*  padding: 0 !important;*/
/*}*/
/*.dashboard .nav{*/
/*  position: fixed;*/
/*  bottom: 0px;*/
/*  width: 100%;*/
/*  padding-left: 0 !important;*/
/*  padding-bottom: 18px;*/
/*  padding-top: 18px;*/
/*}*/
/*.dashboard .card-header{*/
/*  background: #FFFFFF;*/
/*  border-bottom: none;*/
/*}*/
ion-icon{
  stroke: #000000;
}
</style>