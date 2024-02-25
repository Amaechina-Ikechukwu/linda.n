import { BusinessData } from "@/constants/Business/BusinessData"
import ContactBusiness from "./ContactBusiness"
import { Offers } from "@/constants/Business/Offers"
import BusinessFooter from "./BusinessFooter"
async function getData(business: string): Promise<Offers> {
    const res = await fetch(`${process.env.DEV_LINK}/${business}/offers`, { next: { revalidate: 3600 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function BusinessHome({ business }: { business: BusinessData }) {
    const offers = await getData(business.data.business_url)

    return (
        <div>
            <div className="flex flex-col sm:justify-center sm:items-center space-y-[30px] w-full ">
                <div className='space-y-[30px] w-full flex flex-col items-center justify-center'>
                    <h1 className='text-gray-600 dark:text-slate-200 text-3xl font-bold sm:text-center'>{business.data.business_name}</h1>
                    <h2 className='text-gray-600 dark:text-slate-200 text-md font-regular md:max-w-2xl sm:text-center'>{business.data.business_description}</h2>
                </div>
                <div className=" w-full max-w-xl flex flex-col items-center justify-center ">
                    <ContactBusiness offers={offers} business={business.data.business_url} />
                </div>


            </div>
            <div className="mt-[100px] bg-gray-100 dark:bg-neutral-900 absolute  w-screen right-0 bottom-[20] md:right-100 p-20 px-10 md:px-20">
                <BusinessFooter business={business.data} />
            </div>
        </div>

    )
}
