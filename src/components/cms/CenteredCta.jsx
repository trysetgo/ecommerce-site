"use client";

import React from "react";
import PropTypes from "prop-types";

const CenteredCTA = ({
  id,
  headline = "Join Our Journey",
  subtext = "Be part of a growing family that values you.",
  buttons = [],
  background = "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
  backgroundOverlay = "radial-gradient(circle at top right, rgba(236,48,124,0.25), transparent 55%)",
  overlayBlendMode = "soft-light",
  overlayOpacity = 1,
  textColor = "#111827",
  subtitleColor = "#4b5563",
  accentTagLabel = "Premium Access",
  accentTagColor = "#ffffff",
  accentTagBackground = "#ec307c",
  accentTagBorder = "1px solid #ec307c",
  audienceLabel = "For bold teams",
  audienceColor = "#0f172a",
  audienceBackground = "rgba(15,23,42,0.05)",
  cardBackground = "rgba(255,255,255,0.88)",
  cardBorder = "1px solid rgba(148,163,184,0.24)",
  cardBorderRadius = "20px",
  cardPadding = "56px 24px",
  cardShadow = "0 14px 30px rgba(15,23,42,0.08)",
  maxWidth = "880px",
  headlineFontSize = "44px",
  headlineFontWeight = "800",
  subtextFontSize = "18px",
  subtextLineHeight = "1.7",
  textAlign = "center",
  buttonGap = "14px",
  buttonMinWidth = "152px",
  buttonPaddingY = "12px",
  buttonPaddingX = "20px",
  buttonBorderRadius = "12px",
  buttonFontSize = "14px",
  buttonFontWeight = "700",
  primaryButtonBg = "#4f46e5",
  primaryButtonColor = "#ffffff",
  primaryButtonBorder = "1px solid #4f46e5",
  secondaryButtonBg = "#ffffff",
  secondaryButtonColor = "#1f2937",
  secondaryButtonBorder = "1px solid #cbd5e1",
  tertiaryButtonBg = "#111827",
  tertiaryButtonColor = "#ffffff",
  tertiaryButtonBorder = "1px solid #111827",
  floatingShapeColor = "rgba(236,48,124,0.25)",
  floatingShapeSize = "160px",
  floatingShapeBlur = "0px",
  floatingShapeOffset = "16px",
  floatingShapePosition = "top-right",
  floatingShapeOpacity = 0.65,
  style = {},
  className = "",
}) => {
  const defaultButtons = [
    { id: "1", text: "Shop Now", link: "#", style: "primary", target: "_self" },
    { id: "2", text: "Contact Us", link: "#", style: "secondary", target: "_self" },
  ];

  const displayButtons = Array.isArray(buttons) && buttons.length ? buttons : defaultButtons;

  const getButtonStyles = (buttonStyle) => {
    switch (buttonStyle) {
      case "primary":
        return {
          backgroundColor: primaryButtonBg,
          color: primaryButtonColor,
          border: primaryButtonBorder,
        };
      case "secondary":
        return {
          backgroundColor: secondaryButtonBg,
          color: secondaryButtonColor,
          border: secondaryButtonBorder,
        };
      case "tertiary":
        return {
          backgroundColor: tertiaryButtonBg,
          color: tertiaryButtonColor,
          border: tertiaryButtonBorder,
        };
      default:
        return {
          backgroundColor: "#6B7280",
          color: "#FFFFFF",
          border: "1px solid #6B7280",
        };
    }
  };

  const overlayStyle = backgroundOverlay
    ? {
        position: "absolute",
        inset: 0,
        background: backgroundOverlay,
        mixBlendMode: overlayBlendMode,
        opacity: overlayOpacity,
        pointerEvents: "none",
      }
    : null;

  const floatingShapeStyle = {
    position: "absolute",
    width: floatingShapeSize,
    height: floatingShapeSize,
    borderRadius: "50%",
    background: floatingShapeColor,
    filter: `blur(${floatingShapeBlur})`,
    opacity: floatingShapeOpacity,
    pointerEvents: "none",
    mixBlendMode: "screen",
    ...(floatingShapePosition.includes("top") ? { top: floatingShapeOffset } : { bottom: floatingShapeOffset }),
    ...(floatingShapePosition.includes("left") ? { left: floatingShapeOffset } : { right: floatingShapeOffset }),
  };

  const buttonWrapperStyle = {
    marginTop: "28px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: textAlign === "left" ? "flex-start" : textAlign === "right" ? "flex-end" : "center",
    gap: buttonGap,
  };

  return (
    <div
      id={id}
      style={{
        background,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      className={className}
    >
      {overlayStyle && <div style={overlayStyle} aria-hidden />}
      {floatingShapeColor && <div style={floatingShapeStyle} aria-hidden />}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth,
            margin: "0 auto",
            textAlign,
            background: cardBackground,
            border: cardBorder,
            borderRadius: cardBorderRadius,
            boxShadow: cardShadow,
            padding: cardPadding,
            position: "relative",
          }}
        >
          {accentTagLabel && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 16px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: accentTagBackground,
                color: accentTagColor,
                border: accentTagBorder,
                marginBottom: "16px",
                maxWidth: "fit-content",
              }}
            >
              {accentTagLabel}
            </span>
          )}
          {headline && (
            <h2 style={{ margin: 0, color: textColor, fontSize: headlineFontSize, fontWeight: headlineFontWeight }}>
              {headline}
            </h2>
          )}
          {subtext && (
            <p
              style={{
                margin: "16px 0 0 0",
                color: subtitleColor,
                fontSize: subtextFontSize,
                lineHeight: subtextLineHeight,
              }}
            >
              {subtext}
            </p>
          )}
          {audienceLabel && (
            <p
              style={{
                margin: "12px 0 0 0",
                display: "inline-flex",
                alignItems: "center",
                background: audienceBackground,
                color: audienceColor,
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1px solid transparent",
              }}
            >
              {audienceLabel}
            </p>
          )}
          <div style={buttonWrapperStyle}>
            {displayButtons.map((button) => (
              <a
                key={button.id}
                href={button.link || "#"}
                target={button.target || "_self"}
                rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
                style={{
                  ...getButtonStyles(button.style),
                  minWidth: buttonMinWidth,
                  borderRadius: buttonBorderRadius,
                  padding: `${buttonPaddingY} ${buttonPaddingX}`,
                  fontSize: buttonFontSize,
                  fontWeight: buttonFontWeight,
                  textDecoration: "none",
                  textAlign: "center",
                  lineHeight: 1.2,
                  transition: "transform 180ms ease, opacity 180ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.94";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {button.text || "Button"}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

CenteredCTA.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string,
  subtext: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
      style: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
      target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
    }),
  ),
  background: PropTypes.string,
  backgroundOverlay: PropTypes.string,
  overlayBlendMode: PropTypes.string,
  overlayOpacity: PropTypes.number,
  textColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  accentTagLabel: PropTypes.string,
  accentTagColor: PropTypes.string,
  accentTagBackground: PropTypes.string,
  accentTagBorder: PropTypes.string,
  audienceLabel: PropTypes.string,
  audienceColor: PropTypes.string,
  audienceBackground: PropTypes.string,
  cardBackground: PropTypes.string,
  cardBorder: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadow: PropTypes.string,
  maxWidth: PropTypes.string,
  headlineFontSize: PropTypes.string,
  headlineFontWeight: PropTypes.string,
  subtextFontSize: PropTypes.string,
  subtextLineHeight: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  buttonGap: PropTypes.string,
  buttonMinWidth: PropTypes.string,
  buttonPaddingY: PropTypes.string,
  buttonPaddingX: PropTypes.string,
  buttonBorderRadius: PropTypes.string,
  buttonFontSize: PropTypes.string,
  buttonFontWeight: PropTypes.string,
  primaryButtonBg: PropTypes.string,
  primaryButtonColor: PropTypes.string,
  primaryButtonBorder: PropTypes.string,
  secondaryButtonBg: PropTypes.string,
  secondaryButtonColor: PropTypes.string,
  secondaryButtonBorder: PropTypes.string,
  tertiaryButtonBg: PropTypes.string,
  tertiaryButtonColor: PropTypes.string,
  tertiaryButtonBorder: PropTypes.string,
  floatingShapeColor: PropTypes.string,
  floatingShapeSize: PropTypes.string,
  floatingShapeBlur: PropTypes.string,
  floatingShapeOffset: PropTypes.string,
  floatingShapePosition: PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
  floatingShapeOpacity: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

export const centeredCTADefaultProps = {
  headline: "Join Our Journey",
  subtext: "Be part of a growing family that values you.",
  buttons: [],
  background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
  backgroundOverlay: "radial-gradient(circle at top right, rgba(236,48,124,0.25), transparent 55%)",
  overlayBlendMode: "soft-light",
  overlayOpacity: 1,
  textColor: "#111827",
  subtitleColor: "#4b5563",
  accentTagLabel: "Premium Access",
  accentTagColor: "#ffffff",
  accentTagBackground: "#ec307c",
  accentTagBorder: "1px solid #ec307c",
  audienceLabel: "For bold teams",
  audienceColor: "#0f172a",
  audienceBackground: "rgba(15,23,42,0.05)",
  cardBackground: "rgba(255,255,255,0.88)",
  cardBorder: "1px solid rgba(148,163,184,0.24)",
  cardBorderRadius: "20px",
  cardPadding: "56px 24px",
  cardShadow: "0 14px 30px rgba(15,23,42,0.08)",
  maxWidth: "880px",
  headlineFontSize: "44px",
  headlineFontWeight: "800",
  subtextFontSize: "18px",
  subtextLineHeight: "1.7",
  textAlign: "center",
  buttonGap: "14px",
  buttonMinWidth: "152px",
  buttonPaddingY: "12px",
  buttonPaddingX: "20px",
  buttonBorderRadius: "12px",
  buttonFontSize: "14px",
  buttonFontWeight: "700",
  primaryButtonBg: "#4f46e5",
  primaryButtonColor: "#ffffff",
  primaryButtonBorder: "1px solid #4f46e5",
  secondaryButtonBg: "#ffffff",
  secondaryButtonColor: "#1f2937",
  secondaryButtonBorder: "1px solid #cbd5e1",
  tertiaryButtonBg: "#111827",
  tertiaryButtonColor: "#ffffff",
  tertiaryButtonBorder: "1px solid #111827",
  floatingShapeColor: "#ec307c",
  floatingShapeSize: "160px",
  floatingShapeBlur: "0px",
  floatingShapeOffset: "16px",
  floatingShapePosition: "top-right",
  floatingShapeOpacity: 0.65,
  style: {},
  className: "",
};

CenteredCTA.defaultProps = centeredCTADefaultProps;

export default CenteredCTA;
