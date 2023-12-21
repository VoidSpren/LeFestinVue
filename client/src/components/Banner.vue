<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import userIcon from './Icons/UserIcon.vue'

    import { reactive } from 'vue';

    let hiddenStyle = reactive({ width: "0", borderColor: "#0000"})
    let hiddenIconStyle = reactive({ width: "1.2em"})

    function showMenu(){
        hiddenStyle.width = "9.5em"
        hiddenStyle.borderColor = "#2d2";

        hiddenIconStyle.width = "0"
    }

    function hideMenu(){
        hiddenStyle.width = "0"
        hiddenStyle.borderColor = "#0000";

        hiddenIconStyle.width = "1.2em"

        console.log("hiden")
    }
</script>

<template>
    <div class="container" >
        <RouterLink class="title" to="/">
            <img class="icon" src="/LeFestin.png" alt="Le Festin Icon">
            &nbsp;
            Le Festin
        </RouterLink>
        <div class="rhs">
            <div class="loginMenu" @mouseleave="hideMenu" @mouseenter="showMenu">
                <div class="hiddenMenu" :style="hiddenStyle">
                    <RouterLink to="/login"> Ingresar </RouterLink>
                    <RouterLink to="/sign"> Registrarse </RouterLink>
                </div>
                <div :style="hiddenIconStyle" class="hiddenIcon">
                    <userIcon class="userIcon"/>
                </div>
            </div>
            <RouterLink class="faq" to="/faq">
                ?
            </RouterLink>
        </div>
    </div>
</template>

<style>

:root{
    --hover-color: #777;
}

a{
    text-decoration: none;
    color: inherit;
    margin: 0 0.2em;
}
a:hover{
    color:var(--hover-color);
}

.container{
    display: grid;
    font-size: 2.3em;
    color: #222;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: #7f7;
    padding: 0.45em;
}

.icon{
    height: 1.6em;
}

.title{
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    font-weight: 700;
}


.rhs{
    display: flex;
    align-items: center;
    justify-self: end;
}

.loginMenu{
    display: flex;
}

.hiddenMenu{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    font-size: 0.8em;
    border: 0.15em solid #2d2;
    border-radius: 0.2em;
    transition: 0.3s width ease;
}

.vertSeparator{
    width: 0.15em;
    border-radius: 0.1em;
    background-color: #2d2;
    margin: 0.1em 0;
}

.hiddenClose{
    background-color: #0000;
    border: none;
    color: inherit;
    font: inherit;
    font-weight: bolder;
    margin: 0 0.3em;
}
.hiddenClose:hover{
    color: var(--hover-color);
}

.hiddenIcon{
    display: grid;
    margin: 0 0.2em;
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s width ease;
}

.userIcon{
    color:inherit;
    width: 1.2em;
    height: 1.2em;
}
.userIcon:hover{
    color: var(--hover-color);
}

.faq{
    border: solid 0.1em #222;
    border-radius: 100%;
    width: 1.2em;
    height: 1.2em;
    text-align: center;
    font-weight: bold;
    line-height: 1.1em;
}
.faq:hover{
    border-color: var(--hover-color);
}
</style>
