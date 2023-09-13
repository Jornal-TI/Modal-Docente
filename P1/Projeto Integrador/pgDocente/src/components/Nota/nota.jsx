import React from "react";
import './nota.css'

const NotaInfos = () => {

    return (
        <div className="nota">

            <table>
                <thead>
                    <tr>
                        <th>Alunos</th>
                        <th>Descrição</th>
                        <th>Nota</th>
                        <th>Total Frequêcia</th>
                        <th>Total Faltas</th>
                        <th>Resultado</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ana</td>
                        <td>UC1</td>
                        <td>100</td>
                        <td>80,00%</td>
                        <td>20,00%</td>
                        <td>Aprovado</td>
                    </tr>
                    <tr>
                        <td>Ana</td>
                        <td>UC2</td>
                        <td>100</td>
                        <td>80,00%</td>
                        <td>20,00%</td>
                        <td>Aprovado</td>
                    </tr>
                    <tr>
                        <td>Ana</td>
                        <td>UC3</td>
                        <td>100</td>
                        <td>80,00%</td>
                        <td>20,00%</td>
                        <td>Aprovado</td>
                    </tr>
                    <tr>
                        <td>Ana</td>
                        <td>UC4</td>
                        <td>100</td>
                        <td>80,00%</td>
                        <td>20,00%</td>
                        <td>Aprovado</td>
                    </tr>
                </tbody>
            </table>



        </div >
    )

}


export default NotaInfos;