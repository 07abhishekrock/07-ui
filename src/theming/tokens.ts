import { resolveTokensWithReference } from "./utils";

export type Theme = {
     contentPrimary: string;
     contentSecondary: string;
     contentTertiary: string;
     contentAccent: string;
     contentDisabled: string;
     contentWarning: string;
     contentDanger: string;
     bgPrimary: string;
     bgSecondary: string;
     bgTertiary: string;
     bgAccent: string;
     bgDisabled: string;
     bgWarning: string;
     bgDanger: string;
     bgAccentSubtle: string;
     borderPrimary: string;
     borderDisabled: string;
     borderWarning: string;
     borderDanger: string;
     borderAccent: string;
     spacing2: string;
     spacing4: string;
     spacing8: string;
     spacing16: string;
     spacing24: string;
     spacing32: string;
     borderRadiusSmall: string;
     borderRadiusMedium: string;
     borderRadiusCircle: string
     btnBorderRadius: string;
     btnHorizontalPadding: string;
     btnVerticalPadding: string;
     btnFontSize: string;
     btnFontWeight: string;
     btnHoverStateBgClrDefault: string;
     btnFocusedOutlineWidth: string;
     btnFocusedOutlineClr: string;
     btnBgClr: string;
     btnTextClr: string;
}

const baseThemeNoColors: Theme = {
     contentPrimary: "",
     contentSecondary: "",
     contentTertiary: "",
     contentAccent: "",
     contentDisabled: "",
     contentWarning: "",
     contentDanger: "",
     bgPrimary: "",
     bgSecondary: "",
     bgTertiary: "",
     bgAccent: "",
     bgDisabled: "",
     bgWarning: "",
     bgDanger: "",
     bgAccentSubtle: "",
     borderPrimary: "",
     borderDisabled: "",
     borderWarning: "",
     borderDanger: "",
     borderAccent: "",
     spacing2: "2px",
     spacing4: "4px",
     spacing8: "8px",
     spacing16: "16px",
     spacing24: "24px",
     spacing32: "32px",
     borderRadiusSmall: "4px",
     borderRadiusMedium: "10px",
     borderRadiusCircle: "100px",

     btnBorderRadius: "4px",
     btnFontSize: "16px",
     btnHorizontalPadding: "16px",
     btnVerticalPadding: "12px",
     btnFontWeight: "500",
     btnHoverStateBgClrDefault: "#f1f1f1",
     btnBgClr: "$bgSecondary",
     btnTextClr: "$contentPrimary",
     btnFocusedOutlineWidth: "1.5px",
     btnFocusedOutlineClr: "$borderPrimary"
}

export const lightTheme: Theme = resolveTokensWithReference({
     ...baseThemeNoColors,
     contentPrimary: "#252525",
     contentAccent: "#46a2d4",
     contentSecondary: "#535353",
     contentDanger: "#ef5050",
     contentDisabled: "#c3c3c3",
     contentTertiary: "#717171",
     contentWarning: "#ffe7a9",
     bgAccent: "#daf2ff",
     bgWarning: "#fff4d7",
     bgTertiary: "#d9d9d9",
     bgSecondary: "#f9f9f9",
     bgAccentSubtle: "#c8ebff",
     bgDanger: "#ffbfbf",
     bgDisabled: "#f4f4f4",
     bgPrimary: "#ffffff",
     borderPrimary: "#252525",
     borderAccent: "#6ab8e3",
     borderDanger: "#ef5050",
     borderDisabled: "#c3c3c3",
     borderWarning: "#ffe7a9"
})
