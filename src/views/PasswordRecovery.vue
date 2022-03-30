<template>
    <ion-page>
        <!-- start header -->
      <ion-header class="ion-no-border bg-purple-1">
        <ion-toolbar class="bg-purple-1">
          <forget-message>
            <ion-button href="#" fill="clear" class="ion-text-lowercase dark">Forget your credentials?</ion-button>
          </forget-message>
        </ion-toolbar>
      </ion-header>
        <!-- end header -->
        <!-- start content -->
        <ion-content class="bg-purple-1">
            <!-- start row -->
            <ion-row class="background-light rounded-x-55 h-100 px-35 mt-65">
              <ion-col size="12">
                <!-- start  avatar -->
                <section class="center">
                  <ion-avatar class="custom-image-avatar mt-44">
                    <img src="../../public/assets/iconApp/Thu12mb.svg" alt="sign">
                  </ion-avatar>
                </section>
                <!-- end  avatar -->

                <!-- start column title and subtitle -->
                <section class="mt-65">
                  <ion-text class="ion-text-center">
                    <h2 class="weight-bold dark">Password Recovery</h2>
                  </ion-text>
                  <ion-text class="ion-text-center mt-10" color="medium">
                    <h6>Enter phone number to recovery your password</h6>
                  </ion-text>
                </section>
                <!-- end column title and subtitle -->

                <!-- start colum form login -->
                <section class="mt-50">
                  <ion-list class="background-light">
                    <div class="gray">
                      <ion-label position="stacked" color="medium">Email</ion-label>
                      <ion-item class="mt-2 bg-gray-1 rounded-15" lines="none">
                        <ion-input type="email" name="Email" placeholder="example@gmail.com" class="ion-no-border"></ion-input>
                        <ion-icon class="ion-align-self-center" name="at-outline" color="medium" slot="start"></ion-icon>
                      </ion-item>
                    </div>
                  </ion-list>
                </section>
                <!-- end colum form login -->
              </ion-col>
            </ion-row>
            <!-- end row -->
        </ion-content>
        <!-- end content -->

        <!-- start footer -->
        <ion-footer class="ion-no-border">
            <ion-toolbar class="background-light">
                <ion-row class="center px-35">
                    <ion-col size="11">
                        <ion-button expand="block" class="h-44 mb-25 rounded-15 background-yellow remove-shadow">SEND CODE</ion-button>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
        </ion-footer>
        <!-- end footer -->
    </ion-page>
</template>

<script>
import {IonToolbar,IonPage,IonAvatar,IonRow,IonCol,IonText,IonLabel,IonInput,IonItem,IonList,IonFooter,IonHeader,IonContent,IonButton} from '@ionic/vue'
import forgetMessage from './forget_message.vue'
export default {
    name: 'PasswordRecovery',
    components:{forgetMessage,IonToolbar,IonPage,IonAvatar,IonRow,IonCol,IonText,IonLabel,IonInput,IonItem,IonList,IonFooter,IonHeader,IonContent,IonButton}
}
</script>

<style>
    .center{
        display: flex;
        justify-content: center !important;
    }
    .content{
        height: 100%;
        display: flex;
        align-content: center;
    }
    .custom-padding-title{
        padding-top:68px !important;
    }
    .gray{
        background-color: #F4F5F7 !important;
        border-radius: 15px;
        padding-top: 8px;
        padding-left: 16px;
    }
    .custom-Input{
        margin-top: none !important;
    }

</style>