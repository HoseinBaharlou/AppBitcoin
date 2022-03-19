<template>
	<ion-page id="custom-padding">
		<!-- start header -->
		<ion-header class="ion-no-border">
			<ion-toolbar class="header">
				<forget-message>
					<ion-button
						href="#"
						fill="clear"
						class="ion-text-lowercase"
						color="dark"
						>Forget your credentials?</ion-button
					>
				</forget-message>
			</ion-toolbar>
		</ion-header>
		<!-- end header -->

		<!-- start content -->
		<ion-content>
			<ion-row class="custom-row-background">
				<!-- start avatar -->
				<ion-col
					size="12"
					class="center ion-justify-content-center custom-avatar"
				>
					<ion-avatar class="custom-image-avatar">
						<img src="../../public/assets/iconApp/Thu12mb.svg" alt="" />
					</ion-avatar>
				</ion-col>
				<!-- end avatar -->

				<!-- start title and subtitle -->
				<ion-col
					size="12"
					class="center custom-col-background custom-col custom-padding"
				>
					<p>
						<ion-text class="ion-text-center">
							<h2>Fingerpoint</h2>
						</ion-text>
						<ion-text color="medium">
							<h5>Please lift and rest finger</h5>
						</ion-text>
					</p>
				</ion-col>
				<!-- end title and subtitle -->

				<!-- start box finger point -->
				<ion-col size="12" class="center custom-col-background fingerPoint">
					<ion-thumbnail class="imageSize">
						<img
							src="../../public/assets/iconApp/finger_12.svg"
							class="custom-image"
						/>
					</ion-thumbnail>
				</ion-col>
				<!-- end box finger point -->
			</ion-row>
		</ion-content>
		<!-- end content -->

		<!-- start footer -->
		<ion-footer class="ion-no-border">
			<ion-toolbar>
				<ion-row class="center">
					<ion-col size="10">
						<ion-button
							expand="full"
							shape="round"
							class="custom-button background-yellow remove-shadow"
							>NEXT</ion-button
						>
					</ion-col>
					<ion-col size="10">
						<ion-text>
							<p class="ion-text-start">By signing up agree to our</p>
						</ion-text>
						<ion-text color="warning">
							<a href="" class="ion-text-center custom-aTag"
								>Term and conditions</a
							>
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
	.center {
		display: flex;
		justify-content: center;
	}
	.fingerPoint {
		padding-top: 48px;
	}
	.imageSize {
		--size: 102;
	}
	.custom-padding {
		padding-top: 68px !important;
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
