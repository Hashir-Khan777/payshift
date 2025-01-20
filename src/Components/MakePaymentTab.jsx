import React from 'react';
import MPSliderComponent from './MPSliderComponent';

const BillOverViewCard = [
    {
        title: "Maintenance Fee",
        propertyId: "#1234",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
    },
    {
        title: "Maintenance Fee",
        propertyId: "#1234",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: true,
        alert: "Due Jan 2024",
        alertType: "danger",
    },
    {
        title: "Maintenance Fee",
        propertyId: "#1234",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
    },
    {
        title: "Maintenance Fee",
        propertyId: "#1234",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
    },
    {
        title: "Maintenance Fee",
        propertyId: "#1234",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
    },
    {
        title: "Maintenance Fee",
        propertyId: "#1234",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, labore placeat! Unde veritatis rerum non, dolor consequuntur sit ipsam sunt.",
        btnText: "Pay",
        amount: 150,
        payment: true,
        active: false,
        alert: "Due Jan 2024",
        alertType: "danger",
    },

]

const MakePaymentTab = () => {
  return (
    <>
      <MPSliderComponent headingWhite="Your"
                headingBlack="Bill Overview"
                cards={BillOverViewCard}/>
    </>
  )
}

export default MakePaymentTab
