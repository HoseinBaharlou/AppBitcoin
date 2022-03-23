<template>
  <ion-row class="bg-purple-1 market mb-70">
    <!--    start header-->
    <ion-col size="12" class="px-35">
      <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox mt-85"></ion-searchbar>
    </ion-col>
    <!--    end header-->
    <!--    start content-->
    <ion-col class="ion-no-padding background-light mt-35 rounded-x-55 h-100" size="12">
      <div class="ml-35 mt-25 mb-25">
        <ion-text>
          <h3 class="dark">Crypto</h3>
        </ion-text>
      </div>
      <hr class="custom-line">
      <b-tabs class="px-35">
        <b-tab title="Favorites">
          <ion-list class="ion-no-padding mt-15">
            <ion-item class="ion-no-padding background-light">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #F7931A;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/bitcoin-(btc).svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <section class="text-item-list">
                <div>
                  <ion-text class="dark">
                    BTC/usdt
                  </ion-text>
                </div>
                <div>
                  <ion-text color="medium">
                    $3945.365
                  </ion-text>
                </div>
              </section>
              <ion-text class="custom-subtitle-item" slot="end">
                +335%
              </ion-text>
            </ion-item>

            <ion-item class="ion-no-padding background-light">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #0033AD;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/cardano-(ada).svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <section class="text-item-list">
                <div>
                  <ion-text class="dark">
                    ADA/usdt
                  </ion-text>
                </div>
                <div>
                  <ion-text color="medium">
                    $124.00
                  </ion-text>
                </div>
              </section>
              <ion-text class="custom-subtitle-item" slot="end">
                -10%
              </ion-text>
            </ion-item>

            <ion-item class="ion-no-padding background-light">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #000000;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/solana-(sol).svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <section class="text-item-list">
                <div>
                  <ion-text class="dark">
                    LUNA/usdt
                  </ion-text>
                </div>
                <div>
                  <ion-text color="medium">
                    $0.0001215
                  </ion-text>
                </div>
              </section>
              <ion-text class="custom-subtitle-item" slot="end">
                +22%
              </ion-text>
            </ion-item>

            <ion-item class="ion-no-padding background-light">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #FC070C;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/trontron-(trx).svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <section class="text-item-list">
                <div>
                  <ion-text class="dark">
                    LYM/usdt
                  </ion-text>
                </div>
                <div>
                  <ion-text color="medium">
                    $15421.00
                  </ion-text>
                </div>
              </section>
              <ion-text class="custom-subtitle-item" slot="end">
                +100%
              </ion-text>
            </ion-item>

            <ion-item class="ion-no-padding background-light">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #008CE3;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/dash-(dash).svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <section class="text-item-list">
                <div>
                  <ion-text class="dark">
                    ACT/usdt
                  </ion-text>
                </div>
                <div>
                  <ion-text color="medium">
                    $42.213254
                  </ion-text>
                </div>
              </section>
              <ion-text class="custom-subtitle-item" slot="end">
                +89%
              </ion-text>
            </ion-item>

            <ion-item class="ion-no-padding background-light">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #1C1C1C;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/Group_1.svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <section class="text-item-list">
                <div>
                  <ion-text class="dark">
                    XHV/usdt
                  </ion-text>
                </div>
                <div>
                  <ion-text color="medium">
                    $45212.21
                  </ion-text>
                </div>
              </section>
              <ion-text class="custom-subtitle-item" slot="end">
                +2%
              </ion-text>
            </ion-item>
          </ion-list>
        </b-tab>
        <b-tab title="USDT">

        </b-tab>
      </b-tabs>
    </ion-col>
    <!--    end content-->
</ion-row>
</template>
<script>
// import {IonApp} from '@ionic/vue'
export default {
}
</script>
<style>
.market .nav{
  position: unset !important;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}
.market .nav-link.active{
  border: none;
  border-bottom: 1px solid  #FEC42D !important;
  color:  #FEC42D !important;
  padding-bottom: 20px !important;
}
.market ion-item{
  --ion-border-color: #F4F5F7 !important;
}
</style>