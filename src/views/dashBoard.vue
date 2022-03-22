<template>
  <ion-app>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom" class="bg-light ion-no-border">
          <ion-tab-button href="/dashboard/main" tab="mainDashboard" layout="icon-top">
            <ion-icon src="../assets/icon/chart-2.svg" size="large"></ion-icon>
          </ion-tab-button>
          <ion-tab-button href="/dashboard/main" tab="mainDashboard" class="background-yellow">
            <ion-icon src="../assets/icon/fatrows.svg" size="large"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
  </ion-app>
</template>
<script>
import {IonApp,IonTabs,IonTabBar,IonTabButton,IonRouterOutlet,IonIcon} from '@ionic/vue';
export default {
  components:{IonApp,IonTabs,IonTabBar,IonTabButton,IonRouterOutlet,IonIcon}
}
</script>
