<template>
  <ion-page :class="{'page-filter': filter}">
<!--    start content-->
    <ion-content class="bg-purple-1">
      <ion-row class="mt-90 rounded-x-55 h-100 background-light">
        <ion-col size="12" class="px-35">
          <!--          start icon-->
          <div class="mt-10 center">
            <ion-img src="../../assets/icon/card-pos.svg" />
          </div>
          <!--          end icon-->
<!--          start title and subtitle-->
          <section class="mt-60">
            <div>
              <ion-text class="ion-text-center dark"><h2>Activate your account!!!</h2></ion-text>
            </div>
            <div class="mt-55">
              <ion-text color="medium" class="ion-text-center">
                Pay the following amount to activate your account
                for one year.
              </ion-text>
            </div>
          </section>
<!--          end title and subtitle-->
          <!--          start input-->
          <div class="mt-45">
            <ion-label>Price</ion-label>
            <ion-item class="h-44 rounded-15 bg-purple-1 mt-10" lines="none">
              <ion-icon src="../../assets/icon/money-send.svg"/>
              <ion-input class="px-25 dark" placeholder="40.00"></ion-input>
            </ion-item>
          </div>
          <section class="mt-20">
            <ion-text class="dark">Balance: 255.00 USDT</ion-text>
          </section>
          <!--          end input-->
        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
    <!--    start footer-->
    <ion-footer class="px-35">
      <ion-button class="background-yellow rounded-15 mb-25 remove-shadow h-44" expand="block" @click="resultAlert">Buy</ion-button>
    </ion-footer>
    <!--end footer-->
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonRow,
  IonCol,
  IonContent,
  IonText,
  IonImg,
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonFooter,
  alertController
} from '@ionic/vue'
export default {
  components: {IonPage,IonRow,IonCol,IonContent,IonText,IonImg,IonIcon,IonItem,IonLabel,IonButton,IonInput,IonFooter},
  data(){
    return{
      filter:false,
    }
  },
  methods:{
    async resultAlert(){
      // this.filter = this.filter == true ? false : true
      this.filter = true
      const alert = await alertController.create({
        cssClass:'custom-alert',
        message: `<div>
            <div class="wh-80 center yellow-1 ion-align-items-center rounded-15 m-auto">
              <ion-icon src="../../assets/icon/card-send.svg" size="large"></ion-icon>
            </div>
            <div class="mt-15 ion-text-center">
              <ion-text class="result-alert">Successful</ion-text> <ion-text class="dark">payment made</ion-text>
            </div>
            <div class="ion-text-center">
              <ion-text color="medium">
                If approved, it will be deducted from your
                wallet
              </ion-text>
            </div>
          </div>`,
        buttons:[
          {
            text:'Buy',
            handler: () => {
              this.filter = false
            },
          },
          {
            role:'cancel',
            id: 'cancel-alert',
            handler: () => {
              this.filter = false
            },
          }
        ]
      });
      return  alert.present()
    }
  }
}
</script>
<style scoped>
#cancel-alert{
  display: none;
}
.ion-page-invisible{
  opacity: 1;
}
.page-filter{
  filter: blur(5px);
}
</style>