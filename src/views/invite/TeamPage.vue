<template>
  <ion-page>
    <ion-content class="bg-purple-1">
      <ion-row class="background-light h-100 rounded-x-55 mt-65 px-35">
<!--        start title-->
        <ion-col size="12">
          <section class="mt-25">
            <ion-text class="dark">Team</ion-text>
          </section>
<!--          end title-->
<!--          start tab-->
          <div class="mt-50">
            <b-tabs>
              <b-tab title="Lev1">
                <team-component/>
              </b-tab>
              <b-tab title="Lev2">
                <team-component/>
              </b-tab>
              <b-tab title="Lev2">
                <team-component/>
              </b-tab>
            </b-tabs>
          </div>
<!--          end tab-->
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
<script>
import {IonPage,IonRow,IonContent,IonCol,IonText} from '@ionic/vue'
import teamComponent from "@/components/team/TeamComponent";
export default {
  components:{IonPage,IonRow,IonContent,IonCol,IonText,teamComponent}
}
</script>