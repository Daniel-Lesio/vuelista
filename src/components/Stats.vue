<template>
    <section class="stats" > 
    {{ listLength }}
    </section>
</template>
<script>
import { mapGetters  } from 'vuex'

export default {
name :'Stats',
computed : {
    ...mapGetters([
        'listLength'
    ])
}

}
</script>
<style lang="scss">
.stats{
    width: 50px;
    height: 50px;
    border: solid white 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>
