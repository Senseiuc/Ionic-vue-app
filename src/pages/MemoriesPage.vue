<template>
    <base-layout page-title="All Memories">
        <ion-list >
            <ion-item v-for="memory in memories" 
                :router-link="`memories/${memory.id}`"
                :key="memory.id"
            >
                <ion-thumbnail slot="start">
                    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    {{memory.title}}
                </ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import {IonList,IonItem,IonImg,IonThumbnail,IonLabel} from '@ionic/vue'
export default ({
    components:{
        IonItem,
        IonList,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    data(){
        return{
            memories:[
                {
                    id:'m1',
                    title:'A trip to the Mountain',
                    image:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
                    description:'It was a really fun day in the mountains',
                },
                {
                    id:'m2',
                    image:'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
                    title:'Surfing the sea side',
                    description:'Feeling the cool breeze!',
                },
                {
                    id:'m2',
                    image:'https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpg.webp',
                    title:'Good eating',
                    description:'Enjoyed that wonderful african dish',
                },
            ]
        }
    }
})
</script>
