<template>
    <div>
        <div class="row">
            <div id="home" class="col-sm-12 text-center">
                <div class="background">
                    <h1>欢迎大家品尝pizza</h1>
                    <h2>这里有你非常喜欢的pizza</h2>
                    <button @click="goToMenu" class="btn btn-success">let's order!</button>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    methods: {
        goToMenu() {
            // 跳转到上一次浏览的页面
            // this.$router.go(-1)
            // 指定跳转到某个页面
            // this.$router.replace('/menu')
            // 指定跳转路由名字下
            // this.$router.replace({name:'menueLink'})
            // 通过push进行跳转
            // this.$router.push('/menu')
            this.$router.push({name:'menueLink'})
        }
    }
}
</script>
 <style>
#home{
  background: url('../../src/assets/pizza.jpg');
  height: 85vh;
  padding: 10%;
}

h1,h2{
  margin: 6%;
}

.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
 
