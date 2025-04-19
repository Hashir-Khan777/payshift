"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import CustomButton from "./Button";
import CustomerDetailsCard from "./CustomerDetailsCard";
import BankDetailsCard from "./BankDetailsCard";
import PaymentDetailsCard from "./PaymentDetailsCard";
import AutopayCard from "./AutopayCard";
import CustomerConfirmationDetailsCard from "./CustomerConfirmationDetailsCard";


const PaymentHomeTab = () => {
  const detailsTabIndex = 0
  const paymentTabIndex = 1
  const confirmationTabIndex = 2
  const [paymentTab, setPaymentTab] = useState(detailsTabIndex);

  return (
    <div className="px-4 py-6 md:px-10">
      {/* Progress Bar */}
      <ProgressBar
        paymentTab={paymentTab}
      />
      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          paymentTab === detailsTabIndex && (
            <>
              < CustomerDetailsCard />
              < BankDetailsCard />
            </>
          )
        }
        {
          paymentTab === paymentTabIndex && (
            <>
              < PaymentDetailsCard />
              < AutopayCard />
            </>
          )
        }

      </div>
      {
        paymentTab === confirmationTabIndex && (
          <div className="w-[90%] lg:w-[70%] mx-auto">
            <CustomerConfirmationDetailsCard />
          </div>
        )
      }

      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
        {paymentTab === detailsTabIndex && (
          <>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
            >
              {"Cancel"}
            </CustomButton>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
              onClick={() => setPaymentTab(paymentTabIndex)}
            >
              {"Next"}
            </CustomButton>
          </>
        )}

        {paymentTab === paymentTabIndex && (
          <>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
            >
              {"Cancel"}
            </CustomButton>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
              onClick={() => setPaymentTab(detailsTabIndex)}
            >
              {"Previous"}
            </CustomButton>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
              onClick={() => setPaymentTab(confirmationTabIndex)}
            >
              {"Next"}
            </CustomButton>
          </>
        )}

        {paymentTab === confirmationTabIndex && (
          <>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
            >
              {"Cancel"}
            </CustomButton>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
              onClick={() => setPaymentTab(paymentTabIndex)}
            >
              {"Previous"}
            </CustomButton>
            <CustomButton
              textClass="text-base md:text-xl"
              iconClass="w-6 h-6 md:w-[32px] md:h-[32px]"
            >
              {"Confirm"}
            </CustomButton>
          </>
        )}
      </div>


    </div>
  );
};

export default PaymentHomeTab;
