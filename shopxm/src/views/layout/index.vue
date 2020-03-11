<template>
    <div class="app-wrapper">
        <Sidebar></Sidebar>
        <div class="main-container">
            <Navbar></Navbar>
            <Appmain></Appmain>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    import Navbar from  './components/Navbar';
    import Appmain from "./components/AppMain";
    export default {
        name: "layout",
        components: {Appmain,
            Navbar,
            Sidebar}
    }
</script>

<style lang="scss" scoped>
    #app{
    .app-wrapper{
        position: relative;
        height:100%;
        width: 100%;
    .sidebar-container{
        width: 180px;
        height: 100%;
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        overflow: hidden;
        background: #304156;
        color:#fff;
    }
    .main-container{
        clear:both;
        min-height: 100%;
        margin-left: 180px;
    .navbar-container{
        height: 50px;
        background: lightgoldenrodyellow;
        line-height: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        border-bottom:1px solid #ccc;
    }
    .main-con{
        width:100%;
        min-height:100%;
        background: lightcyan;
    }
    }
    }
    }
</style>