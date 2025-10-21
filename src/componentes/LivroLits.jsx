import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import api from "../services/api"

export default function LivroList() {
    //Armazenar a lista de livros
    const [livros, setLivros] = useState([])

    // Será executado quando a página for carregada 
    useEffect(() => {
        carregarLivros()
    }, [])

    // Função para buscar a lista de livros do backend
    const carregarLivros = async () => {
        const resposta = await api.get("/livros")
        setLivros(resposta.data)
    }



    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Livros no catálogo</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Páginas</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <tr key={livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.paginas}</td>
                                <td>{livro.categoria}</td>
                                <td>{livro.descricao}</td>
                                <td>
                                    <div className="btn-group gap-2 ">
                                        <Link className="btn btn-sm btn-primary" to={`/editar/${livro.id}`}>
                                            Editar
                                        </Link>
                                        <Link className="btn btn-sm btn-danger" to={`/editar/${livro.id}`}>
                                            Excluir
                                        </Link>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>

    )
}