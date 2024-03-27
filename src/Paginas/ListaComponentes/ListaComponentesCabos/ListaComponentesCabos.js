import { useEffect, useState } from "react";
import styled from "styled-components";
import Titulo4 from "../../../Components/Titulo4/Titulo4";
import Input from "../../../Components/Input/Input";
import Titulo2 from "../../../Components/Titulo2/Titulo2";
import Imagem from "../../../Components/Imagem/Imagem";
import { useNavigate } from "react-router-dom";
import setaVoltar from "../../../Images/setaVoltar.png"


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

const Item = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 10px;
`
const PesquisaContainer = styled.div`
width:98%;
display:flex;
justify-content: flex-start;
align-items:center;
`
const VoltarContainer = styled.div`
width:5%;
color:orange;
cursor: pointer;
margin-rigth: 10px;
`
    


function ListaComponentesCabos() {
   const [TodosCabos,setTodosCabos] = useState({})
    //const [TodosMateriais, setTodosMateriais] = useState({})
    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        async function pegarDadosCabos(){
            const option ={
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                    object_type: '7os9af81a3do34vuqnh7j',
                    sort: 'codigo',
                    page: 1,
                    size: '10000'
                  })
            }
            const response = await fetch('http://srv-services:3000/api/jestor/lista', option);
            const data = await response.json();
            setTodosCabos(data);
            if (data !== '') {
                localStorage.setItem('ListaCabos', JSON.stringify(data));
            }
        }
        pegarDadosCabos()
        
    },[])

    useEffect(() =>{
        if(TodosCabos !== ''){
            const dado = TodosCabos
            console.log(dado)
        }
    },[TodosCabos])

   async function fazPesquisa(event){
        const texto = event.target.value
        setPesquisa(texto)
        if(texto !== null && texto !== ''){
            
            const itensPesquisados = TodosCabos.filter(cabo => cabo.codigo && cabo.codigo.includes(texto))
            setTodosCabos(itensPesquisados)
        }else{
            setTodosCabos(JSON.parse(localStorage.getItem('ListaCabos')))
        }
        
    }

    function HandleVoltar(){
        navigate("/listaComponentes")
    }

    return (
        <ListaMateriaisContainer>
            
            <PesquisaContainer>
            <VoltarContainer onClick={HandleVoltar}><Imagem src={setaVoltar} width='25%'></Imagem><span>VOLTAR</span></VoltarContainer>
            <Input placeholder="Procure pelo código do cabo"
            onChange={evento => fazPesquisa(evento)} value={pesquisa}
            padding='10px 10px' margin='10px 0px' width='50%' border_radius='10px' border='0.5px orange solid'
            ></Input>
            </PesquisaContainer>
            <Titulo2 color="orange">Cabos :</Titulo2>

            {
                TodosCabos !== '' && TodosCabos.length > 0 ? TodosCabos.map((cabo,index) => (
                    <ItemContainer key={index}>
                        <Item>
                            <Titulo4>Código</Titulo4>
                            <span>{cabo.codigo}</span>
                        </Item>
                        <Item>
                            <Titulo4>Marca</Titulo4>
                            <span>{cabo.marca}</span>
                        </Item>
                        <Item>
                            <Titulo4>Cor</Titulo4>
                            <span>{cabo.cor}</span>
                        </Item>
                        <Item>
                            <Titulo4>Secção</Titulo4>
                            <span>{cabo.seccao}</span>
                        </Item>
                        <Item>
                            <Titulo4>Material</Titulo4>
                            <span>{cabo.material}</span>
                        </Item>
                        <Item>
                            <Titulo4>Classe</Titulo4>
                            <span>{cabo.classe}</span>
                        </Item>
                        <Item>
                            <Titulo4>Vias</Titulo4>
                            <span>{cabo.vias}</span>
                        </Item>
                        <Item>
                            <Titulo4>Temperatura</Titulo4>
                            <span>{cabo.temperatura}C°</span>
                        </Item>
                        <Item>
                            <Titulo4>Modelo</Titulo4>
                            <span>{cabo.modelo}</span>
                        </Item>
                    </ItemContainer>
                )) : ''

            }
        </ListaMateriaisContainer>
    );
}

export default ListaComponentesCabos;