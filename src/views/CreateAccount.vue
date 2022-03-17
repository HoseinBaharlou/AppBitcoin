<template>
    <ion-app id="custom-padding">
        <!-- start header -->
        <ion-header class="ion-no-border">
            <ion-toolbar class="header">
                <forget-message>
                    <span class="custom-forgetMessage ion-text-end">
                            I didn't receive code,<a href="" class="yellow ion-no-padding custom-aTag">Sign in </a>
                    </span>
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
                <ion-col size="12" class="center custom-col-background custom-col custom-padding">
                    <p>
                        <ion-text class="ion-text-center title" color="dark">
                            <h2>Let's Sing You ln</h2>
                        </ion-text>
                        <ion-text color="medium" class="ion-text-center">
                            <h6>welcome back,you've been missed!</h6>
                        </ion-text>
                    </p>
                </ion-col>
                <!-- end column title and subtitle -->

                <!-- start colum form login -->
                <ion-col size="12" class="custom-col-background">
                    <ion-list>
                        <div class="custom-input-padding">
                            <ion-label position="stacked" color="medium">Email</ion-label>
                            <ion-item class="custom-Input ion-no-border">
                                <ion-input type="email" name="Email" placeholder="example@gmail.com" class="ion-no-border" v-model="data.email"></ion-input>
                                <ion-icon class="ion-align-self-center" name="at-outline" color="medium" slot="start"></ion-icon>
                                <ion-icon name="checkmark-circle-outline" color="success" class="ion-align-self-center" slot="end" v-show="data.email"></ion-icon>
                            </ion-item>
                        </div>

                        <div class="custom-input-padding">
                            <ion-label position="floating" color="medium">Password</ion-label>
                            <ion-item class="custom-Input">
                                <ion-input type="password" name="password" color="block" v-model="data.password" placeholder="* * * * * * * * *"></ion-input>
                                <ion-icon name="lock-closed-outline" slot="start" color="medium" class="ion-align-self-center"></ion-icon>
                                <ion-icon name="checkmark-circle-outline" color="success" class="ion-align-self-center" slot="end" v-show="data.password"></ion-icon>
                            </ion-item>
                        </div>

                        <div class="custom-input-padding">
                            <ion-label position="floating" color="medium">Confirm Password</ion-label>
                            <ion-item class="custom-Input">
                                <ion-input type="password" name="confrim-password" color="block" v-model="data.password" placeholder="* * * * * * * * *"></ion-input>
                                <ion-icon name="lock-closed-outline" slot="start" color="medium" class="ion-align-self-center"></ion-icon>
                                <ion-icon name="checkmark-circle-outline" color="success" class="ion-align-self-center" slot="end" v-show="data.Confirm_Password"></ion-icon>
                            </ion-item>
                        </div>

                        <div class="custom-input-padding">
                            <ion-label position="floating" color="medium">Invite Code</ion-label>
                            <ion-item class="custom-Input">
                                <ion-input type="text" name="Invite-Code" color="block" v-model="data.Invite_Code" placeholder="* * * * * * * * *"></ion-input>
                                <ion-icon name="people-outline" slot="start" color="medium" class="ion-align-self-center"></ion-icon>
                                <ion-icon name="checkmark-circle-outline" color="success" class="ion-align-self-center" slot="end" v-show="data.Invite_Code"></ion-icon>
                            </ion-item>
                        </div>
                    </ion-list>
                </ion-col>
                <!-- end colum form login -->

                <!-- start checkbox -->
                <ion-col class="custom-col-background custom-checkbox ion-hide-sm-down">
                        <ion-checkbox color="warning "></ion-checkbox>
                        <ion-label>
                            <span>
                             By creating an account, you aggree to our.<a href="" class="yellow custom-aTag">Term and Conditions</a>
                            </span>
                        </ion-label>
                </ion-col>

                <ion-col class="custom-col-background custom-checkbox ion-hide-sm-up">
                    <ion-row>
                        <ion-col size="1">
                            <ion-checkbox color="warning"></ion-checkbox>
                        </ion-col>
                        <ion-col size="11">
                            <ion-label>
                                By creating an account, you aggree to our.<a href="" class="yellow custom-aTag">Term and Conditions</a>  
                            </ion-label>
                        </ion-col>
                    </ion-row>    
                </ion-col>
                <!-- end checkbox -->
            </ion-row>
            <!-- end row -->
        </ion-content>

        <!-- end content -->

        <!-- start footer -->
        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-row class="center ion-padding">
                    <ion-col size="11">
                        <ion-button expand="block" class="custom-button background-yellow remove-shadow" :disabled="sign_in">SIGN IN</ion-button>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
        </ion-footer>
        <!-- end footer -->
    </ion-app>
</template>

<script>
import forgetMessage from './forget_message.vue'
import {IonToolbar,IonAvatar,IonRow,IonCol,IonText,IonLabel,IonInput,IonItem,IonIcon,IonList,IonFooter,IonHeader,IonContent,IonButton,IonApp,IonCheckbox} from '@ionic/vue'

export default {
    name:'LoginPage',
    data(){
        return {
            data:{
                email:'',
                password:'',
                Confirm_Password:'',
                Invite_Code:''
            },
        }
    },
    computed:{
        sign_in(){
            if(this.data.email && this.data.password && this.data.Invite_Code){
                return false
            }
            return true
        }
    },
    components:{IonToolbar,forgetMessage,IonAvatar,IonCheckbox,IonRow,IonCol,IonText,IonLabel,IonInput,IonItem,IonIcon,IonList,IonFooter,IonHeader,IonContent,IonButton,IonApp},
}
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: center !important;
    }
    .yellow{
        --color:#FFC400 !important;
    }
    .custom-forgetMessage{
        display: flex;
        justify-content: end !important;
    }
    .custom-checkbox{
        padding-left: 35px;
        padding-right: 35px;
        display: flex;
        align-items: center;
    }
</style>