import '../../App.css'
import './Dados-Infos.css'
import ModalDados from '../Modal-Dados/modal-dados'
import React, { useState } from 'react'
import ModalAtividades from '../Modal-Atividades/modal-atividades'
import NotaInfos from '../Nota/nota'
import ConogramaInfos from '../Horarios/Conograma-Infos'

const DadosInfos = () => {
    const [showModal, setShowModal] = useState(false);
    const [ showAtividades, setShowAtividades] = useState (false);
    const [ showConograma, setShowConograma] = useState (false);
    const [ showTeste, setShowTeste ] = useState(false);
    const [ showNota, setShowNota] = useState (false);

    const handleModalClick = () => {
        setShowModal(!showModal); 

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showConograma? setShowConograma(!showConograma): setShowConograma(showConograma);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNota? setShowNota(!showNota):setShowNota(showNota);
    };

    const handleAtividadesClick = () => {
        setShowAtividades(!showAtividades);

        showModal? setShowModal(!showModal):setShowModal(showModal);
        showConograma? setShowConograma(!showConograma): setShowConograma(showConograma);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNota? setShowNota(!showNota):setShowNota(showNota);
    };

    const handleConogramaClick = () => {
        setShowConograma(!showConograma);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);
        showNota? setShowNota(!showNota):setShowNota(showNota);


        
    };
    const handleNotaClick = () => {
        setShowNota(!showNota);

        showAtividades? setShowAtividades(!showAtividades):setShowAtividades(showAtividades);
        showConograma? setShowConograma(!showConograma): setShowConograma(showConograma); 
        showModal? setShowModal(!showModal):setShowModal(showModal);
        showTeste? setShowTeste(!showTeste):setShowTeste(showTeste);

        
    };


    return (

        <div className='navbar-alinhamento'>

            <nav clasname="navbar-main">

                <div className='background-app'>
                    <button className='dados-button' onClick={handleModalClick}>
                        Meus Dados
                    </button>
                 
                    <button className='atividades-button' onClick={handleAtividadesClick}>
                        Atividade
                    </button>
                
                    <button className='horarios-button' onClick={handleConogramaClick}>
                        Conograma
                    </button>                         
                     
                    <button className='horarios-button' onClick={handleNotaClick}>
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

            {showConograma && (

                <div className='infos'>
                    <ConogramaInfos />
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