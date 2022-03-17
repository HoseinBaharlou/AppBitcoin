<template>
    <ion-page id="custom-padding">
        <!-- start header -->
        <ion-header class="ion-no-border">
            <ion-toolbar class="header">
                <forget-message>
                    <ion-button href="#" fill="clear" class="ion-text-lowercase" color="dark">Forget your credentials?</ion-button>
                </forget-message>
            </ion-toolbar>
        </ion-header>
        <!-- end header -->
        <!-- start content -->
        <ion-content>
            <!-- start row -->
            <ion-row class="custom-row-background">
                <!-- start column avatar -->
                <ion-col size="12" class="center ion-justify-content-center custom-avatar">
                    <ion-avatar class="custom-image-avatar">
                        <img src="../../public/assets/iconApp/Thu12mb.svg" alt="sign">
                    </ion-avatar>
                </ion-col>
                <!-- end column avatar -->

                <!-- start column title and subtitle -->
                <ion-col size="12" class="center custom-col-background custom-col custom-padding-title">
                    <p>
                        <ion-text class="ion-text-center">
                            <h2 class="title">Password Recovery</h2>
                        </ion-text>
                        <ion-text class="ion-text-center" color="medium">
                            <h6>Enter phone number to recovery your password</h6>
                        </ion-text>
                    </p>
                </ion-col>
                <!-- end column title and subtitle -->

                <!-- start colum form login -->
                <ion-col size="12" class="custom-col-background custom-padding">
                    <ion-list class="custom-input-padding">
                        <div class="gray">
                            <ion-label position="stacked" color="medium">Email</ion-label>
                            <ion-item class="custom-Input ion-no-border">
                                <ion-input type="email" name="Email" placeholder="example@gmail.com" class="ion-no-border"></ion-input>
                                <ion-icon class="ion-align-self-center" name="at-outline" color="medium" slot="start"></ion-icon>
                            </ion-item>
                        </div>
                    </ion-list>
                </ion-col>
                <!-- end colum form login -->
            </ion-row>
            <!-- end row -->
        </ion-content>
        <!-- end content -->

        <!-- start footer -->
        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-row class="center ion-padding">
                    <ion-col size="11">
                        <ion-button expand="block" class="custom-button custom-button background-yellow remove-shadow">SEND CODE</ion-button>
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