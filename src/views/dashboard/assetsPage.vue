<template>
  <ion-page>
    <ion-content class="bg-purple-1">
      <!-- start search box -->
      <ion-row class="ion-no-border mt-40 px-35">
        <ion-col size="12">
          <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox"></ion-searchbar>
        </ion-col>
      </ion-row>
      <!-- end search box -->
<!--      start content-->
      <ion-row>
        <!-- start title and subtitle -->
        <ion-col size="12" class="title custom-mainDashboard mt-40">
          <ion-text class="dark">
            <h2 class="ion-text-center">$  16,003.00</h2>
          </ion-text>
          <ion-text color="medium">
            <h6 class="ion-text-center">CaPay Balance</h6>
          </ion-text>
        </ion-col>
        <!-- end title and subtitle-->
        <!-- start deposit and withdrawel -->
        <ion-col size="12" class="custom-deposit custom-mainDashboard mt-60">
          <deposit-component/>
        </ion-col>
        <!-- end deposit and withdrawel -->
        <!--    start content-->
        <ion-col class="rounded-x-55 background-light mt-35">
          <!--      start card-->
          <card-assets/>
          <!--      end card-->
          <!--      start tab list-->
          <ion-row>
            <ion-col size="12" class="px-35 mt-10">
              <b-tabs>
                <b-tab title="Coins">
                  <coins-tab/>
                </b-tab>
              </b-tabs>
            </ion-col>
          </ion-row>
          <!--      end tab list-->
        </ion-col>
        <!--    end content-->
      </ion-row>
<!--      end content-->
    </ion-content>
  </ion-page>
</template>
<script>
import {IonRow,IonCol,IonText,IonContent,IonPage} from '@ionic/vue'
import depositComponent from "@/components/assets/depositComponent";
import cardAssets from "@/components/assets/cardAssets";
import CoinsTab from "@/components/assets/CoinsTab";
export default {
  components:{IonRow,IonCol,IonText,depositComponent,CoinsTab,IonContent,IonPage,cardAssets}
}
</script>

<style scoped>
  .icon-color{
    stroke: #000000 !important;
  }
  ion-item{
    --ion-border-color: #F4F5F7 !important;
  }
</style>