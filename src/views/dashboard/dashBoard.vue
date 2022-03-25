<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="background-light ion-no-border">
        <ion-tab-button tab="main" href="/dashboard/main" class="m-auto">
          <ion-icon src="../../assets/icon/chart-2.svg" size="large"/>
        </ion-tab-button>

        <ion-tab-button tab="market" href="/dashboard/market" class="m-auto">
          <ion-icon src="../../assets/icon/fatrows.svg" size="large"/>
        </ion-tab-button>

        <ion-tab-button tab="trade" href="/dashboard/trade" class="m-auto">
          <ion-icon src="../../assets/icon/trade.svg" size="large"/>
        </ion-tab-button>

        <ion-tab-button tab="assets" href="/dashboard/assets" class="m-auto">
          <ion-icon src="../../assets/icon/empty-wallet.svg" size="large"/>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/dashboard/profile" class="m-auto">
          <ion-icon src="../../assets/icon/Group_2.svg" size="large"/>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script>
import {IonTabs,IonTabBar,IonTabButton,IonRouterOutlet,IonPage,IonIcon} from "@ionic/vue";
export default {
  components:{IonTabs,IonTabBar,IonTabButton,IonRouterOutlet,IonPage,IonIcon}
}
</script>
<style scoped>

ion-icon{
  stroke: #7A869A;
}
.tab-selected ion-icon{
  stroke: #ffffff;
}
ion-tab-button{
  max-width: 58px;
  height: 50px;
  border-radius: 13px;
}
ion-tab-bar{
  border: none;
  padding-top: 11px;
  padding-bottom: 11px;
}
.tab-selected{
  --background: yellow !important;
  background: yellow !important;
}
</style>