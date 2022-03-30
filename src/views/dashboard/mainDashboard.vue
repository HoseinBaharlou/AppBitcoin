<template>
  <ion-page class="main-dashboard">
<!--    start content-->
    <ion-content class="bg-purple-1">
<!--      start searchbox-->
      <ion-row>
        <ion-col size="12" class="px-35">
          <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox mt-50"></ion-searchbar>
        </ion-col>
      </ion-row>
<!--      end searchbox-->
      <ion-row>
        <!-- start title and subtitle -->
        <ion-col size="12" class="mt-55 px-25">
          <ion-text class="dark">
            <h2 class="ion-text-center">$  16,003.00</h2>
          </ion-text>
          <ion-text color="medium">
            <h6 class="ion-text-center">CaPay Balance</h6>
          </ion-text>
        </ion-col>
        <!-- end title and subtitle-->

        <!-- start deposit and withdrawel -->
        <ion-col size="12" class="mt-40 px-25">
          <deposit-component/>
        </ion-col>
        <!-- end deposit and withdrawel -->

        <!--start service and .....-->
        <ion-col class="custom-col background-light ion-no-padding mt-25" size="12">
          <!--start subtitle-->
          <ion-row class="px-25">
            <ion-col size="12" class="subtitle">
              <ion-text class="dark">
                  <span>
                    service
                  </span>
              </ion-text>
            </ion-col>
          </ion-row>
          <!--end subtitle-->

          <!-- start service card -->
          <service-card/>
          <!--end service card-->
          <hr class="custom-line">
          <!--start Revenue-->

          <!-- start subtitle-->
          <ion-row class="px-25">
            <ion-col class="subtitle" size="12">
              <ion-text class="dark">
                <span>Revenue</span>
              </ion-text>
            </ion-col>
          </ion-row>
          <!-- end subtitle-->

          <!-- start item-->
          <item-revenue/>
          <!-- end item-->
          <!--end Revenue-->
          <hr class="custom-line">
          <!-- start Crypto-->
          <ion-row class="px-25">
            <ion-col class="subtitle" size="12">
              <ion-text class="dark">
                <span>Crypto</span>
              </ion-text>
            </ion-col>
          </ion-row>
          <!-- end Crypto-->
          <hr class="custom-line">
          <!--start Crypto tab-->
          <ion-row>
            <ion-col size="12">
              <b-tabs class="px-35">
                <b-tab title="Top Gainers">
                  <top-gainers/>
                </b-tab>
                <b-tab title="Top Losers">

                </b-tab>
                <b-tab title="Favorites">

                </b-tab>
              </b-tabs>
            </ion-col>
            <ion-col size="11" class="custom-button-dashboard m-auto">
              <ion-button expand="block" class="remove-shadow custom-button ion-text-capitalize background-gray text-color-button">See All</ion-button>
            </ion-col>
          </ion-row>
          <!--end Crypto tab-->
        </ion-col>
        <!-- end service and .....-->
      </ion-row>
    </ion-content>
<!--    end content-->
  </ion-page>
</template>
<script>
import {IonPage, IonRow, IonCol,IonContent} from '@ionic/vue'
import depositComponent from "@/components/maindashboard/depositComponent";
import serviceCard from "@/components/maindashboard/serviceCard";
import itemRevenue from "@/components/maindashboard/ItemRevenue";
import topGainers from "@/components/maindashboard/TopGainers";
export default {
  components:{IonPage,IonRow,IonCol,IonContent,depositComponent,serviceCard,itemRevenue,topGainers}
}
</script>
<style scoped>
/*change padding main content of ion content*/
.custom-card{
  border-radius: 10px !important;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25) !important;
}
.subtitle{
  font-size: 19px;
  padding-top: 23px !important;
}
.text-color-button{
  --color: #51617A !important;
}
.custom-button-dashboard{
  margin-top: 10px !important;
  margin-bottom: 5px !important;
}
ion-item{
  --ion-border-color: #F4F5F7 !important;
}
</style>