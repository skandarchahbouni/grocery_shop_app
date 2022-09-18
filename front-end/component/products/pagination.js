import axios from "axios"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Pagination() {
    const router = useRouter()
    const { asPath } = router
    const { query } = router
    const [nbResults, setnbResults] = useState(0)
    const page = Number(query.page) || 1
    const [currentPage, setCurrentPage] = useState()

    useEffect(() => {
        setCurrentPage(page)
    }, [page])
    
    useEffect(() => {
        const fetchNbResults = async () => {
            // very iportant : make sure that it's the same as the backend
            const limit = query.limit || 1
            try {
                const { data } = await axios.get('/products/count', {
                    params: {
                        ...query
                    }
                })
                setnbResults(Math.ceil(data.nb_results / limit))
            } catch (error) {

            }
        }
        fetchNbResults()
    }, [asPath])

    const navigateToPage = (n) => {
        router.push({
            query : {
                ...query,
                page : n
            }
        })
        return setCurrentPage(n)
    }

    const navigateToPreviousPage = () => {
        if (currentPage > 1){
            router.push({
                query : {
                    ...query,
                    page: currentPage - 1
                }
            })
            return setCurrentPage(prv => prv - 1)
        }
    }

    const navigateToNextPage = () => {
        if (currentPage < nbResults){
            router.push({
                query : {
                    ...query,
                    page: currentPage + 1
                }
            })
            return setCurrentPage(prv => prv + 1)
        }
    }

    if (nbResults == 0) return null
    // else
    return (
        <div className="row mt-8">
            <div className="col">
                <nav>
                    <ul className="pagination">
                        <li style={{"cursor" : "pointer"}} className="page-item disabled" onClick={navigateToPreviousPage}>
                            <span className="page-link  mx-1 rounded-3">
                                <i className="feather-icon icon-chevron-left"></i>
                            </span>
                        </li>

                        {[...Array(nbResults).keys()].map(n =>
                            <li onClick={()=> navigateToPage(n+1)} style={{ "cursor": "pointer" }} className={currentPage === n+1 ? "page-item active" : "page-item"} key={n + 1}>
                                <span className="page-link  mx-1 rounded-3">{n + 1}</span>
                            </li>
                        )}

                        <li style={{"cursor" : "pointer"}} disabled={true} className="page-item" onClick={navigateToNextPage}>
                            <span className="page-link mx-1 rounded-3 text-body">
                                <i className="feather-icon icon-chevron-right"></i>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
