<template>
    <ion-app class="custom-row-background">
        <ion-row class="custom-header">
            <!-- start search box -->
            <ion-col size="12" class="custom-margin-searchBox">
                <ion-searchbar placeholder="Search On CaPay" class="custom-searchBox" color="dark"></ion-searchbar>
            </ion-col>
            <!-- end search box -->

            <!-- start title and subtitle -->
            <ion-col size="12" class="title">
                <ion-text color="light">
                    <h2 class="ion-text-center">$  16,003.00</h2>
                </ion-text>
                <ion-text color="medium">
                    <h6 class="ion-text-center">CaPay Balance</h6>
                </ion-text>
            </ion-col>
            <!-- end title and subtitle-->

            <!-- start deposit and withdrawel -->
            <ion-col size="12" class="custom-deposit">
                <ion-row>
                    <ion-col>
                        <ion-card class="custom-card">
                            <ion-card-header>
                                <ion-card-title class="ion-text-center">
                                    <ion-button fill="clear" class="ion-no-padding" href="">
                                        <ion-icon src="../assets/icon/card-receive.svg" size="large"></ion-icon>
                                    </ion-button>
                                </ion-card-title>
                                <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card class="custom-card">
                            <ion-card-header>
                                <ion-card-title class="ion-text-center">
                                    <ion-button fill="clear" class="ion-no-padding" href="">
                                        <ion-icon src="../assets/icon/card.svg" size="large"></ion-icon>
                                    </ion-button>
                                </ion-card-title>
                                <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card class="custom-card">
                            <ion-card-header>
                                <ion-card-title class="ion-text-center">
                                    <ion-button fill="clear" class="ion-no-padding" href="">
                                        <ion-icon src="../assets/icon/card-send.svg" size="large"></ion-icon>
                                    </ion-button>                                </ion-card-title>
                                <ion-card-subtitle class="ion-text-center">Deposit</ion-card-subtitle>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                </ion-row>                
            </ion-col>
            <!-- end deposit and withdrawel -->

        </ion-row>
    </ion-app>
</template>

<script>
import {IonGrid,IonApp,IonRow,IonCol,IonSearchbar,IonText,IonButton,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle} from '@ionic/vue'

export default {
    name:'mainDashboard',
    // components:{IonGrid,IonApp,IonRow,IonCol,IonSearchbar,IonText,IonButton,IonIcon}
    components:[IonGrid,IonApp,IonRow,IonCol,IonSearchbar,IonText,IonButton,IonIcon,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle]
}
</script>

<style scoped>
    .custom-margin-searchBox{
        margin-top: 51px;
    }
    .custom-searchBox{
        text-align: center;
        --border-radius: 15px;
        transform: scaleY(1.3);
        color: #C0C7D1;
    }
    .custom-header{
        margin-left: 25px;
        margin-right: 25px;
    }
    .title{
        margin-top: 57px !important;
    }
    /* deposit and withdrawel */
    .custom-deposit{
        margin-top:40px ;
    }
    .custom-card{
        border-radius: 10px !important;
        background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF !important;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25) !important;
    }
</style>