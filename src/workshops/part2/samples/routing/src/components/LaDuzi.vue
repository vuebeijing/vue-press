<template>
  <div class="container-fluid">
    <img class="margin-bottom-10" width="25%" src="../assets/la-du-zi.png">
    <h1 class="margin-bottom-10">{{appName}}</h1>
    <ul class="list-group list-group-flush margin-bottom-10">
      <li class="list-group-item d-flex justify-content-between align-items-center"
       v-for="(restaurant, index) in restaurants" 
       :key="index">
        <span>{{restaurant.name}}</span>
        <span>
          <span v-for="count in restaurant.count" :key="count">
            <i v-if="restaurant.laduzi">💩</i>
            <i v-else>❤️</i>
          </span>
        </span>
      </li>
    </ul>
    <div class="input-group mb-3">
      <input type="text" class="form-control" 
      placeholder="Restaurant's name" 
      v-model="newRestaurant">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="submitResturant">Submit</button>
      </div>
    </div>
    <div class="alert alert-danger"  role="alert" v-show="isShowAlert">
      Please give a name!
      <button type="button" class="ml-2 mb-1 close" @click="closeAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    appName:String
  },
  data(){
    return {
      restaurants:null,
      newRestaurant: '',
      isShowAlert: false,
    }
  },
  created(){
    this.restaurants = [
        {name: 'Hot Pot', laduzi: true, count: 3},
        {name: 'La Mian', laduzi: false,  count: 4},
        {name: 'Ma La Tang', laduzi: true,  count: 5},
        {name: 'KFC', laduzi: false,  count: 3},
        {name: "Mcdonald's", laduzi: true,  count: 3},
        {name: 'Peking Duck', laduzi: false,  count: 2},
    ]
  },
  methods:{
    submitResturant(){
      if(this.newRestaurant){
        let newData = {
          name: this.newRestaurant,
          laduzi: true,
          count: 1
        }
        this.restaurants.unshift(newData)
      } else {
        this.isShowAlert = true;
      }
    },
    closeAlert(){
      this.isShowAlert = false;
    }
  }
}
</script>
<style>
.container-fluid{
  max-width: 500px;
  position: relative;
}
.list-group{
  height: 200px;
  overflow-y: auto;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
.alert {
  width: 250px;
  position: fixed;
  top: 50px;
  left: 50%;
  margin-left: -125px;
}
</style>




