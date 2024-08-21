'use client'
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        mainButton: React.CSSProperties;
        mainContent: React.CSSProperties;
        mainHeader: React.CSSProperties;
        mainSubHeader: React.CSSProperties;
        termsPrivacy: React.CSSProperties;
        cause: React.CSSProperties;
        causeInfoHeader: React.CSSProperties;
        causeInfoText: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        mainButton?: React.CSSProperties;
        mainContent?: React.CSSProperties;
        mainHeader?: React.CSSProperties;
        mainSubHeader?: React.CSSProperties;
        termsPrivacy?: React.CSSProperties;
        cause?: React.CSSProperties;
        causeInfoHeader?: React.CSSProperties;
        causeInfoText?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        mainButton: true;
        mainContent: true;
        mainHeader: true;
        mainSubHeader: true;
        termsPrivacy: true;
        cause: true;
        causeInfoHeader: true;
        causeInfoText: true;
    }
}

const theme = createTheme({
    typography: {
        mainButton: {
            fontFamily: 'Noto Sans',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FFFFFF',
        },
        mainHeader: {
            textAlign: 'center',
            fontFamily: 'Sanshiro Display',
            fontWeight: 900,
            fontSize: '40px',
            lineHeight: '48px',
            color: '#111111',
        },
        mainSubHeader: {
            textAlign: 'center',
            fontFamily: 'Sanshiro Display Medium',
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '26px',
            color: '#111111',
        },
        mainContent: {
            fontFamily: 'Noto Serif',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            color: '#111111',
        },
        termsPrivacy: {
            fontFamily: 'Noto Sans',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '20px',
            color: '#000000',
        },
        cause: {
            fontFamily: 'Noto Serif',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            color: '#111111',
        },
        causeInfoHeader: {
            fontFamily: 'Noto Sans',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '25px',
            color: '#111111',
        },
        causeInfoText: {
            fontFamily: 'Noto Sans',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#000000',
        },
    }
});

export default theme;