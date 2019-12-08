<template>
        <div class="modal" :class="{'is-active':isActive}">
      <div class="modal-content">
          <span @click="closeModal" class="close">&times;</span>
         <p>model conten</p>
         </div>
    </div>
</template>


<script>
export default {
    props:['isActive'],
    data(){
        return{
        }
    },
    methods:{
        closeModal(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style lang="scss" scoped>


.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  &.is-active {
    display: block;

  }

  &-content {
    font-size: 20px;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    position: relative;
    .close {
        position: absolute;
        color: #aaa;
        top: 0;
        right: 0;
        cursor: pointer;
        margin: 1px 2px;
    }
  }
}

</style>