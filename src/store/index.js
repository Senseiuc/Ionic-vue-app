import { createStore } from 'vuex'

const store = createStore(
   {
    state(){
        return {
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
                    id:'m3',
                    image:'https://desirerecipes.com/wp-content/uploads/2022/02/image-24.jpg.webp',
                    title:'Good eating',
                    description:'Enjoyed that wonderful african dish',
                },
            ]
        }; 
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    },
    mutations:{
        addMemory(state,MemoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title:MemoryData.title,
                image:MemoryData.imageUrl,
                description:MemoryData.description
            }
            state.memories.unshift(newMemory);
        }
    },
    actions:{
        addMemory(context,MemoryData){
            context.commit('addMemory',MemoryData)
        }
    }
   }
);

export default store;