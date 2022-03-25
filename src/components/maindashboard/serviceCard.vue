<template>
  <!-- start service card -->
  <ion-row class="px-25">
    <!--              start cards-->
    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <ion-button fill="clear" class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/activity.svg"></ion-icon>
            </ion-button>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        Buy account
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/health.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        NFTI
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/wallet-add.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        investment
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/maximize-circle.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        Trading
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a  class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/data.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        Share
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/profile-2user.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        Team
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/notification-bing.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        Trading
      </ion-text>
    </ion-col>

    <ion-col class="ion-text-center mb-25" size="3">
      <ion-card class="custom-card-service m-auto">
        <ion-card-header class="ion-no-padding">
          <ion-card-title class="ion-text-center">
            <a class="ion-no-padding" href="">
              <ion-icon src="../../assets/icon/more-2.svg"></ion-icon>
            </a>
          </ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-text class="ion-text-center fSize-12 dark">
        Trading
      </ion-text>
    </ion-col>
    <!--              end cards-->
  </ion-row>
  <!--end service card-->
</template>
<script>
  import {IonCol,IonRow,IonCard,IonCardHeader,IonCardTitle,IonIcon} from '@ionic/vue'
  export default {
    components:{IonCol,IonRow,IonCard,IonCardHeader,IonCardTitle,IonIcon}
  }
</script>
<style scoped>
  .custom-card-service{
    background: #F4F5F7 !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 13px;
    width: 45px;
  }
</style>