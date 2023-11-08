import React from 'react'
import TabOutlinedIcon from "@mui/icons-material/TabOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Services() {
    const iconStyle = {
        fontSize: 50,
        color: "yellow",
    };

    const icons = [
        <AccessTimeIcon sx={iconStyle} />,
        <SnippetFolderIcon sx={iconStyle} />,
        <MarkChatUnreadIcon sx={iconStyle} />,
        <TrendingUpOutlinedIcon sx={iconStyle} />,
        <ContactSupportIcon sx={iconStyle} />,
        <MarkEmailUnreadOutlinedIcon sx={iconStyle} />,
        <TabOutlinedIcon sx={iconStyle} />,
        <FilterDramaOutlinedIcon sx={iconStyle} />,
    ];

    const serviceObject = [
        {
            title: "Efficiency",
            more: "Simplify property management and save time.",
        },
        {
            title: "Organization",
            more: "Keep track of clients, notes, and appointments.",
        },
        {
            title: "Communication",
            more: "Stay connected with clients effortlessly.",
        },
        {
            title: "Goal-Oriented",
            more: " Set, monitor, and achieve your sales targets",
        },
        {
            title: "Support",
            more: "Access our dedicated customer support team",
        },
    ];

    return (
        <div >
            <div className="w-full rounded-lg px-5 py-[100px] md:px-8 bg-gray-100 dark:bg-neutral-950 rounded-lg space-y-[50px] text-black flex flex-col items-center">
                <div className="text-xl font-bold text-center sm:text-left text-gray-600  dark:text-slate-200 ">
                    Why Choose LindaSalesPro?
                </div>
                <div className="text-lg font-light text-center sm:text-center text-gray-600 dark:text-slate-200">
                    Discover the advantages of using LindaSalesPro:
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-center ">
                        {serviceObject.map((list, index) => {
                            return (
                                <div key={index}>

                                    <div className="p-10 rounded-lg  flex flex-col space-y-3 bg-white dark:bg-neutral-900">
                                        {icons[index]}
                                        <div className="text-gray-600 text-lg dark:text-slate-200 font-medium">
                                            {list.title}
                                        </div>
                                        <div className="text-gray-600 dark:text-slate-200 font-light">
                                            {list.more}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-full flex justify-center '>
                    <button className=" w-4/5 px-2  rounded-lg  text-center capitalize bg-neutral-950 dark:bg-slate-100 hover:from-linda transition-transform duration-500 hover:scale-105  py-5 dark:text-gray-600 text-slate-200"> <a

                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=online.priceplan"
                    >
                        Try Linda for free
                    </a></button>
                </div>


            </div>
        </div>
    );
};

