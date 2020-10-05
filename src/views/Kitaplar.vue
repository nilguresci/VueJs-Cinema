<template>
<div id="kitaplistele">
    <h1>Kitaplar sayfası</h1>
    <div class="container">
        <div class="row">
            <div class="col" v-for="kitap in KitapGetir" :key="kitap.id">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{kitap.ad}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{kitap.yazar}}</h6>
                        <p class="card-text">{{kitap.yazi}}</p>

                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" v-model="kitap.oduncDurum" @change="oduncver(kitap)">
                            <label class="form-check-label">Ödünç durumu</label>
                        </div>
                    </div>

                    <div class="card-body" v-if="!kitap.oduncDurum">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="OduncVer(kitap)">Ödünç Al</button>
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
    name: "Kitaplar",
    computed: {
        ...mapGetters(['KitapGetir']),
    },
    methods: {
        ...mapActions(['Odunc', 'oduncCheckbox']),
        OduncVer(kitap) {
            this.Odunc(kitap);
            alert(`odunc verildi`);
        },
        oduncver(kitap) {
            this.oduncCheckbox(kitap);
            alert(kitap.oduncDurum);
        }
    },
}
</script>
