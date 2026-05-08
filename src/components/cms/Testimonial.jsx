"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const normalizeHex = (value = "") => {
  const raw = String(value).trim();
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)) return null;
  if (raw.length === 4) {
    return `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`;
  }
  return raw;
};

const hexToRgba = (value, alpha, fallback = `rgba(15, 23, 42, ${alpha})`) => {
  const normalized = normalizeHex(value);
  if (!normalized) return fallback;
  const hex = normalized.slice(1);
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const getFlexAlignment = (textAlign) => {
  if (textAlign === "center") return "center";
  if (textAlign === "right") return "flex-end";
  return "flex-start";
};

const getTextAlignment = (textAlign) => (textAlign === "justify" ? "left" : textAlign || "left");

const getInitials = (name = "") => {
  const parts = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (!parts.length) return "TS";
  return parts.map((part) => part.charAt(0).toUpperCase()).join("");
};

const renderStars = (accentColor) =>
  Array.from({ length: 5 }, (_, index) => (
    <span key={index} aria-hidden="true" style={{ color: accentColor, fontSize: "12px" }}>
      *
    </span>
  ));

const SingleTestimonial = ({ testimonial, index, styles }) => {
  const {
    quote = "",
    authorName = "",
    authorRole = "",
    avatarUrl = "",
  } = testimonial;
  const alignItems = getFlexAlignment(styles.textAlign);
  const textAlign = getTextAlignment(styles.textAlign);
  const authorLabel = authorRole || "Verified perspective";

  return (
    <article
      style={{
        background: styles.cardBackgroundColor,
        color: styles.textColor,
        borderRadius: styles.borderRadius,
        padding: styles.padding,
        boxShadow: styles.boxShadow,
        textAlign,
        fontFamily: styles.fontFamily,
        border: styles.border,
        minHeight: styles.cardMinHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(18px)",
        transition: "transform 190ms ease, box-shadow 190ms ease",
      }}
      className="transition-all"
      onMouseEnter={(event) => {
        event.currentTarget.style.boxShadow = styles.cardHoverShadow;
        event.currentTarget.style.transform = `translateY(${styles.cardHoverTranslateY})`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.boxShadow = styles.boxShadow;
        event.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-34px",
          right: "-28px",
          width: "132px",
          height: "132px",
          borderRadius: "999px",
          background: `radial-gradient(circle, ${hexToRgba(styles.secondaryAccentColor, 0.18, "rgba(99, 102, 241, 0.18)")} 0%, transparent 72%)`,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0 0 auto 0",
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${hexToRgba(styles.accentColor, 0.6, "rgba(236, 48, 128, 0.6)")} 34%, ${hexToRgba(styles.secondaryAccentColor, 0.6, "rgba(99, 102, 241, 0.6)")} 100%)`,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "18px", alignItems }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 12px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: styles.accentColor,
                background: hexToRgba(styles.accentColor, 0.08, "rgba(236, 48, 128, 0.08)"),
                border: `1px solid ${hexToRgba(styles.accentColor, 0.12, "rgba(236, 48, 128, 0.12)")}`,
              }}
            >
              Client Voice
            </span>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>{renderStars(styles.accentColor)}</div>
          </div>
          <span
            style={{
              fontSize: "42px",
              lineHeight: 1,
              color: hexToRgba(styles.accentColor, 0.55, "rgba(236, 48, 128, 0.55)"),
              fontWeight: 700,
            }}
            aria-hidden="true"
          >
            "
          </span>
        </div>

        <p
          style={{
            fontSize: styles.quoteFontSize,
            margin: 0,
            lineHeight: styles.quoteLineHeight,
            letterSpacing: "-0.03em",
            color: styles.textColor,
            textAlign,
          }}
        >
          {quote}
        </p>
      </div>

      <div
        style={{
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          marginTop: "auto",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={authorName || "Author avatar"}
              style={{
                width: styles.avatarSize,
                height: styles.avatarSize,
                borderRadius: "999px",
                objectFit: "cover",
                flexShrink: 0,
                border: `2px solid ${hexToRgba(styles.accentColor, 0.2, "rgba(236, 48, 128, 0.2)")}`,
                boxShadow: `0 12px 28px ${hexToRgba(styles.secondaryAccentColor, 0.16, "rgba(15, 23, 42, 0.1)")}`,
              }}
            />
          ) : (
            <div
              style={{
                width: styles.avatarSize,
                height: styles.avatarSize,
                borderRadius: "999px",
                flexShrink: 0,
                display: "grid",
                placeItems: "center",
                fontSize: "13px",
                fontWeight: 700,
                color: styles.accentColor,
                background: `linear-gradient(135deg, ${hexToRgba(styles.accentColor, 0.16, "rgba(236, 48, 128, 0.16)")} 0%, ${hexToRgba(styles.secondaryAccentColor, 0.12, "rgba(99, 102, 241, 0.12)")} 100%)`,
                border: `1px solid ${hexToRgba(styles.accentColor, 0.14, "rgba(236, 48, 128, 0.14)")}`,
              }}
            >
              {getInitials(authorName)}
            </div>
          )}
          <div>
            <span
              style={{
                display: "block",
                fontWeight: 700,
                color: styles.textColor,
                fontSize: styles.authorFontSize,
              }}
            >
              {authorName || "Anonymous client"}
            </span>
            <span
              style={{
                display: "block",
                color: styles.authorTextColor,
                fontSize: "13px",
                marginTop: "4px",
              }}
            >
              {authorRole || "Verified perspective"}
            </span>
          </div>
        </div>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 12px",
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: styles.authorTextColor,
            background: hexToRgba(styles.textColor, 0.04, "rgba(15, 23, 42, 0.04)"),
            border: `1px solid ${hexToRgba(styles.textColor, 0.08, "rgba(15, 23, 42, 0.08)")}`,
          }}
        >
          {authorLabel}
        </span>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-52px",
          left: "-36px",
          width: "150px",
          height: "150px",
          borderRadius: "999px",
          background: `radial-gradient(circle, ${hexToRgba(styles.accentColor, 0.12, "rgba(236, 48, 128, 0.12)")} 0%, transparent 72%)`,
          pointerEvents: "none",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "22px",
          right: "24px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.24em",
          color: hexToRgba(styles.authorTextColor, 0.5, "rgba(71, 85, 105, 0.5)"),
        }}
      >
        {`0${index + 1}`}
      </span>
    </article>
  );
};

const TestimonialComponent = ({
  id,
  testimonials = [],
  apiEndpoint = "",
  apiQuoteField = "quote",
  apiAuthorField = "author_name",
  apiRoleField = "author_role",
  apiAvatarField = "avatar_url",
  showApiPlaceholder = true,
  apiPlaceholderCount = 3,
  apiLoadingText = "Loading testimonials from API...",
  apiErrorText = "Unable to fetch testimonials from API. Showing fallback items.",
  backgroundColor = "linear-gradient(135deg, #fff7fb 0%, #f8fafc 52%, #eef2ff 100%)",
  cardBackgroundColor = "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  textColor = "#0f172a",
  authorTextColor = "#475569",
  accentColor = "#ec3080",
  secondaryAccentColor = "#6366f1",
  borderRadius = "28px",
  padding = "28px",
  border = "1px solid rgba(226, 232, 240, 0.9)",
  boxShadow = "0 18px 45px rgba(15, 23, 42, 0.08)",
  cardHoverShadow = "0 26px 60px rgba(15, 23, 42, 0.14)",
  cardHoverTranslateY = "-6px",
  textAlign = "left",
  fontFamily = "inherit",
  quoteFontSize = "22px",
  quoteLineHeight = "1.7",
  authorFontSize = "15px",
  avatarSize = "52px",
  cardMinHeight = "280px",
  gap = "24px",
  minItemWidth = "280px",
  sectionMaxWidth = "1180px",
}) => {
  const [data, setData] = useState(Array.isArray(testimonials) ? testimonials : []);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setData(Array.isArray(testimonials) ? testimonials : []);
  }, [testimonials]);

  useEffect(() => {
    if (!apiEndpoint) return undefined;

    const controller = new AbortController();
    setIsLoading(true);
    setApiError("");

    fetch(apiEndpoint, { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => {
        const list = Array.isArray(res)
          ? res
          : Array.isArray(res?.data)
            ? res.data
            : Array.isArray(res?.items)
              ? res.items
              : [];
        const mapped = list.map((item, index) => ({
          id: item.id || `api-${index}`,
          quote: item?.[apiQuoteField] || item.quote || item.testimonial || "",
          authorName: item?.[apiAuthorField] || item.author_name || item.author || "",
          authorRole: item?.[apiRoleField] || item.author_role || item.role || "",
          avatarUrl: item?.[apiAvatarField] || item.avatar_url || item.avatar || "",
        }));
        if (mapped.length) {
          setData(mapped);
        } else {
          setData(Array.isArray(testimonials) ? testimonials : []);
        }
      })
      .catch((error) => {
        if (error?.name === "AbortError") return;
        setApiError(apiErrorText);
        setData(Array.isArray(testimonials) ? testimonials : []);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [
    apiEndpoint,
    apiQuoteField,
    apiAuthorField,
    apiRoleField,
    apiAvatarField,
    apiErrorText,
    testimonials,
  ]);

  const styles = {
    cardBackgroundColor,
    textColor,
    authorTextColor,
    accentColor,
    secondaryAccentColor,
    borderRadius,
    padding,
    border,
    boxShadow,
    cardHoverShadow,
    cardHoverTranslateY,
    textAlign,
    fontFamily,
    quoteFontSize,
    quoteLineHeight,
    authorFontSize,
    avatarSize,
    cardMinHeight,
  };

  const placeholderItems = useMemo(
    () =>
      Array.from({ length: Math.max(1, Number(apiPlaceholderCount) || 3) }, (_, index) => ({
        id: `placeholder-${index}`,
      })),
    [apiPlaceholderCount],
  );

  const showPlaceholder = apiEndpoint && isLoading && showApiPlaceholder;
  const showSectionSurface = backgroundColor && backgroundColor !== "transparent";

  return (
    <div
      id={id}
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ maxWidth: sectionMaxWidth, margin: "0 auto" }}>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "34px",
            padding: "clamp(24px, 4vw, 40px)",
            background: backgroundColor,
            border: showSectionSurface ? `1px solid ${hexToRgba(accentColor, 0.08, "rgba(15, 23, 42, 0.08)")}` : "none",
            boxShadow: showSectionSurface ? "0 26px 65px rgba(15, 23, 42, 0.06)" : "none",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-96px",
              left: "-74px",
              width: "220px",
              height: "220px",
              borderRadius: "999px",
              background: `radial-gradient(circle, ${hexToRgba(accentColor, 0.18, "rgba(236, 48, 128, 0.18)")} 0%, transparent 72%)`,
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-120px",
              right: "-56px",
              width: "280px",
              height: "280px",
              borderRadius: "999px",
              background: `radial-gradient(circle, ${hexToRgba(secondaryAccentColor, 0.13, "rgba(99, 102, 241, 0.13)")} 0%, transparent 72%)`,
              pointerEvents: "none",
            }}
          />

          {apiError ? (
            <p
              style={{
                position: "relative",
                zIndex: 1,
                margin: "0 0 18px 0",
                color: "#b45309",
                fontSize: "14px",
              }}
            >
              {apiError}
            </p>
          ) : null}

          {showPlaceholder ? (
            <>
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  margin: "0 0 18px 0",
                  color: authorTextColor,
                  fontSize: "14px",
                }}
              >
                {apiLoadingText}
              </p>
              <div
                className="grid"
                style={{ position: "relative", zIndex: 1, gap, gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))` }}
              >
                {placeholderItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      borderRadius,
                      padding,
                      border,
                      background: cardBackgroundColor,
                      minHeight: cardMinHeight,
                      opacity: 0.78,
                      boxShadow,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div className="mb-4 h-6 w-20 animate-pulse rounded-full" style={{ background: hexToRgba(accentColor, 0.12, "rgba(236, 48, 128, 0.12)") }} />
                    <div className="mb-3 h-4 w-5/6 animate-pulse rounded" style={{ background: hexToRgba(textColor, 0.08, "rgba(15, 23, 42, 0.08)") }} />
                    <div className="mb-3 h-4 w-4/5 animate-pulse rounded" style={{ background: hexToRgba(textColor, 0.08, "rgba(15, 23, 42, 0.08)") }} />
                    <div className="mb-8 h-4 w-2/3 animate-pulse rounded" style={{ background: hexToRgba(textColor, 0.08, "rgba(15, 23, 42, 0.08)") }} />
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 animate-pulse rounded-full" style={{ background: hexToRgba(secondaryAccentColor, 0.12, "rgba(99, 102, 241, 0.12)") }} />
                      <div className="flex-1">
                        <div className="mb-2 h-3 w-1/2 animate-pulse rounded" style={{ background: hexToRgba(textColor, 0.08, "rgba(15, 23, 42, 0.08)") }} />
                        <div className="h-3 w-1/3 animate-pulse rounded" style={{ background: hexToRgba(textColor, 0.08, "rgba(15, 23, 42, 0.08)") }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div
              className="grid"
              style={{ position: "relative", zIndex: 1, gap, gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))` }}
            >
              {data.length > 0 ? (
                data.map((testimonial, index) => (
                  <SingleTestimonial
                    key={testimonial.id || index}
                    testimonial={testimonial}
                    index={index}
                    styles={styles}
                  />
                ))
              ) : (
                <p style={{ gridColumn: "1 / -1", textAlign: "center", color: authorTextColor, margin: 0 }}>
                  No testimonials to display
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

SingleTestimonial.propTypes = {
  testimonial: PropTypes.shape({
    quote: PropTypes.string,
    authorName: PropTypes.string,
    authorRole: PropTypes.string,
    avatarUrl: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  styles: PropTypes.object.isRequired,
};

TestimonialComponent.propTypes = {
  id: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quote: PropTypes.string,
      authorName: PropTypes.string,
      authorRole: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
  ),
  apiEndpoint: PropTypes.string,
  apiQuoteField: PropTypes.string,
  apiAuthorField: PropTypes.string,
  apiRoleField: PropTypes.string,
  apiAvatarField: PropTypes.string,
  showApiPlaceholder: PropTypes.bool,
  apiPlaceholderCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  apiLoadingText: PropTypes.string,
  apiErrorText: PropTypes.string,
  backgroundColor: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  authorTextColor: PropTypes.string,
  accentColor: PropTypes.string,
  secondaryAccentColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
  cardHoverShadow: PropTypes.string,
  cardHoverTranslateY: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  fontFamily: PropTypes.string,
  quoteFontSize: PropTypes.string,
  quoteLineHeight: PropTypes.string,
  authorFontSize: PropTypes.string,
  avatarSize: PropTypes.string,
  cardMinHeight: PropTypes.string,
  gap: PropTypes.string,
  minItemWidth: PropTypes.string,
  sectionMaxWidth: PropTypes.string,
};

export const testimonialComponentDefaultProps = {
  testimonials: [
    {
      id: "testimonial-1",
      quote: "The editor now feels like a premium workspace instead of a rigid form builder. Shipping polished pages takes a fraction of the time.",
      authorName: "Olivia Chen",
      authorRole: "Product Marketing Director",
      avatarUrl: "",
    },
    {
      id: "testimonial-2",
      quote: "We can prototype, refine, and launch faster because the system gives our content team far more creative range without needing engineering support.",
      authorName: "Marcus Lee",
      authorRole: "Growth Design Lead",
      avatarUrl: "",
    },
  ],
  apiEndpoint: "",
  apiQuoteField: "quote",
  apiAuthorField: "author_name",
  apiRoleField: "author_role",
  apiAvatarField: "avatar_url",
  showApiPlaceholder: true,
  apiPlaceholderCount: 3,
  apiLoadingText: "Loading testimonials from API...",
  apiErrorText: "Unable to fetch testimonials from API. Showing fallback items.",
  backgroundColor: "linear-gradient(135deg, #fff7fb 0%, #f8fafc 52%, #eef2ff 100%)",
  cardBackgroundColor: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  textColor: "#0f172a",
  authorTextColor: "#475569",
  accentColor: "#ec3080",
  secondaryAccentColor: "#6366f1",
  borderRadius: "28px",
  padding: "28px",
  border: "1px solid rgba(226, 232, 240, 0.9)",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
  cardHoverShadow: "0 26px 60px rgba(15, 23, 42, 0.14)",
  cardHoverTranslateY: "-6px",
  textAlign: "left",
  fontFamily: "inherit",
  quoteFontSize: "22px",
  quoteLineHeight: "1.7",
  authorFontSize: "15px",
  avatarSize: "52px",
  cardMinHeight: "280px",
  gap: "24px",
  minItemWidth: "280px",
  sectionMaxWidth: "1180px",
};

TestimonialComponent.defaultProps = testimonialComponentDefaultProps;

export default TestimonialComponent;
