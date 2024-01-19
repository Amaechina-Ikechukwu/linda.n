'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='w-full h-screen bg-orange-500 flex flex-col  items-center justify-center'>
            <h2>Something went wrong!</h2>
            <h4>Could not find this property</h4>

        </div>
    )
}