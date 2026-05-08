"use client";

import React from "react";
import PropTypes from "prop-types";
import { getGlobalIconComponent } from "./GlobalIconsLibraryProps";

export const featureGridDefaultProps = {
  title: "Core Features",
  subtitle: "Explore the key features that make our product stand out.",
  features: [
    {
      id: "feat1",
      iconName: "Rocket",
      title: "Fast & Responsive",
      description: "Optimized for performance on all devices.",
    },
    {
      id: "feat2",
      iconName: "ShieldCheck",
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security.",
    },
    {
      id: "feat3",
      iconName: "LayoutGrid",
      title: "Flexible Layouts",
      description: "Easily customize the look and feel of your content.",
    },
  ],
  columns: 3,
  gap: "24px",
  cardBackgroundColor: "#ffffff",
  cardBorder: "1px solid #e5e7eb",
  cardBorderRadius: "16px",
  cardPadding: "24px",
  cardShadow: "0 4px 12px rgba(15, 23, 42, 0.05)",
  iconColor: "#4f46e5",
  iconBackgroundColor: "#eef2ff",
  iconSize: "48px",
  iconBorderRadius: "12px",
  headingColor: "#111827",
  subheadingColor: "#6b7280",
  featureTitleColor: "#1f2937",
  featureDescriptionColor: "#4b5563",
  textAlign: "left",
  sectionBackgroundColor: "transparent",
  containerMaxWidth: "1280px",
  style: {},
  className: "",
};

const FeatureGridComponent = (props) => {
  const {
    title,
    subtitle,
    features,
    columns,
    gap,
    cardBackgroundColor,
    cardBorder,
    cardBorderRadius,
    cardPadding,
    cardShadow,
    iconColor,
    iconBackgroundColor,
    iconSize,
    iconBorderRadius,
    headingColor,
    subheadingColor,
    featureTitleColor,
    featureDescriptionColor,
    textAlign,
    sectionBackgroundColor,
    containerMaxWidth,
    style,
    className,
  } = { ...featureGridDefaultProps, ...props };

  const safeFeatures = Array.isArray(features) ? features : [];

  const sectionStyle = {
    backgroundColor: sectionBackgroundColor,
    padding: "48px 16px",
    ...style,
  };

  const gridStyle = {
    display: "grid",
    gap,
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(240px, (100% - (${columns} - 1) * ${gap}) / ${columns})), 1fr))`,
  };

  return (
    <section style={sectionStyle} className={className}>
      <div style={{ maxWidth: containerMaxWidth, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ color: headingColor, fontSize: "2.25rem", fontWeight: "800", margin: 0 }}>{title}</h2>
          <p style={{ color: subheadingColor, fontSize: "1.125rem", marginTop: "8px", maxWidth: "60ch", margin: "8px auto 0" }}>{subtitle}</p>
        </div>
        <div style={gridStyle}>
          {safeFeatures.map((feature) => {
            const IconComponent = getGlobalIconComponent(feature.iconName);
            return (
              <div
                key={feature.id}
                style={{
                  background: cardBackgroundColor,
                  border: cardBorder,
                  borderRadius: cardBorderRadius,
                  padding: cardPadding,
                  boxShadow: cardShadow,
                  textAlign,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: iconSize,
                    height: iconSize,
                    backgroundColor: iconBackgroundColor,
                    borderRadius: iconBorderRadius,
                    marginBottom: "16px",
                  }}
                >
                  {IconComponent ? <IconComponent style={{ color: iconColor }} size={parseFloat(iconSize) * 0.5} /> : null}
                </div>
                <h3 style={{ color: featureTitleColor, fontSize: "1.25rem", fontWeight: "700", margin: "0 0 8px 0" }}>{feature.title}</h3>
                <p style={{ color: featureDescriptionColor, fontSize: "1rem", margin: 0 }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeatureGridComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    iconName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  columns: PropTypes.number,
  gap: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  cardBorder: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  cardPadding: PropTypes.string,
  cardShadow: PropTypes.string,
  iconColor: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  iconSize: PropTypes.string,
  iconBorderRadius: PropTypes.string,
  headingColor: PropTypes.string,
  subheadingColor: PropTypes.string,
  featureTitleColor: PropTypes.string,
  featureDescriptionColor: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  sectionBackgroundColor: PropTypes.string,
  containerMaxWidth: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FeatureGridComponent;