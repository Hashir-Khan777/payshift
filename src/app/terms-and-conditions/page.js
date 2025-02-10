import CustomButton from "@/Components/Button";
import React from "react";

const page = () => {
  return (
    <div
      className="w-[100%] min-h-[100vh] py-10 flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(0deg, #aed2ff , #ffffff)",
      }}
    >
      <h2 className="font-lexend md:text-[30px]/[37.5px] text-[20px]/[25px] font-[600]">
        Terms & Conditions
      </h2>

      <div className="w-[90%] py-10 flex flex-col gap-4">
        <p className="font-lexend font-[400] md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%]">
          Welcome to www.lorem-ipsum.info. This site is provided as a service to
          our visitors and may be used for informational purposes only. Because
          the Terms and Conditions contain legal obligations, please read them
          carefully.
        </p>

        <h3 className="md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%] font-[600] font-lexend">
          1. YOUR AGREEMENT
        </h3>
        <p className="font-lexend font-[400] md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%]">
          By using this Site, you agree to be bound by, and to comply with,
          these Terms and Conditions. If you do not agree to these Terms and
          Conditions, please do not use this site.
        </p>

        <p className="font-lexend font-[400] md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%]">
          {" "}
          PLEASE NOTE: We reserve the right, at our sole discretion, to change,
          modify or otherwise alter these Terms and Conditions at any time.
          Unless otherwise indicated, amendments will become effective
          immediately. Please review these Terms and Conditions periodically.
          Your continued use of the Site following the posting of changes and/or
          modifications will constitute your acceptance of the revised Terms and
          Conditions and the reasonableness of these standards for notice of
          changes. For your information, this page was last updated as of the
          date at the top of these terms and conditions.
        </p>

        <h3 className="md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%] font-[600] font-lexend">
          2. PRIVACY
        </h3>
        <p className="font-lexend font-[400] md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%]">
          Please review our Privacy Policy, which also governs your visit to
          this Site, to understand our practices.
        </p>

        <h3 className="md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%] font-[600] font-lexend">
          3. LINKED SITES
        </h3>
        <p className="font-lexend font-[400] md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%]">
          This Site may contain links to other independent third-party Web sites
          ("Linked Sites”). These Linked Sites are provided solely as a
          convenience to our visitors. Such Linked Sites are not under our
          control, and we are not responsible for and does not endorse the
          content of such Linked Sites, including any information or materials
          contained on such Linked Sites. You will need to make your own
          independent judgment regarding your interaction with these Linked
          Sites.
        </p>

        <h3 className="md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%] font-[600] font-lexend">
          4. FORWARD LOOKING STATEMENTS
        </h3>
        <p className="font-lexend font-[400] md:text-[14px]/[17.5px] [12px]/[15px] tracking-[4%]">
          All materials reproduced on this site speak as of the original date of
          publication or filing. The fact that a document is available on this
          site does not mean that the information contained in such document has
          not been modified or superseded by events or by a subsequent document
          or filing. We have no duty or policy to update any information or
          statements contained on this site and, therefore, such information or
          statements should not be relied upon as being current as of the date
          you access this site.
        </p>
      </div>

      <CustomButton>I Accept</CustomButton>
    </div>
  );
};

export default page;
