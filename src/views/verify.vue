<template>
    <ion-page id="custom-padding">
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
              <!-- start  avatar -->
              <section class="center">
                <ion-avatar class="custom-image-avatar mt-44">
                  <img src="../../public/assets/iconApp/Thu12mb.svg" alt="sign">
                </ion-avatar>
              </section>
              <!-- end  avatar -->

                <!-- start title and subtitle -->
                
                <ion-col size="12" class="center custom-col-background custom-col custom-padding-title">
                    <p>
                        <ion-text>
                            <h2 class="ion-text-center title">Verify your identity</h2>
                        </ion-text>
                        <ion-text color="medium">
                            <h6 class="ion-text-center">
                                We have just sent a code to Exampel@gmail.com
                            </h6>
                        </ion-text>
                    </p>
                </ion-col>
                <!-- end title and subtitle -->

                <!-- start form  -->
                <ion-col size="12" class="custom-col-background custom-padding">
                    <ion-row class="center custom-input-padding">
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[0] ? 'border_warning' : 'border_dark'" class=" custom-input-size ion-no-padding" v-model="data[0]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[1] ? 'border_warning' : 'border_dark'" class=" custom-input-size ion-no-padding" v-model="data[1]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[2] ? 'border_warning' : 'border_dark'" class="custom-input-size ion-no-padding" v-model="data[2]" maxlength="1"></ion-input>
                            </div>
                        </ion-col>
                        <ion-col>
                            <div class="custom-multi-input">
                                <ion-input :class="data[3] ? 'border_warning' : 'border_dark'" class="custom-input-size ion-no-padding" v-model="data[3]" maxlength="1"></ion-input>
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
    name:'VerifyPage',
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
        width: 40px;
    }
    .border_warning{
        border-bottom: 1px solid #FEC42D !important;
        text-align: center;
        width: 40px;
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
    
</style>