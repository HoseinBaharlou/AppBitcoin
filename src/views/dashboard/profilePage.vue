<template>
  <ion-page>
    <ion-content class="bg-purple-1">
      <ion-row class="bg-purple-1 mb-70 h-100 px-10 profile">
        <!--    start inactive-->
        <ion-col class="background-light mt-120 rounded-15 ion-align-items-center d-flex">
          <ion-list class="ion-no-padding w-100">
            <ion-item class="ion-no-padding background-light" lines="none">
              <ion-card class="custom-avatar-list custom-card-list" style="background: #F7931A;">
                <ion-card-header class="ion-no-padding">
                  <ion-card-title class="ion-text-center">
                    <img src="../../../public/assets/icon/bitcoin-(btc).svg" alt="">
                  </ion-card-title>
                </ion-card-header>
              </ion-card>
              <div class="text-item-list">
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
              </div>
              <div class="ion-align-items-center d-flex" slot="end">
                <ion-badge class="bg-red-1 red px-25 rounded-15 py-2">Inactive</ion-badge>
                <a href="" class="d-flex"><ion-icon src="../../assets/icon/Vector.svg"></ion-icon></a>
              </div>
            </ion-item>
          </ion-list>
        </ion-col>
        <!--    end inactive-->
        <!--    start validate-->
        <ion-col size="12" class="mt-15 background-light rounded-15 pl-25">
          <!--      start title-->
          <div class="py-15">
            <ion-text class="dark">
              General
            </ion-text>
          </div>
          <!--      end title-->
          <hr class="custom-line">
          <!--      start list-->
          <ion-list class="ion-no-padding background-light">
            <ion-item class="ion-no-padding background-light mt-25" lines="none">
              <div>
                <ion-icon src="../../assets/icon/lock.svg" size="large"></ion-icon>
              </div>
              <div class="ml-25">
                <ion-text class="dark">
                  Change Password
                </ion-text>
              </div>
              <div class="ion-align-items-center d-flex" slot="end">
                <a href="" class="d-flex"><ion-icon src="../../assets/icon/Vector.svg"></ion-icon></a>
              </div>
            </ion-item>

            <ion-item class="ion-no-padding background-light mt-40" lines="none">
              <div>
                <ion-icon src="../../assets/icon/lock_1.svg" size="large"></ion-icon>
              </div>
              <div class="ml-25">
                <ion-text class="dark">
                  Change Password
                </ion-text>
              </div>
              <div class="ion-align-items-center d-flex" slot="end">
                <a href="" class="d-flex"><ion-icon src="../../assets/icon/Vector.svg"></ion-icon></a>
              </div>
            </ion-item>

            <ion-item class="ion-no-padding background-light mt-40" lines="none">
              <div>
                <ion-icon src="../../assets/icon/radar-2.svg" size="large"></ion-icon>
              </div>
              <div class="ml-25">
                <ion-text class="dark">
                  google authenticator
                </ion-text>
              </div>
              <div class="ion-align-items-center d-flex" slot="end">
                <a href="" class="d-flex"><ion-icon src="../../assets/icon/Vector.svg"></ion-icon></a>
              </div>
            </ion-item>
          </ion-list>
          <!--      end list-->
        </ion-col>
        <!--   end validate -->
        <!--    start setting-->
        <ion-col class="mt-30 background-light rounded-15 pl-25 d-flex ion-align-items-center">
          <ion-list class="background-light w-100">
            <ion-item class="ion-no-padding background-light" lines="none">
              <div>
                <ion-icon src="../../assets/icon/setting-2.svg" size="large"></ion-icon>
              </div>
              <div class="ml-25">
                <ion-text class="dark">
                  Setting
                </ion-text>
              </div>
              <div class="ion-align-items-center d-flex" slot="end">
                <a href="" class="d-flex"><ion-icon src="../../assets/icon/Vector.svg"></ion-icon></a>
              </div>
            </ion-item>
          </ion-list>
        </ion-col>
        <!--    end setting-->
        <!--    start help-->
        <ion-col size="12" class="pl-25 mt-10 background-light rounded-15 d-flex ion-align-items-center">
          <ion-list class="background-light w-100">
            <ion-item class="ion-no-padding background-light" lines="none">
              <div>
                <ion-icon src="../../assets/icon/message-question.svg" size="large"></ion-icon>
              </div>
              <div class="ml-25">
                <ion-text class="dark">
                  Help Center
                </ion-text>
              </div>
              <div class="ion-align-items-center d-flex" slot="end">
                <a href="" class="d-flex"><ion-icon src="../../assets/icon/Vector.svg"></ion-icon></a>
              </div>
            </ion-item>
          </ion-list>
        </ion-col>
        <!--    end help-->
      </ion-row>
      <h1>profile</h1>
    </ion-content>
  </ion-page>
</template>
<script>
import {IonPage,IonRow,IonCol,IonItem,IonList,IonIcon,IonText,IonCard,IonCardTitle,IonCardHeader,IonBadge,IonContent} from '@ionic/vue'
export default {
  components:{IonPage,IonRow,IonCol,IonItem,IonList,IonIcon,IonText,IonCard,IonCardTitle,IonCardHeader,IonBadge,IonContent}
}
</script>
