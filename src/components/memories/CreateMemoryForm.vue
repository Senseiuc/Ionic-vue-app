<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" v-model="enteredTitle" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image Url</ion-label>
                <ion-input type="url" v-model="enteredImageUrl" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" required v-model="enteredDescription"></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block" fill="outline">Save</ion-button>
    </form>
</template>

<script>
import { IonList,IonLabel,IonItem,IonInput,IonTextarea,IonButton } from '@ionic/vue'
export default {
    emits:['save-memory'],
    data(){
        return{
            enteredTitle:'',
            enteredImageUrl:'',
            enteredDescription:''
        }
    },
    components:{
        IonInput,
        IonLabel,
        IonItem,
        IonTextarea,
        IonList,
        IonButton
    },
    methods:{
        submitForm(){
            const memoryData = {
                title:this.enteredTitle,
                imageUrl:this.enteredImageUrl,
                description:this.enteredDescription
            };
            this.$emit('save-memory',memoryData);
        }
    }
}
</script>