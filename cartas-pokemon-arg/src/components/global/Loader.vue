<template>
<div class="loader d-flex justify-center align-center">
    <div class="container-loader">
        <v-img
            height="106"
            width="106"
            src="/img/loader.png"
        ></v-img>
    </div>
</div>
</template>

<script>
export default {
    name: 'loader',
}
</script>

<style scoped>
.loader {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}
.container-loader {
    width: 106px;
    height: 106px;
    border-radius: 50%;
    animation: loading 2s infinite;
}

@keyframes loading {
    0% { transform: translate(0, 0) rotate(0); background: rgba(255,0,0,0); }
    25% { transform: translate(-8px, 0) rotate(-18deg); background: rgba(255,0,0,.5); }
    33% { transform: translate(8px, 0) rotate(18deg); background: rgba(255,0,0, .66); }
    50% { transform: translate(-8px, 0) rotate(-12deg); background: rgba(255,0,0,1); }
    60% { transform: translate(8px, 0) rotate(18deg); background: rgba(255,0,0,.8); }
    100% { transform: translate(0, 0) rotate(0); background: rgba(255,0,0,0); }
}
</style>