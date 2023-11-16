import React from 'react';

const divStyle = {
    backgroundColor: "#FF8C00",
    width: "80px",
    height: "10px",
    transform: "rotate(-45deg)",
    transformOrigin: "top left",
};

const works = [
    {
        image:
            "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // type: "Efficiency",
        note: "Sign up and set up your profile on LindaSalesPro.",
    },
    {
        image:
            "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // type: "Organization",
        note: "Use LindaSalesPro daily to manage your contacts, record sales, and follow up with prospects.",
    },
    {
        image:
            "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        // type: "Communication",
        note: "Regularly upload your available properties for sale on your dashboard.",
    },
    {
        image:
            "https://images.pexels.com/photos/6111/smartphone-friends-internet-connection.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // type: "Goal Achievement",
        note: "When we receive requests from individuals looking to buy properties, LindaSalesPro quickly filters active real estate agents with similar properties.",
    },
    {
        image:
            "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // type: "Lead Generation",
        note: "The buyer's contact and request are sent to the top 3 matching agents' inboxes.",
    },
    {
        image:
            "https://images.pexels.com/photos/17459762/pexels-photo-17459762/free-photo-of-studio-shoot-of-a-brunette-using-phone-against-gray-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // type: "Lead Profiling",
        note: "Matched agents can then contact the prospects and use LindaSalesPro to manage the follow-up process.",
    },
    // {
    //     image:
    //         "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     type: "Social Media Integration",
    //     note: "Connect your social media accounts to monitor user engagements and respond directly from the app. Stay in control of your online presence.",
    // },
    // {
    //     image:
    //         " https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     type: "Realtor Collaboration",
    //     note: "Access real-time updates from partner real estate companies. Stay ahead of the competition and never miss a listing.",
    // },
];

export default function Features() {
    return (
        <div className='space-y-[150px] w-full'>
            {works.map((work, index) => (
                <div key={index} className={`w-full md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} space-y-12 md:justify-evenly items-center`}>
                    <div className='relative w-full md:w-auto md:min-w-[400px] h-[300px]'>
                        <img
                            src={work.image}
                            alt={work.note}
                            loading='lazy'
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                borderTop: "5px solid yellow",
                                borderBottom: "5px solid yellow",
                                borderRight: "none",
                                borderLeft: "none",
                                width: "30px",
                                height: "30px",
                                backgroundColor: "#FF8C00",
                            }}
                        ></div>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-3xl text-gray-600 dark:text-slate-200 font-medium flex items-end'>
                            {/* {work.type} */}
                            <div
                                style={{ backgroundColor: "#FF8C00", width: 20, height: 20 }}
                            />
                        </h3>
                        <h4 className='text-md text-gray-600 font-regular dark:text-slate-200 md:max-w-xl'>
                            {work.note}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    );
}
