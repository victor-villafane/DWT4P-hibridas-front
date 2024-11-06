import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const LibroDetalle = () => {

    const params = useParams()
    const [libro, setLibro] = useState(false)

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes/"+params.id)
            .then( response => response.json() )
            .then( data => setLibro(data) )
    }, [])

    return (
        libro && <div className="container mt-5">
            <h1 className="mb-4">Harry Potter Books</h1>
            <div className="row">
                <div className="col-md-4 mb-4" key={libro.id}>
                    <div className="card h-100">
                        <img
                            src={libro.volumeInfo.imageLinks?.thumbnail}
                            className="card-img-top"
                            alt={libro.volumeInfo.title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{libro.volumeInfo.title}</h5>
                            <p className="card-text">Author: {libro.volumeInfo.authors?.[0]}</p>
                            <Link to="/libros" className="btn btn-primary">
                                Atras
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibroDetalle