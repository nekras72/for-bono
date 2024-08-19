import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"
import { ChangeEvent, ReactNode } from "react"

export type CustomBtnProps = {
    text?: string,
    iconPosition?: 'start' | 'end',
    href: string,
    handleClick?: () => void,
    sx?: SxProps<Theme>
}

export type CustomInputProps = {
    value: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    placeholder: string,
}

export type CustomMainComponentProps = {
    children: ReactNode
}
export type CustomPageTitleProps = {
    title: string
}

export type Cause = {
    active: boolean,
    description: string,
    icon: string,
    id: number,
    impactBackground: string,
    impactBody: any | null,
    impactHashtag: string,
    impactHeader: any | null,
    impactImage: string,
    order: number,
    shortDescription: string,
    tagline: string,
    title: string
}

export type CauseExtended = Cause & {
    isPicked?: boolean;
};

export type CausesPickProps = {
    causes: CauseExtended[];
    handleOverPick: () => void
}

export type SvgRendererProps = {
    isPicked: boolean;
}

export type CausesContextType = {
    pickedCauses: number[],
    addCause: (id: number) => void,
    removeCause: (id: number) => void
}

export type ContextChildren = {
    children: React.ReactNode | React.ReactNode[];
}

export type DialogMessageProps = {
    message: string,
    handleClose: () => void
}

export type DataSendType = {
    email: string,
    firstName: string,
    causes: number[]
}