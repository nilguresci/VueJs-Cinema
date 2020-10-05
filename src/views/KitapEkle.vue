<template>
<div id="kitapekle">
    <h1>Kitap ekleme sayfası</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <form @submit.prevent="Ekle">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Kitap Adı</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="kitapadi" v-model="kitap.ad">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Yazar Adı</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="yazaradi" v-model="kitap.yazar">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Kategori</label>
                        <select class="form-control" id="exampleFormControlSelect1" v-model="kitap.kategori">
                            <option>Roman</option>
                            <option>Deneme</option>
                            <option>Biyografi</option>
                            <option>Şiir</option>
                            <option>Bilim</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Kitap konusu</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="kitap.yazi"></textarea>
                    </div>
                    <button type="submit" class="btn btn-info btn-lg btn-block">Ekle</button>
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    name: "KitapEkle",
    data() {
        return {
            kitap: {
                ad: "",
                yazar: "",
                kategori: "",
                yazi: "",
            }
        };
    },
    methods: {
        ...mapActions(['KitapEkle']),
        Ekle() {
            this.KitapEkle(this.kitap);
            alert('Eklendi');
        },
    },
}
</script>
