<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="col-sm col-md-4">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <td>品种</td>
                        <td>删除</td>
                    </tr>
                </thead>
            <tbody v-for="item in getMenuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td><button @click="deleteData(item)" class="btn btn-outline-danaer btn-sm">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import newPizza from './newPizza'
    export default{
        data(){
            return{
                //getMenuItems:[]
            }
        },
         components:{
                'app-new-pizza':newPizza
        },
        computed:{
            getMenuItems:{
                get(){
                    //return this.$store.state.menuItems
                    return this.$store.getters.getMenuItems
                },
                set(){

                }, 
             },
         },
        created(){
            fetch("https://wd2047331563ykfoaw.wilddogio.com/menu.json")
                .then(res => {
                   return res.json()
                })
                .then(data =>{
                    //console.log(data)
                    let menuArray = []
                   for(let key in data){
                        //key是唯一，可作为id值去查找
                        data[key].id = key
                        menuArray.push(data[key])

                    }
                    this.$store.commit('setMenuItems',menuArray)
                   // this.getMenuItems = menuArray
                })
        },
        methods:{
            deleteData(item){
                fetch("https://wd2047331563ykfoaw.wilddogio.com/menu/"+item.id+'/.json',{
                    method:"DELETE",
                    // headers:{
                    //     'Content-type':'application/json'
                    // }

                })
                .then(res => res.json())
               //.then(data => this.$router.push({name:"menueLink"}))
                .then(data => {
                    this.$store.commit('removeMenuItems',item)})
                .catch(err => console.log(err))
            }
        }
    }
</script>
