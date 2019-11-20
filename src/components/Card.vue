<template>
    <transition name="card">
    <div  v-on:click="removeEl"  class="card">
        <slot></slot>
    </div>
    </transition>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props : {
        index : Number
    },
    methods : {
        ...mapMutations([
            'REMOVE_ELEMENT'
        ]),
        removeEl(){
            this.REMOVE_ELEMENT(this.index)
        }
    }
}
</script>
<style lang="scss" scoped>
.card{
    line-height: 50px;
    background: white;
    width: 500px;
    text-align: center!important;

}
.card-enter-active{
    animation-name: card;
    animation-duration: 1s;
}
.card-leave-active{
animation-name: card;
    animation-duration: 1s;
    animation-direction: reverse;
}
@keyframes card {
    0%{
        opacity: 0;
        transform: translateY(100px)
    }
    100%{
        opacity: 1;
        
        transform: translateY(0px)
    }
}
</style>
