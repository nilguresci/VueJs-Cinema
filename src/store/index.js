import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD4pVRyLeqyub5AtJGDJc0wwEmgNb_vImM",
    authDomain: "libvue.firebaseapp.com",
    databaseURL: "https://libvue.firebaseio.com",
    projectId: "libvue",
    storageBucket: "libvue.appspot.com",
    messagingSenderId: "639776688135",
    appId: "1:639776688135:web:34a9ae12e282665b4542a2",
    measurementId: "G-M726D8BW2E"
};

let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
const Kitaplar = db.ref("Kitaplar");

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Kitaps: {},
    },
    getters: {
        KitapGetir(state) {
            Kitaplar.on('value', snapshot => {
                state.Kitaps = snapshot.val();
            })
            return state.Kitaps;
        }
    },
    mutations: {
        KitapEkle(state, kitap) {
            const id = Kitaplar.push().key;
            kitap.id = id;
            Kitaplar.child(id).set(kitap);
        },
        KitapSil(state, id) {
            Kitaplar.child(id).remove();
        },
        Odunc(state, kitap) {
            kitap.oduncDurum = true;
            Kitaplar.child(kitap.id).update(kitap)
        },
        oduncCheckbox(state, kitap) {
            Kitaplar.child(kitap.id).update(kitap)
        }
    },
    actions: {
        KitapEkle({ commit }, kitap) {
            commit('KitapEkle', kitap)
        },
        KitapSil({ commit }, id) {
            commit('KitapSil', id)
        },
        Odunc({ commit }, kitap) {
            commit('Odunc', kitap)
        },
        oduncCheckbox({ commit }, kitap) {
            commit('oduncCheckbox', kitap)
        }
    },
    modules: {}
})