import { AccordionThemeMeta } from "../components/Accordion/accordion.theme";
import { resolveTokensWithReference } from "./utils";

export const TypographyTokenValues = ['bodyBase' , 'bodySmall' , 'bodyLarge' , 'heading' , 'bodyBaseHeavy' , 'bodySmallHeavy' , 'bodyLargeHeavy'] as const;

export type TypographyTokens = typeof TypographyTokenValues[number]
export type TypographyMeta = {
     fontWeight: string;
     fontSize: string;
     fontFamily: string;
     letterSpacing: string;
     lineHeight: string;
}

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
     btnOutlineClr: string;
     btnBgClr: string;
     btnTextClr: string;

     iconButtonSize: string;
     accordion: AccordionThemeMeta
} & Record<TypographyTokens, TypographyMeta>

const baseThemeNoColors: Theme = {

     bodyBase: {fontSize: "1rem", fontWeight: "500", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},
     bodySmall: {fontSize: "0.8rem", fontWeight: "500", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},
     bodyLarge: {fontSize: "1.2rem", fontWeight: "500", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},
     heading: {fontSize: "3rem", fontWeight: "600", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},

     bodyBaseHeavy: {fontSize: "1rem", fontWeight: "600", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},
     bodySmallHeavy: {fontSize: "0.8rem", fontWeight: "600", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},
     bodyLargeHeavy: {fontSize: "1.2rem", fontWeight: "600", fontFamily: "Inter", letterSpacing: "0.01em", lineHeight: "105%"},

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
     borderRadiusCircle: "100%",

     btnBorderRadius: "4px",
     btnFontSize: "$bodyBase",
     btnHorizontalPadding: "16px",
     btnVerticalPadding: "12px",
     btnFontWeight: "500",
     btnHoverStateBgClrDefault: "#f1f1f1",
     btnBgClr: "$bgSecondary",
     btnTextClr: "$contentPrimary",
     btnFocusedOutlineWidth: "1.5px",
     btnFocusedOutlineClr: "$borderPrimary",
     btnOutlineClr: "rgba(0, 0, 0, 0)",

     iconButtonSize: "$spacing24",

     accordion: {
          contentBgClr: "$bgSecondary",
          contentOutlineClr: "rgba(0, 0, 0, 0)",
          contentPaddingHorizontal: "$spacing8",
          contentPaddingVertical: "$spacing8",
          headerBgClr: "$bgSecondary",
          headerOpenedBgClr: "$bgSecondary",
          headerOpenedOutlineClr: "rgba(0,0,0,0)",
          headerOutlineClr: "rgba(0,0,0,0)",
          headerPaddingHorizontal: "$spacing8",
          headerPaddingVertical: "$spacing4",
          headerCornerRadius: "$spacing8",
          contentCornerRadius: "$spacing8"
     }
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

