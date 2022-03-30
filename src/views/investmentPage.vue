<template>
  <ion-page :class="{'page-filter': filter}">
    <ion-content class="bg-purple-1">
      <ion-row class="background-light h-100 px-35 mt-90 rounded-x-55">
        <ion-col>
<!--          start title-->
          <section class="mt-90">
            <ion-text class="ion-text-center">
              <h2 class="weight-bold dark">Make money without risk!!</h2>
            </ion-text>
          </section>
<!--          end title-->
<!--          start subtitle-->
          <section class="mt-20">
            <ion-text class="ion-text-center" color="medium">
              <h6>
                If you have surplus capital, you can invest it and
                get a profit
              </h6>
            </ion-text>
          </section>
<!--          end subtitle-->
<!--          start input-->
          <div class="mt-60">
            <ion-label position="stacked" color="medium">Amount</ion-label>
            <ion-item class="bg-purple-1 rounded-15 mt-10" lines="none">
              <ion-input value="0.00" class="dark"></ion-input>
              <ion-icon src="../../assets/icon/USDT.svg" size="large"></ion-icon>
            </ion-item>
          </div>
          <!--          end input-->

          <!--          start result-->
          <section class="mt-25">
            <ion-text class="purple-1">Balance: 255.00 USDT</ion-text>
          </section>
          <!--          end result-->
        </ion-col>
      </ion-row>
    </ion-content>
<!--    end content-->
<!--    start footer-->
    <ion-footer class="background-light">
      <ion-row>
        <ion-col size="12" class="px-35">
          <ion-button class="rounded-15 h-44 background-yellow mb-25 remove-shadow" expand="block" @click="resultAlert">SEND</ion-button>
        </ion-col>
      </ion-row>
    </ion-footer>
  </ion-page>
</template>
<script>
import {IonPage,IonCol,IonRow,IonText,IonIcon,IonInput,IonLabel,IonButton,IonContent,IonItem,alertController} from '@ionic/vue'
export default {
  components:{IonPage,IonCol,IonRow,IonText,IonIcon,IonInput,IonLabel,IonButton,IonContent,IonItem},
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
<style>
  .custom-alert .alert-wrapper{
    background: white !important;
    contain: none;
    border-radius: 15px;
    max-width: 295px;
  }
  .custom-alert .alert-button-group{
    justify-content: center;
  }
  .custom-alert .alert-button , .alert-button.ion-focused.sc-ion-alert-md{
    --background: transparent;
    background: transparent;
    --color: #FFC400;
    color: #FFC400;
  }
  .custom-alert .result-alert{
    color: green;
  }
  .custom-alert .alert-message{
    --margin-top: -74px;
    margin-top: -74px;
  }
  .custom-alert ion-icon{
    width: 28px;
    height: 28px;
  }
</style>