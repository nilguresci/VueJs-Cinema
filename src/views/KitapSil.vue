<template>
<div id="kitapSil">
    <h1>Kitap silme sayfası</h1>
    <div class="container">
        <div class="row">
            <div class="col" v-for="kitap in KitapGetir" :key="kitap.id">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{kitap.ad}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{kitap.yazar}}</h6>
                        <p class="card-text">{{kitap.yazi}}</p>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-danger btn-lg btn-block" @click="Sil(kitap.id)">Sil</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    name: 'KitapSil',
    computed: {
        ...mapGetters(['KitapGetir']),
    },
    methods: {
        ...mapActions(['KitapSil']),
        Sil(id) {
            this.KitapSil(id);
            alert(`${id} li kart silindi`);
        },
    },
}
</script>
