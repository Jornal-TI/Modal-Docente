import '../../App.css'
import './Dados-Infos.css'
import ModalDados from '../Modal-Dados/modal-dados'
import React, { useState } from 'react'
import ModalAtividades from '../Modal-Atividades/modal-atividades'
import NotaInfos from '../Nota/nota'
import Lapis from '../../icons/lapis.svg' 
import Licao from '../../icons/licao.svg'
// import Logo from '../../icons/Logo.png'
import Relogio from  '../../icons/relogio.svg'
import Usuario from '../../icons/usu.svg'
import CronogramaInfos from '../Horarios/Cronograma-Infos'


const DadosInfos = () => {
    const [showModal, setShowModal] = useState(false);
    const [ showAtividades, setShowAtividades] = useState (false);
    const [ showCronograma, setShowCronograma] = useState (false);
    const [ showTeste, setShowTeste ] = useState(false);
    const [ showNota, setShowNota] = useState (false);

    const handleModalClick = () => {
        setShowModal(!showModal); 

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showCronograma? setShowCronograma(!showCronograma): setShowCronograma(showCronograma);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNota? setShowNota(!showNota):setShowNota(showNota);
    };

    const handleAtividadesClick = () => {
        setShowAtividades(!showAtividades);

        showModal? setShowModal(!showModal):setShowModal(showModal);
        showCronograma? setShowCronograma(!showCronograma): setShowCronograma(showCronograma);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNota? setShowNota(!showNota):setShowNota(showNota);
    };

    const handleCronogramaClick = () => {
        setShowCronograma(!showCronograma);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNota? setShowNota(!showNota):setShowNota(showNota);


        
    };
    const handleNotaClick = () => {
        setShowNota(!showNota);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades);
        showCronograma? setShowCronograma(!showCronograma): setShowCronograma(showCronograma); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);

        
    };


    return (

        <div className='navbar-alinhamento'>

            <nav clasname="navbar-menu">

                <div className='background-app'>
                    <button className='dados-button' onClick={handleModalClick}><img src={Usuario}></img>
                        Meus Dados
                    </button>
                 
                    <button className='atividades-button' onClick={handleAtividadesClick}><img src={Licao} ></img>
                        Atividade
                    </button>
                
                    <button className='horarios-button' onClick={handleCronogramaClick}><img src={Relogio} ></img>
                        Cronograma
                    </button>                         
                     
                    <button className='horarios-button' onClick={handleNotaClick}> <img src={Lapis} ></img>
                        Nota
                    </button>                         
                     
                </div>

            </nav>

            {showModal && (

                <div className='infos'>
                    <ModalDados />
                </div>
            )}

            {showAtividades && (

                <div className='infos'>
                    <ModalAtividades />
                </div>
            )}

            {showCronograma && (

                <div className='infos'>
                    <CronogramaInfos />
                </div>
            )}
            {showNota && (

                <div className='infos'>
                    <NotaInfos />
                </div>
            )}

           
        </div>
    )

}
export default DadosInfos;