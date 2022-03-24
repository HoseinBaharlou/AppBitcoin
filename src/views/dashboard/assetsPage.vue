<template>
  <ion-row class="bg-purple-1 assets mb-70">
    <!-- start search box -->
    <ion-header class="custom-margin-searchBox ion-no-border custom-mainDashboard mt-40 px-35">
      <ion-col size="12">
        <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox"></ion-searchbar>
      </ion-col>
    </ion-header>
    <!-- end search box -->
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
      <ion-row>
        <ion-col>
          <ion-card class="custom-card background-light">
            <ion-card-header>
              <ion-card-title class="ion-text-center">
                <ion-button fill="clear" class="ion-no-padding" href="">
                  <ion-icon src="../../assets/icon/card-receive.svg" size="large"></ion-icon>
                </ion-button>
              </ion-card-title>
              <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="custom-card background-light">
            <ion-card-header>
              <ion-card-title class="ion-text-center">
                <ion-button fill="clear" class="ion-no-padding" href="">
                  <ion-icon src="../../assets/icon/card.svg" size="large"></ion-icon>
                </ion-button>
              </ion-card-title>
              <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="custom-card background-light">
            <ion-card-header>
              <ion-card-title class="ion-text-center">
                <ion-button fill="clear" class="ion-no-padding" href="">
                  <ion-icon src="../../assets/icon/card-send.svg" size="large"></ion-icon>
                </ion-button>
              </ion-card-title>
              <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-col>
    <!-- end deposit and withdrawel -->
<!--    start content-->
    <ion-col class="rounded-x-55 background-light mt-35">
<!--      start card-->
      <ion-row class="px-50 mt-30">
        <ion-col size="4" class="mb-40">
          <div class="custom-card-assets bg-purple-1 round m-auto">
            <ion-icon src="../../assets/icon/Group.svg" class="fSize-20 icon-color"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="4" class="mb-40">
          <div class="custom-card-assets bg-purple-1 round m-auto">
            <ion-icon src="../../assets/icon/dollar-circle.svg" class="fSize-20 icon-color"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="4" class="mb-40">
          <div class="custom-card-assets bg-purple-1 round m-auto">
            <ion-icon src="../../assets/icon/maximize-circle.svg" class="fSize-20 icon-color"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="4" class="mb-40">
          <div class="custom-card-assets bg-purple-1 round m-auto">
            <ion-icon src="../../assets/icon/card-receive.svg" class="fSize-20 icon-color"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="4" class="mb-40">
          <div class="custom-card-assets bg-purple-1 round m-auto">
            <ion-icon src="../../assets/icon/card.svg" class="fSize-20 icon-color"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="4" class="mb-40">
          <div class="custom-card-assets bg-purple-1 round m-auto">
            <ion-icon src="../../assets/icon/card-send.svg" class="fSize-20 icon-color"></ion-icon>
          </div>
        </ion-col>
      </ion-row>
<!--      end card-->
<!--      start tab list-->
      <ion-row>
        <ion-col size="12" class="px-35 mt-10">
          <b-tabs>
            <b-tab title="Coins">
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
          </b-tabs>
        </ion-col>
      </ion-row>
<!--      end tab list-->
    </ion-col>
<!--    end content-->
  </ion-row>
</template>
<script>
import {IonRow,IonCol,IonText,IonCard,IonCardTitle,IonCardHeader,IonIcon} from '@ionic/vue'
export default {
  components:{IonRow,IonCol,IonText,IonCard,IonCardTitle,IonCardHeader,IonIcon}
}
</script>

<style>
  .assets .custom-card-assets{
    height: 65px;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .assets .icon-color{
    stroke: #000000 !important;
  }
  .assets .nav{
    position: unset !important;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }
  .assets .nav-link.active{
    border: none;
    border-bottom: 1px solid  #FEC42D !important;
    color:  #FEC42D !important;
    padding-bottom: 20px !important;
  }
  .assets ion-item{
    --ion-border-color: #F4F5F7 !important;
  }
</style>