<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title : 'loading'" page-default-back-link="/memories">
    
        <h1 v-if="!loadedMemory">Could not find the memory</h1>
        <memory-overview v-else 
        :title="loadedMemory.title" 
        :image="loadedMemory.image"
        :description="loadedMemory.description"
        >
        </memory-overview>
    
    </base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue';
export default {
  data(){
    return {
      memoryId: this.$route.params.id
    }
    },
  components:{
    MemoryOverview
  },

  computed:{
      loadedMemory(){
          return this.$store.getters.memory(this.memoryId);
      }
  }
}
</script>
