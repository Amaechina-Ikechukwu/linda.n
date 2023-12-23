
export default function BusinessLayout({
    children, params
}: {
    children: React.ReactNode, params: { business: string }
}) {
    return (

        <div>{children}
        </div>
    )
}
