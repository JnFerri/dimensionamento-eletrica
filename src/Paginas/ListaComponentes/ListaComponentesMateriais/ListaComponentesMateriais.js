import { useEffect, useState } from "react";
import styled from "styled-components";
import Titulo4 from "../../../Components/Titulo4/Titulo4";
import Input from "../../../Components/Input/Input";
import Titulo2 from "../../../Components/Titulo2/Titulo2";
import Imagem from "../../../Components/Imagem/Imagem";
import { useNavigate } from "react-router-dom";
import setaVoltar from "../../../Images/setaVoltar.png"

/** Styled-component de section que serve como container para todos os componentes da pagina. */
const ListaMateriaisContainer = styled.section`
    display:flex;
    flex-direction:column;
    padding:20px 20px;
    margin:1rem 0;
    width:95%;
    align-items:center;
    background-color:black;
    border:0.5px orange solid;
    border-radius:30px;

`
/** Styled-component de div que serve como container das informações de cada cabo como se fosse uma li da lista de cabos cadastrados. */
const ItemContainer = styled.div`
    display:flex;
    align-items:center;
    padding:10px 10px;
    justify-content:space-around;
    background-color:white;
    border:0.5px orange solid;
    border-radius:10px;
    margin:2px 0;
    width:99%;
    `
/** Styled-component de div que serve como container para alinhar na vertical o titulo da informação e a informação sobre o produto. */
const Item = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 10px;
`
/** Styled-component de div que serve como container da barra de pesquisa e da opção de voltar. */
const PesquisaContainer = styled.div`
width:98%;
display:flex;
justify-content: flex-start;
align-items:center;
`

/** Styled-component de div que serve como container para alinhar a imagem e botão de voltar. */
const VoltarContainer = styled.div`
width:5%;
color:orange;
cursor: pointer;
margin-rigth: 10px;
`

/**
 * Estado que guarda os dados de todos os materiais cadastrados no jestor.
 * @typedef {EstadoReact} TodosMateriais
 * @property {Array} TodosMateriais Dados de todos os materiais cadastrados no jestor.
 * @property {React.Dispatch<React.setStateAction<Array>>} setTodosMateriais Função responsável por definir novo valor ao estado TodosMateriais.
 */

/**
 * Estado que guarda o valor do input de pesquisa para filtrar os dados.
 * @typedef {EstadoReact} pesquisa
 * @property {string} pesquisa Valor do input de pesquisa.
 * @property {React.Dispatch<React.setStateAction<string>>} setPesquisa Função responsável por definir novo valor para o estado 'pesquisa'.
 */

/**
 * Componente de pagina com lista dos materiais cadastrados no jestor com suas informações e com barra de pesquisa para filtrar o resultado.
 * @returns {JSX.Element} Componente react mostrando todos os materiais cadastrados.
 */
function ListaComponentesMaterial() {
    const [TodosMateriais, setTodosMateriais] = useState({})
    const [pesquisa, setPesquisa] = useState('');

    //React Hook utilizado para navegar para outras rotas da aplicação.
    const navigate = useNavigate()

    /** Pega todos os dados da tabela de materiais do jestor através do backend e define o estado TodosMateriais com os dados e também salva os dados na localStorage 'ListaMateriais'. */
    useEffect(()=>{
        async function pegarDadosMateriais(){
            const option ={
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                    object_type: 'pkrg306f9f4sa9aholtab',
                    sort: 'codigo',
                    page: 1,
                    size: '10000'
                  })
            }
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/jestor/lista`, option);
            const data = await response.json();
            setTodosMateriais(data);
            if (data !== '') {
                localStorage.setItem('ListaMateriais', JSON.stringify(data));
            }
        }
        pegarDadosMateriais()
        
    },[])

    
/** Caso tenha algum valor no input de pesquisa, define o Estado pesquisa com o valor do input e filtra o estado TodosMateriais conforme valor do input e salva o seu valor conforme valor fitrado, caso input pesquisa esteja nulo ou nada escrito irá definir o estado TodosMateriais conforme valor da localStorage 'ListaMateriais'. */
   async function fazPesquisa(event){
        const texto = event.target.value
        setPesquisa(texto)
        if(texto !== null && texto !== ''){
            
            const itensPesquisados = TodosMateriais.filter(material => material.codigo && material.codigo.includes(texto))
            setTodosMateriais(itensPesquisados)
        }else{
            setTodosMateriais(JSON.parse(localStorage.getItem('ListaMateriais')))
        }
        
    }

    /** Retorna a pagina onde se escolhe qual lista quer visualizar. */
    function HandleVoltar(){
        navigate("/listaComponentes")
    }

    return (
        <ListaMateriaisContainer>
            
            <PesquisaContainer>
            <VoltarContainer onClick={HandleVoltar}><Imagem src={setaVoltar} width='25%'></Imagem><span>VOLTAR</span></VoltarContainer>
            <Input placeholder="Procure pelo código do material"
            onChange={evento => fazPesquisa(evento)} value={pesquisa}
            padding='10px 10px' margin='10px 0px' width='50%' border_radius='10px' border='0.5px orange solid'
            ></Input>
            </PesquisaContainer>
            <Titulo2 color="orange">Materiais :</Titulo2>

            {
                TodosMateriais !== '' && TodosMateriais.length > 0 ? TodosMateriais.map((material,index) => (
                    <ItemContainer key={index}>
                        <Item>
                            <Titulo4>Código</Titulo4>
                            <span>{material.codigo}</span>
                        </Item>
                        <Item>
                            <Titulo4>Marca</Titulo4>
                            <span>{material.marca}</span>
                        </Item>
                        <Item>
                            <Titulo4>Modelo</Titulo4>
                            <span>{material.modelo}</span>
                        </Item>
                        <Item>
                            <Titulo4>Tensão</Titulo4>
                            <span>{material.tensao}V</span>
                        </Item>
                        <Item>
                            <Titulo4>Corrente Minima</Titulo4>
                            <span>{material.corrente_minima}A</span>
                        </Item>
                        <Item>
                            <Titulo4>Corrente Maxima</Titulo4>
                            <span>{material.corrente_maxima}A</span>
                        </Item>
                        <Item>
                            <Titulo4>Isolação IP</Titulo4>
                            <span>{material.isolacao_ip}</span>
                        </Item>
                    </ItemContainer>
                )) : ''

            }
        </ListaMateriaisContainer>
    );
}

export default ListaComponentesMaterial;