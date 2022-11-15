import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import {
  EMAIL_LINK,
  FACEBOOK_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "../../config/links";

import PageTitle from "../../components/PageTitle";
import ContactLink from "./ContactLink";
import Footer from "../../components/Footer";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("pages.contact");
  }, []);

  return (
    <div className="Contact">
      <div className="pt-[110px] px-16">
        <PageTitle
          title={t("contact.title")}
          className="text-grey-dark dark:text-grey-light animate-appear"
        />
        <div className="pt-10 space-y-5">
          <ContactLink
            title="Email"
            content="lizz.stoliarchuk@gmail.com"
            link={EMAIL_LINK}
            linkTitle="Email Yelyzaveta"
          />
          <ContactLink
            title="GitHub"
            content="@liza_rgb"
            link={GITHUB_LINK}
            linkTitle="GitHub Profile"
            isTargetBlank={true}
          />
          <ContactLink
            title="LinkedIn"
            content="Yelyzaveta Stoliarchuk"
            link={LINKEDIN_LINK}
            linkTitle="Linkedin Profile"
            isTargetBlank={true}
          />
          <ContactLink
            title="Facebook"
            content="Liza Stoliarchuk"
            link={FACEBOOK_LINK}
            linkTitle="Facebook Profile"
            isTargetBlank={true}
          />
          <ContactLink
            title="Instagram"
            content="@liza_stoliarchuk"
            link={INSTAGRAM_LINK}
            linkTitle="Instagram Profile"
            isTargetBlank={true}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
