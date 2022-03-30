<template>
	<ion-page>
		<!-- start header -->
		<ion-header class="ion-no-border bg-purple-1">
			<ion-toolbar class="header bg-purple-1">
				<forget-message>
					<ion-button
						href="#"
						fill="clear"
						class="ion-text-lowercase dark"
						>Forget your credentials?</ion-button
					>
				</forget-message>
			</ion-toolbar>
		</ion-header>
		<!-- end header -->

		<!-- start content -->
		<ion-content class="bg-purple-1">
			<ion-row class="background-light rounded-x-55 h-100 mt-65">
        <ion-col>
          <!-- start  avatar -->
          <section class="center">
            <ion-avatar class="custom-image-avatar mt-44">
              <img src="../../public/assets/iconApp/Thu12mb.svg" alt="sign">
            </ion-avatar>
          </section>
          <!-- end  avatar -->

          <!-- start title and subtitle -->
          <section class="mt-65 ion-text-center">
            <ion-text>
              <h2 class="dark weight-bold">Fingerpoint</h2>
            </ion-text>
            <ion-text color="medium">
              <h5>Please lift and rest finger</h5>
            </ion-text>
          </section>
          <!-- end title and subtitle -->

          <!-- start box finger point -->
          <section class="center mt-50">
            <ion-thumbnail class="imageSize center">
              <img
                  src="../../public/assets/iconApp/finger_12.svg"
                  class="custom-image"
              />
            </ion-thumbnail>
          </section>
          <!-- end box finger point -->
        </ion-col>
			</ion-row>
		</ion-content>
		<!-- end content -->

		<!-- start footer -->
		<ion-footer class="ion-no-border background-light">
			<ion-toolbar class="background-light">
				<ion-row class="center">
					<ion-col size="10">
						<ion-button
							expand="full"
							shape="round"
							class="h-44 rounded-15 background-yellow remove-shadow"
							>NEXT</ion-button
						>
					</ion-col>
					<ion-col size="10" class="ion-text-center">
						<ion-text>
							<p class="ion-text-center dark">By signing up agree to our</p>
						</ion-text>
						<ion-text>
							<a href="" class="custom-aTag yellow">Term and conditions</a>
						</ion-text>
					</ion-col>
				</ion-row>
			</ion-toolbar>
		</ion-footer>
		<!-- end footer -->
	</ion-page>
</template>
<script>
	import {
		IonPage,
		IonRow,
		IonCol,
		IonHeader,
		IonText,
		IonToolbar,
		IonFooter,
		IonAvatar,
		IonButton,
		IonThumbnail,
		IonContent,
	} from "@ionic/vue";
	import { defineComponent } from "vue";
	import forgetMessage from "./forget_message.vue";

	export default defineComponent({
		name: "FingerPoint",
		components: {
			IonPage,
			forgetMessage,
			IonText,
			IonToolbar,
			IonRow,
			IonCol,
			IonHeader,
			IonThumbnail,
			IonFooter,
			IonAvatar,
			IonButton,
			IonContent,
		},
	});
</script>

<style scoped>
	.imageSize {
		--size: 102;
	}
	.custom-image {
		cursor: pointer;
	}
	.custom-image:active {
		background-color: #e5e5e5;
		transition: 0.5s all;
		--border-radius: 50%;
	}
</style>
