<template>
	<ion-page>
		<ion-content :fullscreen="true" class="bachground">
			<ion-row :fullscreen="true" class="background-row">
				<ion-col class="content">
					<div class="ion-text-center">
						<ion-text class="title">
							Receive "Hot" Gifts from value Wallet Right Away
						</ion-text>
					</div>
					<div class="ion-text-center">
						<ion-text color="light" class="subtitle">
							sign up to receive a large gift pack. Eating,watching moves & many
							other services.
						</ion-text>
					</div>
					<ion-button expand="full" class="custom-button" shape="round"
						>GET STARTED</ion-button
					>
				</ion-col>
			</ion-row>
		</ion-content>
	</ion-page>
</template>
<script>
	import {
		IonButton,
		IonText,
		IonRow,
		IonCol,
		IonPage,
		IonContent,
	} from "@ionic/vue";
	import { defineComponent } from "vue";
	export default defineComponent({
		components: { IonButton, IonText, IonCol, IonRow, IonPage, IonContent },
	});
</script>
<style scoped>
	/* #homePage .swiper-pagination-bullet{
    width: 8px !important;
    height: 6px !important;
    display: inline-block !important;
    margin-bottom: 450px !important;
    border-radius: 37% !important;
    background: #ffffff ; 
    opacity: 1 !important;
  }
  #homePage .swiper-pagination-bullet-active{
    width: 17px !important;
    transition: 0.3s all;
  } */
	.content {
		margin-top: 407px;
		padding-left: 35px;
		padding-right: 35px;
	}
	.title {
		color: #ffc400 !important;
		font-weight: 700;
		font-size: 24px;
		line-height: 40px !important;
		/* or 67% */
		opacity: 1 !important;
	}
	.subtitle {
		margin-top: 12px;
		font-family: "DM Sans";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 28px;
	}
	.custom-button {
		margin-top: 187px;
		--background: #fec42d !important;
	}
	.background-row {
		background-color: rgba(14, 77, 251, 0.7) !important;
	}
</style>
