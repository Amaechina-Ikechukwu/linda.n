const testimonials = [
  {
    tesimony: `"Since I started using LindaSalesPro, my sales follow-up has really improved. The app makes it possible for me to organize all my prospects and follow up on them effectively."`,
    author: "Gift",
    service: "Sales Manager.",
  },
  {
    tesimony: `"What I love the most about the LindaSalesPro App is the high-quality leads it sends to me from time to time without me having to spend huge on marketing and online ads"`,
    author: "Amaka",
    service: "Digital Marketer.",
  },
  {
    tesimony: `"I use the app to set my to-dos and sales targets for the month. LindaSalesPro has a way of keeping me motivated to achieve my daily tasks and sales goals."`,
    author: "Ademola",
    service: "Marketing Director.",
  },
  {
    tesimony: `"LindaSalesPro's co-agent feature has transformed teamwork. Now, we collaborate seamlessly, share leads, and close deals faster. It's revolutionized our approach!"`,
    author: "Lookman",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-center justify-self-center self-center place-self-center place-items-center place-content-center self-center content-center justify-self-center justify-center justify-items-center flex-wrap flex">
          {testimonials.map((testinomial, index) => (
            <div key={index} className="w-full items-center justify-center ">
              <div
                key={index}
                className="p-5 rounded-lg bg-gray-100 dark:bg-neutral-950 h-[200px] md:h-[150px] mx-auto "
              >
                <div className="space-y-2">
                  <p className=" text-gray-600 dark:text-slate-200">
                    {testinomial.tesimony}
                  </p>
                  <div className="flex justify-end">
                    <p className="font-bold text-gray-600 dark:text-slate-200">
                      {testinomial.author}
                    </p>
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
