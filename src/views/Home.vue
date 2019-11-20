<template>
  <div class="home container " >
  <div class="test">
    <h1 class="title" >{{ title }}</h1>
  <Stats></Stats>
  <form v-on:submit.prevent="addToLIst" >
    <input type="text" class="list-input" placeholder='dodaj do listy' v-model="nowyElementListy" autofocus>
  </form>
  
  <div class="lista">
    
    <Card v-for="(item, index) in list" :key="index" :index = 'index'>
      {{ item }}
    </Card>
    
  </div>
  </div>
  </div>
</template>

<script>
import { mapState , mapMutations } from 'vuex'
import Stats from '@/components/Stats'
import Card from '@/components/Card'
export default {

  name: 'home',
  components : {
    Stats,
    Card
  },
  data(){
    return{
      nowyElementListy : ''
    }
  },
  computed : {
    ...mapState([
      'title',
      'list'
    ])
  },
  methods : {
    ...mapMutations([
      'ADD_ELEMENT'
    ]),
    addToLIst(){
      this.ADD_ELEMENT(this.nowyElementListy)
      this.nowyElementListy = ''
  }
  }
  
}
</script>
<style lang="scss" scoped>
.home{
  
  color: rgb(152, 45, 252);
    
    .title{
      margin-bottom: 20px;
    }
}

.lista {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
.test{
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
