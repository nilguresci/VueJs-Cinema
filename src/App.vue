<template>
<div id="app">
    <div id="nav">
        <router-link to="/">Home' Page Hoşgeldiniz</router-link> <br>
        <router-link to="/kitaplar">
            <button type="button" class="btn btn-success">Kitaplar</button>
        </router-link> |
        <router-link to="/kitapekle"><button type="button" class="btn btn-success">Kitap Ekle</button></router-link> |
        <router-link to="/kitapsil"><button type="button" class="btn btn-success">Kitap Sil</button></router-link>
    </div>
    <router-view />
</div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
