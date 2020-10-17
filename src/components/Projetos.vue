<template>
    <div id="projetos">
        <form @submit.prevent="salvar()" method="post">
            <input type="text" name="nome" id="nome" placeholder="Digite o nome" v-model="newInfos.nome">
            <select v-model="newInfos.area">
                <option disabled value="">Escolha um item</option>
                <option v-for="area in chooseAreas" :key="area"> {{ area }} </option>
            </select>
            <input type="text" name="prazo" id="prazo" placeholder="Digite o prazo" v-model="newInfos.prazo">
            <input type="text" name="orcamento" id="orcamento" placeholder="Digite o orçamento" v-model="newInfos.orcamento">
            <button @click="mostraALert()" type="submit">Adicionar Pedido</button>
            <button @click="mounted()">Visualizar informações</button>
        </form>
    </div>
</template>

<script>
import Services from './services_api'

export default {
    name: 'Projetos',
    data(){
        return {
            chooseAreas: ['TECNOLOGICA', 'HUMANA', 'MEDICA'],
            newInfos: {
                nome: '',
                area:'',
                prazo: '',
                orcamento: null
            },
            info: [],
            messages: {
                valorValido: 'Por favor, digite um valor válido!'
            }
        }
    },
    methods: {
        mostraALert(){
        },
        salvar(){
            let testee = JSON.parse(JSON.stringify(this.newInfos))
            console.log(testee)
            Services.salvar(this.newInfos).then(resposta => {
                alert('Salvo com sucesso!' + resposta.id)
            })
        },
        mounted(){
            Services.mostrar().then(resposta => {
                console.log(JSON.parse(JSON.stringify(resposta.data)))
                this.info = resposta.data
            })
        },
    }
}

</script>

<style>
    #projetos{
        margin: 0 auto;
        max-width: 300px;
        width: 70%;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        padding: 5px;
        margin: 10px 0;
    }
</style>