<template>
    <ion-page>
        <!-- header start -->
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
                <!-- start avatar -->
                <ion-col size="12" class="center custom-avatar">
                    <ion-avatar class="custom-image-avatar">
                        <img src="../../public/assets/iconApp/Thu12mb.svg" alt="test">
                    </ion-avatar>
                </ion-col>
                <!-- end avatar -->

                <!-- start title and subtitle -->
                <ion-col size="12" class="custom-col-background custom-col custom-padding-title">
                    <ion-text>
                        <h2 class="ion-text-center title">OTP Authentication</h2>
                        <h6 class="ion-text-center gray">
                            An authentication code has been sent to
                            (+89) 999 999 999
                        </h6>
                    </ion-text>
                </ion-col>
                <!-- end title and subtitle -->

                <!-- start form  -->
                <ion-col class="custom-col-background custom-padding" size="12"> 
                    <ion-row class="center custom-input-padding">
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[0] ? 'border_warning' : 'border_dark'" class="ion-no-padding custom-input-size" v-model="data[0]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[1] ? 'border_warning' : 'border_dark'" class="ion-no-padding custom-input-size" v-model="data[1]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[2] ? 'border_warning' : 'border_dark'" class="ion-no-padding custom-input-size" v-model="data[2]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[3] ? 'border_warning' : 'border_dark'" class="ion-no-padding custom-input-size" v-model="data[3]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-text class="center">
                        I didn't receive code,<a href="" class="yellow custom-aTag">Receive Code</a>
                    </ion-text>
                </ion-col>
                <!-- end form -->
            </ion-row>
            <!-- end row -->
        </ion-content>
        <!-- end content -->
        <!-- start footer -->
        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-row class="center">
                    <ion-col size="10">
                        <ion-button expand="full" shape="round" class="background-yellow remove-shadow custom-button">NEXT</ion-button>
                    </ion-col>
                    <ion-col size="10">
                        <ion-text>
                            <p class="ion-text-start">By signing up agree to our</p>
                        </ion-text>
                        <p class="ion-text-center">
                            <a class="custom-aTag yellow" href="">Term and conditions</a>
                        </p>
                    </ion-col>
                </ion-row>
            </ion-toolbar> 
        </ion-footer>
        <!-- end footer -->
    </ion-page>
</template>

<script>
import {IonPage,IonHeader,IonText,IonFooter,IonRow,IonCol,IonAvatar,IonToolbar,IonButton,IonInput} from '@ionic/vue';
import forgetMessage from './forget_message.vue'
import {defineComponent} from 'vue'
export default defineComponent({
    name:'OTP Authentication',
    components:{forgetMessage,IonPage,IonHeader,IonText,IonFooter,IonRow,IonCol,IonAvatar,IonToolbar,IonButton,IonInput},
    data(){
        return{
            data:[null,null,null,null]
        }
    }
})
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: center;
    }
    .border_dark{
        border-bottom: 1px solid black !important;
        text-align: center;
    }
    .border_warning{
        border-bottom: 1px solid #ffd534 !important;
        text-align: center;
    }
     .custom-padding-title{
        padding-top: 68px !important;
        padding-left:35px !important;
        padding-right: 35px !important;
    }
    .custom-input-padding{
        padding-bottom: 10px !important;
        flex-wrap: nowrap !important;
        overflow: auto;
    }
    /* color subtitle */
    .gray{
        color:#7A869A;
    }
</style>