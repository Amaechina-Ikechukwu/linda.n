export async function generateStaticParams() {
    const posts = await fetch(`https://dev-api.priceplan.online/api/web/business-urls`).then((res) => res.json())

    return posts.data.map((post: any) => ({ business: post }))
}
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
