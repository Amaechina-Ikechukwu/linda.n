
const testinomials = [
    {
        tesimony: `"LindaSalesPro has been a game-changer for my real estate business. The mobile app is user-friendly and has boosted my efficiency."`,
        author: "Gift",
        service: "Sales Manager.",
    },
    {
        tesimony: `"I love how LindaSalesPro keeps all my property information and client contacts organized and accessible. Highly recommended!"`,
        author: "Grace",
        service: "Digital Marketer.",
    },
    {
        tesimony: `"The communication features are fantastic. I can reach out to clients right from the app, making my job easier to keep track of my follow-ups."`,
        author: "Uche",
        service: "Marketing Director.",
    },
];

export default function Testimonials() {


    return (
        <div className="px-2">
            <div className="py-5 space-y-[20px]">
                <div className="text-2xl font-bold text-gray-600 dark:text-slate-200 text-center">
                    Testimonials From Satisfied Clients
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-center ">
                    {testinomials.map((testinomial, index) => (
                        <div key={index} className="w-full">
                            <div key={index} className="p-5 rounded-lg bg-gray-100 dark:bg-neutral-950 h-[140px] md:h-[150px]">
                                <div className="space-y-2">
                                    <p className=" text-gray-600 dark:text-slate-200">{testinomial.tesimony}</p>
                                    <div className="flex justify-end">
                                        <p className="font-bold text-gray-600 dark:text-slate-200">{testinomial.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


