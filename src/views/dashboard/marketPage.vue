<template>
  <ion-page>
    <!--    start content-->
    <ion-content class="background-light">
      <!--      start searchbox-->
      <ion-row class="bg-purple-1">
        <ion-col size="12" class="px-35">
          <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox mt-90"></ion-searchbar>
        </ion-col>
      </ion-row>
      <!--      end searchbox-->
      <ion-row class="bg-purple-1">
        <ion-col class="ion-no-padding background-light mt-35 rounded-x-55 h-100" size="12">
          <div class="ml-35 mt-25 mb-25">
            <ion-text>
              <h3 class="dark">Crypto</h3>
            </ion-text>
          </div>
          <hr class="custom-line">
          <b-tabs class="px-35">
            <b-tab title="Favorites">
              <favorites-components/>
            </b-tab>
            <b-tab title="USDT">

            </b-tab>
          </b-tabs>
        </ion-col>
      </ion-row>
    </ion-content>
    <!--    end content-->
  </ion-page>
</template>
<script>
import {IonPage,IonContent,IonRow,IonCol,IonText,IonSearchbar} from '@ionic/vue'
import favoritesComponents from "@/components/market/favoritesComponents";
export default {
  components:{IonPage,IonRow,IonCol,IonContent,favoritesComponents,IonText,IonSearchbar}
}
</script>
<style scoped>
ion-item{
  --ion-border-color: #F4F5F7 !important;
}
</style>