import BusinessFooter from "@/components/Business Components/BusinessFooter"


export default function BusinessLayout({
    children,
    footer
}: {
    children: React.ReactNode
    footer: React.ReactNode
}) {
    return (

        <div>{children}
        </div>
    )
}
