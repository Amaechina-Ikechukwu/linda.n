import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "LindaSalesPro Privacy Policy",
  description:
    "Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.",
  openGraph: {
    title: "LindaSalesPro Privacy Policy",
    description:
      "Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73",
    ],
  },
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73",
  },
};
export default function Page() {
  const privacyPolicy = [
    {
      text: "At LindaSalesPro, we are committed to safeguarding your privacy and ensuring that your personal information remains secure and protected. This Privacy Policy is designed to help you understand how we collect, use, and protect your information. By using our services, you agree to the terms outlined in this policy.",
      name: "Your Privacy, Our Priority",
      id: 1,
    },
    {
      sub: [
        {
          title: "Personal Information",
          info: [
            "When you sign up for LindaSalesPro, we collect personal details such as your name, gender, email address, date of birth, and contact information.",
            "Business users are required to provide business-related information, including business name, address, category, and logo.",
            "Technical information, such as screen resolution, device type, network type, time zone setting, and IP address, may also be collected.",
          ],
        },
        {
          title: "Location Information",
          info: [
            "With your permission, we may collect location information (e.g., GPS) to enhance your experience. Your location data is kept private and used solely for your benefit.",
          ],
        },
        {
          title: "Non-Signed-In Users",
          info: [
            "If you are not signed in, we may collect information such as cookies, IP addresses, device types, network types, and location.",
            "Technical information, such as screen resolution, device type, network type, time zone setting, and IP address, may also be collected.",
          ],
        },
      ],
      name: " Information We Collect",
      id: 2,
    },
    {
      sub: [
        {
          title: "Personalization",
          info: [
            "We use your information to provide you with a personalized experience on our platform.",
          ],
        },
        {
          title: "Account Management",
          info: [
            "Your email, phone number, and username are used to create and secure your unique account.",
          ],
        },
        {
          title: "Communication",
          info: [
            "We use your email address to keep you informed about updates, and policy changes, or to assist in password reset.",
          ],
        },
        {
          title: "Product Development",
          info: [
            "Your data helps us identify areas where we can improve and create new products and services.",
          ],
        },
        {
          title: "Notifications",
          info: [
            "We notify you about important updates, promotions, or new features based on your preferences.",
          ],
        },
        {
          title: "Support",
          info: [
            "Your information may be used to provide customer support when needed.",
          ],
        },
      ],
      name: " How We Use Your Information",
      id: 31,
    },
    {
      text: "You have control over the information you share with us. You can update or change your information at any time to customize your experience. If you prefer not to have a personalized experience, you can choose not to create an account with us.",
      name: "User Control",
      id: 3,
    },
    {
      text: "We expect users to share only content that they have the legal right to share. We do not support prohibited content or activities. We reserve the right to remove or suspend accounts that violate our community policies.",
      name: "Content Sharing",
      id: 4,
    },
    {
      text: "We never share your confidential information with third parties without your consent, except in cases where it is legally required by authorized government authorities.",
      name: "Confidentiality",
      id: 5,
    },
    {
      text: "Business users receive a custom LindaSalesPro Website with a unique domain. For non-business users, we do not control how businesses use your data on their LindaSalesPro websites.",
      name: "LindaSalesPro Website",
      id: 6,
    },
    {
      text: "We do not collect or store payment card details. Our payment processing partners, who are ISO-certified, may collect payment information for the purpose of digital wallet creation and payment processing.",
      name: "Payments and Transaction",
      id: 7,
    },
    {
      text: "Our services are intended for users aged thirteen (13) and above, subject to local regulatory requirements. Users below eighteen years may require parental guidance.",
      name: "Age Restrictions",
      id: 8,
    },
    {
      text: "At LindaSalesPro, we respect your right to control your personal information. If you ever decide that you want your data removed from our system, you have the option to request its deletion.\nHere's how you can request the deletion of your data:",
      sub: [
        {
          title: "Contact Us",
          info: [
            `Send an email to feedback@chooyagroup.com with the subject line "Data Deletion Request."`,
          ],
        },
        {
          title: "Provide Details",
          info: [
            "In your email, please include your name and the email address associated with your LindaSalesPro account. This will help us locate your data promptly.",
          ],
        },
        {
          title: "Verification",
          info: [
            "For security purposes, we may need to verify your identity before processing the request. This step ensures that only authorized individuals can request data deletion.",
          ],
        },
        {
          title: "Confirmation",
          info: [
            "Once we receive and verify your request, we will proceed with the deletion of your data from our system. You will receive a confirmation email when this process is complete.",
          ],
        },
      ],
      name: "Requesting Deletion of Your Data",

      id: 9,
    },
    {
      text: "Please note that some information may be retained for legal or administrative purposes even after data deletion. However, we will ensure that your personal information is no longer used for any active services or communication.\n Your privacy is important to us, and we are committed to providing you with control over your data. If you have any questions or concerns regarding data deletion or our privacy practices, please do not hesitate to contact us.",
      name: "",

      id: 92,
    },
    {
      text: "This policy is subject to change. Account users will be notified of policy updates. We recommend that non-account users regularly visit our website for policy changes or check our updated mobile app versions. Your privacy is of utmost importance to us. If you have any questions or concerns about this policy, please ",
      name: "Policy Changes",
      link: "https://feedback@chooyagroup.com",
      id: 91,
    },
  ];
  return (
    <div className="space-y-[50px] mt-[40px]">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <div className="space-y-[40px]">
        {privacyPolicy.map((section) => (
          <div className="space-y-[20px]" key={section.id}>
            <h2 className="text-xl font-bold">{section.name}</h2>
            {section.link == undefined && section.text && (
              <p className="text-md font-medium">{section.text}</p>
            )}
            <div className="space-y-[10px]">
              {section.sub &&
                section.sub.map((subsection) => (
                  <div key={subsection.title}>
                    <h3 className="text-orange-500">{subsection.title}</h3>
                    <ul className="space-y-[20px]">
                      {subsection.info.map((info, index) => (
                        <li key={index}>{info}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            {section.link !== undefined && (
              <p>
                {section.text}{" "}
                <a href={section.link} className="underline  text-blue-400">
                  contact us
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
