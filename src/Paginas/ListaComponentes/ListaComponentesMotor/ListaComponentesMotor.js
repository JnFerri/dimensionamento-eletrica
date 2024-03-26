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
    


function ListaComponentesMotor() {
    const [TodosMotores,setTodosMotores] = useState('')
   // const [TodosCabos,setTodosCabos] = useState({})
    //const [TodosMateriais, setTodosMateriais] = useState({})
    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        async function pegarDadosMotor(){
            const option ={
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                    object_type: '5muv_jyyr_iwebjtzifct',
                    sort: 'codigo',
                    page: 1,
                    size: '10000'
                  })
            }
            const response = await fetch('http://localhost:3000/api/jestor/lista', option);
            const data = await response.json();
            setTodosMotores(data);
            if (data !== '') {
                localStorage.setItem('ListaMotores', JSON.stringify(data));
            }
        }
        pegarDadosMotor()
        
    },[])

    useEffect(() =>{
        if(TodosMotores !== ''){
            const dado = TodosMotores
            console.log(dado)
        }
    },[TodosMotores])

   async function fazPesquisa(event){
        const texto = event.target.value
        setPesquisa(texto)
        if(texto !== null && texto !== ''){
            
            const itensPesquisados = TodosMotores.filter(motor => motor.codigo && motor.codigo.includes(texto))
            setTodosMotores(itensPesquisados)
        }else{
            setTodosMotores(JSON.parse(localStorage.getItem('ListaMotores')))
        }
        
    }

    function HandleVoltar(){
        navigate("/listaComponentes")
    }

    return (
        <ListaMateriaisContainer>
            <PesquisaContainer>
            <VoltarContainer onClick={HandleVoltar}><Imagem src={setaVoltar} width='25%'></Imagem><span>VOLTAR</span></VoltarContainer>
            <Input placeholder="Procure pelo código do motor"
            onChange={evento => fazPesquisa(evento)} value={pesquisa}
            padding='10px 10px' margin='10px 0px' width='50%' border_radius='10px' border='0.5px orange solid'
            ></Input>
            </PesquisaContainer>
            <Titulo2 color="orange">Motores :</Titulo2>

            {
                TodosMotores !== '' ? TodosMotores.map((motor,index) => (
                    <ItemContainer key={index}>
                        <Item>
                            <Titulo4>Código</Titulo4>
                            <span>{motor.codigo}</span>
                        </Item>
                        <Item>
                            <Titulo4>Marca</Titulo4>
                            <span>{motor.marca}</span>
                        </Item>
                        <Item>
                            <Titulo4>Alimentação</Titulo4>
                            <span>{motor.alimentacao}V</span>
                        </Item>
                        <Item>
                            <Titulo4>Potencia</Titulo4>
                            <span>{motor.potencia}CV</span>
                        </Item>
                        <Item>
                            <Titulo4>Lig. Ten. Baixa</Titulo4>
                            <span>{motor.ligacao_tensao_baixa}V</span>
                        </Item>
                        <Item>
                            <Titulo4>Lig. Ten. Media</Titulo4>
                            <span>{motor.ligacao_tensao_media}V</span>
                        </Item>
                        <Item>
                            <Titulo4>Lig. Ten. Alta</Titulo4>
                            <span>{motor.ligacao_tensao_alta}V</span>
                        </Item>
                        <Item>
                            <Titulo4>Corrente Lig. Baixa</Titulo4>
                            <span>{motor.corrente_ligacao_baixa}A</span>
                        </Item>
                        <Item>
                            <Titulo4>Corrente Lig. Média</Titulo4>
                            <span>{motor.corrente_ligacao_media}A</span>
                        </Item>
                        <Item>
                            <Titulo4>Corrente Lig. Alta</Titulo4>
                            <span>{motor.corrente_ligacao_alta}A</span>
                        </Item>
                        <Item>
                            <Titulo4>Fator Potencia</Titulo4>
                            <span>{motor.fator_de_potencia}</span>
                        </Item>
                        <Item>
                            <Titulo4>Rendimento</Titulo4>
                            <span>{motor.rendimento*100}%</span>
                        </Item>
                        <Item>
                            <Titulo4>Rotação</Titulo4>
                            <span>{motor.rotacao}RPM</span>
                        </Item>
                        <Item>
                            <Titulo4>Isolação IP</Titulo4>
                            <span>{motor.isolacao_ip}</span>
                        </Item>
                        <Item>
                            <Titulo4>Frequência</Titulo4>
                            <span>{motor.frequencia}</span>
                        </Item>
                    </ItemContainer>
                )) : ''

            }
        </ListaMateriaisContainer>
    );
}

export default ListaComponentesMotor;