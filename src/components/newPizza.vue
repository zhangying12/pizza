<template>
    <form >
        <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea class="form-control" v-model="newPizza.description" rows="5"></textarea>
            </div>
        </div>
        <p><strong>选项一</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项二</strong></p>
         <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="from-group row">
            <button type="button" class="btn btn-success btn-block" @click="addMenuItem">添加</button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
           // console.log(this.newPizza)
           let data={
               name:this.newPizza.name,
               description:this.newPizza.description,
               options:[
                   {
                       size:this.newPizza.size1,
                       price:this.newPizza.price1
                   },
                   {
                       size:this.newPizza.size2,
                       price:this.newPizza.price2
                   }
               ]
           }
           //axios vue-resource es6 fetch
        //    fetch('https://wd2047331563ykfoaw.wilddogio.com/menu.json',{
        //        method:'post',
        //     //    headers:{
        //     //     'Content-type':'application/json'
        //     //     },
        //        body:JSON.stringify(data)
        //    })
        //    .then(res =>res.json())
        //    .then(data => this.$router.push({name:"menueLink"}))
        //    .catch(err => console.log(err));
        // this.http.post('menu.json',data)
        // .then(res =>this.$router.push({name:"menueLink"}))
            this.http.post('menu.json',data)
            .then(res =>this.$store.commit("pushToMenuItems",data))
            }
    }
}
</script>

