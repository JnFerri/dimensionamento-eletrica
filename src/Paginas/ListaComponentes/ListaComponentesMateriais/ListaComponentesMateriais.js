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
    


function ListaComponentesMaterial() {
    const [TodosMateriais, setTodosMateriais] = useState({})
    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate()

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
            const response = await fetch('http://srv-services:3000/api/jestor/lista', option);
            const data = await response.json();
            setTodosMateriais(data);
            if (data !== '') {
                localStorage.setItem('ListaMateriais', JSON.stringify(data));
            }
        }
        pegarDadosMateriais()
        
    },[])

    useEffect(() =>{
        if(TodosMateriais !== ''){
            const dado = TodosMateriais
            console.log(dado)
        }
    },[TodosMateriais])

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