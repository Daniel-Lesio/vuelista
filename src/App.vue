<template>
  <div id="app">
    
      <router-view/>
    
  </div>
</template>
<script>
export default {
  name : 'app',

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand');
*{
  box-sizing: border-box;
  margin: 0;
  padding : 0;
  line-height: 1.4
}
#app {
  background: #1c1c1c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
font-family: 'Quicksand', sans-serif;
}
  input {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    font-size: 20px;
    outline: none;
    border: none;
    background: #1c1c1c;
    border-bottom: 2px solid white;;
    color: white;
    width: 600px;
    max-width: 90vw;
    transition: all 0.3s ease-in-out;
      
      &::placeholder{
        color: rgba(white,0.6);
      }
      &:focus{
        border-bottom: solid 2px violet;
      }
}
.container{
      width: 1000px;
      max-width: 90vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
    }
</style>
