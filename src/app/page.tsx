import CustomMainButton from "@/components/CustomMainButton";

import { Typography } from "@mui/material";
import { agreement, agreementAnd, agreementPrivacyPolicy, agreementPrivacyPolicyRef, agreementTermsAndConditions, agreementTermsAndConditionsRef, homePageHeader, homePageMainBtnText, homePageSubHeader } from "@/constants";
import StyledList from "@/components/StyledList";
import CustomMainComponent from "@/components/CustomMainComponent";
import CustomPageTitle from "@/components/CustomPageTitle";
import Link from "next/link";

export default function Home() {
  return (
    <CustomMainComponent>
      <CustomPageTitle title={homePageHeader} />
      <CustomPageTitle subTitle={homePageSubHeader} />
      <StyledList />

      <CustomMainButton sx={{ marginTop: '30px' }} href="/causeSelection" text={homePageMainBtnText} iconPosition="end" />
      <Typography
        variant="termsPrivacy"
        sx={{
          marginTop: '28px',
          textAlign: 'center',
          "a": {
            textDecoration: 'underline',
            ":hover": {
              color: 'gray'
            }
          }
        }}>
        {agreement}
        <Link href={agreementTermsAndConditionsRef}>{agreementTermsAndConditions}</Link>
        {agreementAnd}
        <Link href={agreementPrivacyPolicyRef}>{agreementPrivacyPolicy}</Link>
      </Typography>
    </CustomMainComponent >
  );
}
