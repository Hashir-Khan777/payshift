import React from 'react';
import SliderComponent from './SliderComponent';

const Properties = () => {

    const myRequestCard = [
        {
            title: "Request No: 1234",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quia.",
            btnText: "Check",
            active: false,
        },
        {
            title: "Request Closed",
            info: "Your request is closed for Owner and Tenant Registration is closed.",
            btnText: "Check",
            active: true,
        }
        ,
        {
            title: "Request Closed",
            info: "Your request is closed for Owner and Tenant Registration is closed.",
            btnText: "Check",
            active: false,
        }
        ,
        {
            title: "Request Closed",
            info: "Your request is closed for Owner and Tenant Registration is closed.",
            btnText: "Check",
            active: false,
        }
        ,
        {
            title: "Request Closed",
            info: "Your request is closed for Owner and Tenant Registration is closed.",
            btnText: "Check",
            active: false,
        }
        ,
        {
            title: "Request Closed",
            info: "Your request is closed for Owner and Tenant Registration is closed.",
            btnText: "Check",
            active: false,
        }
        ,
        {
            title: "Request Closed",
            info: "Your request is closed for Owner and Tenant Registration is closed.",
            btnText: "Check",
            active: false,
        }
       
    ]

    const myReportCard = [
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: true,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Report Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
    ]

    const myDocumentCard = [
        {
            title:"Doc Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Doc Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: true,
        },
        {
            title:"Doc Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Doc Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Doc Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
        {
            title:"Doc Name",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim iure placeat vero repudiandae maxime",
            btnText: "Check",
            active: false,
        },
    ]


    return (
        <>
            <SliderComponent
                headingWhite="My"
                headingBlack="Requests"
                cards={myRequestCard}
            />
            <SliderComponent
                headingWhite="My"
                headingBlack="Report"
                cards={myReportCard}
            />
            <SliderComponent
                headingWhite="My"
                headingBlack="Document"
                cards={myDocumentCard}
            />
        </>
    )
}



export default Properties
