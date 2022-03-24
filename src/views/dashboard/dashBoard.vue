<template>
  <ion-page class="dashboard">
    <ion-content class="background-light">
      <b-tabs pills card end class="main-tab" align="center">
        <b-tab title="Tab 1" active>
          <div class="ion-no-padding">
            <market-page/>
          </div>
        </b-tab>
        <b-tab title="Tab 2">
          <div>
            <trade-page/>
          </div>
        </b-tab>
        <b-tab title="Tab 3">
          <div>
            <assets-page/>
          </div>
        </b-tab>
        <b-tab title="Tab 4">
          <div>
            <profile-page/>
          </div>
        </b-tab>
      </b-tabs>
    </ion-content>
  </ion-page>
</template>
<script>
import {IonPage} from "@ionic/vue";
import marketPage from './marketPage'
import tradePage from "@/views/dashboard/tradePage";
import assetsPage from "@/views/dashboard/assetsPage";
import profilePage from "@/views/dashboard/profilePage";
export default {
  components:{IonPage,marketPage,tradePage,assetsPage,profilePage}
}
</script>
<style>
.card-body{
  padding: 0 !important;
}
.dashboard .nav{
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #FFFFFF;
  padding-left: 0 !important;
  padding-bottom: 18px;
  padding-top: 18px;
}
.dashboard .card-header{
  background: #FFFFFF !important;
  border-bottom: none;
}
</style>