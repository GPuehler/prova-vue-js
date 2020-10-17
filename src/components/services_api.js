import { http } from './config_api'

export default {
    mostrar() {
        return http.get('https://projeto-prova.herokuapp.com/projeto/')
    },
    salvar(Infos) {
        return http.post('https://projeto-prova.herokuapp.com/projeto', Infos)
    }
}