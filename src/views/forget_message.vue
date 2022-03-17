<template>
    <!-- start row -->
    <ion-row class="item-center">
        <!-- start column -->
        <ion-col size="2" class="ion-text-start">
            <ion-button fill="clear">
                <ion-icon name="close-outline" color="dark"></ion-icon>
            </ion-button>
        </ion-col>
        <ion-col size="10" color="dark" class="ion-text-end">
            <slot>{{message}}</slot>
        </ion-col>
        <!-- end column -->
    </ion-row>
    <!-- start row -->
</template>

<script>
import {IonButton,IonRow,IonCol,IonIcon} from '@ionic/vue'
export default {
    components:{IonButton,IonRow,IonCol,IonIcon},
    props:['message']
}
</script>

<style scoped>
    .item-center{
        padding-top: 20px !important;
        padding-bottom: 10px !important;
    }
</style>