import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';



export default function Pagination({ items, itemsCount, pathname, setShownCourses }) {

    const [pageCount, setPageCount] = useState(null)
    const { page } = useParams()
    useEffect(() => {
        let endIndex = itemsCount * page
        let startIndex = endIndex - itemsCount
        let paginatedItems = items.slice(startIndex, endIndex)
        setShownCourses(paginatedItems)
        let pageNumber = Math.ceil(items.length / itemsCount)
        setPageCount(pageNumber)
    }, [page, items])

    return (
        <div>

            <nav className='w-32'>
                <ul className="flex rtl">
                    {
                        Array(pageCount).fill(0).map((item, index) => (
                            <li key={index}>
                                {
                                    index + 1 === Number(page) ? (
                                        <Link
                                            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                                            to={`${pathname}/${index+1}`}
                                        >
                                            {index + 1}
                                        </Link>
                                    ) : (
                                            <Link
                                                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gray-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                                                to={`${pathname}/${index+1}`}
                                            >
                                                {index + 1}
                                            </Link>
                                        )
                                }

                            </li>
                        ))
                    }

                </ul>
            </nav>

        </div>
    )
}
