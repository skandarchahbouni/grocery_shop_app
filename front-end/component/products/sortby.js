import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function SortBy() {
    const router = useRouter()
    const { query } = router
    const { asPath } = router
    const handleLimitChanges = (e) => {
        const value = e.target.value
        return router.push({
            query: {
                ...query,
                limit: value,
                page: 1
            }
        })
    }

    const handleSortChanges = (e) => {
        const value = e.target.value
        return router.push({
            query: {
                ...query,
                sort: value
            }
        })
    }

    const [nbProdsucts, setnbProdsucts] = useState()
    useEffect(() => {
        const fetchNbResults = async () => {
            try {
                const { data } = await axios.get("/products/count", {
                    params: {
                        ...query
                    }
                })
                setnbProdsucts(data.nb_results)

            } catch (error) {

            }
        }
        fetchNbResults()
    }, [asPath])

    return (
        <div className="d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
                {nbProdsucts > 0 ?
                    <p className="mb-0"> <span className="text-dark">{nbProdsucts} </span> {nbProdsucts === 1 ? "Product found": "Products found"} </p>
                    : <p className="mb-0">No product found</p>
                }
            </div>

            <div className="d-md-flex justify-content-between align-items-center">


                <div className="d-flex mt-2 mt-lg-0">
                    <div className="me-2 flex-grow-1">
                        <select className="form-select" aria-label="Default select example" defaultValue={query.limit ?? "Show : 1"} onChange={handleLimitChanges}>
                            <option disabled={true} value={"Show : 1"}>Show : 1</option>
                            <option value="1">1</option>
                            <option value="3">3 </option>
                            <option value="10">10</option>
                        </select></div>
                    <div>
                        <select className="form-select" aria-label="Default select example" defaultValue={query.sort ?? "Sort by: Featured"} onChange={handleSortChanges}>
                            <option value="featured">Sort by: Featured</option>
                            <option value="price">Price: Low to High</option>
                            <option value="-price"> Price: High to Low</option>
                            <option value="date"> Release Date</option>
                            <option value="rating"> Avg. Rating</option>
                        </select></div>
                </div>
            </div>
        </div>
    )
}
