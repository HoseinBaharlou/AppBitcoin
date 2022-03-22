<template>
  <ion-app class="custom-row-background">
    <!-- start search box -->
    <ion-header class="custom-margin-searchBox ion-no-border custom-mainDashboard">
      <ion-col size="12">
        <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox"></ion-searchbar>
      </ion-col>
    </ion-header>
    <!-- end search box -->
    <ion-content class="custom-content">
      <ion-row>
        <!-- start title and subtitle -->
        <ion-col size="12" class="title custom-mainDashboard">
          <ion-text class="dark">
            <h2 class="ion-text-center">$  16,003.00</h2>
          </ion-text>
          <ion-text color="medium">
            <h6 class="ion-text-center">CaPay Balance</h6>
          </ion-text>
        </ion-col>
        <!-- end title and subtitle-->

        <!-- start deposit and withdrawel -->
        <ion-col size="12" class="custom-deposit custom-mainDashboard">
          <ion-row>
            <ion-col>
              <ion-card class="custom-card">
                <ion-card-header>
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/card-receive.svg" size="large"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                  <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="custom-card">
                <ion-card-header>
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/card.svg" size="large"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                  <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="custom-card">
                <ion-card-header>
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/card-send.svg" size="large"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                  <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
                </ion-card-header>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-col>
        <!-- end deposit and withdrawel -->

        <!--start service and .....-->
        <ion-col class="custom-col custom-col-background ion-no-padding mt-25" size="12">
          <!--start subtitle-->
          <ion-row class="custom-mainDashboard">
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
          <ion-row class="custom-mainDashboard">
            <!--              start cards-->
            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/activity.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                Buy account
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/health.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                NFTI
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/wallet-add.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                investment
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/maximize-circle.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                Trading
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/data.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                Share
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/profile-2user.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                Team
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/notification-bing.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                Trading
              </ion-text>
            </ion-col>

            <ion-col class="ion-text-center custom-col-service" size="3">
              <ion-card class="custom-card-service card-center">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <ion-button fill="clear" class="ion-no-padding" href="">
                      <ion-icon src="../assets/icon/more-2.svg"></ion-icon>
                    </ion-button>
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <ion-text class="ion-text-center subtitle-card-service dark">
                Trading
              </ion-text>
            </ion-col>
            <!--              end cards-->
          </ion-row>
          <!--end service card-->
          <hr class="custom-line">
          <!--start Revenue-->

          <!-- start subtitle-->
          <ion-row class="custom-mainDashboard">
            <ion-col class="subtitle" size="12">
              <ion-text class="dark">
                <span>Revenue</span>
              </ion-text>
            </ion-col>
          </ion-row>
          <!-- end subtitle-->

          <!-- start item-->
          <ion-row class="custom-mainDashboard">
            <ion-col size="12" class="ion-no-padding">
              <ion-list class="ion-no-padding">
                <ion-item class="ion-no-padding bg-light" lines="none">
                  <ion-card class="custom-avatar-list custom-card-list" style="background: #248A57;">
                    <ion-card-header class="ion-no-padding">
                      <ion-card-title class="ion-text-center">
                        <img src="../../public/assets/icon/dollar-circle.svg" alt="">
                      </ion-card-title>
                    </ion-card-header>
                  </ion-card>
                  <section class="text-item-list">
                    <div>
                      <ion-text class="dark">
                        Sorat Sorati
                      </ion-text>
                    </div>
                    <div>
                      <ion-text color="medium">
                        Monthly charge
                      </ion-text>
                    </div>
                  </section>
                  <ion-text class="custom-subtitle-item" slot="end">
                    + $ 1,22.00
                  </ion-text>
                </ion-item>

                <ion-item class="ion-no-padding bg-light" lines="none">
                  <ion-card class="custom-avatar-list custom-card-list" style="background: #248A57;">
                    <ion-card-header class="ion-no-padding">
                      <ion-card-title class="ion-text-center">
                        <img src="../../public/assets/icon/dollar-circle.svg" alt="">
                      </ion-card-title>
                    </ion-card-header>
                  </ion-card>
                  <section class="text-item-list">
                    <div>
                      <ion-text class="dark">
                        Sorat Sorati
                      </ion-text>
                    </div>
                    <div>
                      <ion-text color="medium">
                        Monthly charge
                      </ion-text>
                    </div>
                  </section>
                  <ion-text class="custom-subtitle-item" slot="end">
                    + $ 1,22.00
                  </ion-text>
                </ion-item>

                <ion-item class="ion-no-padding bg-light" lines="none">
                  <ion-card class="custom-avatar-list custom-card-list" style="background: #5956F4;">
                    <ion-card-header class="ion-no-padding">
                      <ion-card-title class="ion-text-center">
                        <img src="../../public/assets/icon/Group.svg" alt="">
                      </ion-card-title>
                    </ion-card-header>
                  </ion-card>
                  <section class="text-item-list">
                    <div>
                      <ion-text class="dark">
                        Sorat Sorati
                      </ion-text>
                    </div>
                    <div>
                      <ion-text color="medium">
                        Buy a card
                      </ion-text>
                    </div>
                  </section>
                  <ion-text class="custom-subtitle-item" slot="end">
                    + $ 10,22.00
                  </ion-text>
                </ion-item>
              </ion-list>
            </ion-col>
            <ion-col size="11" class="custom-button-dashboard center-button">
              <ion-button expand="block" class="remove-shadow custom-button ion-text-capitalize background-gray text-color-button">See All</ion-button>
            </ion-col>
          </ion-row>
          <!-- end item-->
          <!--end Revenue-->
          <hr class="custom-line">
          <!-- start Crypto-->
          <ion-row class="custom-mainDashboard">
            <ion-col class="subtitle" size="12">
              <ion-text class="dark">
                <span>Crypto</span>
              </ion-text>
            </ion-col>
          </ion-row>
          <!-- end Crypto-->
          <hr class="custom-line">
          <!--start Crypto tab-->
          <!--end Crypto tab-->
        </ion-col>
        <!-- end service and .....-->
      </ion-row>
    </ion-content>
  </ion-app>
</template>

<script>
import {IonGrid,IonApp,IonRow,IonCol,IonSearchbar,IonText,IonButton,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonAvatar,IonTitle,IonHeader,IonContent,IonItem,IonList,IonLabel} from '@ionic/vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name:'mainDashboard',
  components:[IonGrid,IonApp,IonRow,IonCol,IonSearchbar,IonText,IonButton,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonAvatar,IonTitle,IonHeader,IonContent,IonItem,IonList,IonLabel]
})
</script>

<style scoped>
/*change backgroun content*/
.custom-content{
  --background: #EAEFFF !important;
}
/*change margin top seach box*/
.custom-margin-searchBox{
  margin-top: 51px;
}
/*custom search box*/
.custom-searchBox{
  text-align: center;
  --border-radius: 15px;
  transform: scaleY(1.3);
  color: #C0C7D1;
  --background: #fff;
}
/*change padding main content of ion content*/
.custom-mainDashboard{
  padding-left: 25px;
  padding-right: 25px;
}
.title{
  margin-top: 57px !important;
}
/* deposit and withdrawel */
.custom-deposit{
  margin-top:40px ;
}
.custom-card{
  border-radius: 10px !important;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF !important;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25) !important;
}
.subtitle{
  font-size: 19px;
  padding-top: 23px !important;
  padding-bottom: 23px !important;
}
.custom-card-service{
  background: #F4F5F7 !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
  width: 45px;
}
.subtitle-card-service{
  font-size: 12px;
}
.card-center{
  margin: auto;
}
.custom-col-service{
  margin-bottom: 24px;
}
.text-color-button{
  --color: #51617A !important;
}
.custom-button-dashboard{
  margin-top: 10px !important;
  margin-bottom: 5px !important;
}
.center-button{
  margin: auto;
}

</style>