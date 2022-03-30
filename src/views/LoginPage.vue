<template>
    <ion-app id="custom-padding">
        <!-- start header -->
        <ion-header class="ion-no-border background-light">
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
            <ion-row class="background-light rounded-x-55 h-100 mt-65 px-35">
                <ion-col size="12">
                  <!-- start  avatar -->
                  <section class="center">
                    <ion-avatar class="custom-image-avatar mt-44">
                      <img src="../../public/assets/iconApp/Thu12mb.svg" alt="sign">
                    </ion-avatar>
                  </section>
                  <!-- end  avatar -->
                  <!-- start title and subtitle -->
                  <section class="mt-45">
                    <ion-text class="ion-text-center">
                      <h2 class="weight-bold purple-1">Let's Sing You ln</h2>
                    </ion-text>
                    <ion-text color="medium" class="ion-text-center">
                      <h6>welcome back,you've been missed!</h6>
                    </ion-text>
                  </section>
                    <!-- end title and subtitle -->
                  <!-- start form login -->
                  <section class="mt-90">
                    <ion-list class="background-light">
                      <div class="custom-input-padding">
                        <ion-label position="stacked" color="medium">Email</ion-label>
                        <ion-item class="rounded-15 h-44 ion-no-border bg-gray-1 mt-2">
                          <ion-input type="email" name="Email" placeholder="example@gmail.com" class="ion-no-border" v-model="data.email"></ion-input>
                          <ion-icon class="ion-align-self-center" name="at-outline" color="medium" slot="start"></ion-icon>
                          <ion-icon name="checkmark-circle-outline" color="success" class="ion-align-self-center" slot="end" v-show="data.email"></ion-icon>
                        </ion-item>
                      </div>

                      <div class="mt-30">
                        <ion-label position="floating" color="medium">Password</ion-label>
                        <ion-item class="rounded-15 h-44 ion-no-border bg-gray-1 mt-2">
                          <ion-input type="password" name="password" color="block" v-model="data.password" placeholder="* * * * * * * * *"></ion-input>
                          <ion-icon src="../../assets/icon/lock-alt.svg" slot="start" class="ion-align-self-center"></ion-icon>
                        </ion-item>
                      </div>
                    </ion-list>
                  </section>
                  <!-- end form login -->
                </ion-col>
            </ion-row>
            <!-- end row -->
        </ion-content>

        <!-- end content -->

        <!-- start footer -->
        <ion-footer class="ion-no-border">
            <ion-toolbar class="background-light">
                <ion-row class="center ion-padding">
                    <ion-col size="11">
                        <ion-button expand="block" class="h-44 rounded-15 background-yellow remove-shadow" :disabled="sign_in">SIGN IN</ion-button>
                    </ion-col>
                    <ion-col size="11">
                        <ion-button expand="block" class="h-44 rounded-15 remove-shadow custom-button ion-text-capitalize background-gray">create an account</ion-button>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
        </ion-footer>
        <!-- end footer -->
    </ion-app>
</template>

<script>
import forgetMessage from './forget_message.vue'
import {IonToolbar,IonAvatar,IonRow,IonCol,IonText,IonLabel,IonInput,IonItem,IonIcon,IonList,IonFooter,IonHeader,IonContent,IonButton,IonApp} from '@ionic/vue'
import {mask} from 'vue-the-mask'

export default {
    name:'LoginPage',
    data(){
        return {
            data:{
                email:'',
                password:''
            },
        }
    },
    computed:{
        sign_in(){
            if(this.data.email && this.data.password){
                return false
            }
            return true
        }
    },
    components:{IonToolbar,forgetMessage,IonAvatar,IonRow,IonCol,IonText,IonLabel,IonInput,IonItem,IonIcon,IonList,IonFooter,IonHeader,IonContent,IonButton,IonApp},
    directives: {mask}
}
</script>
