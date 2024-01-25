import './ProdutosAlta.css'
import produtoTenis from '../../assets/colecoes/tenis_colecao.png'
import { useEffect } from 'react'
import { useState } from 'react'

export const ProdutosAlta = () => {
    const [produtos, setProdutos] = useState([])
    const [fakeProdutos, setFakeProdutos] = useState([])
    const [loading, setLoading] = useState(true)

    const alta = [{
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        off: 30,
        image: produtoTenis,
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        off: 30,
        image: produtoTenis,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        image: produtoTenis,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        image: produtoTenis,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    },
    {
        categoria: 'Tênis',
        produto: 'K-Swiss V8 - Masculino',
        precoAntes: 200,
        precoDepois: 100
    }]

    const fetchProdutos = async () => {
        const response = await fetch('https://dripstore-api-sequlelize.onrender.com/api/produto');
        const data = await response.json();

        if (data) {

        }
        setLoading(false)
        setProdutos(produtos)
        console.log(produtos);
        return produtos;
    }

    const setFakeData = () => {
        const array = Array.from({ length: 12 }, (value, index) => {
            return (<div class="card" aria-hidden="true">
                <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
            </div>)
        });
        setProdutos(array)

    }

    useEffect(() => {
        setFakeData()
        fetchProdutos()
    }, [])
    return (
        <div>
            <div className="container pt-2 pb-3">
                <div className='text-start'>Produtos em Alta</div>
                <a href="/all">Ver todos -&gt;</a>
            </div>

            <div className="container text-center">
                <div className="row g-4">
                    {alta.map((c, index) => {
                        return (
                            <div key={index} className="col mb-4" >
                                <div className="card-colecao col " style={{ backgroundImage: `url(${produtoTenis})` }}>
                                    {c.off ? <div className="off">{`${c.off}% OFF`}</div> : null}

                                </div>
                                <div className='text-start'>
                                    <div className='categoria'>{c.categoria}</div>
                                    <div className='produto'>{c.produto}</div>
                                    <div>
                                        <span className='preco-antes'>{`R$ ${c.precoAntes}`}</span>
                                        <span className='preco-depois'>{`R$ ${c.precoDepois}`}</span>
                                    </div>
                                </div>

                                {loading ? fakeProdutos : produtos }
                                {/* <div>
                                    <div className='card-container'>
                                        <div >
                                            <div className='container-off'>
                                                <div className="off">30% OFF</div>
                                            </div>
                                            <img src={produtoTenis} alt="" />
                                        </div>
                                    </div>
                                    <div className='text-start'>
                                        <div className='categoria'>{c.categoria}</div>
                                        <div className='produto'>{c.produto}</div>
                                        <div>
                                            <span className='preco-antes'>{`R$ ${c.precoAntes}`}</span>
                                            <span className='preco-depois'>{`R$ ${c.precoDepois}`}</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
